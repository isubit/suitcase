<div<?php print $attributes; ?>>
  <div class="main-menu-container">
    <div class="main-menu-toggle mobile-menu-item js-enabled" id="main-menu-facets-toggle">
      <a>≡</a>
    </div>
    <div class="main-menu-toggle mobile-menu-item js-enabled" id="main-menu-menu-toggle">
      <a>Menu</a>
    </div>
    <div class="main-menu-container mobile-menu-container" id="main-menu-search-container">
      <input type="text" class="main-menu-search-input" id="main-menu-search-input" placeholder="Search...">
      <div class="main-menu-search-toggle mobile-menu-item js-enabled" id="main-menu-search-toggle">
        <a>Go</a>
      </div>

    </div>
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
