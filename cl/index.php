<?php
require '../site.php';
$router = new CL\Site\Router();
echo $router->dispatch($site, new CL\Site\System\Server(), time());
