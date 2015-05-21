<header<?php print $attributes; ?>>
  <div id="section-header-container">
    <div class="pwrapper">
      <div class="pwrapper-wrapper">
        <div class="hwrapper" id="header">
          <div class="isu-dark-ribbon" id="top-strip">
            <div class="clearfix wrapper container-12">
              <ul class="isu-responsive-toggles wd-ribbon-menu">
                <li><a class="search-toggle" href="http://google.iastate.edu/">search</a></li>
              </ul>
              <div class="wd-ribbon-menu-stack">
                    <ul class="wd-ribbon-menu">
                      <li class="first"><a href="http://www.iastate.edu/">ISU</a></li>
                      <li><a href="http://www.extension.iastate.edu/articles">News</a></li>
                      <li><a href="https://www.youtube.com/user/IowaStateExtension">Videos</a></li>
                      <li><a href="http://www.extension.iastate.edu/content/ask-isu-extension-expert-question">Ask a Question</a></li>
                      <li><a href="https://store.extension.iastate.edu/">Store</a></li>
                      <li><a href="http://www.extension.iastate.edu/content/contact-us">Contact Us</a></li>
                      <li class="last"><a href="http://www.extension.iastate.edu/content/county-offices">Offices</a></li>
                    </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="skip-link">
      <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    </div>
    <?php print $content; ?>
  </div>
</header>