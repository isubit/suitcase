<div<?php print $attributes; ?>>
<div<?php print $content_attributes; ?>>
  <?php if ($linked_logo_img || $site_name || $site_slogan): ?>
    <div class="branding-data clearfix">
      <?php if ($suitcase_config_logo): ?>
        <div class="logo-img">
          <?php print $suitcase_config_logo; ?>
        </div>
      <?php endif; ?>

      <?php if($show_isu_nameplate): ?>
        <div id="isu_wordmark">
          <?php if ($site_wordmark): ?>
            <a accesskey="1" class="nameplate" href="<?php ($level_1_url) ? print $level_1_url : 'http://www.iastate.edu' ?>" title="<?php print $site_name; ?>"><img src="<?php print $site_wordmark; ?>" alt="Iowa State University - <?php print $site_name; ?>"></a>
          <?php else: ?>
            <a accesskey="1" class="nameplate" href="<?php ($level_1_url) ? print $level_1_url : 'http://www.iastate.edu' ?>" title="Iowa State University Homepage"><img src="<?php print $default_wordmark; ?>" alt="Iowa State University"></a>
          <?php endif; ?>
          <?php if (!$levels_to_show || $levels_to_show['2'] != 0): ?>
            <?php $class = $site_slogan_hidden ? ' element-invisible' : ''; ?>
            <?php if ($site_name_level_3): ?>
              <?php if ($is_front): ?>
                <?php if ($level_that_is_site_name == '2' || $levels_to_show['3'] == 0 || !$level_that_is_site_name || !$levels_to_show): ?>
                  <h1 class="site-name-level-2<?php print $class; ?>"><?php print $linked_site_name_level_2; ?></h1>
                <?php else: ?>
                  <h2 class="site-name-level-2<?php print $class; ?>"><?php print $linked_site_name_level_2; ?></h2>
                <?php endif; ?>
              <?php else: ?>
                <?php if ($level_that_is_site_name == '2' || $levels_to_show['3'] == 0): ?>
                  <h2 class="site-name-level-2<?php print $class; ?>"><?php print $linked_site_name_level_2; ?></h2>
                <?php else: ?>
                  <h3 class="site-name-level-2<?php print $class; ?>"><?php print $linked_site_name_level_2; ?></h3>
                <?php endif; ?>
              <?php endif; ?>
            <?php endif; ?>
          <?php endif; ?>
        </div>
      <?php endif; ?>
      <?php if (!$levels_to_show || ($site_name_level_3 && $levels_to_show['3'] != 0)): ?>
        <hr>
        <?php $class = $site_name_hidden && $site_slogan_hidden ? ' element-invisible' : ''; ?>
        <hgroup class="site-name-slogan<?php print $class; ?>">
          <?php $class = $site_name_hidden ? ' element-invisible' : ''; ?>
          <?php if ($is_front): ?>
            <?php if ($level_that_is_site_name == '3' || $levels_to_show['2'] == 0): ?>
              <h1 class="site-name-level-3<?php print $class; ?>"><?php print $linked_site_name_level_3; ?></h1>
            <?php else: ?>
              <h2 class="site-name-level-3<?php print $class; ?>"><?php print $linked_site_name_level_3; ?></h2>
            <?php endif; ?>
          <?php else: ?>
            <?php if ($level_that_is_site_name == '3' || $levels_to_show['2'] == 0): ?>
              <h2 class="site-name-level-3<?php print $class; ?>"><?php print $linked_site_name_level_3; ?></h2>
            <?php else: ?>
              <h3 class="site-name-level-3<?php print $class; ?>"><?php print $linked_site_name_level_3; ?></h3>
            <?php endif; ?>
          <?php endif; ?>
        </hgroup>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  <?php print $content; ?>
</div>
</div>
