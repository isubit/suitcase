<div<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>
    <?php print theme('links__system_secondary_menu', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary-menu', 'class' => array('links', 'inline', 'clearfix', 'secondary-menu')), 'heading' => array('text' => t('Secondary menu'),'level' => 'h2','class' => array('element-invisible')))); ?>

    <?php print $content; ?>
  </div>
</div>