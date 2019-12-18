<?php
/**
 * @file
 *
 * Class that represents meta-data that can be
 * attached to a variety of objects.
 */

namespace CL\Site;

/**
 * Class that represents meta-data that can be
 * attached to a variety of objects, including users, members, etc.
 *
 * Meta-data is stored in tables as JSON
 */
class MetaData {
    /**
     * Extra constructor.
     * @param MetaDataOwner $owner The class that owns this data
     * @param string|null $json Optional JSON from the tables
     */
    public function __construct(MetaDataOwner $owner=null, $json=null) {
        $this->owner = $owner;

        if($json !== null) {
            $this->data = json_decode($json, true);
        } else {
            $this->data = [];
        }
    }

    /**
     * Property get magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * data | array | All of the data contained in this metadata
     *
     * @param string $property Property name
     * @return mixed
     */
    public function __get($property) {
    	switch($property) {
		    case 'data':
		    	return $this->data;

    		default:
    			$trace = debug_backtrace();
    			trigger_error(
    				'Undefined property ' . $property .
    				' in ' . $trace[0]['file'] .
    				' on line ' . $trace[0]['line'],
    				E_USER_NOTICE);
    			return null;
    	}
    }

    /**
     * Get meta-data content.
     * @param string $category Category for this key
     * @param string $key Optional key value to return
     * @param mixed $default Default value if key does not exist
     * @return string|array Public data content
     */
    public function get($category, $key=null, $default=null) {
        if($key === null) {
            if(!isset($this->data[$category])) {
                $this->data[$category] = [];
            }

            return $this->data[$category];
        } else {
            if(isset($this->data[$category][$key])) {
                return $this->data[$category][$key];
            } else {
                return $default;
            }
        }
    }

    /**
     * Set a key value
     * @param string $category Category for this key
     * @param string $key Key  to set
     * @param mixed $value Value to set it to
     */
    public function set($category, $key, $value) {
        if(!isset($this->data[$category])) {
            $this->data[$category] = [];
        }

        $this->data[$category][$key] = $value;
    }

	/**
	 * Set an entire category at one time
	 * @param string $category Category to set
	 * @param mixed $value Value to set it to
	 */
	public function setCategory($category, $value) {
		$this->data[$category] = $value;
	}


    /**
     * Get all data as JSON encoding
     * @return string JSON encoding of data
     */
    public function json() {
        return json_encode($this->data);
    }

    /**
     * Write the extra data to the table
     */
    public function write(Site $site) {
        $this->owner->writeMetaData($site);
    }

    /**
     * Copy all metadata from some other MetaData object
     * @param MetaData $other Other object we are copying from
     */
    public function copyFrom(MetaData $other) {
        $this->data = $other->data;
    }

    private $owner;
    private $data;
}