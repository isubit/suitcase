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
}

// template_preprocess_region
function suitcase_preprocess_region(&$vars) {
  $vars['dept_url'] = variable_get('dept_url', $default = NULL);
}

// Setting breadcrumb to include current title
// https://drupal.org/node/743366
//function suitcase_breadcrumb($variables) {
//  $breadcrumb = $variables['breadcrumb'];
//  if (!empty($breadcrumb)) {
//    // Adding the title of the current page to the breadcrumb.
//    $breadcrumb[] = drupal_get_title();
//    // Provide a navigational heading to give context for breadcrumb links to
//    // screen-reader users. Make the heading invisible with .element-invisible.
//    $output = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
//    $output .= '<div class="breadcrumb">' . implode(' » ', $breadcrumb) . '</div>';
//    return $output;
//  }
//}

//function suitcase_preprocess_block(&$vars) {
//  if($vars['block']->bid === '51' || $vars['block']->module === 'facetapi') {
//
//  }
//}

//function suitcase_menu_link(array $variables) {
//  $element = $variables['element'];
//
////<?php print theme('links__system_main_menu', array(
////  'links' => $main_menu,
////  'attributes' => array(
////    'id' => 'main-menu-links',
////    'class' => array('links', 'clearfix'),
////  ),
////));
//}
