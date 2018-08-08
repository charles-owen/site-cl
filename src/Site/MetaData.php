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

    private $owner;
    private $data;
}