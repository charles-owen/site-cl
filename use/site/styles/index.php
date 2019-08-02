<?php
require '../../../site.php';
$view = new CL\Site\View($site);
$view->title = 'Using the site.css style sheet';
$view->set_autoback();
?>
<!doctype html>
<html lang=en-US>
<head>
<link href="../../../cl/site.css" type="text/css" rel="stylesheet" />
<?php echo $view->head(); ?>
</head>
<body>
<?php 
echo $view->header(); 
?>

<p>The CourseLib system has a standard set of styles in the stylesheets cl/site.css. The site.css style sheet is automatically included for every page that uses a View class, but it can also be manually included to ease authoring using programs such as Dreamweaver. </p>
<pre class="code">&lt;link href="../cl/site.css" type="text/css" rel="stylesheet" /&gt;
</pre>
<p>This assumes the file is in some child of the course home directory. Obviously, the path to the file must be correct.</p>
<p>You then get these neat features:</p>
<ul>
<li>Headings</li>
<li><a class="cl-autoback" href="code.php">Code</a> - Presentation of source code on a page</li>
<li><a class="cl-autoback" href="images.php">Images</a> - Ways to present images on pages</li>

</ul>
<h2>div.content</h2>
<p>The body of the page is usually contained in a &lt;div class=&quot;content&quot;&gt;. This causes the center column and right asides area. Adding the class &quot;full&quot; to a paragraph, div, form, etc. will cause it to go to the full width rather than the column. The content div is automatically included by the view classes. Do no manually include it.</p>

<h2>Headings</h2>
<p>&lt;h1&gt; is used for page titles. &lt;h2&gt; is for major sections such as this one. &lt;h3&gt; is for sub-sections. &lt;h4&gt; is for sub-sub-sections, but is rarely used.</p>

<h2>Boxes</h2>
<p>The centerbox style can be used on paragraphs and div's to make a centered box with shadows. Add a color class to choose the color of the box.</p>
<p class="centerbox primary">centerbox primary</p>
<p class="centerbox comp">centerbox comp</p>
<p class="centerbox seconda">centerbox seconda</p>
<p class="centerbox secondb">centerbox secondb</p>
<p class="rightbox primary">There are also sideboxes you can use. They are rightbox primary, etc.</p>
<p>The colors are actually based on MSU suggested color schemes from the <a href="http://cabs.msu.edu/toolkit/web.html" target="_blank">MSU Web Style Guide</a>. We have a primary, complementary, and two secondary colors.</p>
<p class="advice">I also have this standard &quot;advice&quot; box. class=&quot;advice&quot;</p>
<p class="problem">And this is the standard box for problem specifications and
scenarios. class=&quot;problem&quot;</p>
<h2>Highlights</h2>
<p>I sometimes find it useful to <span class="highlight">highlight portions of code or text</span>. Add the highlight class to a span to highlight that text. The code to do this is:</p>
<pre class="code">I sometimes find it useful to 
&lt;span class="highlight"&gt;highlight portions of code or text&lt;/span&gt;.
</pre>
<h2>Other standard styles</h2>
<h3>Styles available on &lt;p&gt; tags</h3>
<p class="center">center</p>
<h3>Styles availalbe on &lt;p&gt; and &lt;span&gt; tags</h3>
<p class="pdf">pdf</p>
<p class="smallred">smallred</p>
<p class="smallblu">smallblu</p>
<p class="underline">underline</p>
<p class="strikethrough">strikethrough</p>
<p class="tiny">tiny</p>
<p class="revised">revised</p>
<p><span class="due">due</span></p>


<?php 
echo $view->footer(); 
?>
</body>
</html>

