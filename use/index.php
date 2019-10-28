<?php
require 'site.php';
$view = new CL\Site\Doc\DocHomeView($site, __DIR__);
$view->title = 'Documentation';
?>
<!DOCTYPE html>
<html>
<head>
<link href="../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>

<body>
<?php echo $view->header(); ?>

<p>CourseLib is a library of components that support the creation of dynamic and powerful
educational websites. The library is specifically designs to support the delivery of an
academic course.</p>

<h2>The Idea</h2>
<p>The basic idea of CourseLib is the creation of content using PHP and a library of
easy-to-use tools in both the base system and in installable modules. CourseLib is intended
for content-rich course websites where authoring the content is most effectively done on
a page-by-page basis using conventional tools like DreamWeaver rather than authoring
into a database. Sites can still be dynamic and responsive.</p>

<ul>
    <li><a class="cl-autoback" href="start">Getting Started</a></li>
    <li><a class="cl-autoback" href="config-dir.php">Site configuration directory</a></li>
</ul>
<h2>Components</h2>

<h3>Core components</h3>
<?php echo $view->present_components('core'); ?>

<h3>Optional components</h3>
<?php echo $view->present_components('optional'); ?>
<!-- <li><a class="item" href="cirsim">cl/cirsim</a> The Cirsim Circuit Simulator</li>
<li><span class="item">cl/exam</span> Styles to support creating exams</li>
<li><span class="item">cl/filesystem</span> Ability to store files uploaded by students</li>
<li><span class="item">cl/git</span> Support for team evaluation of GIT projects using gitlab</li>
<li><span class="item">cl/grades</span> Grading support and gradebook</li>
<li><span class="item">cl/interact</span> Interact! online help system</li>
<li><span class="item">cl/lti</span> Learning Tools Interoperability support</li>
<li><a class="item" href="moss">cl/moss</a> Measure of Software Similarity (MOSS) support</li>
<li><span class="item">cl/quiz</span> Embedded quizzes in Step assignments</li>
<li><span class="item">cl/review</span> Peer review</li>
<li><span class="item">cl/scheduler</span> Ability to schedule slots for teams for presentations or meetings</li>
<li><span class="item">cl/step</span> Step assignments</li>
<li><span class="item">cl/team</span> Team management</li>
<li><span class="item">cl/trello</span> Support to team evaluation of Trello projects</li>
-->

<h3>MSU-specific components</h3>
<?php echo $view->present_components('msu'); ?>

<?php echo $view->footer(); ?>
</body>
</html>
