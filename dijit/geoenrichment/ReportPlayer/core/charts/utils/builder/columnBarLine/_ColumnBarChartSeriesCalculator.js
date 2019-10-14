// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/lang","../../ThemeCalculator","../../ChartSorting","../../ChartLineStyles","../../../../supportClasses/conditionalStyling/ConditionalStyleUtil","../utils/TooltipInfoBuilder","./_ComparisonUtil","./_AxisBuilder","./_PointLabelUtil","./_StatsBuilder","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,i,t,a,n,r,o,s,l,u,c){var S={calcLineStyle:function(e,i){return{color:c.getColorWithAlpha(i.columnBarLineColor||e,i.columnBarLineOpacity),width:i.columnBarLineThickness,style:a.toGFXValue(i.columnBarLineStyle||a.SOLID)}}};return{calcSeriesColumnBar:function(a){var p=a.chart,h=a.visualProperties,m=a.seriesItems,d=1===m.length,I=a.seriesItemsWithComparison||m,g=a.chartType,v=a.comparisonInfo,y=a.themeSettings,f=a.viewModel,C=1===I.length&&a.sorting,x=I.length>1&&h.renderColumnBarsInOppositeDirections,b=[],A=new u({visualProperties:h,seriesItems:I,viewModel:f,currentFeatureIndex:a.currentFeatureIndex,isMultiFeatureChart:a.isMultiFeatureChart,excludedSeriesHash:a.excludedSeriesHash,comparisonFeatureAttributes:a.comparisonFeatureAttributes,chartType:g});l.createPointToLabelMap(p);var F={};I.forEach(function(e,s){if(e.points.length){var u={name:e.label,data:[],isComparisonSeries:e.isComparisonSeries,params:{plot:e.isComparisonSeries&&o.getComparisonPlotName(g,v)||void 0}},m=A.gettatisticsForSeriesAt(s);i.provideMissingIconsForPoints(e.points,g);var V=[];e.points.forEach(function(t,o){var p,C=m.values[o],b=C||0;if(h.conditionalStyling){var A=n.getConditionalStyle(b,h.conditionalStyling);p=A&&A.backgroundColor}p=p||i.calcColorForPoint({point:t,seriesItem:e,pointIndex:o,seriesIndex:s,numSeries:d?1:I.length,chartType:g,themeSettings:y,isComparisonSeries:e.isComparisonSeries,comparisonInfo:v,isMultiFeature:a.isMultiFeatureChart});var L=S.calcLineStyle(p,h),T=p;p=h.columnBarOpacity<1?c.getColorWithAlpha(p,h.columnBarOpacity):p;var P;t.hidden&&(P=p,p=T="transparent");var w;t.hidden&&(w=L.color,L.color="transparent");var M=o+1,B={x:M,y:b*function(){return x&&s>=I.length/2?-1:1}(),originalValue:C,isUnavailableData:isNaN(C),valueProp:"y",unsortedIndex:o,originalIndex:t.originalIndex||o,seriesIndex:s,name:l.getPointLabel(t,f),valuesSumsInSeries:m.absSumInSeries,point:t,fill:p,icon:i.calcIconForPoint(t,T,g),bgIcon:i.calcBackgroundIconForPoint(t,g,y,h),stroke:{color:L.color,width:L.width,style:L.style},unhiddenFillColor:P,unhiddenLineColor:w};h.showValuesAsWeightInStack?B.y=100*m.weightsInStack[o]:h.yAxis.showValuesAsWeightsInSeries&&(B.y/=m.absSumInSeries/100);var k=r.getTooltipInfo({yValue:C,pointLabel:l.getPointLabel(I[0].points[o]||t,f),seriesLabel:e.label,minInSeriesValue:m.minInSeries,maxInSeriesValue:m.maxInSeries,sumInSeriesValue:m.sumInSeries,absSumInSeriesValue:m.absSumInSeries,avgInSeriesValue:m.avgInSeries,weightInStack:m.weightsInStack&&m.weightsInStack[o],minInAreasValue:m.minInSeries,maxInAreasValue:m.maxInSeries,sumInAreasValue:m.sumInSeries,absSumInAreasValue:m.absSumInSeries,avgInAreasValue:m.avgInSeries,visualProperties:h,chartType:g,isMultiFeature:a.isMultiFeatureChart,conditionalStyling:h.conditionalStyling,fieldInfo:t.fieldInfo,isThisAreaSpecific:v&&!a.isMultiFeatureChart?!e.isComparisonSeries:void 0,isThisAreaSingleSeries:d,decimals:t.value&&t.value.decimals,fill:B.fill,stroke:B.stroke.width>0?B.stroke.color:void 0}),Y=F[M]=F[M]||[];Y.push(k),V.push(k),k.getGroup=function(){return a.isMultiFeatureChart?V:Y},B.tooltip=k,u.data.push(B)}),C&&C!==t.NONE&&(u.data.sort(function(e,i){return(e.y-i.y)*(C===t.DESC?-1:1)}),u.data.forEach(function(e,i){var t=i+1;e.x=t})),u.data.forEach(function(e){l.updatePointIndexToLabelMap(p,e.x,s,e.point,f)}),b.push(u)}},this);var V=A.getTotalStats();return s.prettifyYAxis(V.minYValue,V.maxYValue,p,h,g,y,f,b),a.plotStats&&(e.mixin(a.plotStats,V),a.plotStats.pointIndexToTooltipsHash=F),b},prettifyColumnBarYAxis:function(e){s.prettifyYAxis(e.totalStat.minYValue,e.totalStat.maxYValue,e.chart,e.visualProperties,e.chartType,e.themeSettings,e.viewModel,e.chartSeries,!0,e.chartSize),e.chart.dirty=!0}}});