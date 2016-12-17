<?php print $doctype; ?>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?>>
<head<?php print $rdf->profile; ?>>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>  
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!--[if lt IE 9]><script src="<?php print $GLOBALS['base_url'] . '/' . drupal_get_path('theme', 'suitcase') . '/js/html5shiv.min.js' ?>"></script><![endif]-->
</head>
<body<?php print $attributes;?>>
	<!--[if lt IE 9]><div class="iecomp"><![endif]-->
  		<?php print $page_top; ?>
  		<?php print $page; ?>
  		<?php print $page_bottom; ?>
	<!--[if lt IE 9]></div><![endif]-->
</body>
</html>