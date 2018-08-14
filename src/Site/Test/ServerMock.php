<?php
/**
 * @file
 * Server Mock class used for testing purposes.
 */
namespace CL\Site\Test;

/**
 * Server Mock class used for testing purposes.
 *
 * Inject in place of Server for testing.
 */
class ServerMock extends \CL\Site\System\Server {
	/// \cond

	public function __get($property) {
		switch($property) {
			case 'post':
				return $this->post;

			case 'get':
				return $this->get;

			case 'server':
				return $this->server;;

			case 'cookie':
				return $this->cookie;

			case 'email':
				return new DummyEmail();

			default:
				return parent::__get($property);
		}
	}

	public function setPost($key, $value) {
		$this->post[$key] = $value;
	}

	public function unsetPost($key) {
		unset($this->post[$key]);
	}

	public function setGet($key, $value) {
		$this->get[$key] = $value;
	}

	public function unsetGet($key) {
		unset($this->get[$key]);
	}

	public function setServer($key, $value) {
		$this->server[$key] = $value;
	}

	public function deleteCookie($name) {
		$this->cookie[$name] = '';
	}

	public function setcookie($name, $value, $expire) {
		$this->cookie[$name] = $value;
	}

	public function redirect($where) {
		$this->redirected = $where;
	}

	public $redirected = null;

	private $post = [];
	private $get = [];

	private $server = ['REQUEST_METHOD' => 'GET',
		'REQUEST_URI' => '/api/test',
		'REQUEST_SCHEME' => 'https',
		'SERVER_NAME' => 'www.cse.msu.edu'];

	private $cookie = [];

	/// \endcond
}