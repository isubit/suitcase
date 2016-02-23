<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

// theme_preprocess_html
function suitcase_preprocess_html(&$vars) {
//  ISU Bar responsive classes added to body
  $vars['attributes_array']['class'][] = 'responsive';
  $vars['attributes_array']['class'][] = 'wd-show-sidebar';
  // Drupal 7 in hook_preprocess_html()
  drupal_add_http_header('X-UA-Compatible', 'IE=edge,chrome=1');
}

// template_preprocess_region
function suitcase_preprocess_region(&$vars) {
  if($vars['region'] == 'content' && arg(0) == 'node' && is_numeric(arg(1)) && arg(2) !== 'edit') {
    $node = node_load(arg(1));
    if($node->type == 'people' && !empty($node->field_people_category)) {
      $vars['categories'] = array();
      foreach($node->field_people_category[LANGUAGE_NONE] as $category) {
        $tax = taxonomy_term_load($category['tid']);
        array_push($vars['categories'], $tax->name);
      }
    }
  } else if($vars['region'] == 'branding') {
    // Prepare Logo
    $vars['suitcase_config_logo'] = FALSE;
    $logo = variable_get('suitcase_config_logo');
    $vars['site_name'] = variable_get('site_name');
    if ($logo) {
      $logo_url = file_create_url($logo['uri']);
      $vars['suitcase_config_logo'] = '<div class="logo-img"><a href="' . $GLOBALS['base_url'] . '" rel="home" title="' . $vars['site_name'] . '" class="active"><img src="' . $logo_url . '" alt="Go to ' . $vars['site_name'] . ' home" id="logo" /></a></div>';
    }

    $vars['dept_url'] = variable_get('dept_url', $default = NULL);
    $vars['show_isu_nameplate'] = variable_get('suitcase_config_isu_nameplate_display', 1);

    // Get the uploaded wordmark if is exists
    $vars['site_wordmark'] = variable_get('site_wordmark', $default = NULL);
    if (!$vars['site_wordmark']) {
      // If a wordmark hasn't been uploaded, create a var for the default wordmark
      $vars['default_wordmark'] = file_create_url('sites/all/themes/suitcase/images/sprite.png');
    } else {
      $vars['site_wordmark'] = file_create_url($vars['site_wordmark']);
    }
  } else if($vars['region'] == 'menu') {
    $vars['site_name'] = variable_get('site_name');
    $vars['linked_site_name'] = l($vars['site_name'], '<front>', array('attributes' => array('title' => t('Home')), 'html' => TRUE));
  }
}

function suitcase_preprocess_section(&$vars) {
  if($vars['section'] == 'header') {
    $vars['show_blackbar'] = variable_get('suitcase_config_blackbar_display', 1);
  }
}

function suitcase_preprocess_content(&$vars) {
  $vars['categories'] = variable_get('field_people_category', $default = NULL);
}