<?php
/**
 * @file
 * Standard logging component for CourseLib
 */

namespace CL\Site\Logger;

use Psr\Log\LoggerInterface;
use Psr\Log\LogLevel;


/**
 * Standard logging component for CourseLib
 */
class Logger implements LoggerInterface {
	/**
	 * Logger constructor.
	 * @param SiteLogger $siteLogger The master logging object
	 * @param string $pluginName Name of the plugin we are creating a logger for
	 */
	public function __construct(SiteLogger $siteLogger, $pluginName) {
		if($siteLogger !== null) {
			$this->site = $siteLogger->site;
			$this->logger = new \Monolog\Logger($pluginName);
		}
	}

	/**
	 * Get the underlying monolog logger
	 * @return Monolog::Logger
	 */
	public function getMonologLogger() {
		return $this->logger;
	}

	/**
	 * System is unusable.
	 *
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function emergency($message, array $context = array()) {
		$this->log(LogLevel::EMERGENCY, $message, $context);
	}

	/**
	 * Action must be taken immediately.
	 *
	 * Example: Entire website down, database unavailable, etc. This should
	 * trigger the SMS alerts and wake you up.
	 *
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function alert($message, array $context = array()) {
		$this->log(LogLevel::ALERT, $message, $context);
	}

	/**
	 * Critical conditions.
	 *
	 * Example: Application component unavailable, unexpected exception.
	 *
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function critical($message, array $context = array()){
		$this->log(LogLevel::CRITICAL, $message, $context);
	}

	/**
	 * Runtime errors that do not require immediate action but should typically
	 * be logged and monitored.
	 *
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function error($message, array $context = array()) {
		$this->log(LogLevel::ERROR, $message, $context);
	}

	/**
	 * Exceptional occurrences that are not errors.
	 *
	 * Example: Use of deprecated APIs, poor use of an API, undesirable things
	 * that are not necessarily wrong.
	 *
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function warning($message, array $context = array()) {
		$this->log(LogLevel::WARNING, $message, $context);
	}

	/**
	 * Normal but significant events.
	 *
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function notice($message, array $context = array()) {
		$this->log(LogLevel::NOTICE, $message, $context);
	}

	/**
	 * Interesting events.
	 *
	 * Example: User logs in, SQL logs.
	 *
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function info($message, array $context = array()) {
		$this->log(LogLevel::INFO, $message, $context);
	}

	/**
	 * Detailed debug information.
	 *
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function debug($message, array $context = array()) {
		$this->log(LogLevel::DEBUG, $message, $context);
	}

	/**
	 * Logs with an arbitrary level.
	 *
	 * @param mixed  $level
	 * @param string $message
	 * @param array  $context
	 *
	 * @return void
	 */
	public function log($level, $message, array $context = array()) {
		if($this->logger !== null) {
			$data = [];
			if($this->site->installed('users')) {
				$user = $this->site->users->user;
				if($user !== null) {
					$data = ['name'=>$user->name,
						'userid'=>$user->id,
						'jwtdata'=>$user->dataJWT];
					if($user->member !== null) {
						$data['memberid'] = $user->member->id;
					}
				}
			}

			$this->logger->log($level, $message, array_merge($data, $context));
		}
	}

	private $site;
	private $logger = null;
}