define(["jquery","underscore","qlik","ng!$q","./lib/js/pp-iconsets","./lib/external/lodash/lodash","./lib/js/components/pp-cl-about/pp-cl-about","./lib/js/components/pp-cl-update-button/pp-cl-update-button","./lib/js/components/pp-cl-icon-item/pp-cl-icon-item","./lib/js/components/pp-cl-selection-item-list/pp-cl-selection-item-list"],function(a,b,c,d,e,f){"use strict";function g(a,b,c){var d=b||[],e=c||[];return Object.getOwnPropertyNames(a).reduce(function(b,c){return e.push(c),"object"==typeof a[c]?g(a[c],b,e):b.push(e.slice()),e.pop(),b},d)}var h={propertiesVersion:"1.1.0",props:{target:{mode:!0,comparison:"relative",precision:1,comparisonType:"more_is_better",banding:10,layout:{mode:"standard"},comparisonLabel:"",icon:"arrow-up"},canTakeSnapshot:!0,layout:{mode:"fill",marginType:"default",textSize:"medium",boldText:!1,color:{mode:!1}},kpiAlign:"middle",hideMeasureLabel:!1,hideTargetLabel:!1,kpiLabel:"",targetLabel:"",backgroundImageMode:"none",backgroundContentLibraryImage:"",backgroundImageURL:"",backgroundImageSizeMode:"contain",iconSet:"charts",icon:"line-chart",showIconWithTitle:!1,color:{icon:{mode:"custom"},customColors:{icon:{color:"#4477aa",index:6},good:{color:"#46c646",index:2},goodEnough:{color:"#ffcf02",index:8},bad:{color:"#f93f17",index:10},trend:{color:"#4477aa",index:6},targetTrend:{color:"#545352",index:14},text:{color:"#7b7a78",index:13},background:{color:"#4477aa",index:6}},colorExpressions:{icon:"RGB(0, 0, 128)",target:"RGB(0, 0, 128)",trend:"RGB(128, 128, 200)",targetTrend:"RGB(128, 128, 200)",text:"RGB(128, 128, 128)",background:"RGB(0, 0, 128)"},target:{mode:"3-colors"},trend:{iconIndependence:!1,mode:"auto",autoblend:!0,blendFactor:.3},targetTrend:{autoblend:!0,blendFactor:.3},other:{mode:"custom"},overlay:{opacity:.7,bgcolor:{color:"#545352",index:14},navigationColor:{color:"#ffffff",index:1}}},iconDirectionExpression:0,hoverMode:"none",sheetId:"",navigation:{showButton:!0,text:"See details"},actionBeforeNavigation:"none",field:"",value:"",values:"",valuesSeparatorComma:!0,valuesSeparatorCustom:",",variable:"",variableValue:""}},i=[{path:"props.layout.mode",value:"standard",newValue:"fill"}],j={qDef:{measureAxis:{autoMinMax:!1,minMax:"min",max:10,min:0},trend:{chartType:"area",showTargetTrend:!1,targetChartType:"line",showDatapoints:!1,showTargetDatapoints:!1}}},k={},l=g(h),m=g(j),n=g(k),o=function(a,b){var c=a.split("."),d=b.split(".");if(3===c.length&&3===d.length){var e=1e6*c[0]+1e3*c[1]+c[2],f=1e6*d[0]+1e3*d[1]+d[2];return Number(e)<Number(f)}return!1},p=function(a){return a.propertiesVersion&&o("1.1.0",a.propertiesVersion)?!0:!1},q=function(a){if(p(a))return!1;var b,c;for(b=0;b<l.length;b++){var d=l[b];if(!f.hasIn(a,d))return!0}if(a.qHyperCubeDef.qDimensions.length>0)for(b=0;b<a.qHyperCubeDef.qDimensions.length;b++){var e=a.qHyperCubeDef.qDimensions[b];for(c=0;c<m.length;c++){var g=m[c];if(!f.hasIn(e,g))return!0}}if(a.qHyperCubeDef.qMeasures.length>0)for(b=0;b<a.qHyperCubeDef.qMeasures.length;b++){var h=a.qHyperCubeDef.qMeasures[b];for(c=0;c<n.length;c++){var j=n[c];if(!f.hasIn(h,j))return!0}}for(b=0;b<i.length;b++){var k=i[b];if(f.get(a,k.path)===k.value)return!0}return!1},r=function(a){var b=a.qHyperCubeDef.qMeasures.length+a.qHyperCubeDef.qDimensions.length;a.qHyperCubeDef.qInitialDataFetch[0].qWidth=b,a.qHyperCubeDef.qInitialDataFetch[0].qHeight=parseInt(1e4/b)},s={label:"This visualization was created with a more recent version of the extension. Please update the installed extension.",component:"text",show:p},t={label:"This visualization was created with an earlier version of the extension. Use the button below to update any new properties with default values.",component:"text",show:q},u={label:"Update properties",component:"pp-cl-kpi-update-button",action:function(b,c){var d=a.extend(!0,{},h,b);a.extend(!0,b,d);var e;if(b.qHyperCubeDef.qDimensions.length>0)for(e=0;e<b.qHyperCubeDef.qDimensions.length;e++){var g=a.extend(!0,{},j,b.qHyperCubeDef.qDimensions[e]);a.extend(!0,b.qHyperCubeDef.qDimensions[e],g)}if(b.qHyperCubeDef.qMeasures.length>0)for(e=0;e<b.qHyperCubeDef.qMeasures.length;e++){var l=a.extend(!0,{},k,b.qHyperCubeDef.qMeasures[e]);a.extend(!0,b.qHyperCubeDef.qMeasures[e],l)}for(e=0;e<i.length;e++){var m=i[e];if(f.get(b,m.path)===m.value){var n=m.newPath?m.newPath:m.path;f.set(b,n,m.newValue),m.deleteOldProperty&&f.unset(b,m.path)}}b.propertiesVersion=h.propertiesVersion,c()},show:q},v=c.currApp(),w=function(){return v.model.layout.qLocaleInfo},x=function(){var a=d.defer();return v.getAppObjectList(function(c){var d=[],e=b.sortBy(c.qAppObjectList.qItems,function(a){return a.qData.rank});return b.each(e,function(a){d.push({value:a.qInfo.qId,label:a.qMeta.title})}),a.resolve(d)}),a.promise},y=function(){var a=b.map(e,function(a,b){return{value:b,label:a.name}});return a},z=function(a){var c=b.map(e[a].icons,function(a){return{component:"cl-icon-item",labelPlacement:"hide",value:a}});return c},A={type:"string",component:"dropdown",label:"Select Sheet",ref:"props.sheetId",defaultValue:h.props.sheetId,options:function(){return x().then(function(a){return a})},show:function(a){return"navigation"===a.props.hoverMode}},B={type:"string",expression:"optional",ref:"props.navigation.text",translation:"Navigation text",defaultValue:h.props.navigation.text,show:function(a){return"navigation"===a.props.hoverMode}},C={component:"switch",ref:"props.navigation.showButton",label:"Show button",type:"boolean",defaultValue:h.props.navigation.showButton,options:[{value:!0,label:"Button"},{value:!1,label:"Text only"}],show:function(a){return"navigation"===a.props.hoverMode}},D={component:"color-picker",translation:"Navigation text color",ref:"props.color.overlay.navigationColor",type:"object",dualOutput:!0,defaultValue:h.props.color.overlay.navigationColor,show:function(a){return"navigation"===a.props.hoverMode}},E={type:"string",component:"dropdown",label:"Action before navigation",ref:"props.actionBeforeNavigation",defaultValue:h.props.actionBeforeNavigation,options:[{value:"none",label:"None"},{value:"clearSelectionsInField",label:"Clear selections in field"},{value:"selectValueInField",label:"Select value in field"},{value:"selectValuesInField",label:"Select values in field"},{value:"setVariable",label:"Set variable"}],show:function(a){return"navigation"===a.props.hoverMode}},F={ref:"props.field",defaultValue:h.props.field,label:"Field",type:"string",expression:"optional",expressionType:"dimension",show:function(a){return"navigation"===a.props.hoverMode&&("selectValueInField"===a.props.actionBeforeNavigation||"clearSelectionsInField"===a.props.actionBeforeNavigation||"selectValuesInField"===a.props.actionBeforeNavigation)}},G={label:"Dual fields, need numeric values need to be numeric for selections to be applied",component:"text",show:function(a){return"navigation"===a.props.hoverMode&&"selectValuesInField"===a.props.actionBeforeNavigation}},H={ref:"props.value",defaultValue:h.props.value,label:"Match String",type:"string",expression:"optional",show:function(a){return"navigation"===a.props.hoverMode&&"selectValueInField"===a.props.actionBeforeNavigation}},I={ref:"props.values",defaultValue:h.props.values,label:"Values",type:"string",expression:"optional",show:function(a){return"navigation"===a.props.hoverMode&&"selectValuesInField"===a.props.actionBeforeNavigation}},J={type:"boolean",component:"switch",label:"Values separator",ref:"props.valuesSeparatorComma",defaultValue:h.props.valuesSeparatorComma,options:[{value:!0,label:"Comma separator"},{value:!1,label:"Custom separator"}],show:function(a){return"navigation"===a.props.hoverMode&&"selectValuesInField"===a.props.actionBeforeNavigation}},K={type:"string",ref:"props.valuesSeparatorCustom",defaultValue:h.props.valuesSeparatorCustom,label:"Custom separator",show:function(a){return"navigation"===a.props.hoverMode&&"selectValuesInField"===a.props.actionBeforeNavigation&&!a.props.valuesSeparatorComma}},L={ref:"props.variable",defaultValue:h.props.variable,label:"Variable",type:"string",expression:"optional",show:function(a){return"navigation"===a.props.hoverMode&&"setVariable"===a.props.actionBeforeNavigation}},M={ref:"props.variableValue",defaultValue:h.props.variableValue,label:"Variable value",type:"string",expression:"optional",show:function(a){return"navigation"===a.props.hoverMode&&"setVariable"===a.props.actionBeforeNavigation}},N={ref:"props.hideKpiLabel",defaultValue:h.props.hideKpiLabel,label:"Hide KPI Label",type:"boolean",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}]},O={ref:"props.kpiLabel",defaultValue:h.props.kpiLabel,label:"KPI label",type:"string",expression:"optional",readOnly:function(a){return a.props.hideKpiLabel}},P={ref:"props.hideTargetLabel",defaultValue:h.props.hideTargetLabel,label:"Hide Target Label",type:"boolean",options:[{value:!0,label:"Yes"},{value:!1,label:"No"}],show:function(a){return a.qHyperCubeDef.qMeasures.length>=2}},Q={ref:"props.targetLabel",defaultValue:h.props.targetLabel,label:"Target label",type:"string",expression:"optional",show:function(a){return a.qHyperCubeDef.qMeasures.length>=2},readOnly:function(a){return a.props.hideTargetLabel}},R={ref:"props.target.comparisonLabel",defaultValue:h.props.comparisonLabel,label:"Comparison label",type:"string",expression:"optional",show:function(a){return a.props.target.mode&&"comparison"===a.props.target.layout.mode}},S={component:"buttongroup",ref:"props.kpiAlign",label:"Horizontal align",type:"string",defaultValue:h.props.kpiAlign,options:[{value:"left",label:"Left",tooltip:"Left align"},{value:"middle",label:"Middle",tooltip:"Middle align"},{value:"right",label:"Right",tooltip:"Right align"}]},T={component:"buttongroup",ref:"props.layout.textSize",label:"Text size",type:"string",defaultValue:h.props.layout.textSize,options:[{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}]},U={ref:"props.layout.boldText",label:"Bold text",type:"boolean",defaultValue:h.props.layout.boldText},V={component:"dropdown",ref:"props.hoverMode",label:"Hover mode",type:"string",defaultValue:h.props.hoverMode,options:[{value:"none",label:"None"},{value:"tooltip",label:"Tooltip"},{value:"details",label:"Details"},{value:"navigation",label:"Navigation"}]},W={component:"slider",ref:"props.color.overlay.opacity",label:"Overlay opacity",type:"number",defaultValue:h.props.color.overlay.opacity,min:0,max:1,step:.1,show:function(a){return"details"===a.props.hoverMode||"navigation"===a.props.hoverMode}},X={component:"color-picker",translation:"Overlay background color",ref:"props.color.overlay.bgcolor",type:"object",dualOutput:!0,defaultValue:h.props.color.overlay.bgcolor,show:function(a){return"details"===a.props.hoverMode||"navigation"===a.props.hoverMode}},Y={component:"switch",ref:"props.target.mode",label:"Target mode",type:"boolean",defaultValue:h.props.target.mode,options:[{value:!0,label:"Enabled"},{value:!1,label:"Disabled"}],show:function(a){return a.qHyperCubeDef.qMeasures.length>=2}},Z={component:"switch",ref:"props.canTakeSnapshot",label:"Can take snapshot",type:"boolean",defaultValue:h.props.canTakeSnapshot,options:[{value:!0,label:"Enabled"},{value:!1,label:"Disabled"}],show:!0},$={component:"dropdown",ref:"props.target.layout.mode",label:"Text Layout",type:"string",defaultValue:h.props.target.layout.mode,options:[{value:"standard",label:"Standard"},{value:"kpiFocus",label:"KPI focus"},{value:"comparisonFocus",label:"Comparison focus"},{value:"comparison",label:"Comparison"},{value:"hideText",label:"Hide all text"}],show:!0},_={component:"dropdown",ref:"props.target.comparison",label:"Comparison",type:"string",defaultValue:h.props.target.comparison,options:[{value:"relative",label:"Relative"},{value:"absolute",label:"Absolute"}],show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2}},aa={ref:"props.target.precision",label:"Comparison precision",type:"number",expression:"optional",defaultValue:h.props.target.precision,show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2&&"relative"===a.props.target.comparison}},ba={component:"dropdown",ref:"props.target.comparisonType",label:"Comparison type",type:"string",defaultValue:h.props.target.comparisonType,options:[{value:"more_is_better",label:"More is better"},{value:"less_is_better",label:"Less is better"}],show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2}},ca={ref:"props.target.banding",label:"Banding",type:"number",expression:"optional",defaultValue:h.props.target.banding,show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2&&"3-colors"===a.props.color.target.mode}},da={ref:"props.target.targetBandingHelpText",label:"Banding allows you to adjust threshold of the KPI's value compared to the target value. Relative mode in percentage. Absolute mode in non-percentage",type:"string",component:"text",show:function(a){return a.props.target.mode&&2===a.qHyperCubeDef.qMeasures.length&&"3-colors"===a.props.color.target.mode}},ea={ref:"props.layout.mode",type:"string",size:"large",label:"Layout mode",component:"cl-item-selection-list",defaultValue:h.props.layout.mode,horizontal:!0,items:[{component:"cl-icon-item",labelPlacement:"bottom",icon:"kpi-top-layout",value:"top",label:"Top"},{component:"cl-icon-item",labelPlacement:"bottom",icon:"kpi-fill-layout",value:"fill",label:"Fill"}],show:!0},fa={ref:"props.layout.marginType",type:"string",size:"medium",label:"Margins",component:"cl-item-selection-list",defaultValue:h.props.layout.marginType,horizontal:!0,items:[{component:"cl-icon-item",icon:"kpi-no-margins",value:"none"},{component:"cl-icon-item",icon:"kpi-default-margins",value:"default"},{component:"cl-icon-item",icon:"kpi-large-margins",value:"large"}],show:!0},ga={component:"switch",ref:"props.layout.color.mode",label:"Color layout mode",type:"boolean",defaultValue:h.props.layout.color.mode,options:[{value:!0,label:"Color background"},{value:!1,label:"Color icon and trend"}],show:!0},ha={ref:"qDef.trend.chartType",label:"Trend chart type",type:"string",component:"item-selection-list",defaultValue:j.qDef.trend.chartType,horizontal:!0,items:[{icon:"æ",component:"icon-item",labelPlacement:"bottom",translation:"properties.style.line",value:"line"},{icon:"ø",component:"icon-item",labelPlacement:"bottom",translation:"properties.style.area",value:"area"},{icon:"∫",component:"icon-item",labelPlacement:"bottom",translation:"properties.style.bar",value:"bar"}],show:!0},ia={ref:"qDef.trend.showDatapoints",label:"Show data points",type:"boolean",defaultValue:j.qDef.trend.showDatapoints,readOnly:function(a){return"line"!==a.qDef.trend.chartType}},ja={ref:"qDef.trend.showZerosAsGaps",label:"Show zeros as gaps",type:"boolean",defaultValue:j.qDef.trend.showZerosAsGaps},ka={type:"items",items:{autoMinMax:{ref:"qDef.measureAxis.autoMinMax",type:"boolean",translation:"properties.axis.range",component:"switch",defaultValue:j.qDef.measureAxis.autoMinMax,options:[{value:!0,translation:"Common.Auto"},{value:!1,translation:"Common.Custom"}],show:!0},minMax:{type:"string",component:"dropdown",ref:"qDef.measureAxis.minMax",defaultValue:j.qDef.measureAxis.minMax,options:[{translation:"Common.Auto",value:"auto"},{translation:"properties.axis.min",value:"min"},{translation:"Common.Max",value:"max"},{translation:"properties.axis.minMax",value:"minMax"}],show:function(a){return a.qDef.measureAxis&&!a.qDef.measureAxis.autoMinMax}},min:{ref:"qDef.measureAxis.min",translation:"properties.axis.min",expression:"optional",type:"number",defaultValue:j.qDef.measureAxis.min,show:function(a){return a.qDef.measureAxis&&["min","minMax"].contains(a.qDef.measureAxis.minMax)&&!a.qDef.measureAxis.autoMinMax},invalid:function(a){return!(!a.qDef.measureAxis||"minMax"!==a.qDef.measureAxis.minMax)&&a.qDef.measureAxis.min>=a.qDef.measureAxis.max}},max:{ref:"qDef.measureAxis.max",translation:"Common.Max",expression:"optional",type:"number",defaultValue:j.qDef.measureAxis.max,show:function(a){return a.qDef.measureAxis&&["max","minMax"].contains(a.qDef.measureAxis.minMax)&&!a.qDef.measureAxis.autoMinMax},invalid:function(a){return!(!a.qDef.measureAxis||"minMax"!==a.qDef.measureAxis.minMax)&&a.qDef.measureAxis.min>=a.qDef.measureAxis.max}}},show:!0},la={component:"switch",ref:"qDef.trend.showTargetTrend",label:"Show target trend",type:"boolean",defaultValue:j.qDef.trend.showTargetTrend,options:[{value:!0,label:"Show"},{value:!1,label:"Hide"}],show:function(a,b){return b.hcProperties.qMeasures.length>=2}},ma={ref:"qDef.trend.targetChartType",label:"Target chart type",type:"string",component:"item-selection-list",defaultValue:j.qDef.trend.targetChartType,horizontal:!0,items:[{icon:"æ",component:"icon-item",labelPlacement:"bottom",translation:"properties.style.line",value:"line"},{icon:"ø",component:"icon-item",labelPlacement:"bottom",translation:"properties.style.area",value:"area"},{icon:"É",component:"icon-item",labelPlacement:"bottom",translation:"properties.style.marker",value:"marker"}],show:function(a,b){return a.qDef.trend.showTargetTrend&&b.hcProperties.qMeasures.length>=2}},na={ref:"qDef.trend.showTargetDatapoints",label:"Show data points",type:"boolean",defaultValue:j.qDef.trend.showTargetDatapoints,readOnly:function(a,b){return"line"===a.qDef.trend.targetChartType?!1:b.hcProperties.qMeasures.length>=2&&a.qDef.trend.showTargetTrend&&"line"===a.qDef.trend.targetChartType?!1:!0},show:function(a,b){return a.qDef.trend.showTargetTrend&&b.hcProperties.qMeasures.length>=2}},oa=function(a){return!a.props.target.mode||a.qHyperCubeDef.qMeasures.length<2},pa={ref:"props.showIconWithTitle",label:"Show icon with title",type:"boolean",defaultValue:h.props.showIconWithTitle,show:!0},qa={component:"dropdown",ref:"props.iconSet",label:"Icon set",type:"string",defaultValue:h.props.iconSet,options:y(),show:function(a){return oa(a)}},ra={ref:"props.target.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.target.icon,horizontal:!0,items:[{component:"cl-icon-item",labelPlacement:"hide",value:"arrow-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"arrow-circle-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"angle-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"angle-double-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"arrow-circle-o-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"caret-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"caret-square-o-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"chevron-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"chevron-circle-up"},{component:"cl-icon-item",labelPlacement:"hide",value:"long-arrow-up"}],show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2}},sa={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("charts"),show:function(a){return oa(a)&&"charts"===a.props.iconSet}},ta={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("brands"),show:function(a){return oa(a)&&"brands"===a.props.iconSet}},ua={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("transportation"),show:function(a){return oa(a)&&"transportation"===a.props.iconSet}},va={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("people"),show:function(a){return oa(a)&&"people"===a.props.iconSet}},wa={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("commerce"),show:function(a){return oa(a)&&"commerce"===a.props.iconSet}},xa={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("navigation"),show:function(a){return oa(a)&&"navigation"===a.props.iconSet}},ya={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("symbols"),show:function(a){return oa(a)&&"symbols"===a.props.iconSet}},za={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("other"),show:function(a){return oa(a)&&"other"===a.props.iconSet}},Aa={ref:"props.icon",type:"string",component:"cl-item-selection-list",defaultValue:h.props.icon,horizontal:!0,items:z("noIcon"),show:function(a){return oa(a)&&"noIcon"===a.props.iconSet}},Ba={component:"dropdown",ref:"props.color.icon.mode",label:"Icon color mode",type:"string",defaultValue:h.props.color.icon.mode,options:[{value:"custom",label:"Custom"},{value:"byExpression",label:"Expression"}],show:function(a){return oa(a)||a.props.layout.color.mode}},Ca={type:"items",items:{colorTrendIconIndependence:{component:"switch",ref:"props.color.trend.iconIndependence",label:"Trend color",type:"boolean",defaultValue:h.props.color.trend.iconIndependence,options:[{value:!1,label:"Same as icon"},{value:!0,label:"Independent of icon"}],show:function(a){return 1===a.qHyperCubeDef.qDimensions.length}},colorTrendMode:{component:"dropdown",ref:"props.color.trend.mode",label:"Trend color mode",type:"string",defaultValue:h.props.color.trend.mode,options:[{value:"custom",label:"Custom"},{value:"byExpression",label:"Expression"}],show:function(a){return 1===a.qHyperCubeDef.qDimensions.length&&(a.props.color.trend.iconIndependence||a.qHyperCubeDef.qDimensions[0].qDef.trend.showTargetTrend)}},customTrendColor:{component:"color-picker",translation:"Trend",ref:"props.color.customColors.trend",type:"object",dualOutput:!0,defaultValue:{color:h.props.color.customColors.trend.color,index:h.props.color.customColors.trend.index},show:function(a){return a.props.color.trend.iconIndependence&&1===a.qHyperCubeDef.qDimensions.length&&"custom"===a.props.color.trend.mode}},trendColorExpression:{type:"string",expression:"optional",ref:"props.color.colorExpressions.trend",translation:"Trend color expression",defaultValue:h.props.color.colorExpressions.trend,show:function(a){return a.props.color.trend.iconIndependence&&1===a.qHyperCubeDef.qDimensions.length&&"byExpression"===a.props.color.trend.mode}},colorTrendBlend:{component:"switch",ref:"props.color.trend.autoblend",label:"Blend trend with background",type:"boolean",defaultValue:h.props.color.trend.autoblend,options:[{value:!0,label:"Auto"},{value:!1,label:"Custom blend"}],show:function(a){return 1===a.qHyperCubeDef.qDimensions.length}},colorTrendBlendFactor:{component:"slider",ref:"props.color.trend.blendFactor",label:"Blend factor",type:"number",defaultValue:h.props.color.trend.blendFactor,min:0,max:1,step:.1,show:function(a){return 1===a.qHyperCubeDef.qDimensions.length&&!a.props.color.trend.autoblend}},customTargetTrendColor:{component:"color-picker",translation:"Target trend",ref:"props.color.customColors.targetTrend",type:"object",dualOutput:!0,defaultValue:{color:h.props.color.customColors.targetTrend.color,index:h.props.color.customColors.targetTrend.index},show:function(a){return 1===a.qHyperCubeDef.qDimensions.length&&a.qHyperCubeDef.qDimensions[0].qDef.trend.showTargetTrend&&a.qHyperCubeDef.qMeasures.length>=2&&"custom"===a.props.color.trend.mode}},targetTrendColorExpression:{type:"string",expression:"optional",ref:"props.color.colorExpressions.targetTrend",translation:"Target trend color expression",defaultValue:h.props.color.colorExpressions.targetTrend,show:function(a){return 1===a.qHyperCubeDef.qDimensions.length&&a.qHyperCubeDef.qDimensions[0].qDef.trend.showTargetTrend&&a.qHyperCubeDef.qMeasures.length>=2&&"byExpression"===a.props.color.trend.mode}},colorTargetTrendBlend:{component:"switch",ref:"props.color.targetTrend.autoblend",label:"Blend target trend with background",type:"boolean",defaultValue:h.props.color.targetTrend.autoblend,options:[{value:!0,label:"Auto"},{value:!1,label:"Custom blend"}],show:function(a){return 1===a.qHyperCubeDef.qDimensions.length&&a.qHyperCubeDef.qDimensions[0].qDef.trend.showTargetTrend&&a.qHyperCubeDef.qMeasures.length>=2}},colorTargetTrendBlendFactor:{component:"slider",ref:"props.color.targetTrend.blendFactor",label:"Blend factor",type:"number",defaultValue:h.props.color.targetTrend.blendFactor,min:0,max:1,step:.1,show:function(a){return 1===a.qHyperCubeDef.qDimensions.length&&a.qHyperCubeDef.qDimensions[0].qDef.trend.showTargetTrend&&a.qHyperCubeDef.qMeasures.length>=2&&!a.props.color.targetTrend.autoblend}}}},Da={component:"dropdown",ref:"props.color.other.mode",label:"Other colors mode",type:"string",defaultValue:h.props.color.other.mode,options:[{value:"custom",label:"Custom"},{value:"byExpression",label:"Expression"}],show:function(){return!0}},Ea={component:"dropdown",ref:"props.color.target.mode",label:"Target color mode",type:"string",defaultValue:h.props.color.target.mode,options:[{value:"2-colors",label:"Two colors"},{value:"3-colors",label:"Three colors"},{value:"byExpression",label:"Expression"}],show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2}},Fa={type:"items",items:{customIcon:{component:"color-picker",translation:"Icon",ref:"props.color.customColors.icon",type:"object",dualOutput:!0,defaultValue:{color:h.props.color.customColors.icon.color,index:h.props.color.customColors.icon.index},show:function(a){return(oa(a)||a.props.layout.color.mode)&&"custom"===a.props.color.icon.mode}}}},Ga={type:"items",items:{customColorGood:{component:"color-picker",translation:"Good",ref:"props.color.customColors.good",type:"object",dualOutput:!0,defaultValue:{color:h.props.color.customColors.good.color,index:h.props.color.customColors.good.index},show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2&&"byExpression"!==a.props.color.target.mode}},customColorGoodEnough:{component:"color-picker",translation:"Good enough",ref:"props.color.customColors.goodEnough",type:"object",dualOutput:!0,defaultValue:{color:h.props.color.customColors.goodEnough.color,index:h.props.color.customColors.goodEnough.index},show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2&&"3-colors"===a.props.color.target.mode}},customColorBad:{component:"color-picker",translation:"Bad",ref:"props.color.customColors.bad",type:"object",dualOutput:!0,defaultValue:{color:h.props.color.customColors.bad.color,index:h.props.color.customColors.bad.index},show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2&&"byExpression"!==a.props.color.target.mode}}}},Ha={type:"items",items:{customText:{component:"color-picker",translation:"Text",ref:"props.color.customColors.text",type:"object",dualOutput:!0,defaultValue:{color:h.props.color.customColors.text.color,index:h.props.color.customColors.text.index},show:function(a){return"custom"===a.props.color.other.mode}},customBackground:{component:"color-picker",translation:"Background",ref:"props.color.customColors.background",type:"object",dualOutput:!0,defaultValue:{color:h.props.color.customColors.background.color,index:h.props.color.customColors.background.index},show:function(a){return oa(a)&&a.props.layout.color.mode&&"custom"===a.props.color.other.mode}}}},Ia={type:"string",expression:"optional",ref:"props.color.colorExpressions.icon",translation:"Icon color expression",defaultValue:h.props.color.colorExpressions.icon,show:function(a){return(oa(a)||a.props.layout.color.mode)&&"byExpression"===a.props.color.icon.mode}},Ja={type:"string",expression:"optional",ref:"props.color.colorExpressions.target",translation:"Target color expression",defaultValue:h.props.color.colorExpressions.target,show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2&&"byExpression"===a.props.color.target.mode}},Ka={type:"number",expression:"optional",ref:"props.iconDirectionExpression",translation:"Icon direction expression",defaultValue:h.props.iconDirectionExpression,show:function(a){return a.props.target.mode&&a.qHyperCubeDef.qMeasures.length>=2&&"byExpression"===a.props.color.target.mode}},La={type:"string",expression:"optional",ref:"props.color.colorExpressions.text",translation:"Text color expression",defaultValue:h.props.color.colorExpressions.text,show:function(a){return"byExpression"===a.props.color.other.mode}},Ma={type:"string",expression:"optional",ref:"props.color.colorExpressions.background",translation:"Icon and trend color expression",defaultValue:h.props.color.colorExpressions.background,show:function(a){return oa(a)&&a.props.layout.color.mode&&"byExpression"===a.props.color.other.mode}},Na={component:"pp-cl-kpi",translation:"Common.About",show:!0},Oa={type:"string",component:"dropdown",label:"Background image",ref:"props.backgroundImageMode",defaultValue:h.props.backgroundImageMode,options:[{value:"none",label:"None"},{value:"url",label:"Image Url"},{value:"contentlibrary",label:"Content library media"},{value:"icon",label:"Icon"}]},Pa={label:"Background image",component:"media",ref:"props.backgroundContentLibraryImage",layoutRef:"props.backgroundContentLibraryImage",type:"string",show:function(a){return"contentlibrary"===a.props.backgroundImageMode}},Qa={type:"string",expression:"optional",ref:"props.backgroundImageURL",translation:"Background image url",defaultValue:h.props.backgroundImageURL,show:function(a){return"url"===a.props.backgroundImageMode}},Ra={type:"string",component:"dropdown",label:"Image Size Mode",ref:"props.backgroundImageSizeMode",defaultValue:h.props.backgroundImageSizeMode,options:[{value:"contain",label:"Contain"},{value:"cover",label:"Cover"},{value:"fill",label:"Fill"}],show:function(a){return"url"===a.props.backgroundImageMode||"contentlibrary"===a.props.backgroundImageMode}},Sa={translation:"Common.About",type:"items",items:{about:Na,updatePropertiesInfo:t,updateProperties:u,updateExtensionInfo:s}},Ta={uses:"settings",items:{general:{type:"items",items:{canTakeSnapshot:Z}},layout:{type:"items",grouped:!0,label:"Layout",items:{layout:{type:"items",label:"Layout",items:{layoutMode:ea,targetLayoutMode:$,marginType:fa,kpiAlign:S,textSize:T,boldText:U}},labels:{type:"items",label:"Labels",items:{hideKpiLabel:N,kpiLabel:O,hideTargetLabel:P,targetLabel:Q,comparisonLabel:R}},background:{type:"items",label:"Background",items:{backgroundImageMode:Oa,backgroundContentLibraryImage:Pa,backgroundImage:Qa,backgroundImageSizeMode:Ra}}}},iconSettings:{type:"items",label:"Icon",items:{showIconWithTitle:pa,iconSet:qa,iconsBrands:ta,iconsChart:sa,iconsTransportation:ua,iconsPeople:va,iconsCommerce:wa,iconsNavigation:xa,iconsSymbols:ya,iconsOther:za,noIcon:Aa,iconsTarget:ra}},colorSettings:{type:"items",label:"Colors",items:{colorBackground:ga,colorTargetMode:Ea,customTargetColors:Ga,targetColorExpression:Ja,iconDirectionExpression:Ka,colorIconMode:Ba,customIconColors:Fa,iconColorExpression:Ia,colorTrend:Ca,colorOtherMode:Da,customOtherColors:Ha,textColorExpression:La,backgroundColorExpression:Ma}},hoverSettings:{type:"items",grouped:!0,label:"Hover",items:{navgiationAction:{type:"items",label:"Hover",items:{hoverMode:V,sheetList:A,actionBeforeNavigation:E,field:F,value:H,valuesText:G,values:I,valuesSeparatorComma:J,valuesSeparatorCustom:K,variable:L,variableValue:M}},navigationAppearance:{type:"items",label:"Hover",items:{navigationText:B,navigationColor:D,navigationButton:C,overlayBackgroundColor:X,overlayOpacity:W}}}}}},Ua={label:"Add another measure if you want to use the target mode",component:"text",show:function(a){return a.qHyperCubeDef.qMeasures&&a.qHyperCubeDef.qMeasures.length<2}},Va={type:"items",label:"Target",items:{noTargetText:Ua,targetMode:Y,targetComparison:_,targetComparisonRelativePrecision:aa,targetComparisonType:ba,targetBanding:ca,targetBandingHelpText:da},show:!0},Wa={uses:"dimensions",min:0,max:1,add:function(a,b){r(b);var c=b.qHyperCubeDef.qInterColumnSortOrder;c.unshift(c.pop())},remove:function(a,b){r(b)},translation:"Trend",items:{title:{show:!1},trendChart:{type:"items",grouped:!0,label:"Trend chart",items:{trend:{type:"items",items:{
trendChartType:ha,trendShowDatapoints:ia,trendShowZerosAsGaps:ja}},target:{type:"items",items:{showTargetTrend:la,trendTargetChartType:ma,trendTargetShowDatapoints:na}},range:{type:"items",items:{showTrendMinMax:ka}}},show:!0}}},Xa={type:"boolean",ref:"qDef.colorizeDatapoint",label:function(a,b){return a===b.hcProperties.qMeasures[0]?"Colorize bars":"Colorize markers"},defaultValue:!1,show:function(a,b){return a===b.hcProperties.qMeasures[0]||a===b.hcProperties.qMeasures[1]?!0:!1}},Ya={component:"expression",expressionType:"measure",ref:"qAttributeExpressions.0.qExpression",label:function(a,b){return a===b.hcProperties.qMeasures[0]?"Bars color":"Markers color"},defaultValue:"",show:function(a){return a.qDef.colorizeDatapoint}},Za={uses:"measures",min:1,max:3,add:function(a,b){r(b);var c=w(),d=c.qThousandSep?c.qThousandSep:",",e=c.qDecimalSep?c.qDecimalSep:".",f="#"+d+"##0";a.qDef.qNumFormat={qType:"F",qnDec:2,qUseThou:0,qFmt:f,qDec:e,qThou:d}},remove:function(a,b){r(b)},items:{colorizeDatapoint:Xa,datapointColor:Ya}},$a={uses:"sorting"},_a={type:"items",component:"expandable-items",translation:"properties.addons",items:{dataHandling:{uses:"dataHandling",items:{suppressZero:{show:!0}}}}};return{type:"items",component:"accordion",items:{measures:Za,target:Va,dimensions:Wa,sorting:$a,addons:_a,appearance:Ta,about:Sa}}});