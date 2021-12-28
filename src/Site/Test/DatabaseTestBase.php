<?php
/** @file
 * Base class for database tests.
 */

namespace CL\Site\Test;


/** Base class for database tests.
 *
 * Adds some assertions I find useful and a more useful way to add tables
 *
 * @property boolean showInserts Set true to display all table insert operations
 */
abstract class DatabaseTestBase extends \PHPUnit\Framework\TestCase {

	private $dir;

	public function __construct($dir) {
		parent::__construct();
		$this->dir = $dir;
        $this->site = $this->createSite();
	}


    /**
     * Get properties for this class.
     *
     * @param string $property Property name
     * @return mixed Property value
     */
    public function __get($property) {
        switch($property) {
            case 'showInserts':
                return $this->showInserts;

            default:
                return \CL\Site\PropertyHelper::Error($property);
        }
    }


    /**
     * Property set magic method
     *
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
        switch($property) {
            case 'showInserts':
                $this->showInserts = $value;
                break;

            default:
                \CL\Site\PropertyHelper::Error($property);
                break;
        }

    }

    /**
     * Ensure the table is creates and is empty
     * @param \CL\Tables\Table $table Table class to create the table for
     */
	public function ensureTable(\CL\Tables\Table $table) {
    	// Drop table if it exists and recreate
	    $pdo = $this->site->db->pdo;
    	$pdo->query($table->dropSQL());
    	$pdo->query($table->createSQL());

        // Create a table name whitelist
        $this->tables[$table->tablename] = $table;

    }

    /**
     * Build a data set from multiple XML files in the db directory.
     *
     * @code
     *   public function getDataSet()
     *   {
     *   return $this->dataSets(["users.xml", "grades.xml"]);
     *   }
     * @endcode
     *
     * @param array $list An array of data set names
     */
    protected function dataSets(array $list) {
        foreach($list as $file) {
            $path = $this->dir . '/' . $file;
            $xml = new \DOMDocument();
            $xmlData = file_get_contents($path);
            $xml->loadXML($xmlData);

            $pdo = $this->site->db->pdo;

            foreach($xml->childNodes as $node) {
                if($node->nodeType !== XML_ELEMENT_NODE) {
                    continue;
                }

                if($node->nodeName === 'dataset') {
                    $this->datasetXML($pdo, $node);
                }

            }

        }

    }

    private function datasetXML($pdo, $parent) {
        foreach($parent->childNodes as $node) {
            if($node->nodeType !== XML_ELEMENT_NODE) {
                continue;
            }

            $tableName = $node->nodeName;
            if(!key_exists($tableName, $this->tables)) {
                echo "Table name '" . strip_tags($tableName) . "' is not a valid table name\n";
            }

            $table = $this->tables[$tableName];

            $fields = '';
            $value = '';
            $values = [];

            foreach($node->attributes as $attribute) {
                if($fields !== '') {
                    $fields .= ",";
                    $value .= ",";
                }

                $fields .= $attribute->nodeName;
                $value .= "?";
                $values[] = $attribute->nodeValue;
            }


            $sql = "insert into $tableName ($fields) values ($value)";
            if($this->showInserts) {
                echo $table->sub_sql($sql, $values) . "\n";
            }

            $stmt = $pdo->prepare($sql);
            $stmt->execute($values);


        }
    }



	/**
	 * Create a valid Site object, loading the database configuration.
	 *
	 * Override to load additional configurations.
	 * @return \CL\Site\Site
	 * @throws \Exception
	 */
    protected function createSite() {
	    $site = new \CL\Site\Site($this->dir);
	    $filename = $this->dir . '/site.php';
	    if(!file_exists($filename)) {
		    throw new \Exception('Database configuration file tests/site.php does not exist.');
	    }
	    $configure = require($filename);
	    if(!is_callable($configure)) {
		    throw new \Exception('Database configuration file tests/site.php does not contain a configuration function.');
	    }

	    $configure($site);
	    return $site;
    }


	// @var \CL\Site\Site
    protected $site = null;
    private $tables = [];
    private $showInserts = false;
}
