<?php
/** @file
 * Base class for database tests.
 */

namespace CL\Site\Test;

/** Base class for database tests.
 *
 * Adds some assertions I find useful and a more useful way to add tables
 */
abstract class DatabaseTestBase extends \PHPUnit_Extensions_Database_TestCase {

	private $dir;

	public function __construct($dir) {
		$this->dir = $dir;
	}

	public function ensureTable(\CL\Tables\Table $table) {
    	// Drop table if it exists and recreate
	    $pdo = $this->site->db->pdo;
    	$pdo->query($table->dropSQL());
    	$pdo->query($table->createSQL());
    }

    /**
     * Build a data set from multiple XML files in the db directory.
     *
     * @code
     *   public function getDataSet()
     *   {
     *   return $this->dataSets(array("users.xml", "grades.xml"));
     *   }
     * @endcode
     *
     * @param array $list An array of data set names
     * @return \PHPUnit_Extensions_Database_DataSet_CompositeDataSet
     */
    protected function dataSets(array $list) {
        $data = new \PHPUnit_Extensions_Database_DataSet_CompositeDataSet();

        foreach($list as $item) {
            $u = $this->createFlatXMLDataSet($this->dir . '/db/' . $item);
            $data->addDataSet($u);
        }

        return $data;
    }

    /**
     * @return \PHPUnit_Extensions_Database_DB_IDatabaseConnection
     */
    public function getConnection() {
    	if($this->site === null) {
    		$this->site = $this->createSite();

		    $db = $this->site->db;
	        $this->connection = $this->createDefaultDBConnection($db->pdo, $db->dbname);

	        $this->ensureTables();
	    }

	    return $this->connection;
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

    public function ensureTables() {

    }

	/* @var \CL\Site\Site */
    protected $site = null;
    private $connection = null;
}
