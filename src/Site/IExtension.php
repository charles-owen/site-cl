<?php
/**
 * @file
 * Interface for objects that implement extensions for the Extendible class.
 */

namespace CL\Site;

/**
 * Interface for objects that implement extensions for the Extendible class.
 */
interface IExtension {
	/**
	 * @param Extendible $extendible Extendible that is calling this function
	 * @param string $name Name of the function
	 * @param array $arguments Arguments to the function
	 * @return mixed
	 */
	function extension(Extendible $extendible, $name, array $arguments);
}