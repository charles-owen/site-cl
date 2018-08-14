<?php
/**
 * @file
 * Dummy email class that stores email messages for testing purposes
 */

namespace CL\Site\Test;

use CL\Site\Site;
use CL\Site\Email;

/**
 * Dummy email class that stores email messages for testing purposes
 *
 * Inject objects of this type when testing to see what email would
 * be sent to users.
 */
class DummyEmail extends Email {
	/**
	 * Constructor
	 */
    public function __construct() {
        parent::__construct();
    }

    public function clear() {
    	$this->log = [];
    }

    /**
     * Property get magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * count | int | Number of email messages sent
     * last | array | The last email message sent
     * log | array | Array of all email messages, each with the keys: 'to', 'subject', 'body', 'headers'
     *
     * @param string $property Property name
     * @return mixed
     */
    public function __get($property) {
        switch($property) {
	        case 'count':
	        	return count($this->log);

	        case 'last':
		        return $this->log[count($this->log)-1];

	        case 'log':
	        	return $this->log;

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
	 * Send an email message
	 *
	 * Overrides the base class version and logs instead of sending
	 * the email message.
	 * @param Site $site The Site object
	 * @param string $email To email address
	 * @param string $name Name of the recipient
	 * @param string $subject Email subject
	 * @param string $body The email body
	 * @param string $headers Email message headers
	 */
    public function mail(Site $site, $email, $name, $subject, $body, $headers) {
        $this->log[] = array(
            'email' => $email,
            'name' => $name,
            'subject' => $subject,
            'body' => $body,
            'headers' => $headers
        );
    }

    private $log = [];
}