<?php
/** @file
 * Design 1 definition file
 *
 * Returns a function that accepts an object of type Step
 * and configures it for an assignment 
 */

use \CL\Step\Step;

return function(Step $step) {
	/*
	 * Basic step definition
	 */
	$step->set_name('Step 1: Example Step Assignment', 'Step 1');

	/*
	 * The step sections and tasks 
	 */
	$step->add_section("initial", "First Page");
	$step->add_section("second", "Second Page");
};

