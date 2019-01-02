<?php
// Ensure no active session
session_start();
session_destroy();

require __DIR__ . '/../../../autoload.php';
require __DIR__ . '/cls/TestingView.php';