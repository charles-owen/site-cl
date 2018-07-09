<?php
require __DIR__ . '/../../site.php';
$site->start(['open']);
$view = new CL\Site\View($site);
$view->title = "Not Authorized";
?>
<!DOCTYPE html>
<html lang="en">
<head><?php echo $view->head(); ?></head>
<body>
<?php echo $view->header(); ?>

<div class="content">
  <?php
  if(!empty($_GET['r'])) {
    $r = strip_tags($_GET['r']);
	  echo <<<HTML
<p class="full center large setoff">You are not authorized to access the $r.</p>
HTML;
  } else {
    echo <<<HTML
<p class="full center large setoff">You are not authorized to access this site.</p>
HTML;
  }
  ?>
  )
</div>

<?php echo $view->footer(); ?>
</body>
</html>


