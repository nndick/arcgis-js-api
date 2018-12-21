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

define(["require","exports","../../../core/Handles","../../../core/promiseUtils","../../../core/watchUtils","../../../core/libs/gl-matrix-2/gl-matrix","./atmosphereUtils","../support/earthUtils","../support/buffer/glUtil","../support/buffer/InterleavedLayout","../webgl-engine/shaders/RealisticAtmospherePrograms","../../webgl/BufferObject","../../webgl/programUtils","../../webgl/Util","../../webgl/VertexArrayObject"],function(e,t,a,r,i,s,n,o,h,d,v,f,l,c,u){var p=function(){function e(e){this.needsRender=!1,this.didRender=!0,this.slot=16,this._hazeSlot=17,this._renderData={texDepth:s.vec2f64.create(),v3CameraPos:s.vec3f64.create(),v3CameraUp:s.vec3f64.create(),v3CameraRight:s.vec3f64.create(),v3CameraDir:s.vec3f64.create(),halfSizeNearPlane:s.vec2f64.create(),v2CameraCenterOffset:s.vec2f64.create(),v4SphereComp:s.vec4f64.create(),v4AtmosParams1:s.vec4f64.create(),v4AtmosParams2:s.vec4f64.create(),v4AtmosParams3:s.vec4f64.create(),v3InvWavelength:D,v3InvWavelengthScaled:g,v4Radii:s.vec4f64.create(),fScale:0,fScaleDepth:C,fLowerAlphaBlendBound:0,fScaleOverScaleDepth:0,fOneOverScaleDepth:0,fScaleDepthBlue:P,fOneOverScaleDepthBlue:b,fScaleOverScaleDepthBlue:0,g:y,g2:y*y,fMiePhaseCoefficients:S,showTest:0,nearFar:s.vec2f64.create(),fCameraHeight:0,fCameraHeight2:0,fC:0,fCSur:0,fInnerFadeDistance:0,fAltitudeFade:0},this._lowerElevationBoundRadius=0,this._earthRadius=o.earthRadius,this.view=e,this._updateRadius(o.earthRadius)}return e.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null),this._hazeProgram&&(this._hazeProgram.dispose(),this._hazeProgram=null),this._skyProgram&&(this._skyProgram.dispose(),this._skyProgram=null),this._vao&&(this._vao.dispose(),this._vao=null)},e.prototype.when=function(e){return r.resolve().then(e)},e.prototype.initializeRenderContext=function(e){var t=this,r=e.rctx;this._handles=new a,this._updateElevation({spatialReference:this.view.basemapTerrain.spatialReference,tile:this.view.basemapTerrain.rootTiles[0],extent:this.view.basemapTerrain.rootTiles[0].extent}),this._handles.add(i.on(this.view,"basemapTerrain","elevation-change",function(e){return t._updateElevation(e)},function(){return t._updateElevation()})),this._handles.add(i.on(this.view,"basemapTerrain","elevation-bounds-change",function(){return t._updateVisibleElevationBounds()},function(){return t._updateVisibleElevationBounds()})),this._hazeProgram=l.createProgram(r,v.program,{haze:!0}),this._skyProgram=l.createProgram(r,v.program),this._vao=this._createVertexArrayObject(r)},e.prototype.uninitializeRenderContext=function(e){this.destroy()},e.prototype.render=function(e){return(e.slot===this._hazeSlot||e.slot===this.slot)&&0===e.pass&&(this._update(e.camera),e.slot===this.slot&&this._renderSky(e),e.slot===this._hazeSlot&&this._renderHaze(e),this.needsRender=!1,!0)},e.prototype._renderSky=function(e){var t=e.rctx,a=this._skyProgram;t.bindProgram(a),t.setBlendFunctionSeparate(770,771,1,771),t.setDepthFunction(515),t.setDepthTestEnabled(!0),a.setUniform4fv("v4AtmosParams3",this._renderData.v4AtmosParams3),this._renderCommon(a,e)},e.prototype._renderHaze=function(e){var t=this,a=e.rctx,r=e.offscreenRenderingHelper,i=this._hazeProgram;a.bindProgram(i),a.setBlendFunctionSeparate(1,769,0,1),r.renderDepthDetached(function(){a.setDepthTestEnabled(!1);var s=r.depthTexture;a.bindTexture(s,0),i.setUniform1i("tDepth",0),t._renderCommon(i,e)})},e.prototype._renderCommon=function(e,t){var a=t.rctx;e.setUniform3fv("v3InvWavelength",this._renderData.v3InvWavelength),e.setUniform3fv("v3InvWavelengthScaled",this._renderData.v3InvWavelengthScaled),e.setUniform3fv("v3LightDir",t.lightingData.direction),e.setUniform4fv("v4SphereComp",this._renderData.v4SphereComp),e.setUniform3fv("v3CameraPos",this._renderData.v3CameraPos),e.setUniform3fv("v3CameraUp",this._renderData.v3CameraUp),e.setUniform3fv("v3CameraRight",this._renderData.v3CameraRight),e.setUniform3fv("v3CameraDir",this._renderData.v3CameraDir),e.setUniform2fv("nearFar",this._renderData.nearFar),e.setUniform2fv("halfSizeNearPlane",this._renderData.halfSizeNearPlane),e.setUniform2fv("v2CameraCenterOffset",this._renderData.v2CameraCenterOffset),e.setUniform4fv("v4Radii",this._renderData.v4Radii),e.setUniform4fv("v4AtmosParams1",this._renderData.v4AtmosParams1),e.setUniform4fv("v4AtmosParams2",this._renderData.v4AtmosParams2),e.setUniform1f("showTest",this._renderData.showTest),e.setUniform1f("fInnerFadeDistance",this._renderData.fInnerFadeDistance),e.setUniform1f("fAltitudeFade",this._renderData.fAltitudeFade),a.setBlendingEnabled(!0),a.setDepthWriteEnabled(!1),a.bindVAO(this._vao),c.assertCompatibleVertexAttributeLocations(this._vao,e),a.drawArrays(5,0,4),a.setDepthFunction(513),a.setDepthTestEnabled(!1),a.setDepthWriteEnabled(!0),a.setBlendingEnabled(!1),a.setBlendFunctionSeparate(770,771,1,771)},e.prototype._createVertexArrayObject=function(e){var t=w.createBuffer(4);return t.position.setVec(0,[-1,-1,1]),t.position.setVec(1,[1,-1,1]),t.position.setVec(2,[-1,1,1]),t.position.setVec(3,[1,1,1]),t.uv0.setVec(0,[0,0]),t.uv0.setVec(1,[1,0]),t.uv0.setVec(2,[0,1]),t.uv0.setVec(3,[1,1]),new u(e,v.program.attributes,{geometry:h.glLayout(w)},{geometry:f.createVertex(e,35044,t.buffer)})},e.prototype._adjustRadiusForTesselation=function(e){var t=Math.PI/Math.pow(2,4)/16;return e*Math.cos(t)},e.prototype._updateElevation=function(e){var t=e?e.tile:this.view.basemapTerrain.rootTiles[0];if(0===t.lij[0]){var a=this._adjustRadiusForTesselation(o.earthRadius+t.elevationBounds[0]);a!==this._lowerElevationBoundRadius&&(this._lowerElevationBoundRadius=a,this._earthRadius=-1,this._updateVisibleElevationBounds())}},e.prototype._updateVisibleElevationBounds=function(){var e=this._adjustRadiusForTesselation(o.earthRadius+this.view.basemapTerrain.getElevationBounds()[0]);(this._earthRadius<0||e<this._earthRadius)&&this._updateRadius(e)},e.prototype._updateRadius=function(e){this._earthRadius=e;var t=e,a=t*t,r=t/10*10.25,i=r*r,o=1/(r-t),h=o/C,d=o/P,v=.3*(r-t)+t,f=1/(r-v),l=this._renderData;s.vec4.set(l.v4AtmosParams1,o,C,h,R),s.vec4.set(l.v4AtmosParams2,y,P,d,b),s.vec4.set(l.v4AtmosParams3,y*y,S,v,f),s.vec4.set(l.v4Radii,t,a,r,i),l.fScale=o,l.fLowerAlphaBlendBound=v,l.fScaleOverScaleDepth=h,l.fScaleOverScaleDepthBlue=d;var c=n.INNER_ATMOSPHERE_DEPTH;l.fInnerFadeDistance=2*Math.sqrt((2*e-c)*c)},e.prototype._update=function(e){if(e){s.vec3.negate(this._renderData.v3CameraDir,e.viewForward),s.vec3.copy(this._renderData.v3CameraUp,e.viewUp),s.vec3.copy(this._renderData.v3CameraRight,e.viewRight),this._renderData.fCameraHeight=s.vec3.length(e.eye),this._renderData.fCameraHeight2=this._renderData.fCameraHeight*this._renderData.fCameraHeight,this._renderData.fC=this._renderData.fCameraHeight2-this._renderData.v4Radii[3],this._renderData.fCSur=this._renderData.fCameraHeight2-this._renderData.v4Radii[1],this._renderData.v4SphereComp=s.vec4f64.fromValues(this._renderData.fCameraHeight,this._renderData.fCameraHeight2,this._renderData.fC,this._renderData.fCSur),s.vec3.copy(this._renderData.v3CameraPos,e.eye),s.vec2.set(this._renderData.halfSizeNearPlane,Math.tan(e.fovX/2)/(e.width/e.fullWidth),Math.tan(e.fovY/2)/(e.height/e.fullHeight));var t=(e.padding[3]+e.width/2)/e.fullWidth,a=(e.padding[2]+e.height/2)/e.fullHeight;s.vec2.set(this._renderData.v2CameraCenterOffset,t-.5,a-.5),s.vec2.set(this._renderData.nearFar,e.near,e.far),this._renderData.fAltitudeFade=n.computeInnerAltitudeFade(this._renderData.fCameraHeight-this._earthRadius)}},e.isSupported=function(e){return e.rctx.capabilities.depthTexture},e}(),m=.02*Math.PI,_=.004*Math.PI,D=s.vec3f64.fromValues(1/Math.pow(.65,4),1/Math.pow(.57,4),1/Math.pow(.475,4)),g=s.vec3f64.clone(D);s.vec3.scale(g,g,m),s.vec3.add(g,g,s.vec3f64.fromValues(_,_,_));var C=.25,P=.05,R=1/C,b=1/P,y=-.99999,S=(1-y*y)/(2+y*y)*1.5,w=d.newLayout().vec3f("position").vec2f("uv0");return p});