<?php
/**
 * View class for the site documentation home page
 */

namespace CL\Site\Doc;

use CL\Site\Site;

/**
 * View class for the site documentation home page
 */
class DocHomeView extends DocView {

    public function __construct(Site $site, string $dir) {
        parent::__construct($site);

        $this->dir = $dir;
        $this->home = true;

        $this->style = <<<STYLE
a.item, span.item {
	position: absolute;
	left: 0;
	top: 0;
  display: inline-block;
  width: 7em;
}

ul.tabbed {
}
ul.tabbed li {
	position: relative;
	padding-left: 7em;
}
STYLE;

    }

    public function present_components(string $group) {
        //
        // Collect all valid items
        //
        $items = [];

        $files = scandir($this->dir . '/../..');
        foreach($files as $file) {
            if(substr($file, 0, 1) === '.') {
                continue;
            }

            $json = $this->dir . '/../../' . $file . '/use/info.json';

            if(file_exists($json)) {
                $data = json_decode(file_get_contents($json), true);
                if($data['group'] !== $group) {
                    continue;
                }

                $order = isset($data['order']) ? +$data['order'] : 10000;
                $items[] = ['file'=>$file, 'data'=>$data, 'order'=>$order];
            }
        }

        usort($items, function($a, $b) {
            return $a['order'] - $b['order'];
        });

        $html = '<ul class="tabbed">';

        foreach($items as $item) {
            $data = $item['data'];
            $title = $data['title'];
            $file = $item['file'];

            $html .= <<<HTML
    <li><span class="item"><a class="item" href="../../$file/use">cl/$file</a></span> $title</li>
HTML;
        }

        $html .= '</ul>';
        return $html;
    }


    private $dir;
}