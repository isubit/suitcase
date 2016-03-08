<div<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>
    <div class="pull-right margin-left-10 pos-relative search-form-container">
      <?php print $search_form; ?>
      <div class="popover">
        <h3>Popular searches:</h3>
        <ul class="menu">
          <?php foreach ($categories as $term): ?>
          <li><a href="<?php print taxonomy_term_uri($term)['path']; ?>"><?php print $term->name; ?></a></li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>
    <?php if ($content): ?>
      <div class="pull-right"><?php print $content; ?></div>
    <?php endif; ?>
  </div>
</div>
