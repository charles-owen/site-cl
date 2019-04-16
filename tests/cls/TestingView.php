<?php
/**
 * @file
 * View class for the unit testing system and testing home page.
 */

namespace Testing;

/**
 * View class for the unit testing system and testing home page.
 */
class TestingView {
	/**
	 * Constructor
	 */
	public function __construct() {
	}


	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * phpunit | string | directory containing PHPUnit tests
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {

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


	public function all() {
	    $html = <<<HTML
<!doctype html>
<html lang="en-US">
<head>
<title>Testing</title>
<link href="tests.css" type="text/css" rel="stylesheet" />
<script src="jquery-3.3.1.min.js"></script>
<script src="tests.js"></script>
</head>
<body>
<div class="tests">
HTML;

	    $html .= $this->present();

	    $html .= <<<HTML
</div>
</body>
</html>
HTML;
	    return $html;
    }


	public function present() {
		$html = '';

		if(count($this->directories) === 0) {
			// $this->addDir('', 'phpunit');
		}

		$tests = "var tests = new Tests('testsdiv', 'resultsdiv');\n";

		foreach($this->directories as $dir) {
			$name = $dir['name'];
			$testFiles = $this->getTests($dir['dir']);
			foreach($testFiles as $test) {
				$test = str_replace('\\','/', $test);
				$test = str_replace('site/tests/../../', '', $test);
				$tests .= "tests.add('" . $test . "', '$name');\n";
			}
		}

		$tests .= 'tests.present();';

		$html .= <<<HTML
<nav><a href="#results">results</a></nav>
<h1>PHPUnit Testing</h1>

<!-- Place to put the tests -->
<div id="testsdiv"></div>

<!-- Results form -->
<form><h2 id="results">Results
<a href="#" class="clearresults">clear</a>
<span class="verbose"><input type="checkbox" name="verbose" id="verbose">verbose</span>
</h2></form>
<div id="resultsdiv"></div>

<script>
// The testing object 
$tests
</script>
HTML;


		return $html;
	}

	private function getTests($dir) {
		$tests = [];

		$files = scandir($dir);
		// Some files we ignore...
		$ignore = array('.', '..', 'EmptyTest.php', 'EmptyDBTest.php');
		foreach($files as $file) {
			if(in_array($file, $ignore)) {
				continue;
			}

			if(is_dir($dir . '/' . $file)) {
				if($dir !== '') {
					$nested = $this->getTests($dir . '/' . $file);
				} else {
					$nested = $this->getTests($file);
				}

				$tests = array_merge($tests, $nested);
				continue;
			}

			if(strpos($file, 'Test.php') !== FALSE) {
				$test = substr($file, 0, strlen($file) - 8);
				if($dir !== '') {
					$tests[] = $dir . '/' . $test;
				} else {
					$tests[] = $test;
				}

			}
		}


		return $tests;
	}

	public function addDir($name, $dir) {
		$this->directories[] = ['name'=>$name, 'dir'=>$dir];
	}

	private $directories = [];      // Directories containing tests
}