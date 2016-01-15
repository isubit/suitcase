<div<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>
    <?php if ($site_name): ?>
      <?php $class = $site_name_hidden ? ' element-invisible' : ''; ?>
      <?php if ($is_front): ?>
        <h1 class="site-name<?php print $class; ?>"><?php print $linked_site_name; ?></h1>
      <?php else: ?>
        <h2 class="site-name<?php print $class; ?>"><?php print $linked_site_name; ?></h2>
      <?php endif; ?>
    <?php endif; ?>
    <?php if ($main_menu || $secondary_menu): ?>
    <nav class="navigation">
      <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('links', 'inline', 'clearfix', 'main-menu')), 'heading' => array('text' => t('Main menu'),'level' => 'h2','class' => array('element-invisible')))); ?>
      <?php print theme('links__system_secondary_menu', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary-menu', 'class' => array('links', 'inline', 'clearfix', 'secondary-menu')), 'heading' => array('text' => t('Secondary menu'),'level' => 'h2','class' => array('element-invisible')))); ?>
    </nav>
    <?php endif; ?>
    <?php print $content; ?>
  </div>
</div>
