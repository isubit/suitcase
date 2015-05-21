<div<?php print $attributes; ?>>
<div<?php print $content_attributes; ?>>
  <?php if ($linked_logo_img || $site_name || $site_slogan): ?>
    <div class="branding-data clearfix">


      <div id="isu_wordmark">
        <a accesskey="1" class="nameplate" href="http://www.extension.iastate.edu" title="Iowa State University Homepage"><img src="<?php print base_path(); ?>sites/all/themes/suitcaseext/images/sprite.png" alt="Iowa State University"></a></div>
      <?php if ($site_name || $site_slogan): ?>
        <?php $class = $site_name_hidden && $site_slogan_hidden ? ' element-invisible' : ''; ?>
        <hgroup class="site-name-slogan<?php print $class; ?>">
          <?php if ($site_name): ?>
            <?php $class = $site_name_hidden ? ' element-invisible' : ''; ?>
            <?php if ($is_front): ?>
              <h1 class="site-name<?php print $class; ?>"><?php print $linked_site_name; ?></h1>
            <?php else: ?>
              <h2 class="site-name<?php print $class; ?>"><?php print $linked_site_name; ?></h2>
            <?php endif; ?>
          <?php endif; ?>
        </hgroup>
      <?php endif; ?>
    </div>
  <?php endif; ?>
  <?php print $content; ?>
</div>
</div>
