(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[229],{856:function(u,t){function o(u,t,o){var n=function(u,t){return 1===t?u.one:t>=2&&t<=4?u.twoFour:u.other}(u,t);return(n[o]||n).replace("{{count}}",t)}function n(u){var t="";return"almost"===u&&(t="takmer"),"about"===u&&(t="pribli\u017ene"),t.length>0?t+" ":""}function r(u){var t="";return"lessThan"===u&&(t="menej ne\u017e"),"over"===u&&(t="viac ne\u017e"),t.length>0?t+" ":""}u.exports=function(){var u={xSeconds:{one:{regular:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{regular:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{regular:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{regular:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{regular:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{regular:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{regular:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{regular:"de\u0148",past:"d\u0148om",future:"de\u0148"},twoFour:{regular:"{{count}} dni",past:"{{count}} d\u0148ami",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} d\u0148ami",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{regular:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{regular:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{regular:"rok",past:"rokom",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{regular:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};return{localize:function(t,e,a){a=a||{};var i,c=function(u){return["lessThan","about","over","almost"].filter((function(t){return!!u.match(new RegExp("^"+t))}))[0]}(t)||"",s=(i=t.substring(c.length)).charAt(0).toLowerCase()+i.slice(1),m=u[s];return a.addSuffix?a.comparison>0?n(c)+"za "+r(c)+o(m,e,"future"):n(c)+"pred "+r(c)+o(m,e,"past"):n(c)+r(c)+o(m,e,"regular")}}}}}]);