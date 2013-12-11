console.log("DEBUG: loaded testTypeEvents.js");
/*
 * This handles events and calls the appropriate function to handle
 * the event.
 * 
 */
View.prototype.testTypeDispatcher = function(type,args,obj){
	console.log("DEBUG: entered function testTypeDispatcher in testTypeEvents.js");
	/*
	 * check to see if the event name matches 
	 * 
	 * wait until you implement the authoring before you rename this
	 */ 
	if(type == 'testTypeUpdatePrompt') {
		/*
		 * the event name matches so we will call the function that
		 * handles that event
		 * 
		 * wait until you implement the authoring before you rename this 
		 */
		obj.TestTypeNode.updatePrompt();
	}
};

/*
 * this is a list of events that can be fired. when the event is fired,
 * the dispatcher function above will be called and then call the
 * appropriate function to handle the event.
 */
var events = [
	/*
	 * wait until you implement the authoring before you rename this
	 */
	'testTypeUpdatePrompt'
];

/*
 * add all the events to the vle so the vle will listen for these events
 * and call the dispatcher function when the event is fired
 */
for(var x=0; x<events.length; x++) {
	/*
	 * For example if you are creating a quiz node you would change it to
	 * quizDispatcher. The name for the dispatcher should match the function
	 * name at the top of this file.
	 */
	componentloader.addEvent(events[x], 'testTypeDispatcher');
};

//used to notify scriptloader that this script has finished loading
if(typeof eventManager != 'undefined'){
	console.log("DEBUG: added scriptloaded event for testTypeEvents.js");
	/*
	 * 
	 * e.g. if you were creating a quiz step it would look like
	 * 
	 * eventManager.fire('scriptLoaded', 'vle/node/quiz/quizEvents.js');
	 */
	eventManager.fire('scriptLoaded', 'vle/node/testType/testTypeEvents.js');
};