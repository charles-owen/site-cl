<?php
require '../site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'Installation';
?>
<!DOCTYPE html>
<html>
<head>
<link href="../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>

<p>CourseLib consists of components that are installed using <a href="https://getcomposer.org/">Composer</a>.
Composer must be installed first.</p>
<p>The basic component, and the starting point for a site is cl/site. All other components are optional. It is recommended that cl/site be installed and configured first to get the site running. Most users will then proceed to install cl/users and cl/course for users and course support.</p>
<h2>composer.json</h2>

<p>Download the file <a href="composer.json">composer.json</a>. Place this file in the root directory
where you wish to create the CourseLib site. The file is also available in a .zip file:</p>
<p class="center"><a href="composer.zip"><img src="../../vendor/cl/site/img/archiveicon.png" alt=""/></a><a href="composer.zip">composer.zip</a></p>

<?php echo Toggle::begin("What is in composer.json?", "p"); ?>

<p>The file composer.json consists of:</p>

<pre class="code">{
  "scripts": {
    "cl-installer": "CL\\Site\\Install\\Installer::install"
  }
}
</pre>

<p>It installs a script that will be run to configure the files in the site.</p>

<?php echo Toggle::end(); ?>


<h2>Installing cl/site</h2>

<p>In the directory containing composer.json, type the following commands:</p>
<pre class="code">composer require cl/site
composer run cl-installer</pre>
<p>Now proceed to <a href="../site/configure.php">cl/site configurations</a> to configure.</p>



<?php echo $view->footer(); ?>
</body>
</html>
