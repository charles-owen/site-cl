<?php
/**
 * @file
 * Abstraction of server. Designed to be easily overridden
 * for testing purposes.
 */

namespace CL\Site\System;

use CL\Site\Email;

/**
 * Abstraction of server. Designed to be easily overridden
 * for testing purposes.
 *
 * @cond
 * @property array post
 * @property string requestMethod
 * @endcond
 */
class Server {
	/**
	 * Property get magic method
	 * @param string $property Property name
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * cookie | array | $_COOKIE
	 * files | array | $_FILES
	 * get | array | $_GET
	 * post | array | $_POST
	 * server | array | $_SERVER
	 * session | array | $_SESSION
	 *
	 * Notice: These are read-only, they cannot be written.
	 *
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'post':
				if ($_SERVER['REQUEST_METHOD'] === 'POST') {
					if(strpos($_SERVER['CONTENT_TYPE'], 'application/x-www-form-urlencoded') === 0 ||
						strpos($_SERVER['CONTENT_TYPE'], 'multipart/form-data') === 0) {
						return $_POST;
					} else {
						return json_decode(file_get_contents("php://input"), true);
					}
				}

				return [];

			case 'get':
				return $_GET;

			case 'server':
				return $_SERVER;

			case 'session':
				return $_SESSION;

			case 'cookie':
				return $_COOKIE;

			case 'files':
				return $_FILES;

			case 'requestMethod':
				return $this->__get('server')['REQUEST_METHOD'];

			case 'email':
				if($this->email === null) {
					$this->email = new Email();
				}

				return $this->email;

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
	 * Ensure all required keys are present
	 * @param $list List to check
	 * @param $required Array of keys (as values)
	 * @return bool True if all present
	 */
	public static function ensureKeys($list, $required) {
		foreach($required as $require) {
			if(!isset($list[$require])) {
				return false;
			}
		}

		return true;
	}

	/**
	 * Set in the session
	 * @param $key
	 * @param $value
	 */
	public function setSession($key, $value) {
		$_SESSION[$key] = $value;
	}

	/**
	 * session_name()
	 * @param $name Name to set
	 */
	public function session_name($name) {
		session_name($name);
	}

	/**
	 * session_start()
	 */
	public function session_start() {
		session_start();
	}

	/**
	 * Force an immediate redirection
	 * @param string $where Page to redirect to
	 */
	public function redirect($where) {
		//echo "<a href=\"$where\">$where</a>";
		header("location: " . $where);
		exit;
	}

	/**
	 * header()
	 * @param $value
	 */
	public function header($value) {
		header($value);
	}

	/**
	 * Delete a cookie
	 * @param string $name Cookie to delete
	 */
	public function deleteCookie($name) {
		setcookie ($name, "", 1, "/");
		setcookie ($name, false);
	}

	/**
	 * Set a cookie. These are HTTP-only
	 * @param string $name Name of cookie
	 * @param string $value Value to set
	 * @param int $expire Expiration
	 * @param string $path Path for the cookie
	 */
	public function setcookie($name, $value, $expire, $path='/') {
		setcookie($name, $value, $expire, '/', '', false, true);
	}

	/**
	 * Parse the request URI into components after the specified parent directory.
	 *
	 * Calling this function when the URI is /whatever/api/user/login and with
	 * $parent set to 'api' will return the array: ['user', 'login'].
	 * @param string $parent Parent directory
	 * @param string $key $_SERVER key (default is REQUEST_URL)
	 * @return array|null Array or null if failure.
	 */
	public function parseRequestURI($parent, $key='REQUEST_URI') {
		$uri = $this->__get('server')[$key];
		$path = explode('/', parse_url($uri, PHP_URL_PATH));
		$found = false;
		for($i=0; $i<(count($path) - 1); $i++) {
			if($path[$i] === $parent) {
				$found = true;
				$i++;
				break;
			}
		}

		if(!$found || $i >= count($path) || $path[$i] === '') {
			return null;
		}

		return array_slice($path, $i);
	}

	private $email = null;
}