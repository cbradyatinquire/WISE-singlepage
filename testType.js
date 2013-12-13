/*
 * This is a testType step object 
 */
console.log("DEBUG:  loading testType.js");
/**
 * This is the constructor for the object that will perform the logic for
 * the step when the students work on it. An instance of this object will
 * be created in the .html for this step (look at testType.html)
 * 
 * 
 * @constructor
 */
function TestType(node) {
	console.log("DEBUG:  entered TestType constructor in testType.js");
	
	this.node = node;
	this.view = node.view;
	this.content = node.getContent().getContentJSON();
	
	if(node.studentWork != null) {
		this.states = node.studentWork; 
	} else {
		this.states = [];  
	};
};

/**
 * This function renders everything the student sees when they visit the step.
 * This includes setting up the html ui elements as well as reloading any
 * previous work the student has submitted when they previously worked on this
 * step, if any.
 * 
 * note: you do not have to use 'promptDiv' or 'studentResponseTextArea', they
 * are just provided as examples. you may create your own html ui elements in
 * the .html file for this step (look at testType.html).
 */
TestType.prototype.render = function() {
	console.log("DEBUG: entered function render in testType.js");
	
	var lsInfo = document.getElementById("levelstring_info");
	console.log("???????????????????dumping this.content");
	var levelJ = this.content.levelJSON;
	var toPrint = "==========THE LEVEL JSON===========<br>";
	toPrint += "Level is <b>" + levelJ.Level + "</b><br>";
	toPrint += "Stakes are <b>" + levelJ.Stakes + "</b><br>";
	toPrint += "====================================";
	lsInfo.innerHTML=toPrint;
	
	var ds = document.getElementById("draw_space");
	var drawrandom = function( args ) {
		
		var mouseX, mouseY;

		    if(args.offsetX) {
		        mouseX = args.offsetX;
		        mouseY = args.offsetY;
		    }
		    else if(args.layerX) {
		        mouseX = args.layerX;
		        mouseY = args.layerY;
		    }
		
		ds = document.getElementById("draw_space");
		var ctx = ds.getContext('2d');
		//var xc = ds.width * Math.random();
		//var yc = ds.height * Math.random();
		//var xc2 = ds.width * Math.random();
		//var yc2 = ds.height * Math.random();
		ctx.beginPath();
		//console.log(args);
		ctx.moveTo(mouseX - 3, mouseY);
		ctx.lineTo(mouseX + 3, mouseY);
		ctx.moveTo(mouseX , mouseY - 3);
		ctx.lineTo(mouseX , mouseY + 3);
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.closePath();
	}
	//display any prompts to the student
	document.getElementById('promptDiv').innerHTML=this.content.prompt;
	
	var ctx = ds.getContext('2d');
	ctx.fillRect(50,50,50,50);
	//ctx.globalCompositeOperation = 'xor';
	ctx.fillStyle = "#8833AA";
	ctx.fillRect(75,75,50,50);
	ds.addEventListener('mousemove', drawrandom, false);
	
	//load any previous responses the student submitted for this step
	var latestState = this.getLatestState();
	
	console.log("latest state");
	console.log(latestState);
	if(latestState != null) {
		/*
		 * get the response from the latest state. the response variable is
		 * just provided as an example. you may use whatever variables you
		 * would like from the state object (look at testTypeState.js)
		 */
		var latestResponse = latestState.response;
		console.log("text based response is ");
		console.log(latestResponse);
		//set the previous student work into the text area
		document.getElementById('studentResponseTextArea').value = latestResponse; 
		
		var latestImage = new Image();
		latestImage.src = latestState.imageData;
		console.log("!!!!!!!!!!!!!!!!!drawing");
		console.log(latestImage);
		ctx.drawImage(latestImage, 0, 0);
	}
};

/**
 * This function retrieves the latest student work
 * 
 * @return the latest state object or null if the student has never submitted
 * work for this step
 */
TestType.prototype.getLatestState = function() {
	console.log("DEBUG: entered function getLatestState() in testType.js");
	var latestState = null;
	console.log("there are " + this.states.length + " states");
	//check if the states array has any elements
	if(this.states != null && this.states.length > 0) {
		//get the last state
		latestState = this.states[this.states.length - 1];
	}
	
	return latestState;
};

/**
 * This function retrieves the student work from the html ui, creates a state
 * object to represent the student work, and then saves the student work.
 * 
 * note: you do not have to use 'studentResponseTextArea', they are just 
 * provided as examples. you may create your own html ui elements in
 * the .html file for this step (look at testType.html).
 */
TestType.prototype.save = function() {
	console.log("DEBUG: entered function save() in testType.js");
	//get the answer the student wrote
	var response = document.getElementById('studentResponseTextArea').value;
	
	var ds = document.getElementById("draw_space");
	
	var ctx = ds.getContext('2d');
	var imagedata = ds.toDataURL();
	console.log("DEBUG:  Image data=" + imagedata);
	
	/*
	 * create the student state that will store the new work the student
	 * just submitted
	 * 
	 * TODO: rename TestTypeState
	 * 
	 * make sure you rename TestTypeState to the state object type
	 * that you will use for representing student data for this
	 * type of step. copy and modify the file below
	 * 
	 * vlewrapper/WebContent/vle/node/testType/testTypeState.js
	 * 
	 * and use the object defined in your new state.js file instead
	 * of TestTypeState. for example if you are creating a new
	 * quiz step type you would copy the file above to
	 * 
	 * vlewrapper/WebContent/vle/node/quiz/quizState.js
	 * 
	 * and in that file you would define QuizState and therefore
	 * would change the TestTypeState to QuizState below
	 */
	var testTypeState = new TestTypeState(response, imagedata);
	console.log(testTypeState);
	/*
	 * fire the event to push this state to the global view.states object.
	 * the student work is saved to the server once they move on to the
	 * next step.
	 */
	this.view.pushStudentWork(this.node.id, testTypeState);

	//push the state object into this or object's own copy of states
	this.states.push(testTypeState);
	console.log(this.states);
	console.log("there are " + this.states.length + " states");
};

//used to notify scriptloader that this script has finished loading
if(typeof eventManager != 'undefined'){
	console.log("DEBUG:  added scriptloaded event for testType.js to eventManager");
	/*
	 * TODO: rename testType to your new folder name
	 * TODO: rename testType.js
	 * 
	 * e.g. if you were creating a quiz step it would look like
	 * 
	 * eventManager.fire('scriptLoaded', 'vle/node/quiz/quiz.js');
	 */
	eventManager.fire('scriptLoaded', 'vle/node/testType/testType.js');
}