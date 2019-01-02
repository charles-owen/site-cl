<?php
/** @file
 * Unit tests for the class TopologicalSort
 * @cond 
 */

require_once __DIR__ . '/init.php';

use CL\Site\Util\TopologicalSort;

class TopologicalSortTest extends \PHPUnit\Framework\TestCase
{
	public function test() {
		$data = ['a' => [], 'b' => ['a']];

		$ret = TopologicalSort::sort($data);
		$this->assertEquals(['a', 'b'], $ret);

		$data = ['a' => ['b'], 'b' => []];

		$ret = TopologicalSort::sort($data);
		$this->assertEquals(['b', 'a'], $ret);

		$data = [
			'a'=>[],
			'b'=>['a'],
			'c'=>['a'],
			'd'=>['b', 'c'],
			'e'=>['a', 'd'],
			'f'=>['d'],
			'g'=>['c']
			];

		$sorted = TopologicalSort::sort($data);
		$this->validate($data, $sorted);

		$data = [
			'c'=>['a'],
			'g'=>['c'],
			'f'=>['d'],
			'e'=>['a', 'd'],
			'd'=>['b', 'c'],
			'a'=>[],
			'b'=>['a'],
		];

		$sorted = TopologicalSort::sort($data);
		$this->validate($data, $sorted);
	}

	private function validate($data, $sorted) {
		for($i=0; $i<count($sorted);  $i++) {
			// Ensure any dependencies are dependent on something to
			// the left of here
			foreach($data[$sorted[$i]] as $depend) {
				$where = array_search($depend, $sorted);
				$this->assertLessThan($i, $where);
			}
		}
	}
}

/// @endcond
