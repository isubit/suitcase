<?php

/**
 * Implements hook_panels_layouts().
 */
function suitcase_suitcase_12_3_3_4_12_panels_layouts() {
  $items['suitcase_12_3_3_4_12'] = array(
    'title' => t('Two 3 column rows and a 4 column row'),
    'category' => t('Suitcase: 12 Column Grid'),
    'icon' => 'suitcase_12_3_3_4_12.png',
    'theme' => 'suitcase_12_3_3_4_12',
    'admin css' => '../suitcase_panels_admin_12.css',
    'regions' => array(
      'top' => t('Top'),
      'upper_left' => t('Upper left side'),
      'upper_middle' => t('Upper middle column'),
      'upper_right' => t('Upper right side'),
      'middle_left' => t('Middle left side'),
      'middle_middle' => t('Middle middle column'),
      'middle_right' => t('Middle right side'),
      'lower_first' => t('Lower first column'),
      'lower_second' => t('Lower second column'),
      'lower_third' => t('Lower third column'),
      'lower_fourth' => t('Lower fourth column'),
      'bottom' => t('Bottom'),
    ),
  );

  return $items;
}


