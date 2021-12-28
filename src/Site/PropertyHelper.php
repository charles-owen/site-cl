<?php
/**
 * @file
 * Helper class with methods for property error handling
 */
namespace CL\Site;

/**
 * Helper class with methods for property error handling
 */
class PropertyHelper {

    public static function Error($property) {
        $trace = debug_backtrace();
        trigger_error(
            'Undefined property ' . $property .
            ' in ' . $trace[1]['file'] .
            ' on line ' . $trace[1]['line'],
            E_USER_NOTICE);
        return null;
    }
}