<?php
require '../../../site.php';
$view = new CL\Site\View($site);
$view->title = 'site.css: Code';
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

<p>Wrap a block of code in these tags:</p>
<pre class="code">&lt;pre class="code"&gt;for(int i=0;  i&amp;lt;10;  i++)
{
    do_something();
}
&lt;/pre&gt;</pre>
<p>This will appear as:</p>

<pre class="code">for(int i=0;  i&lt;10;  i++)
{
    do_something();
}</pre>
<p>When pasting in code, the &amp;, &lt;, and &gt; characters have to be changed to &amp;amp;, &amp;lt; and &amp;gt; due to HTML requirements. </p>
<p>Add the full class to make the code presentation wider:</p>
<p>&nbsp;</p>

<pre class="code">&lt;pre class="code full"&gt;for(int i=0;  i&amp;lt;10;  i++)
{
    do_something();
}
&lt;/pre&gt;</pre>
<p>This will appear as:</p>

<pre class="code full">for(int i=0;  i&lt;10;  i++)
{
    do_something();
}</pre>

<?php 
echo $view->footer(); 
?>
</body>
</html>

