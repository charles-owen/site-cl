<?php
require '../site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'CourseLib cl/site';
?>
<!DOCTYPE html>
<html>
<head>
<link href="../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>
<?php echo Backto::to("CourseLib", ".."); ?>

<p>The cl/site component is the root component in the CourseLib. All other CourseLib components 
extend the capabilities of cl/site.</p>
<p>The cl/site component can be used alone to create a basic web site and utilize the styling and basic authoring features of CourseLib. As an example, this site is a cl/site website.</p>

<ul>
<li><a href="../start">Installation</a></li>
<li><a class="cl-autoback" href="configure.php">Configuration</a></li>
<li><a class="cl-autoback" href="basic.php">Basic Page</a></li>
<li><a class="cl-autoback" href="styles">Styles and CSS</a></li>

</ul>

<?php echo $view->footer(); ?>
</body>
</html>
