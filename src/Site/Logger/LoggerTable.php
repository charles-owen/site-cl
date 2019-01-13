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
		parent::__construct($config, 'logger');
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

		$sql = <<<SQL
select * from $this->tablename
$where->where
order by time desc, id desc
SQL;

		if(isset($params['limit'])) {
			$sql .= "\nlimit ?";
			$where->append(null, intval($params['limit']), \PDO::PARAM_INT);
		}

		// echo "\n" . $where->sub_sql($sql) . "\n";
		$result = $where->execute($sql);
		$items = [];
		foreach($result->fetchAll(\PDO::FETCH_ASSOC) as $row) {
			$items[] = $row;
		}

		return $items;
	}
}