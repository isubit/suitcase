<?php

/**
 * Implements hook_form_system_theme_settings_alter()
 */
function suitcase_form_system_theme_settings_alter(&$form, &$form_state) {

  if ($GLOBALS['theme_key'] == $form_state['build_info']['args'][0]) {
    drupal_add_css(drupal_get_path('theme', 'suitcase') . '/css/suitcase_theme_settings.css', array('group' => CSS_THEME, 'weight' => 100));
  }

}