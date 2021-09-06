<?php

namespace CL\Site;

/**
 * Allows for specification of a program's user interface features
 * for easy use.
 *
 * Example:
@code
// Defines a menu option with generic and Mac-specific versions
$clion = new \CL\Site\ProgramUI($site);
$clion->addMenu(Site::Generic, "settings", "File", "Settings");
$clion->addMenu(Site::Mac, "settings", "CLion", "Preferences");

// Display the menu option
echo $clion->menu("settings");
@endcode
 */
class ProgramUI {
    const MenuSeparator = '&rarr;';

    /**
     * Constructor
     * @param Site $site Site object
     */
    public function __construct(\CL\Site\Site $site) {
        $this->os = $site->os;
    }

    /**
     * Add a menu option
     * @param string $os Operating system id. See constants in Site.php
     * @param string $name Name of the option
     * @param string[] ...$args Arguments for the menu option
     */
    public function addMenu($os, $name, ...$args) {
        if($os === Site::Generic || $os === $this->os) {
            $this->menu[$name] = $args;
        }
    }

    /**
     * Display a menu option
     * @param string $name The menu option name
     * @param string[] ...$args Items to add to the menu
     * @return string HTML
     */
    public function menu($name, ...$args) {
        $html = '';

        if($name === null) {
            foreach($args as $menu) {
                if(strlen($html) > 0) {
                    $html .= self::MenuSeparator;
                }

                $html .= $menu;
            }
        } else if(isset($this->menu[$name])) {
            $all = array_merge($this->menu[$name], $args);

            foreach($all as $menu) {
                if(strlen($html) > 0) {
                    $html .= self::MenuSeparator;
                }

                $html .= $menu;
            }

        } else {
            $html = "[missing: $name]";
            foreach($args as $menu) {
                $html .= self::MenuSeparator . $menu;
            }
        }

        return $html;
    }

    private $os;        // Operating system

    private $menu = []; // Installed menu options
}