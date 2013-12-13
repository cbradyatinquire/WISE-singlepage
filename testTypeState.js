
console.log("DEBUG: loading testTypeState.js");
/*
 * This is a testType state object 
 */

/**
 * This is the constructor for the state object that will be used to represent the
 * student work. An instance of this object will be created each time the student
 * submits an answer.
 *  * 
 * note: you can change the variables in this constructor, the response variable
 * is just used as an example. you can add any variables that will help you 
 * represent the student's work for your step type.
 * 
 * @constructor
 */
function TestTypeState(response, imagedata ) {
	console.log("DEBUG: entered constructor in testTypeState.js");
	//the text response the student wrote
	this.response = "";
	this.imageData = "";
//	console.log(response);
//	console.log("and image data");
//	console.log(imagedata);

	if(response != null) {
		//set the response
		this.response = response;
	}
	if(imagedata != null) {
		this.imageData = imagedata;
	}
};

/**
 * This function is used to reload previous work the student submitted for the step.
 * The student work is retrieved and then this function is called to parse the student
 * work so that we can display the previous answer the student submitted.
 * 
 * 
 * note: you can change the variables in the stateJSONObj, the response 
 * variable is just used as an example. you can add any variables that will  
 * help you represent the student's work for your type of step.
 * 
 * @param stateJSONObj a JSONObject representing the student work
 * @return a TestTypeState object
 */
TestTypeState.prototype.parseDataJSONObj = function(stateJSONObj) {
	console.log("DEBUG: entered parseDataJSONObj() in testTypeState.js");
	//obtain the student work from the JSONObject
	var response = stateJSONObj.response;
	var imagedata = stateJSONObj.imageData;
	/*
	 * create a state object with the student work
	 */
	var testTypeState = new TestTypeState(response, imagedata);
	
	//return the state object
	return testTypeState;
};

/**
 * Get the student work for display purposes such as in the grading tool.
 * 
 * TODO: rename TestTypeState
 * 
 * @return the student work
 */
TestTypeState.prototype.getStudentWork = function() {
	console.log("DEBUG: entered getStudentWork() in testTypeState.js");
	var studentWork = this;
	
	return studentWork;
};

//used to notify scriptloader that this script has finished loading
if(typeof eventManager != 'undefined'){
	console.log("DEBUG: adding scriptLoaded notice for testTypeState.js");
	//note path
	eventManager.fire('scriptLoaded', 'vle/node/testType/testTypeState.js');
}