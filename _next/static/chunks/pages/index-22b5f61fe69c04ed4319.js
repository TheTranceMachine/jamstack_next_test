_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var o=n("q1tI"),r=n.n(o),a=n("YFqc"),c=n.n(a),u=r.a.createElement;function l(){return u("div",null,"Hello World."," ",u(c.a,{href:"/about",as:"/jamstack_next_app_test/about"},u("a",null,"About")))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var a,c=r(n("q1tI")),u=n("elyg"),l=n("nOHt"),f=new Map,i=window.IntersectionObserver,s={};var p=function(e,t){var n=a||(i?a=new i((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),f.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function d(e,t,n,o){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),s[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),r=n&&n.pathname||"/",a=c.default.useMemo((function(){var t=(0,u.resolveHref)(r,e.href,!0),n=o(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,u.resolveHref)(r,e.as):c||a}}),[r,e.href,e.as]),f=a.href,v=a.as,h=e.children,w=e.replace,y=e.shallow,_=e.scroll,E=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var b=c.Children.only(h),g=b&&"object"===typeof b&&b.ref,R=c.default.useRef(),m={ref:c.default.useCallback((function(e){(R.current&&(R.current(),R.current=void 0),t&&i&&e&&e.tagName&&(0,u.isLocalURL)(f))&&(s[f+"%"+v]||(R.current=p(e,(function(){d(n,f,v,{locale:"undefined"!==typeof E?E:n&&n.locale})}))));g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[t,g,f,v,n,E]),onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a,locale:l}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,v,w,y,_,E)}};return t&&(m.onMouseEnter=function(e){(0,u.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(n,f,v,{priority:!0}))}),(e.passHref||"a"===b.type&&!("href"in b.props))&&(m.href=(0,u.addBasePath)((0,u.addLocale)(v,"undefined"!==typeof E?E:n&&n.locale,n&&n.defaultLocale))),c.default.cloneElement(b,m)};t.default=v},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1]]]);