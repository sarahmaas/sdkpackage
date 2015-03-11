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

sap.ui.commons.layout.AbsoluteLayout.extend ("org.scn.community.utils.PostResponseParser", {

	metadata: {
        properties: {
              "DUrl": {type: "string"},
              "DTrigger": {type: "string"},
              "DParameters": {type: "string"},
              "DRawParameters": {type: "string"},
              "DBasicAuthorisation": {type: "string"},
              "DExpectedResponseStatus": {type: "int"},
              "DContentType": {type: "string"},
        }
	},

	initDesignStudio: function() {
		var that = this;
	},	
	
	renderer: {},
	
	afterDesignStudioUpdate : function() {
		var that = this;

		if(this.getDUrl() != "" && this.getDTrigger() == "GO") {
			var lParameters = that.getDParameters();

			var http = new XMLHttpRequest();
			var url = that.getDUrl();
			
			var params = "";
			var emphason = "";
			
			var lRawParameters = this.getDRawParameters();
			if(lRawParameters != undefined && lRawParameters.length > 0) {
				params = lRawParameters;
			} else {
				if((lParameters != undefined || lParameters != undefined) && lParameters != "" && lParameters != "<delete>"){
					var lParametersArray = JSON.parse(lParameters);
					
					for (var i = 0; i < lParametersArray.length; i++) {
						if(lParametersArray[i].parentKey == "ROOT") {
							params += emphason + lParametersArray[i].key + "=" + lParametersArray[i].value + "";
							emphason = "&";
						}
					}
				}
			}
			
			http.open("POST", url, true);

			// "application/json; charset=utf-8"
			if(this.getDContentType() != "") {
				http.setRequestHeader("Content-type", that.getDContentType());	
			}
			
			
			if(this.getDBasicAuthorisation() != "") {
				http.setRequestHeader("Authorization", that.getDBasicAuthorisation());	
			}
			
			http.onreadystatechange = function() {
			    if(http.readyState == 4 && http.status == that.getDExpectedResponseStatus()) {
			        alert(http.responseText);
			    }
			}
			
			http.send(params);
			
			if(that.getDTrigger() != "") {
				// clean up the trigger
				that.setDTrigger("");

				// fire event to rerender
				that.fireDesignStudioPropertiesChanged(["DTrigger"]);
			}
		}
	}
});