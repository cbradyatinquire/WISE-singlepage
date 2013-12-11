console.log("DEBUG:  loading setup.js...");

var coreScripts = [
    /*
 	 * Note path. 
     * For example if you are creating a quiz node you would change it to
     * 'vle/node/quiz/QuizNode.js'
     */
	'vle/node/testType/TestTypeNode.js',
	/*
     * 
     * For example if you are creating a quiz node you would change it to
     * 'vle/node/quiz/QuizEvents.js'
	 */
	'vle/node/testType/testTypeEvents.js',
	/*
	 * note: adding jquery version used elsewhere in the VLE
	 */
	scriptloader.jquerySrc,
	scriptloader.jqueryUISrc
];

var studentVLEScripts = [
	scriptloader.jquerySrc,
	scriptloader.jqueryUISrc,
 	/*
     * TODO: rename testType
     * TODO: rename testType.js
     * 
     * For example if you are creating a quiz node you would change it to
     * 'vle/node/quiz/quiz.js'
	 */
	'vle/node/testType/testType.js',
	/*
     * NOTE PATH 
     * For example if you are creating a quiz node you would change it to
     * 'vle/node/quiz/quizState.js'
	 */
	'vle/node/testType/testTypeState.js'
];

var authorScripts = [
	/*
	 * NOTE PATH:
	 * For example if you are creating a quiz node you would change it to
	 * 'vle/node/quiz/authorview_quiz.js'
	 */
	'vle/node/testType/authorview_testType.js'
];

var gradingScripts = [
  	/*
	 * NOTE PATH:
	 * For example if you are creating a quiz node you would change it to
	 * 'vle/node/quiz/quizState.js'
	 */
	'vle/node/testType/testTypeState.js'
];

var dependencies = [
  	/*
	 * NOTE PATH: 
	 * For example if you are creating a quiz node you would change it to
	 * 'vle/node/quiz/QuizNode.js'
	 */
	{child:"vle/node/testType/TestTypeNode.js", parent:["vle/node/Node.js"]}
];

/*
 * NOTE PATH
 * For example if you are creating a quiz node and you want to use custom icons,
 * you would change it to 'quiz' and replace the 'testType16.png' and 'testType28.png'
 * files in the node's 'icons' directory with 'quiz16.png' and 'quiz28.png' 
 * (the icons should be png files with 16x16 and 28x28 pixels respectively)
 * 
 * NOTE
 * For example if you are creating a quiz node you would change it to
 * 'Quiz'
 * 
 * If you want to provide authors with multiple icon options for this node type,
 * add another entry to the nodeClasses array and add the corresponding icons
 * (using that nodeClass in the filenames) to the 'icons' directory
 */
var nodeClasses = [
	{nodeClass:'testType', nodeClassText:'TestType'}
];

/*
 * NOTE PATH
 */
var nodeIconPath = 'node/testType/icons/';
componentloader.addNodeIconPath('TestTypeNode', nodeIconPath);

scriptloader.addScriptToComponent('core', coreScripts);
scriptloader.addScriptToComponent('core_min', coreScripts);

/*
 * NOTE NAME
 * 
 * For example if you are creating a quiz node you would change it to
 * 'quiz'
 */
scriptloader.addScriptToComponent('testType', studentVLEScripts);

scriptloader.addScriptToComponent('author', authorScripts);
scriptloader.addScriptToComponent('studentwork', gradingScripts);
scriptloader.addScriptToComponent('studentwork_min', gradingScripts);

scriptloader.addDependencies(dependencies);

/*
 * NOTE NAME
 * 
 * For example if you are creating a quiz node you would change it to
 * 'QuizNode'
 */
componentloader.addNodeClasses('TestTypeNode', nodeClasses);

/*
 * NOTE PATH
 * 
 * For example if you are creating a quiz node you would change it to
 * 'vle/node/quiz/quiz.css'
 */
var css = [
       	"vle/node/testType/testType.css"
];

/*
 * NOTE NAME
 * 
 * For example if you are creating a quiz node you would change it to
 * 'quiz'
 */
scriptloader.addCssToComponent('testType', css);

var nodeTemplateParams = [
	{
		/*
		 * NOTE file path value
		 * 
		 * For example if you are creating a quiz node you would change it to
		 * 'node/quiz/quizTestType.qz'
		 */
		nodeTemplateFilePath:'node/testType/testTypeTemplate.tt',
		
		/*
		 * NOTE the extension value for your step type, the value of the
		 * extension is up to you, we just use it to easily differentiate between
		 * different step type files
		 * 
		 * For example if you are creating a quiz node you would change it to
		 * 'qz'
		 */
		nodeExtension:'tt'
	}
];

/*
 * NOTE NAME
 * For example if you are creating a quiz node you would change it to
 * 'QuizNode'
 */
componentloader.addNodeTemplateParams('TestTypeNode', nodeTemplateParams);

//used to notify scriptloader that this script has finished loading
if(typeof eventManager != 'undefined'){
	console.log("DEBUG:  sending notice to eventManager from setup.js...");
	
	/*
	 * NOTE PATH
	 * 
	 * For example if you were creating a quiz step it would look like
	 * 
	 * eventManager.fire('scriptLoaded', 'vle/node/quiz/setup.js');
	 */
	eventManager.fire('scriptLoaded', 'vle/node/testType/setup.js');
};