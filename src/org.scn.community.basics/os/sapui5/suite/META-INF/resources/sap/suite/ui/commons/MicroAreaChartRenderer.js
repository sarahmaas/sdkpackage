/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.MicroAreaChartRenderer");sap.suite.ui.commons.MicroAreaChartRenderer={};
sap.suite.ui.commons.MicroAreaChartRenderer.render=function(r,c){function w(l,i,C,s){var L=l?l.getLabel():"";r.write("<div");r.writeAttribute("id",c.getId()+i);r.writeAttributeEscaped("title",L);if(l){r.addClass(l.getColor())}r.addClass("sapSuiteMacLbl");r.addClass(C);r.addClass(s);r.writeClasses();r.write(">");r.writeEscaped(L);r.write("</div>")};var t=c.getTooltip_AsString();var T=((c.getFirstYLabel()&&c.getFirstYLabel().getLabel())?"L":"")+((c.getMaxLabel()&&c.getMaxLabel().getLabel())?"C":"")+((c.getLastYLabel()&&c.getLastYLabel().getLabel())?"R":"");var b=((c.getFirstXLabel()&&c.getFirstXLabel().getLabel())?"L":"")+((c.getMinLabel()&&c.getMinLabel().getLabel())?"C":"")+((c.getLastXLabel()&&c.getLastXLabel().getLabel())?"R":"");r.write("<div");r.writeControlData(c);if(t){r.writeAttributeEscaped("title",t)}r.addStyle("width",c.getWidth());r.addStyle("height",c.getHeight());r.writeStyles();r.addClass("sapSuiteMac");if(c.hasListeners("press")){r.addClass("sapSuiteUiCommonsPointer");r.writeAttribute("tabindex","0")}r.writeClasses();r.write(">");if(T){r.write("<div");r.writeAttribute("id",c.getId()+"-top-labels");r.addClass("sapSuiteMacLabels");r.addClass("Top");r.writeClasses();r.write(">");w(c.getFirstYLabel(),"-top-left-lbl","Left",T);w(c.getMaxLabel(),"-top-center-lbl","Center",T);w(c.getLastYLabel(),"-top-right-lbl","Right",T);r.write("</div>")}r.write("<div");r.writeAttribute("id",c.getId()+"-canvas-cont");r.addClass("sapSuiteMacCanvas");if(T){r.addClass("topLbls")}if(b){r.addClass("btmLbls")}r.writeClasses();r.write(">");r.write("<canvas");r.writeAttribute("id",c.getId()+"-canvas");r.addStyle("width","100%");r.addStyle("height","100%");r.writeStyles();r.write("></canvas>");r.write("</div>");if(b){r.write("<div");r.writeAttribute("id",c.getId()+"-bottom-labels");r.addClass("sapSuiteMacLabels");r.addClass("Btm");r.writeClasses();r.write(">");w(c.getFirstXLabel(),"-btm-left-lbl","Left",b);w(c.getMinLabel(),"-btm-center-lbl","Center",b);w(c.getLastXLabel(),"-btm-right-lbl","Right",b);r.write("</div>")}r.write("<div");r.writeAttribute("id",c.getId()+"-css-helper");r.addStyle("display","none");r.writeStyles();r.write("></div>");r.write("</div>")};