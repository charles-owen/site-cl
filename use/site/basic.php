<?php
require '../site.php';
$view = new CL\Site\Doc\DocView($site);
$view->title = 'cl/site Basic Page';
?>
<!DOCTYPE html>
<html>
<head>
<link href="../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>
<?php echo Backto::to("cl/site", "./"); ?>

<p>This page describes how to create a basic page in the CourseLib system. A basic page includes the CourseLib system and styles.</p>
<p>This is a basic CourseLib page template:</p>
<pre class="code">&lt;?php
require 'site.php';
$view = new CL\Site\View($site);
$view-&gt;title = 'Page Template';
?&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;link href="cl/site.css" type="text/css" rel="stylesheet" /&gt;
&lt;?php echo $view-&gt;head(); ?&gt;
&lt;/head&gt;

&lt;body&gt;
&lt;?php echo $view-&gt;header(); ?&gt;

&lt;p&gt;Page content&lt;/p&gt;

&lt;?php echo $view-&gt;footer(); ?&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<p>THis assumes the page is in the site root directory. Adjust the path to site.php and cl/site.css as appropriate. For example if the page is in directory that is a child of the root directory, those statements become:</p>
<pre class="code">require '../site.php';

&lt;link href="../../cl/site.css" type="text/css" rel="stylesheet" /&gt;
</pre>
<h3>A note about views</h3>
<p>This example uses the view CL\Site\View. Other views are available in the site library and are installed by additional components. If cl/users is installed, it is recommended that CL\Users\View be utilized for pages, since it provides extended capabilties. If cl/course is installed, it is recommended that CL\Course\View be utilized.</p>
<h3>A note about cl/site.css</h3>
<p>It is not required that cl/site.css be included. The view will automatically include site.css and any other requires stylesheets. In fact, the view will filter this line out. However, it makes it much easier to edit pages in the site using tools such as Dreamweaver, when the actual stylesheet is included. </p>
<p class="centerbox">CourseLib retains a conventional HTML page structure to make it easier to author content using tools like Dreamweaver. It would be easy to have the PHP generate all content, including the DOCTYPE, html, head, and body tags. However, retaining this structure makes editing much easier. This is a fundamental philosophy of CourseLib.</p>

<?php echo $view->footer(); ?>
</body>
</html>
