<?php
require '../../../site.php';
$view = new CL\Site\View($site);
$view->title = 'site.css: ';
$view->set_autoback();
?>
<!doctype html>
<html lang="en-US">
<head>
<link href="../../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>
<body>
<?php 
echo $view->header(); 
?>

<p>...</p>


<?php 
echo $view->footer(); 
?>
</body>
</html>

