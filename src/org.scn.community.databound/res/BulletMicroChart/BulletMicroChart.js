/**
 * Copyright 2014 Scn Community Contributors
 * 
 * Original Source Code Location:
 *  https://github.com/org-scn-design-studio-community/sdkpackage/
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at 
 *  
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License. 
 */
 
 (function(){

var myComponentData = org_scn_community_require.knownComponents.databound.BulletMicroChart;

BulletMicroChart = {

	renderer: {},
	
	initDesignStudio: function() {
		var that = this;

		org_scn_community_basics.fillDummyDataInit(that, that.initAsync);		
	},
	
	initAsync: function (owner) {
		var that = owner;
		org_scn_community_component_Core(that, myComponentData);
		
		/* COMPONENT SPECIFIC CODE - START(initDesignStudio)*/
		
		/* COMPONENT SPECIFIC CODE - END(initDesignStudio)*/
		
		// that.onAfterRendering = function () {
			// org_scn_community_basics.resizeContentAbsoluteLayout(that, that._oRoot, that.onResize);
		// }
	},
	
	afterDesignStudioUpdate: function() {
		var that = this;
		
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
		var loadingResultset = "NONE";
		
		var data = undefined;		
		if(loadingResultset == "ResultSet" || loadingResultset == "ResultCell"){
			data = that.getData();
		} else if(loadingResultset == "DataCellList"){
			data = that.getDataCellList();
		}

		var metadata = that.getDSMetadata();

		if(!org_scn_community_databound.hasData (data, metadata)) {
			org_scn_community_databound.getSampleDataFlat (that, that.processData, that.afterPrepare);
		} else {
			org_scn_community_basics.fillDummyData(that, that.processData, that.afterPrepare);
		}
		/* COMPONENT SPECIFIC CODE - START(afterDesignStudioUpdate)*/
	},
	
	/* COMPONENT SPECIFIC CODE - START METHODS*/
	processData: function (flatData, afterPrepare, owner) {
		var that = owner;

		if(flatData == undefined) {
			var loadingResultset = "NONE";
				
			if(loadingResultset == "ResultSet"){
				var options = org_scn_community_databound.initializeOptions();
				options.swapAxes = that.getSwapAxes();
				
				that._flatData = org_scn_community_databound.flatten(that.getData(), options);
			} else if(loadingResultset == "ResultCell"){
				that._flatData = this.getData();
			} else if(loadingResultset == "DataCellList"){
				var lDimensions = that.getDElements();
		
				var options = org_scn_community_databound.initializeOptions();
				options.iMaxNumber = that.getDMaxMembers();
				options.allKeys = true;
				options.idPrefix = that.getId();
				options.iDuplicates = "Sum";
				
				if(that.getDDisplayText() == "Text_Value") {
					options.iDisplayText = "Text (Value)";
				} else if(that.getDDisplayText() == "Text_Count") {
					options.iDisplayText = "Text (Count)";
				} else {
					options.iDisplayText = "Text";
				}
				
				options.iNullValues = that.getDZeroValuesMode();
			
				var dataList = that.getDataCellList();
				var metaData = that.getDSMetadata();
				
				that._flatData = org_scn_community_databound.getDataModelForDimensions(dataList, metaData, lDimensions, options);
			}
		} else {
			that._flatData = flatData;
		}
		
		// processing on data
		that.afterPrepare(that);
	},

	afterPrepare: function (owner) {
		var that = owner;
			
		// visualization on processed data 
	},
	
	onResize: function(width, height, parent) {
		// in case special resize code is required
	},
	/* COMPONENT SPECIFIC CODE - END METHODS*/
};

define([myComponentData.requireName], function(databoundbulletmicrochart){
	myComponentData.instance = BulletMicroChart;
	return myComponentData.instance;
});

}).call(this);