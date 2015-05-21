<?php

/**
 * Implementation of themehook_settings().
 */
function suitcaseext_form_system_theme_settings_alter(&$form, $form_state) {
  $form['suitcaseext'] = array(
    '#type' => 'fieldset',
    '#title' => t('Suitcase EIT Settings'),
  );
  $form['suitcaseext']['breadcrumb_delimiter'] = array(
    '#type' => 'textfield',
    '#title' => t('Breadcrumb delimiter'),
    '#size' => 4,
    '#default_value' => theme_get_setting('breadcrumb_delimiter'),
    '#description' => t("Don't forget spaces at either end... if you're into that sort of thing."),
  );
}
