<?php
/**
 * Created by PhpStorm.
 * User: charl
 * Date: 4/18/2020
 * Time: 5:53 PM
 */

namespace CL\Site\Crypt;

use CL\Site\System\Server;

/**
 * Decrypt content for presentation.
 *
 * Can decrypt a file and output the result to download the decrypted version.
 *
 * @property string key Encryption key
 * @property string file Encrypted file to read
 * @property string type Result MIME type, like application/zip
 * @property string result Result filename
 */
class Decrypt {
    const FILE_ENCRYPTION_BLOCKS = 10000;

    /**
     * Decrypt constructor.
     * @param string $key Encryption key
     * @param Server|null $server Server object
     */
    public function __construct($key = null, Server $server=null) {
        $this->key = substr(sha1($key, true), 0, 16);

        $this->server = $server !== null ? $server : new Server();
    }

    /**
     * Decrypt a file and return it based on parameterization.
     * @return string Decrypted file content
     */
    public function present() {
        $ret = '';

        if ($fpIn = fopen($this->file, 'rb')) {
            // Get the initialization vector from the beginning of the file
            $iv = fread($fpIn, 16);
            while (!feof($fpIn)) {
                $ciphertext = fread($fpIn, 16 * (self::FILE_ENCRYPTION_BLOCKS + 1)); // we have to read one block more for decrypting than for encrypting
                $plaintext = openssl_decrypt($ciphertext, 'AES-128-CBC', $this->key, OPENSSL_RAW_DATA, $iv);
                // Use the first 16 bytes of the ciphertext as the next initialization vector
                $iv = substr($ciphertext, 0, 16);
                $ret .= $plaintext;
            }
            fclose($fpIn);
        } else {
            return 'Decryption failed';
        }

        if($this->type !== null) {
            $this->server->header( "Content-Type: " . $this->type );
        }

        if($this->result !== null) {
            $this->server->header( "Content-Disposition: attachment;filename=" . $this->result);
        }

        return $ret;
    }


    /**
     * Property get magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     *
     * @param string $property Property name
     * @return mixed
     */
    public function __get($property) {
        switch($property) {


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
     * Property set magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * file | string | Source file for decryption
     * key | string | Decryption key
     *
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
        switch($property) {
            case 'key':
                $this->key = substr(sha1($value, true), 0, 16);
                break;

            case 'file':
                $this->file = $value;
                break;

            case 'type':
                $this->type = $value;
                break;

            case 'result':
                $this->result = $value;
                break;

            default:
                $trace = debug_backtrace();
                trigger_error(
                    'Undefined property ' . $property .
                    ' in ' . $trace[0]['file'] .
                    ' on line ' . $trace[0]['line'],
                    E_USER_NOTICE);
                break;
        }
    }


    private $server;

    // Decryption key
    private $key;

    // File mime type, like application/zip
    private $type = null;

    // Result filename
    private $result = null;

    private $file = null;
}