/*!
 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.suite.ui.commons.TileContent2X2");jQuery.sap.require("sap.suite.ui.commons.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.suite.ui.commons.TileContent2X2",{metadata:{library:"sap.suite.ui.commons",properties:{"footer":{type:"string",group:"Appearance",defaultValue:null},"size":{type:"sap.suite.ui.commons.InfoTileSize",group:"Misc",defaultValue:"Auto"},"unit":{type:"string",group:"Misc",defaultValue:null},"disabled":{type:"boolean",group:"Misc",defaultValue:false}},aggregations:{"content":{type:"sap.ui.core.Control",multiple:false}}}});
sap.suite.ui.commons.TileContent2X2.prototype.init=function(){this._oDelegate={onAfterRendering:function(e){e.srcControl.$().removeAttr("tabindex");}};};
sap.suite.ui.commons.TileContent2X2.prototype._getContentType=function(){if(this.getContent()){var c=this.getContent().getMetadata().getName();if(c=="sap.suite.ui.commons.NewsContent"){return"News";}}};
sap.suite.ui.commons.TileContent2X2.prototype.onAfterRendering=function(){var c=this.getContent();var t=jQuery(this.getDomRef());if(!t.attr("title")){var C=c.getTooltip_AsString();var T=t.find("*");T.removeAttr("title");var o=C?C:"";t.attr("title",o+"\n"+this._getFooterText());}};
sap.suite.ui.commons.TileContent2X2.prototype._getFooterText=function(){var f=this.getFooter();var u=this.getUnit();return u?(sap.ui.getCore().getConfiguration().getRTL()?((f?f+" ,":"")+u):(u+(f?", "+f:""))):f;};
sap.suite.ui.commons.TileContent2X2.prototype.onBeforeRendering=function(){if(this.getContent()){if(this.getDisabled()){this.getContent().addDelegate(this._oDelegate);}else{this.getContent().removeDelegate(this._oDelegate);}}};
sap.suite.ui.commons.TileContent2X2.prototype.setContent=function(o,s){if(this.getContent()){this.getContent().removeDelegate(this._oDelegate);}this.setAggregation("content",o,s);};
sap.suite.ui.commons.TileContent2X2.prototype.getAltText=function(){var a="";var c=this.getContent();if(c&&c.getAltText){a+=c.getAltText();}else if(c&&c.getTooltip_AsString()){a+=c.getTooltip_AsString();}return a;};
