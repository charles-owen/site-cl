<?php
require '../../../site.php';
$view = new CL\Site\View($site);
$view->title = 'site.css: Images';
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
<p>The preferred method for images is to use the &lt;figure&gt; tag. By default, figured appear with a drop shadow and  center in the concent area width. You can add these classes to the tag:</p>
<ul>
  <li>full - Center in the entire page width</li>
  <li>noshadow - Turns off shadowing</li>
  <li>border - Turns on a border around the image</li>
</ul>


<figure><img alt="Logo icon" height="75" src="../../img/logo.png" width="171">
<figcaption>&lt;figure&gt;</figcaption></figure>

<?php echo Toggle::begin("Expand to see HTML", "p"); ?>

<pre class="code">&lt;figure&gt;&lt;img alt="Logo icon" height="75" src="img/logo.png" width="171"&gt;
&lt;figcaption&gt;&amp;lt;figure&amp;gt;&lt;/figcaption&gt;&lt;/figure&gt;</pre>

<?php echo Toggle::end(); ?>

<figure class="full"><img alt="Logo icon" height="75" src="../../img/logo.png" width="171">
<figcaption>&lt;figure class=&quot;full&quot;&gt;</figcaption></figure>

<?php echo Toggle::begin("Expand to see HTML", "p"); ?>

<pre class="code">&lt;figure class=&quot;full&quot;&gt;&lt;img alt="Logo icon" height="75" src="img/logo.png" width="171"&gt;
&lt;figcaption&gt;&amp;lt;figure&amp;gt;&lt;/figcaption&gt;&lt;/figure&gt;</pre>

<?php echo Toggle::end(); ?>
<figure class="full noshadow border"><img alt="Logo icon" height="75" src="../../img/logo.png" width="171">
<figcaption>&lt;figure class=&quot;full noshadow border&quot;&gt;</figcaption></figure>

<?php echo Toggle::begin("Expand to see HTML", "p"); ?>

<pre class="code">&lt;figure class=&quot;full noshadow border&quot;&gt;&lt;img alt="Logo icon" height="75" src="img/logo.png" width="171"&gt;
&lt;figcaption&gt;&amp;lt;figure&amp;gt;&lt;/figcaption&gt;&lt;/figure&gt;</pre>

<?php echo Toggle::end(); ?>
<?php 
echo $view->footer(); 
?>
</body>
</html>

