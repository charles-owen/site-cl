<?php
/**
 * @file
 * General purpose exception class used to generate API exceptions.
 * These can then be easily added to the JsonAPI response
 */
namespace CL\Site\Api;

use \Exception;

/**
 * General purpose exception class used to generate API exceptions.
 * These can then be easily added to the JsonAPI response
 */
class APIException extends \Exception {
    /// \cond
	const GENERAL_ERROR = 1;
	const UNABLE_TO_SELECT_DATABASE = 2;
	const UNABLE_TO_WRITE_DATABASE = 6;
	const INVALID_API_PATH = 3;
	const NOT_AUTHORIZED = 4;
	const INVALID_API_USAGE = 5;
	const UNAVAILABLE=6;
    /// \endcond

    /**
     * APIException constructor.
     * @param string $message Message to include
     * @param int $code API Error code
     * @param Exception $previous
     */
    public function __construct($message, $code = 0, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }

}