<?php
require '../../site/use/site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/site Site configuration directory';
$view->set_autoback();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link href="../../../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>
<?php echo Backto::to("cl/site", "./"); ?>

<p>Every CourseLib site has a configuration directory. Most files that configure the site and courses are located in that directory. By default the directory is named <code>site</code> and is a child of the site root directory. The name can be changed in site.php using setting the site config property:</p>
<pre class="code">$site-&gt;config = 'course';
</pre>


<?php echo Backto::to("cl/site", "./"); ?>
<?php echo $view->footer(); ?>
</body>
</html>
