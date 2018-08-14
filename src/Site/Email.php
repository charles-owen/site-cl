<?php
/** @file
 * Class that implements a simple email sender
 */

namespace CL\Site;

use PHPMailer\PHPMailer\PHPMailer;

/**
 * Implements simple email sender
 * 
 * The main reason for this class is so the test system
 * can override it with a version that logs the messages.
 *
 * @cond
 * @property Site site
 * @property string from
 * @endcond
 */
class Email {
	/**
	 * Constructor
     */
	public function __construct() {
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
			case 'site':
				return $this->site;


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
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'from':
				$this->from = $value;
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

	/**
	 * Load any configuration file
	 * @param Site $site The Site object
	 */
	public function load(Site $site) {
		$this->site = $site;

		if(!$this->loaded) {
			$file = $site->rootDir . '/' . $site->config . '/email.inc.php';
			if(file_exists($file)) {
				$func = require $file;
				$func($this);
			}

			$this->loaded = true;
		}
	}
	
	/**
	 * Send email to a user.
	 * @param Site $site The Site object
	 * @param string $email To email address
	 * @param string $name Name of the recipient
	 * @param string $subject Subject for the email
	 * @param string $message Email message
	 */
	public function send(Site $site, $email, $name, $subject, $message) {
		$this->load($site);

		if($this->from === null) {
			$siteName = $site->siteName;
			$this->from = "\"$siteName Email\" <no-reply@wherever.edu>";
		}

		$headers = "MIME-Version: 1.0\r\nContent-type: text/html; charset=iso=8859-1\r\nFrom: $this->from\r\n";
		
		$body = <<<MAIL
<html>
$message
</html>
MAIL;
		$this->mail($site, $email, $name, $subject, $body, $headers);
	}
	
	/** Send an email message
	 * 
	 * Override this function for testing purposes where the email
	 * is to be saved for checking
	 * @param Site $site The Site object
	 * @param string $email Who to send to (email address)
	 * @param string $name Name of the recipient
	 * @param string $subject Email subject
	 * @param string $body The email body
	 * @param string $headers Email message headers */
	public function mail(Site $site, $email, $name, $subject, $body, $headers) {
	    if($email === '') {
	        return;
        }

		$sandbox = $site->sandbox;

		if(!$sandbox) {
            $siteName = $site->siteName;

            $mail = new PHPMailer();

            $mail->setFrom('no-reply@cse.msu.edu', "$siteName Email");
            $mail->addAddress($email, $name);
            $mail->Subject = $subject;
            $mail->msgHTML($body);

            if (!$mail->send()) {
                echo "Mailer Error: " . $mail->ErrorInfo;
            }
		} else {
			$rootdir = $site->rootDir;
            if(!file_exists($rootdir . '/../web-log')) {
                mkdir($rootdir . '/../web-log');
            }

			$file = fopen($rootdir . '/../web-log/email-log.txt', 'a');
			if($file !== false) {
				$line = <<<LINE
To: $email
Subject: $subject
Headers: $headers
Message: $body


LINE;

				fwrite($file, $line);
				fclose($file);
			}
		}
	}

	private $site = null;
	private $loaded = false;
	private $from = null;
}
