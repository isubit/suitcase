<div<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>
    <div class="clearfix">
      <?php $site_name_level_2_class = ($levels_to_show['2'] != 0 && $site_name_level_2 != 'Iowa State University') ? ' has-site-name-level-2' : ''; ?>
      <?php $site_name_level_3_class = ($site_name_level_3 && $levels_to_show['2'] != 0 && $levels_to_show['3'] != 0) ? ' has-site-name-level-3' : ''; ?>
      <div class="pull-right margin-left-10 pos-relative search-form-container<?php print $site_name_level_2_class . $site_name_level_3_class; ?>">
        <?php print $search_form; ?>
        <div class="popover">
          <div class="arrow"></div>
          <h3>Popular searches:</h3>
          <ul class="menu">
            <?php foreach ($categories as $term): ?>
            <li><a href="<?php print taxonomy_term_uri($term)['path']; ?>"><?php print $term->name; ?></a></li>
            <?php endforeach; ?>
          </ul>
        </div>
      </div>
    </div>
    <?php if ($content): ?>
      <div class="clearfix">
        <div class="pull-right"><?php print $content; ?></div>
      </div>
    <?php endif; ?>
  </div>
</div>
