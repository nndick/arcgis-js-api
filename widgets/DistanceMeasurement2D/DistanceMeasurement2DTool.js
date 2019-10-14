// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Graphic","../../symbols","../../core/Handles","../../core/promiseUtils","../../core/accessorSupport/decorators","../../geometry/geometryEngine","../../geometry/Point","../../geometry/Polyline","../../geometry/projection","../../geometry/SpatialReference","../../geometry/support/geodesicUtils","../../layers/GraphicsLayer","../../views/2d/draw/Draw","../../views/interactive/GraphicManipulator","../../views/interactive/InteractiveToolBase","../../views/interactive/interactiveToolUtils"],function(e,t,r,i,o,n,s,a,l,p,c,d,h,u,y,v,m,f,_,w){function g(e,t,r,i){var s=new n.SimpleMarkerSymbol({style:"circle",color:i.handleColor,size:i.handleWidth,outline:{type:"simple-line",width:0}}),a=new n.SimpleMarkerSymbol({style:"circle",color:i.handleColor,size:1.5*i.handleWidth,outline:{type:"simple-line",width:0}}),l=new o({geometry:e,symbol:s});return new f.GraphicManipulator({view:t,layer:r,graphic:l,focusedSymbol:a})}return function(e){function t(t){var r=e.call(this,t)||this;return r._drawActive=!1,r._handles=new s,r._polylineLayer=new v({listMode:"hide"}),r._manipulatorLayer=new v({listMode:"hide"}),r._vertices=[],r}r(t,e),n=t,t.prototype.initialize=function(){var e=this,t=this.view;this._draw=new m({view:t}),t.map.addMany([this._polylineLayer,this._manipulatorLayer]),t.focus(),this._handles.add([this.watch("viewModel.unit",function(){e._vertices.length>0&&e._updatePolylines()}),this.watch("projectionEngineRequired",function(t){t&&e._loadProjectionEngine()})]),this.projectionEngineRequired&&this._loadProjectionEngine()},t.prototype.destroy=function(){this.detach(),this._handles.removeAll(),this._polylineLayer.removeAll();var e=this.viewModel,t=e.view.map;t.remove(this._polylineLayer),t.remove(this._manipulatorLayer),e.measurement=null,this._draw&&(this._draw.destroy(),this._draw=null),this._handles&&(this._handles.destroy(),this._handles=null),this._polylineLayer&&(this._polylineLayer.destroy(),this._polylineLayer=null),this._manipulatorLayer&&(this._manipulatorLayer.destroy(),this._manipulatorLayer=null)},Object.defineProperty(t.prototype,"editable",{set:function(e){this._set("editable",e),e||this._draw.reset()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"projectionEngineRequired",{get:function(){var e=this.view;if(!e)return!1;var t=e.spatialReference;if(!t)return!1;var r=t.isGeographic,i=t.isWebMercator,o=t.isWGS84;return r&&!o&&!y.isSupported(t)||!r&&!i},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"projectionEngineSupported",{get:function(){return h.isSupported()},enumerable:!0,configurable:!0}),t.prototype.onShow=function(){this._polylineLayer.visible=!0},t.prototype.onHide=function(){this._polylineLayer.visible=!1},t.prototype.reset=function(){this._vertices=[],this._polylineLayer.removeAll(),this.viewModel.measurement=null,this._draw.reset(),this._drawActive=!1,this._updateSketch([])},t.prototype.newMeasurement=function(){this.reset(),w.setActive(this,!0),this._startSketch()},t.prototype.clearMeasurement=function(){this.reset(),w.setActive(this,!1),this.cursor=null},t.updateViewModelAndCreateGraphics=function(e,t){var r,i,n=t.geodesicDistanceThreshold,s=t.palette,a=t.view,l=a.spatialReference,c=new d({paths:[e],spatialReference:l});if(l.isGeographic)if(y.isSupported(l))r=y.geodesicLengths([c],"meters")[0],i=y.geodesicDensify(c,1e5);else{var v=h.project(c,u.WGS84),m=y.geodesicDensify(v,1e5);r=y.geodesicLengths([v],"meters")[0],i=h.project(m,l)}else if(l.isWebMercator)r=p.geodesicLength(c,"meters"),i=p.geodesicDensify(c,1e5,"meters");else{var f=p.planarLength(c,"meters");if(f>=n){var v=h.project(c,u.WGS84),m=y.geodesicDensify(v,1e5);r=y.geodesicLengths([v],"meters")[0],i=h.project(m,l)}else r=f,i=c}t.measurement={geometry:i,length:r};var _=s.pathPrimaryColor,w=s.pathSecondaryColor,g=s.pathWidth;return[new o({geometry:i,symbol:{type:"simple-line",cap:"butt",join:"round",color:_,width:g}}),new o({geometry:i,symbol:{type:"simple-line",style:"dash",cap:"butt",join:"round",color:w,width:g-2}}),new o({geometry:c.extent.center,symbol:{type:"text",color:[255,255,255,1],haloColor:[0,0,0,.5],haloSize:2,text:t.measurementLabel,font:{size:14,family:"sans-serif"}}})]},t.prototype.onInputEvent=function(e){"pointer-move"===e.type&&this._updateCursor()},t.prototype._loadProjectionEngine=function(){return this.projectionEngineSupported&&!h.isLoaded()?h.load():a.resolve()},t.prototype._startSketch=function(){var e=this;this._drawActive=!0;var t=this._draw.create("polyline",{mode:"click"});t.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],function(t){return e._updateSketch(t.vertices)}),t.on("draw-complete",function(){return e._stopSketch()})},t.prototype._stopSketch=function(){this.manipulators.forEach(function(e){e.manipulator.interactive=!0}),w.setActive(this,!1),this._drawActive=!1},t.prototype._updateSketch=function(e){var t=this;if(!this.projectionEngineRequired||h.isLoaded()){if(e.length<2)return this._vertices=[],this.manipulators.removeAll(),void this._polylineLayer.removeAll();for(var r=this.view.spatialReference;this._vertices.length>e.length;){var i=this._vertices.pop().manipulatorId;this.manipulators.remove(i)}for(var o=this,n=this._vertices.length;n<e.length;n++)!function(i){var n=e[i],s=n[0],a=n[1],l=new c({x:s,y:a,spatialReference:r}),p=g(l,o.view,o._manipulatorLayer,o.viewModel.palette),d=o.manipulators.add(p);p.on("drag",function(){var e=p.graphic.geometry;t._vertices[i].coord=[e.x,e.y],t._updatePolylines()}),o._vertices.push({manipulatorId:d,coord:[s,a]})}(n);var s=this._vertices.length-1,a=this._vertices[s],l=e[s],p=l[0],d=l[1];if(a.coord[0]!==p||a.coord[1]!==d){a.coord=[p,d];var u=new c({x:p,y:d,spatialReference:r});this.manipulators.findById(a.manipulatorId).graphic.geometry=u}var y=this._drawActive?this._vertices[s].manipulatorId:null;this.manipulators.forEach(function(e){e.manipulator.interactive=null==y||e.id!==y}),this._updatePolylines()}},t.prototype._updateCursor=function(){this.cursor=this._drawActive?"crosshair":null},t.prototype._updatePolylines=function(){this._polylineLayer.removeAll();var e=this.viewModel,t=this._vertices.map(function(e){return e.coord}),r=n.updateViewModelAndCreateGraphics(t,e);r&&this._polylineLayer.addMany(r)};var n;return i([l.property({constructOnly:!0})],t.prototype,"view",void 0),i([l.property({constructOnly:!0})],t.prototype,"viewModel",void 0),i([l.property()],t.prototype,"cursor",void 0),i([l.property({value:!0})],t.prototype,"editable",null),i([l.property({dependsOn:["view","view.spatialReference"],readOnly:!0})],t.prototype,"projectionEngineRequired",null),i([l.property({readOnly:!0})],t.prototype,"projectionEngineSupported",null),t=n=i([l.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DTool")],t)}(l.declared(_.InteractiveToolBase))});