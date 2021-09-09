<?php
/**
 * @file OSDependent.php
 * @author Charles B. Owen
 *
 * OS-dependent content presentation. Will present the preferred version
 * plus expanders for the alternative versions.
 */
namespace CL\Site;

/**
 * OS-dependent content presentation. Will present the preferred version
 * plus expanders for the alternative versions.
 *
 * @property string none What to display if no operating system is matched.
 */
class OSDependent
{
    /**
     * Constructor
     * @param Site $site Site object
     */
    public function __construct(\CL\Site\Site $site) {
        $this->os = $site->os;
    }

    public function add($os, $html) {
        $this->html[$os] = $html;
    }

    public function present() {
        $html = '';

        // Present the expected version
        if(isset($this->html[$this->os])) {
            $html .= $this->html[$this->os];
        } else {
            $html .= $this->none;

        }

        $others = [
          ['os'=>\CL\Site\Site::Win, 'name'=>'Windows'],
          ['os'=>\CL\Site\Site::Mac, 'name'=>'MacOS']
        ];
        foreach($others as $o) {
            $os = $o['os'];
            $name = $o['name'];
            if($this->os !== $os && isset($this->html[$os])) {
                $other = $this->html[$os];
                $html .= <<<HTML
<div class="cl-toggle">
  <p class="visible"><a>Expand for the $name executable</a></p>
  <div class="cl-toggleblock">
  $other
  </div>
</div>
HTML;
            }
        }

        return $html;
    }

    /**
     * Property set magic method
     *
     * <b>Properties</b>
     * Property | Type | Description
     * -------- | ---- | -----------
     * appearance | Appearance | Installed site appearance object
     * config | string | Configuration file directory relative to root (default is 'site')
     * cookiePrefix | A prefix to attach to all cookie names (to ensure uniqueness)
     * decor | string | Directory where decoration files are stored (default='site')
     * jsRoot | The root directory for the site Javascript (default is cl/dist
     * jsSuffix | Suffix to append to base Javascript (default is .min.js or .js (sandbox)
     * root | string | %Site root path
     * sandbox | boolean | True if running in the sandbox
     * server | string | Server URL, like 'https://www.server.edu'
     * siteName | string | A name for the website.
     * unavailable | string | String indicating why site is unavailable
     *
     * @param string $key Property name
     * @param string $value Value to set
     */
    public function __set($key, $value)
    {
        switch ($key) {
            case 'none':
                $this->none = $value;
                break;

            default:
                $trace = debug_backtrace();
                trigger_error(
                    'Undefined property ' . $key .
                    ' in ' . $trace[0]['file'] .
                    ' on line ' . $trace[0]['line'],
                    E_USER_NOTICE);
                break;
        }
    }

    private $os;    // Operating system code
    private $html = [];
    private $none = '';
}