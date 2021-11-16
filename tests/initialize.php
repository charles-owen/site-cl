<?php
// Ensure no active session
session_start();
session_destroy();

ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

require __DIR__ . '/../../../autoload.php';
require __DIR__ . '/cls/TestingView.php';