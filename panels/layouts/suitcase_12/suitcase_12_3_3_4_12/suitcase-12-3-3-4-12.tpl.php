<div class="panel-display omega-grid suitcase-12-3-3-4-12" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <div class="panel-panel grid-12">
    <?php print $content['top']; ?>
  </div>
  <div class="clearfix">
    <div class="panel-panel grid-4">
      <?php print $content['upper_left']; ?>
    </div>
    <div class="panel-panel grid-4">
      <?php print $content['upper_middle']; ?>
    </div>
    <div class="panel-panel grid-4">
      <?php print $content['upper_right']; ?>
    </div>
  </div>
  <div class="clearfix">
    <div class="panel-panel grid-4">
      <?php print $content['middle_left']; ?>
    </div>
    <div class="panel-panel grid-4">
      <?php print $content['middle_middle']; ?>
    </div>
    <div class="panel-panel grid-4">
      <?php print $content['middle_right']; ?>
    </div>
  </div>
  <div class="clearfix">
    <div class="panel-panel grid-3">
      <?php print $content['lower_first']; ?>
    </div>
    <div class="panel-panel grid-3">
      <?php print $content['lower_second']; ?>
    </div>
    <div class="panel-panel grid-3">
      <?php print $content['lower_third']; ?>
    </div>
    <div class="panel-panel grid-3">
      <?php print $content['lower_fourth']; ?>
    </div>
  </div>
  <div class="panel-panel grid-12">
    <?php print $content['bottom']; ?>
  </div>
</div>
