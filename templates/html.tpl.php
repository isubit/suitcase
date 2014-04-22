<?php print $doctype; ?>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf->version . $rdf->namespaces; ?>>
<head<?php print $rdf->profile; ?>>
  <?php print $head; ?>
  <title><?php print $head_title; ?></title>  
  <?php print $styles; ?>
  <?php print $scripts; ?>
  <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  <script >/* html5shiv */ (function(){var t='abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video'.split(' ');for(var i=t.length;i--;)document.createElement(t[i])})();</script>
</head>
<body<?php print $attributes;?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
  <script >/* Grid gutter fix for IE7 */ (function(b){if((' '+b.body.parentNode.className+' ').indexOf(' lt-ie8 ')==-1)return;var d=b.createStyleSheet();var e=function(s){var a=b.all,l=[],i,j;d.addRule(s,'k:v');for(j=a.length;j--;)a[j].currentStyle.k&&l.push(a[j]);d.removeRule(0);return l};var g=e('.grid');for(var i=g.length;i--;)g[i].style.width=g[i].offsetWidth-20})(document);</script>
  <script >(function(e){if(!e.querySelector||!e.addEventListener)return;var t="add",n="contains",r="remove",i="toggle",s="active",o="off-canvas-bar",u="off-canvas-nav",a="off-canvas-search",f="preventDefault",l=function(t,n){return(n||e).querySelectorAll(t)},c=function(s,o,u){o=o||r;u=u||e.body;s=" "+s+" ";var a=" "+u.className.trim()+" ";var f=a.indexOf(s)!=-1;if(o==n)return f;else if(!f&&(o==i||o==t))u.className=a+s;else if(f&&(o==i||o==r))u.className=a.replace(s," ")},h=function(e,t,n){for(var r=l(e),i=r.length;i--;){if(r[i].tagName!="A"||r[i].getAttribute("href")=="#"){if(!n)r[i].addEventListener("click",function(e){e[f]()},0);r[i].addEventListener("ontouchstart"in window?"touchstart":"mousedown",t,0)}}},p=l(".isu-dark-ribbon .wd-ribbon-menu-stack .wd-ribbon-menu"),d=function(){for(var e=p.length;e--;)c(s,r,p[e])};h(".isu-dark-ribbon .wd-ribbon-menu-header",function(e){var i=l(".wd-ribbon-menu",this.parentNode)[0];if(c(s,n,i)){c(s,r,i);c(o)}else{d();c(s,t,i);c(o,t);c(a)}e[f]()})})(document)</script>
</body>
</html>