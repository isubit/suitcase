<header<?php print $attributes; ?>>
  <div id="section-header-container">
    <?php if ($show_blackbar): ?>
      <div class="pwrapper">
        <div class="pwrapper-wrapper">
          <div class="hwrapper" id="header">
            <div class="isu-dark-ribbon" id="top-strip">
              <div class="clearfix wrapper container-12">
                <ul class="isu-responsive-toggles wd-ribbon-menu">
                  <li><a class="search-toggle" href="http://google.iastate.edu/">search</a></li>
                </ul>
                <div class="wd-ribbon-menu-stack">
                  <ul class="isu-signons wd-ribbon-menu-group first">
                    <li>
                      <a class="wd-ribbon-menu-header" href="#">Sign-ons</a>
                      <ul class="wd-ribbon-menu">
                        <li class="first"><a href="https://www.it.iastate.edu/signons/"><strong>ISU SignOns</strong></a></li>
                        <li><a href="http://cymail.iastate.edu/">CyMail</a></li>
                        <li><a href="http://outlook.iastate.edu/">Outlook</a></li>
                        <li><a href="http://bb.its.iastate.edu/">Blackboard</a></li>
                        <li class="last"><a href="http://accessplus.iastate.edu/">AccessPlus</a></li>
                      </ul>
                    </li>
                  </ul>
                  <ul class="isu-directory-info wd-ribbon-menu-group last">
                    <li>
                      <a class="wd-ribbon-menu-header" href="http://www.iastate.edu/contact">Directory</a>
                      <ul class="wd-ribbon-menu">
                        <li class="first"><a href="https://www.iastate.edu"><strong>iastate.edu</strong></a></li>
                        <li class="first"><a href="http://www.iastate.edu/index/A">ISU Index</a></li>
                        <li class="first"><a href="http://info.iastate.edu/">ISU Directory</a></li>
                        <li><a href="http://www.fpm.iastate.edu/maps/">Maps</a></li>
                        <li><a href="http://web.iastate.edu/safety/">Safety</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <?php endif; ?>
    <div id="skip-link">
      <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    </div>
    <?php print $content; ?>
  </div>
</header>
