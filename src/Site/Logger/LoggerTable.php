<?php
/**
 * @file
 * Table class for the logger table.
 */

namespace CL\Site\Logger;

use CL\Tables\TableException;

/**
 * Table class for the logger table.
 */
class LoggerTable extends \CL\Tables\Table {
	/**
	 * Constructor
	 * @param \CL\Tables\Config $config The Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, 'loggerv2');
	}

    /**
     * Create an SQL create table command for the users table
     * @return string SQL
     */
    public function createSQL() {

        $query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  id       int(11) NOT NULL AUTO_INCREMENT, 
  channel  varchar(255) NOT NULL, 
  level    int(11) NOT NULL, 
  time     datetime NOT NULL, 
  name     varchar(255), 
  userid   int(11), 
  memberid int(11), 
  message  longtext, 
  context  longtext, 
  PRIMARY KEY (id), 
  INDEX (channel), 
  INDEX (level), 
  INDEX (time), 
  INDEX (userid), 
  INDEX (memberid));
SQL;

        return $query;
    }

    public function write(array $record) {
        // Ensure the table exists
        $create = $this->createSQL();

        $sql = <<<SQL
$create        
insert into $this->tablename(channel, level, time, name, userid, memberid, message, context)
values(:channel, :level, :time, :name, :userid, :memberid, :message, :context)
SQL;

        $context = $record['context'];
        $name = isset($context['name']) ? $context['name'] : null;
        $userId = isset($context['userid']) ? $context['userid'] : null;
        $memberId = isset($context['memberid']) ? $context['memberid'] : null;

        unset($context['name']);
        unset($context['userid']);
        unset($context['memberid']);

        $exec = ['channel'=>$record['channel'],
            'level'=>$record['level'],
            'time'=>$this->timeStr($record['datetime']->getTimestamp()),
            'name'=>$name,
            'userid'=>$userId,
            'memberid'=>$memberId,
            'message'=>$record['message'],
            'context'=>json_encode($context)
        ];

        $pdo = $this->pdo;
        $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        try {
            $stmt = $pdo->prepare($sql);
            if($stmt->execute($exec) === false) {
                return false;
            }

            return true;
        } catch(\PDOException $e) {
            return false;
        }
    }

	/**
	 * Query the log table.
	 * @param array $params Parameters to pass to the query
	 * @return array
	 * @throws TableException
	 */
	public function query(array $params) {
		$where = new \CL\Tables\TableWhere($this);

		if(isset($params['id'])) {
			$where->append('id=?', +$params['id'], \PDO::PARAM_INT);
		}

		if(isset($params['channel'])) {
			$where->append('channel=?', $params['channel']);
		}


		if(isset($params['before'])) {
			$where->append('time<?', +$params['before'], \PDO::PARAM_INT);
		}

		if(isset($params['after'])) {
			$where->append('time>?', +$params['after'], \PDO::PARAM_INT);
		}

		if(isset($params['level'])) {
			$where->append('level=?', +$params['level'], \PDO::PARAM_INT);
		}

		if(isset($params['name'])) {
			$where->append('name like ?', '%' . $params['name'] . '%');
		}

		if(isset($params['message'])) {
			$where->append('message like ?', '%' . $params['message'] . '%');
		}

		$sql = <<<SQL
select * from $this->tablename
$where->where
order by time desc, id desc
SQL;

		if(isset($params['limit'])) {
			$sql .= "\nlimit ?";
			$where->append(null, intval($params['limit']), \PDO::PARAM_INT);
		}

		// charecho "\n" . $where->sub_sql($sql) . "\n";
		$result = $where->execute($sql);
		$items = [];
		foreach($result->fetchAll(\PDO::FETCH_ASSOC) as $row) {
		    $row['time'] = strtotime($row['time']);
			$items[] = $row;
		}

		return $items;
	}
}