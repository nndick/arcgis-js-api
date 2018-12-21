// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

define(["../../Component","dojo/i18n!../../ItemCards/nls/resources","dojo/date/locale","../../Dropdowns/Ago2018Dropdown","../../Badges/Authoritative","../../Badges/Deprecated","../../Badges/LivingAtlas","../../Badges/Marketplace","../../Badges/OpenData","../../Badges/Premium","../../Badges/Subscriber"],function(e,t,n,a,r,i,o,c,s,l,u){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(t){return e[t]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=290)}({0:function(e,t,n){"use strict";function a(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}n.d(t,"b",function(){return a}),n.d(t,"a",function(){return i});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},i=function(){return(i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}},14:function(e,t,n){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}}n.d(t,"a",function(){return a})},16:function(e,n){e.exports=t},20:function(e,t){e.exports=n},24:function(e,t,n){"use strict";function a(e){return 0===Object.keys(e).length&&e.constructor===Object}function r(e,t){return l.apply(null,arguments)}function i(e,t){return u.apply(null,arguments)}n.d(t,"a",function(){return a}),n.d(t,"d",function(){return s}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i});var o=n(0),c=n(7),s=Object(c.a)(function(e,t){var n=o.a({},t);return delete n[e],n}),l=Object(c.a)(function(e,t){return Object.keys(t).reduce(function(n,a){return n[a]=e(t[a],a,t),n},{})}),u=Object(c.a)(function(e,t){return Object.keys(t).reduce(function(n,a){return e(t[a],a,t)&&(n[a]=t[a]),n},{})})},27:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return p});var a=n(14),r=n(24),i=n(44),o=n(43),c=n(42),s=n(41),l=n(40),u=function(e,t,n){return Object(a.a)(Object(l.a)(e),Object(s.a)(e),Object(c.a)(t),o.a,i.a)(n)},p=Object(a.a)(Object(r.d)("patchedDescription"),Object(r.d)("thumbURI"),Object(r.d)("iconURI"),Object(r.d)("displayName"),Object(r.d)("badges"))},290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(16),i=n(5),o=n(20),c=n(78),s=n.n(c),l=n(79),u=n.n(l),p=n(80),d=n.n(p),f=n(81),g=n.n(f),m=n(82),b=n.n(m),h=n(83),v=n.n(h),y=n(84),w=n.n(y),_=n(73),O=n.n(_),k=n(27),A=function(e){function t(t){var n=e.call(this,t)||this;return n.state={customActionsOpen:!1},n.handleActionDropdownToggle=n.handleActionDropdownToggle.bind(n),n.handleCustomActionClick=n.handleCustomActionClick.bind(n),n.handleMainActionClick=n.handleMainActionClick.bind(n),n}return a.b(t,e),t.prototype.render=function(e){var t,n=this,a=this.props,i=a.item,c=a.sortField;return t="numviews"===c?r.viewCount+": "+i.numViews:"avgrating"===c?r.rating+": "+i.avgRating.toFixed(2):"created"===c?r.created+": "+o.format(new Date(i.created),{selector:"date",formatLength:"short"}):r.updated+": "+o.format(new Date(i.modified),{selector:"date",formatLength:"short"}),e("div",{class:"card-ac__container",key:this.props.key},e("div",{class:"card-ac__details-container"},e("div",{class:"card-ac__thumb-container"},e("img",{src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",alt:"",class:"card-ac__thumbnail",style:"\n                                background-image: url("+i.thumbURI+");\n                            "})),e("div",{class:"card-ac__details"},e("h3",{class:"card-ac__title"},i.title),e("div",{class:"card-ac__info-row"},e("div",{class:"card-ac__icon-title-container"},e("img",{src:i.iconURI,class:"content-search-item-icon",title:i.displayName}),e("span",{class:"card-ac__author-text"},i.displayName+" "+r.by,e("a",{class:"content-search-selectable card-mc__author-link",title:this.props.organization?r.viewOrg:r.viewProfile,href:this.props.organization?this.props.organization.orgUrl:this.props.portal.baseUrl+"/home/user.html?user="+i.owner,target:"_blank"}," "+(this.props.organization?this.props.organization.name:i.owner)))),e("span",{class:"card-ac__info-bullet"},"•"),e("span",{class:"card-ac__info-string"},t)),e("p",{class:"card-ac__snippet"},e("span",{class:"card-ac__snippet-text"},i.snippet," "),e("a",{class:"card-ac__side-action card-ac__no-wrap",href:this.props.portal.baseUrl+"/home/item.html?id="+i.id,target:"_blank"},r.viewItem,e("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},e("path",{d:"M10 1v1h3.293l-6.646 6.646 0.707 0.707 6.646-6.646v3.293h1v-5z"}),e("path",{d:"M14 8v6h-12v-12h6v-1h-7v14h14v-7z"})))))),e("div",{class:"card-ac__sub-container"},e("div",{class:"card-ac__badge-container card-ac__badge-container--regular card-ac__sub-group"},this.renderBadges(e)),e("div",{class:"card-ac__badge-container card-ac__badge-container--small card-ac__sub-group"},this.renderBadges(e,!0)),e("div",{class:"card-ac__action-container card-ac__sub-group"},e("div",{class:"card-ac__no-wrap"},e("button",{class:"card-ac__primary-btn card-ac__btn",onclick:this.handleMainActionClick},this.props.mainActionTitle),this.props.customActions&&this.props.customActions.length>0?e(O.a,{key:i.id+"-action-dropdown",active:this.state.customActionsOpen,onToggle:this.handleActionDropdownToggle},e("span",{class:"card-ac__custom-actions card-ac__btn",title:r.actions},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 32 32"},e("path",{d:"M28 9v5L16 26 4 14V9l12 12L28 9z"}))),e("div",null,this.props.customActions.map(function(t,a){return e("button",{key:t.name,class:"card-ac__custom-action-btn card-ac__btn",value:a,onclick:n.handleCustomActionClick},t.name)}))):null))))},t.prototype.renderBadges=function(e,t){var n=this,a=t?"small":"regular";return this.props.item.badges.map(function(t){switch(t){case"authoritative":return e(s.a,{size:a,altOrg:n.props.organization?n.props.organization.name:void 0});case"deprecated":return e(u.a,{size:a});case"livingAtlas":return e(d.a,{size:a});case"marketplace":return e(g.a,{size:a});case"openData":return e(b.a,{size:a});case"premium":return e(v.a,{size:a,user:n.props.portal.user});case"subscriber":return e(w.a,{size:a,user:n.props.portal.user})}return null})},t.prototype.handleActionDropdownToggle=function(){this.setState({customActionsOpen:!this.state.customActionsOpen})},t.prototype.handleMainActionClick=function(e){this.props.mainAction([Object(k.b)(this.props.item)])},t.prototype.handleCustomActionClick=function(e){this.setState({customActionsOpen:!this.state.customActionsOpen}),this.props.customActions&&this.props.customActions[e.target.value]&&this.props.customActions[e.target.value].onAction(Object(k.b)(this.props.item))},t}(i.Component);t.default=A},40:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n(7),i=Object(r.a)(function(e,t){return a.a({},t,{thumbURI:function(e,t){var n=e.baseUrl+"/home/js/arcgisonline/css/images/default_thumb.png";return t.thumbnail&&(n=e.restUrl+"/content/items/"+t.id+"/info/"+t.thumbnail+(e.credential?"?token="+e.credential.token:"")),n}(e,t)})})},41:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n(7),i=Object(r.a)(function(e,t){return a.a({},t,{patchedDescription:function(e,t){return t.description?t.description.replace(/src=('|")js\/jsapi\/esri\//g,function(t){return"src="+('"'===t[4]?'"':"'")+e.baseUrl+"/home/js/jsapi/esri/"}):void 0}(e,t)})})},42:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),r=n(7),i=Object(r.a)(function(e,t){return a.a({},t,{iconURI:function(e,t,n){var a,r=t&&t.toLowerCase(),i=!1,o=!1,c=!1,s=!1;if(r.indexOf("service")>0||"feature collection"===r||"kml"===r||"wms"===r||"wmts"===r||"wfs"===r){var l=n.indexOf("Hosted Service")>-1;"feature service"===r||"feature collection"===r||"kml"===r||"wfs"===r?(s=n.indexOf("Table")>-1,i=n.indexOf("Route Layer")>-1,o=n.indexOf("Markup")>-1,a=(c=-1!==n.indexOf("Spatiotemporal"))&&s?"spatiotemporaltable":s?"table":i?"routelayer":o?"markup":c?"spatiotemporal":l?"featureshosted":"features"):a="map service"===r||"wms"===r||"wmts"===r?l||n.indexOf("Tiled")>-1||"wmts"===r?"maptiles":"mapimages":"scene service"===r?n.indexOf("Line")>-1?"sceneweblayerline":n.indexOf("3DObject")>-1?"sceneweblayermultipatch":n.indexOf("Point")>-1?"sceneweblayerpoint":n.indexOf("IntegratedMesh")>-1?"sceneweblayermesh":n.indexOf("PointCloud")>-1?"sceneweblayerpointcloud":n.indexOf("Polygon")>-1?"sceneweblayerpolygon":"sceneweblayer":"image service"===r?n.indexOf("Elevation 3D Layer")>-1?"elevationlayer":"imagery":"stream service"===r?"streamlayer":"vector tile service"===r?"vectortile":"datastore catalog service"===r?"datastorecollection":"geocoding service"===r?"geocodeservice":"geoprocessing service"===r&&n.indexOf("Web Tool")>-1?"tool":"layers"}else a="web map"===r||"cityengine web scene"===r?"maps":"web scene"===r?n.indexOf("ViewingMode-Local")>-1?"webscenelocal":"websceneglobal":"web mapping application"===r||"mobile application"===r||"application"===r||"operation view"===r||"desktop application"===r?"apps":"map document"===r||"map package"===r||"published map"===r||"scene document"===r||"globe document"===r||"basemap package"===r||"mobile basemap package"===r||"mobile map package"===r||"project package"===r||"project template"===r||"pro map"===r||"layout"===r||"layer"===r&&n.indexOf("ArcGIS Pro")>-1||"explorer map"===r&&n.indexOf("Explorer Document")>-1?"mapsgray":"service definition"===r||"csv"===r||"shapefile"===r||"cad drawing"===r||"geojson"===r||"360 vr experience"===r||"netcdf"===r?"datafiles":"explorer add in"===r||"desktop add in"===r||"windows viewer add in"===r||"windows viewer configuration"===r?"appsgray":"arcgis pro add in"===r||"arcgis pro configuration"===r?"addindesktop":"rule package"===r||"file geodatabase"===r||"csv collection"===r||"kml collection"===r||"windows mobile package"===r||"map template"===r||"desktop application template"===r||"arcpad package"===r||"code sample"===r||"form"===r||"document link"===r||"vector tile package"===r||"operations dashboard add in"===r||"rules package"===r||"image"===r||"workflow manager package"===r||"explorer map"===r&&n.indexOf("Explorer Mapping Application")>-1||n.indexOf("Document")>-1?"datafilesgray":"network analysis service"===r||"geoprocessing service"===r||"geodata service"===r||"geometry service"===r||"geoprocessing package"===r||"locator package"===r||"geoprocessing sample"===r||"workflow manager service"===r||"raster function template"===r?"toolsgray":"layer"===r||"layer package"===r||"explorer layer"===r?"layersgray":"scene package"===r?"scenepackage":"tile package"===r?"tilepackage":"task file"===r?"taskfile":"report template"===r?"report-template":"statistical data collection"===r?"statisticaldatacollection":"insights workbook"===r?"workbook":"insights model"===r?"insightsmodel":"insights page"===r?"insightspage":"hub initiative"===r?"hubinitiative":"hub page"===r?"hubpage":"hub site application"===r?"hubsite":"relational database connection"===r?"relationaldatabaseconnection":"big data file share"===r?"datastorecollection":"image collection"===r?"imagecollection":"desktop style"===r?"desktopstyle":"style"===r?"style":"dashboard"===r?"dashboard":"maps";return e+"/"+a+"16.png"}(e,t.type,t.typeKeywords?t.typeKeywords:[])})})},43:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),r=function(e){return a.a({},e,{displayName:function(e){var t=e.type,n=e.typeKeywords||[],a=t;return"Feature Service"===t||"Feature Collection"===t?a=n.indexOf("Table")>-1?"Table":n.indexOf("Route Layer")>-1?"Route Layer":n.indexOf("Markup")>-1?"Markup":"Feature Layer":"Image Service"===t?a=n.indexOf("Elevation 3D Layer")>-1?"Elevation Layer":"Imagery Layer":"Scene Service"===t?a="Scene Layer":"Scene Package"===t?a="Scene Layer Package":"Stream Service"===t?a="Feature Layer":"Geocoding Service"===t?a="Locator":"Microsoft Powerpoint"===t?a="Microsoft PowerPoint":"GeoJson"===t?a="GeoJSON":"Globe Service"===t?a="Globe Layer":"Vector Tile Service"===t?a="Tile Layer":"netCDF"===t?a="NetCDF":"Map Service"===t?a=-1===n.indexOf("Spatiotemporal")&&(n.indexOf("Hosted Service")>-1||n.indexOf("Tiled")>-1)?"Tile Layer":"Map Image Layer":t&&t.toLowerCase().indexOf("add in")>-1?a=t.replace(/(add in)/gi,"Add-In"):"datastore catalog service"===t&&(a="Big Data File Share"),a}(e)})}},44:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(0),r=function(e){return a.a({},e,{badges:function(e){var t=[],n=e.typeKeywords?e.typeKeywords:[];return e.contentStatus&&("org_authoritative"===e.contentStatus||"public_authoritative"===e.contentStatus?t.push("authoritative"):"deprecated"===e.contentStatus&&t.push("deprecated")),e.groupDesignations&&e.groupDesignations.indexOf("livingatlas")>-1&&t.push("livingAtlas"),n.indexOf("Requires Credits")>-1?t.push("premium"):n.indexOf("Requires Subscription")>-1&&t.push("subscriber"),t}(e)})}},5:function(t,n){t.exports=e},7:function(e,t,n){"use strict";function a(e){return function t(){for(var n=this,a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];return a.length>=e.length?e.call.apply(e,[this].concat(a)):function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.call.apply(t,[n].concat(a,e))}}}n.d(t,"a",function(){return a})},73:function(e,t){e.exports=a},78:function(e,t){e.exports=r},79:function(e,t){e.exports=i},80:function(e,t){e.exports=o},81:function(e,t){e.exports=c},82:function(e,t){e.exports=s},83:function(e,t){e.exports=l},84:function(e,t){e.exports=u}})});