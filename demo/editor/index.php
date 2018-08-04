<?php
/** @file
 * Editor development page
 * @cond
 */
require_once "../../../../../site.php";
$view = new CL\Site\View($site);
$view->title = 'Editor development and testing';
?>
<!doctype html>
<html lang="en-US">
<head>
	<?php echo $view->head(); ?>
  <style>
    textarea {
      width: 100%;
    }
  </style>
</head>
<body>

<?php
echo $view->header();
?>
<form>
<p contenteditable="true">Simple test page for editor control.</p>

<?php
$editor = new \CL\Site\UI\Editor('editor1');
$editor->code = true;
$editor->height ="15em";
$editor->minHeight = "5em";
$editor->tab = true;
$editor->initial = <<<'INITIAL'
void test()
{
int i;
for(i=0; i<100; i++)
{
    printf("%d\\n", i);
}
}
$editor = new \CL\Site\UI\Editor('editor1');
$editor->code = true;
$editor->height ="15em";
$editor->minHeight = "5em";
$editor->initial = <<<INITIAL
$editor = new \CL\Site\UI\Editor('editor1');
$editor->code = true;
$editor->height ="15em";
$editor->minHeight = "5em";
$editor->initial = <<<INITIAL

INITIAL;

echo $editor->present();
?>
<input type="submit">
</form>
<?php
echo $view->footer();
/// @endcond
?>

</body>
</html>
