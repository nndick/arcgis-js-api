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

define(["require","exports","../../../core/libs/gl-matrix-2/gl-matrix","../GeometryUtils","./rendererUtils","../../webgl/VertexArrayObject"],function(t,e,r,i,a,n){return function(){function t(t){this._initialized=!1,this._viewProjMat=r.mat4f32.create(),this._offsetVector=r.vec3f32.create(),this._color=r.vec4f32.create(),this._dashArray=r.vec2f32.create(),this._programOptions={id:!1,dd:!1,pattern:!1},this._programCache=t}return t.prototype.dispose=function(){},t.prototype.render=function(t,e,n,o,s,l,f,d,u,m,_){if(0!==e.triangleElementCount){this._initialized||this._initialize(t);var c=l.tileTransform.transform,h=l.coordRange/512,v=f.getPaintValue("line-translate",n);if(0!==v[0]||0!==v[1]){r.mat4.copy(this._viewProjMat,l.tileTransform.transform);var p=v[0],g=v[1],y=0,V=0,D=(1<<l.key.level)/Math.pow(2,n)*h,b=s.rotation;if(1===f.getPaintValue("line-translate-anchor",n)){var x=-i.C_DEG_TO_RAD*b,A=Math.sin(x),z=Math.cos(x);y=D*(p*z-g*A),V=D*(p*A+g*z)}else y=D*p,V=D*g;this._offsetVector[0]=y,this._offsetVector[1]=V,this._offsetVector[2]=0,r.mat4.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),c=this._viewProjMat}var P=f.getPaintValue("line-pattern",n),O=void 0!==P,U=1/m,j=f.getPaintValue("line-blur",n),w=f.hasDataDrivenColor?[1,1,1,1]:f.getPaintValue("line-color",n),M=f.hasDataDrivenOpacity?1:f.getPaintValue("line-opacity",n),C=f.hasDataDrivenWidth?1:f.getPaintValue("line-width",n),B=M*w[3]*_;this._color[0]=B*w[0],this._color[1]=B*w[1],this._color[2]=B*w[2],this._color[3]=B;var E,T=f.hasDataDrivenLine,I=3===o;I&&(E=a.int32To4Bytes(e.layerID));var L=this._getLineVAO(t,l,T);if(L){t.bindVAO(L);var G=(I?1:0)<<2|(T?1:0)<<1|(O?1:0),N=this._programOptions;N.id=I,N.dd=T,N.pattern=O;var R=this._programCache.getProgram(3,G,N);if(t.bindProgram(R),R.setUniformMatrix4fv("u_transformMatrix",c),R.setUniformMatrix4fv("u_extrudeMatrix",u),R.setUniform2fv("u_normalized_origin",l.tileTransform.displayCoord),R.setUniform1f("u_depth",f.z),R.setUniform1f("u_blur",j),R.setUniform1f("u_antialiasing",U),R.setUniform4fv("u_color",this._color),R.setUniform1f("u_width",C),I&&R.setUniform4f("u_id",E[0],E[1],E[2],E[3]),O){var S=d.getMosaicItemPosition(P,!0);S&&(d.bind(t,9729,S.page,5),R.setUniform2f("u_pattern_tl",S.tl[0],S.br[1]),R.setUniform2f("u_pattern_br",S.br[0],S.tl[1]),R.setUniform2f("u_spriteSize",h*S.size[0],S.size[1]),R.setUniform1i("u_texture",5))}else{var k=f.getPaintValue("line-dasharray",n);k.length<2&&(k=[1,-1]);var q=h;this._dashArray[0]=q*k[0],this._dashArray[1]=q*k[1],R.setUniform2fv("u_dasharray",this._dashArray)}t.drawElements(4,e.triangleElementCount,5125,12*e.triangleElementStart),t.bindVAO()}}},t.prototype._initialize=function(t){return!!this._initialized||(this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:12,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:12,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5123,offset:8,stride:12,normalized:!1,divisor:0}]},this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:20,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5122,offset:8,stride:20,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:20,normalized:!0,divisor:0},{name:"a_width",count:1,type:5126,offset:16,stride:20,normalized:!1,divisor:0}]},this._initialized=!0,!0)},t.prototype._getLineVAO=function(t,e,r){if(r){if(e.lineDDVertexArrayObject)return e.lineDDVertexArrayObject;var i=e.lineDDVertexBuffer,a=e.lineIndexBuffer;return i&&a?(e.lineDDVertexArrayObject=new n(t,this._programCache.getProgramAttributes(3),this._vertexAttributesDD,{geometry:i},a),e.lineDDVertexArrayObject):null}if(e.lineVertexArrayObject)return e.lineVertexArrayObject;var i=e.lineVertexBuffer,a=e.lineIndexBuffer;return i&&a?(e.lineVertexArrayObject=new n(t,this._programCache.getProgramAttributes(3),this._vertexAttributes,{geometry:i},a),e.lineVertexArrayObject):null},t}()});