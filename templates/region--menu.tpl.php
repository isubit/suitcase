<div<?php print $attributes; ?>>
  <div class="main-menu-container">
    <div class="main-menu-toggle mobile-menu-item js-enabled" id="main-menu-categories-toggle">
      <a>≡</a>
    </div>
<!--    <div class="main-menu-toggle mobile-menu-item js-enabled" id="main-menu-menu-toggle">-->
<!--      <a>Menu</a>-->
<!--    </div>-->
  </div>

  <div<?php print $content_attributes; ?>>
    <?php if ($main_menu || $secondary_menu): ?>
    <nav class="navigation">
      <?php print theme('links__system_main_menu', array('links' => $main_menu, 'attributes' => array('id' => 'main-menu', 'class' => array('links', 'inline', 'clearfix', 'main-menu')), 'heading' => array('text' => t('Main menu'),'level' => 'h2','class' => array('element-invisible')))); ?>
      <?php print theme('links__system_secondary_menu', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary-menu', 'class' => array('links', 'inline', 'clearfix', 'secondary-menu')), 'heading' => array('text' => t('Secondary menu'),'level' => 'h2','class' => array('element-invisible')))); ?>
    </nav>
    <?php endif; ?>

    <?php print $content; ?>

  </div>
</div>
