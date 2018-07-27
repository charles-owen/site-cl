<?php
/**
 * @file
 * Abstraction of server. Designed to be easily overridden
 * for testing purposes.
 */

namespace CL\Site\System;


class Server {
	/**
	 * Property get magic method
	 * @param string $key Property name
	 *
	 * Properties supported:
	 *
	 *
	 * Notice: These are read-only, they cannot be written.
	 *
	 * @return null|string
	 */
	public function __get($key) {
		switch($key) {
			case 'post':
				if ($_SERVER['REQUEST_METHOD'] === 'POST') {
					if($_SERVER['CONTENT_TYPE'] === 'application/x-www-form-urlencoded' ||
						substr($_SERVER['CONTENT_TYPE'], 0, 19) === 'multipart/form-data') {
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

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
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

	public function session_name($name) {
		session_name($name);
	}

	public function session_start() {
		session_start();
	}

	public function redirect($where) {
		//echo "<a href=\"$where\">$where</a>";
		header("location: " . $where);
		exit;
	}

	public function header($value) {
		header($value);
	}

	public function deleteCookie($name) {
		setcookie ($name, "", 1, "/");
		setcookie ($name, false);
	}

	public function setcookie($name, $value, $expire) {
		setcookie($name, $value, $expire, '/', '', false, true);
	}

	/**
	 * Parse the request URI into components after the specified parent directory.
	 *
	 * Calling this function when the URI is /whatever/api/user/login and with
	 * $parent set to 'api' will return the array: ['user', 'login'].
	 * @param string $parent Parent directory
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
}