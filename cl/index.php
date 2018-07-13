<?php
require '../site.php';
$router = new CL\Site\Router\RootRouter();
echo $router->dispatch($site, new CL\Site\System\Server(), time());
