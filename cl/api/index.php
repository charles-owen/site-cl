<?php
require '../../site.php';
$site->start(['open']);
$api = new \CL\Site\Api($site);
echo $api->dispatch();

