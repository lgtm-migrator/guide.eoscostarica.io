(window.webpackJsonp=window.webpackJsonp||[]).push([[9,46],{139:function(e,t,a){"use strict";var r=a(3),l=a(7),n=a(0),o=a.n(n),s=a(125),c=a(129),m=a(134),i=a(22),f=a(130),u=a(56),h=a.n(u);function _(e){var t=e.to,a=e.href,n=e.label,s=e.prependBaseUrlToHref,m=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),i=Object(f.a)(t),u=Object(f.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:s?u:a}:{to:i},m),n)}var d=function(e){var t=e.url,a=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(m.a)().isDarkTheme,t=Object(i.default)().siteConfig,a=(void 0===t?{}:t).themeConfig,r=(void 0===a?{}:a).footer,l=r||{},c=l.copyright,u=l.links,b=void 0===u?[]:u,g=l.logo,p=void 0===g?{}:g,E=Object(n.useState)(Object(f.a)(p.src)),v=E[0],k=E[1];return r?(Object(n.useEffect)((function(){k(e?"https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png":p.src)}),[e]),o.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===r.style})},o.a.createElement("div",{className:"container"},b&&b.length>0&&o.a.createElement("div",{className:"row footer__links"},b.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(_,e))}))):null)}))),(p||c)&&o.a.createElement("div",{className:"text--center"},p&&p.src&&o.a.createElement("div",{className:"margin-bottom--sm"},p.href?o.a.createElement("a",{href:p.href,target:"_blank",rel:"noopener noreferrer",className:h.a.footerLogoLink},o.a.createElement(d,{alt:p.alt,url:v})):o.a.createElement(d,{alt:p.alt,url:v})),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}))))):null}}}]);