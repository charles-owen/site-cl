<?php
/**
 * @file
 * Support for the standard JSON API
 */

namespace CL\Site\Api;

/**
 * Support for the standard JSON API
 */
class JsonAPI {
    public function __construct($data = null) {
        if($data !== null) {
            if(isset($data['errors'])) {
                $this->errors = $data['errors'];
            }

            if(isset($data['data'])) {
                $this->data = $data['data'];
            }
        }
    }

    /**
     * Add an error to the response.
     * @param string $title Text associated with the error
     * @param null $code Optional error code. See APIException for valid codes
     * @param int $status HTTP status value
     */
    public function addError($title, $code=null, $status=400) {
        $error = ['status'=>$status, 'title'=>$title];
        if($code !== null) {
            $error['code'] = $code;
        }
        $this->errors[] = $error;
    }

    public function hasErrors() {
    	return count($this->errors) > 0;
    }

    /**
     * Add standard database select error message
     */
    public function databaseSelectError() {
        $this->add_error("Unable to select database", APIException::UNABLE_TO_SELECT_DATABASE);
    }

    /**
     * Add data to an API response
     * @param $type Name of the data type
     * @param $id Optional ID associated with data
     * @param array $attributes Contents for the data item section
     */
    public function addData($type, $id, array $attributes=null) {
        $data = ["type"=>$type, "attributes"=>$attributes];
        if($id !== null) {
            $data['id'] = $id;
        }

        $this->data[] = $data;
    }

    /**
     * Get all data of a given type.
     * @param $type Type to search for (like "post")
     * @return array Array of items.
     */
    public function getData($type) {
        $ret = [];
        foreach($this->data as $data) {
            if($data['type'] === $type) {
                $ret[] = $data;
            }
        }

        return $ret;
    }

    /**
     * Encode response into JSON
     * @return string JSON
     */
    public function encode() {
        $json = [];
        if(count($this->errors) > 0) {
            $json['errors'] = $this->errors;
        }

        if(count($this->data) > 0) {
            $json['data'] = $this->data;
        }

        return json_encode($json);
    }

    private $errors = array();
    private $data = array();

}