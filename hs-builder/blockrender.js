var hsBlocksHTML = "";

const blockLabels = {
	19: ["old","Wait til Timestamp","milliseconds"],
	20: ["old","\u2063"], //Wait til Input Done
	22: ["old","\u2063"],
	23: ["move","Move Forward"," "],
	24: ["move","Turn", "degrees"],
	26: ["draw","Draw a Trail","color","width"],
	27: ["move","Change X", "by"],
	28: ["move","Change Y", "by"],
	29: ["old","Scale", "by"],
	30: ["draw","Clear"],
	31: ["draw","Set Trail Width", "to"],
	32: ["draw","Set Trail Color", "to"],
	33: ["looks","Change Pose"],
	34: ["move","Set Speed", "to"],
	35: ["ctrl","Wait", "milliseconds"],
	36: ["old","Set Opacity", "to"],
	37: ["old","Pen Down"],
	38: ["old","Pen Up"],
	39: ["move","Set Angle"," "],
	40: ["looks","Set Text","to","color"],
	41: ["move","Set Position","to x","y"],
	42: ["looks","Send To Back"],
	43: ["looks","Bring To Front"],
	44: ["var","Increase"," ","by"],
	45: ["var","Set"," ","to"],
	46: ["old","Move With Trail","distance"],
	47: ["looks","Set Invisibility","percent"],
	48: ["looks","Grow","by percent"],
	49: ["looks","Shrink","by percent"],
	50: ["move","Flip"],
	51: ["looks","Set Size","percent"],
	52: ["looks","Start Sound"," ","wait"],
	53: ["ctrl","Create a Clone of This Object","times"],
	54: ["looks","Set Color"," "],
	55: ["ctrl","Destroy"],
	56: ["looks","Set Image"," "],
	57: ["looks","Set","width","height"],
	58: ["looks","Set Z Index"," "],
	59: ["move","Set Origin","to x","y"],
	60: ["move","Set Center","to x","y"],
	61: ["ctrl","Wait","seconds"],
	62: ["looks","Start Sound"," ","wait"], //Start Sound Seconds
	63: ["var","Save Input"," ","prompt"],
	64: ["looks","Set Text to Input","color"],
	65: ["looks","Play Note"," ","rhythm"],
	66: ["looks","Set Tempo"," "],
	67: ["looks","Set Instrument"," "],
	120: ["ctrl","Repeat","times"],
	121: ["ctrl","Repeat Forever"],
	122: ["ctrl","Check Once If"," "],
	123: ["abl","Ability"],
	124: ["ctrl","Check If Else"," "],
	125: ["ctrl","Change Scene","to"],
	126: ["ctrl","Broadcast Message","named"],
	127: ["ctrl","Request Seeds"," ","for"],
	233: ["Random"],
	234: ["XPos"],
	235: ["YPos"],
	236: ["Random110"],
	237: ["Random1100"],
	238: ["Random11000"],
	239: ["Variable"],
	1e3: ["conditional"," "," ","="],
	1001: ["conditional"," "," ","\u2260"],
	1002: ["conditional"," "," ","<"],
	1003: ["conditional"," "," ",">"],
	1004: ["conditional"," "," ","and"],
	1005: ["conditional"," "," ","or"],
	1006: ["conditional"," "," ","\u2265"],
	1007: ["conditional"," "," ","\u2264"],
	1008: ["conditional"," "," ","matches"],
	1009: ["HS_END_OF_CONDITIONAL_OPERATORS"],
	2e3: ["Rotation"],
	2001: ["X Position"],
	2002: ["Y Position"],
	2003: ["Invisibility as a %"],
	2004: ["Size as a %"],
	2005: ["Speed"],
	2006: ["Clone Index"],
	2007: ["Total Clones"],
	2008: ["Width"],
	2009: ["Height"],
	2010: ["Z Index"],
	2011: ["Origin X"],
	2012: ["Origin Y"],
	2013: ["Center X"],
	2014: ["Center Y"],
	2015: ["Text"],
	2016: ["HS_END_OF_OBJECT_TRAITS"],
	2500: ["\uD83D\uDCF1 Username"],
	2501: ["\uD83D\uDCF1 Time"],
	2502: ["\uD83D\uDCF1 Year"],
	2503: ["\uD83D\uDCF1 Month"],
	2504: ["\uD83D\uDCF1 Day"],
	2505: ["\uD83D\uDCF1 Hour"],
	2506: ["\uD83D\uDCF1 Minute"],
	2507: ["\uD83D\uDCF1 Second"],
	2508: ["HS_END_OF_USER_TRAITS"],
	3e3: ["\u25B6\uFE0F Width"],
	3001: ["\u25B6\uFE0F Height"],
	3002: ["\u25B6\uFE0F Tilt Up %"],
	3003: ["\u25B6\uFE0F Tilt Down %"],
	3004: ["\u25B6\uFE0F Tilt Left %"],
	3005: ["\u25B6\uFE0F Tilt Right %"],
	3006: ["\u25B6\uFE0F Last Touch X"],
	3007: ["\u25B6\uFE0F Last Touch Y"],
	3008: ["\u25B6\uFE0F Total Objects"],
	3009: ["HS_END_OF_STAGE_TRAITS"],
	4e3: ["math"," "," ","+"],
	4001: ["math"," "," ","\u2212"],
	4002: ["math"," "," ","\u00D7"],
	4003: ["math"," "," ","\u00F7"],
	4004: ["math","\u2063 random"," ","to"],
	4005: ["math"," "," ","^"],
	4006: ["math","\u2063 \u221A"," "],
	4007: ["math","\u2063 sin"," "],
	4008: ["math","\u2063 cos"," "],
	4009: ["math","\u2063 round"," "],
	4010: ["math","\u2063 absolute value"," "],
	4011: ["math"," "," ","%"],
	4012: ["math","\u2063 tan"," "],
	4013: ["math","\u2063 arcsin"," "],
	4014: ["math","\u2063 arccos"," "],
	4015: ["math","\u2063 arctan"," "],
	4016: ["math","\u2063 max"," "," "],
	4017: ["math","\u2063 min"," "," "],
	4018: ["math","\u2063 floor"," "," "],
	4019: ["math","\u2063 ceil"," "," "],
	4020: ["HS_END_OF_MATH_OPERATORS"],
	5e3: ["ColorOperatorRandom"],
	5001: ["color","\u2063 ","R","G","B"],
	5002: ["color","\u2063 ","H","S","B"],
	5003: ["HS_END_OF_COLOR_OPERATORS"],
	6e3: ["rule","When"], //Rule
	6001: ["RulePreview"], //Rule Preview
	7e3: ["event","\u2063 game starts \u2063"], //Event operator start
	7001: ["event","is tapped \u2063"," "],
	7002: ["event"," "," ","is touching"],
	7003: ["event","is pressed \u2063"," "],
	7004: ["event","Tilted Right"], //EventOperatorTiltRight
	7005: ["event","Tilted Left"], //EventOperatorTiltLeft
	7006: ["event","Tilted Up"], //EventOperatorTiltUp
	7007: ["event","Tilted Down"], //EventOperatorTiltDown
	7008: ["event","\u2063 \uD83D\uDCF1 hears a loud noise \u2063"],
	7009: ["event","\u2063 \uD83D\uDCF1 is shaken \u2063"],
	7010: ["event"," "," ","bumps"],
	7011: ["event","is swiped right \u2063"," "],
	7012: ["event","is swiped left \u2063"," "],
	7013: ["event","is swiped up \u2063"," "],
	7014: ["event","is swiped down \u2063"," "],
	7015: ["event","\u2063 object is cloned \u2063"], //Enter the World
	7016: ["event","Editor Tilt Right \u2063"], //EventOperatorTiltRightEditor
	7017: ["event","Editor Tilt Left \u2063"], //EventOperatorTiltLeftEditor
	7018: ["event","Editor Tilt Up \u2063"], //EventOperatorTiltUpEditor
	7019: ["event","Editor Tilt Down \u2063"], //EventOperatorTiltDownEditor
	7020: ["event","is not pressed \u2063"," "],
	7021: ["event","\u2063 game is playing \u2063"],
	7022: ["event","\u2063 touch ends \u2063"],
	7023: ["event"," ","\u2063 I get a message \u2063"],
	7024: ["event"," ","\u2063 Message matches \u2063"],
	7025: ["HS_END_OF_EVENT_OPERATORS"],
	8e3: ["<ps><span><i class=\"fa fa-fw fa-cubes\"></i> Object</span></ps>"],
	8001: ["<i class=\"fa fa-fw fa-question-circle\"></i> Anything"],
	8002: ["<i class=\"fa fa-mobile\"></i> Edge"],
	8003: ["\u2063 \u25B6\uFE0F"], //Game
	8004: ["<ps><span>Self</span></ps>"],
	8005: ["<ps><span>\u2063 Original Object \u2063</span></ps>"],
	8006: ["\u2063 \uD83D\uDCF1"], //Local
	8007: ["\u2063 \uD83D\uDCF1"], //User
	8008: ["HS_END_OF_EVENT_PARAMETER_BLOCKS"],
	9000: ["looks", "\u2063 character", "in", "at"],
	9001: ["looks", "\u2063 characters", "in", "between", "and"],
	9002: ["looks", "\u2063 length"],
	9003: ["HS_END_OF_TEXT_OPERATOR_BLOCKS"]
}
const charLabels = {
	0: "monkey",
	1: "text",
	2: "octopus",
	3: "gorilla",
	4: "cupcake",
	5: "bear",
	6: "dino",
	7: "frog",
	8: "greenman",
	9: "mustache",
	10: "spacepod",
	11: "zombieBear",
	12: "ghoulopus",
	13: "bats",
	14: "frankenrilla",
	15: "jodyWitch",
	16: "cauldron",
	17: "pumpkin",
	18: "broom",
	19: "lantern",
	20: "parrotFlying",
	21: "mandrill",
	22: "mosquito",
	23: "missChief",
	24: "venus",
	25: "jeepers",
	26: "banyan",
	27: "stargirl",
	28: "astro",
	29: "chillanna",
	30: "robo",
	31: "raccoon",
	32: "bird",
	33: "HS_END_OF_CHARACTERS",
	34: "square",
	35: "circle",
	36: "hexagon",
	37: "triangle",
	38: "rightTriangle",
	39: "rectangle",
	40: "heart",
	41: "star",
	42: "arch",
	43: "parallelogram",
	44: "squiggle",
	45: "donut",
	46: "tetrisZ",
	47: "tetrisT",
	48: "tetrisL",
	49: "corner",
	50: "flower",
	51: "threeProngedBoomerang",
	52: "squishedBox",
	53: "bead",
	54: "chevron",
	55: "xShape",
	56: "tetrisLine",
	57: "HS_END_OF_SHAPES",
	58: "toucan",
	59: "anteater",
	60: "crocodile",
	61: "sloth",
	62: "iguana",
	63: "hut",
	64: "penguin",
	65: "winterQueen",
	66: "shyYeti",
	67: "deer",
	68: "elf",
	69: "snowGlobe",
	70: "polarbear",
	71: "sleigh",
	72: "mistletoe",
	73: "snowMan",
	74: "snowflake",
	100: "roundedSquareFullSize",
	101: "squareFullSize",
	102: "circleFullSize",
	103: "hexagonFullSize",
	104: "triangleFullSize",
	105: "rightTriangleFullSize",
	106: "rectangleFullSize",
	107: "heartFullSize",
	108: "starFullSize",
	109: "archFullSize",
	110: "parallelogramTallFullSize",
	111: "squiggleFullSize",
	112: "donutFullSize",
	113: "tetrisZFullSize",
	114: "tetrisTFullSize",
	115: "tetrisLFullSize",
	116: "cornerFullSize",
	117: "flowerFullSize",
	118: "fanbladeFullSize",
	119: "squishedBoxFullSize",
	120: "roundedRightTriangleFullSize",
	121: "arrowRoundedFullSize",
	122: "beadFullSize",
	123: "parallelogramWideFullSize",
	124: "chevronFullSize",
	125: "xFullSize",
	126: "tetrisLineFullSize",
	150: "hexagonV3",
	151: "triangleV3",
	152: "rectangleV3",
	153: "heartV3",
	154: "starV3",
	155: "archV3",
	156: "squiggleV3",
	157: "tetrisZV3",
	158: "tetrisTV3",
	159: "tetrisLV3",
	160: "fanbladeV3",
	161: "arrowRoundedV3",
	162: "beadV3",
	163: "parallelogramWideV3",
	164: "chevronV3",
	165: "HS_END_OF_FULL_SIZE_SHAPES",
	166: "HS_NUMBER_OF_OBJECTS",
	2e3: "image",
	3e3: "HS_START_OF_CHARACTERS2",
	3001: "crocodileJaws",
	3002: "lanternFullSize",
	3003: "HS_END_OF_CHARACTERS2",
	1e4: "nil",
	3e4: "edgeOfScreen"
}
const paramTypes = {
	42: "Default",
	43: "LineWidth",
	44: "LineColor",
	45: "RandomLow",
	46: "RandomHigh",
	47: "Variable",
	48: "VariableValue",
	49: "Conditional",
	50: "HSObject",
	51: "Sound",
	52: "Event",
	53: "SetText",
	54: "Object",
	55: "TextOnly",
	56: "Scene",
	57: "Multi\u200BPurpose\u200BNumber\u200BDefault",
	58: "Product",
	59: "Rhythm",
	60: "MusicNote",
	61: "Instrument"
}

function isFalseScript (container) {
	isFalse = false;
	if (container && container.previousElementSibling) {
		//If it is a false script (is the second collapsible)
		isFalse = container.previousElementSibling.classList.contains("collapsible");
	}
	return isFalse;
}

var oldProjAlerted = false;
function jsonToHtml(block, isNested, keepClosed) {
	isNested = isNested||false;
	keepClosed = keepClosed||false;
	
	var sortGroup = "blocks";
	var block_parent = activeEditBlock;
	if (block_parent && block_parent.parentNode && block_parent.parentNode.parentNode && document.querySelector(".edit-box").style.display=="block") {
		var myBlockType = (block_parent.parentNode.id == "blocks-container")?document.getElementById("blocks-container").getAttribute("data-group"):block_parent.parentNode.parentNode.getAttribute("data-group");
	}
	if (block.scripts) {
		if (!oldProjAlerted) alert("The block renderer cannot fully render old project formats yet")
		oldProjAlerted = true;
	}
	
	//Convert object, rule, and custom rule strings to blocks
	if (typeof block == "string" && (!myBlockType||myBlockType == "rules"||(keepClosed&&arguments.callee.caller.name!="editsave"))) {
		block = projectDict.rules[block]||block;
		
		//If it is a custom rule or an object
		if (typeof block == "string") {
			block = projectDict.customRules[block]||block;
		}
	}
	//If it is an object
	if (typeof block == "string" && (!myBlockType||myBlockType == "objects"||(keepClosed&&arguments.callee.caller.name!="editsave"))) {
		block = projectDict.objects[block]||block;
	}
	//Set data of objects
	if (block.xPosition!=undefined) {
		block.block_class = "control";
		block.parameters = [{
			"datum": {
				"type": block.type,
				"text": block["text"]
			}
		}];
	}
	//Change the container type for rules, custom rules, objects, and scenes
	if (block.ruleBlockType && !block.type) block.type = block.ruleBlockType;
	if (block.abilityID && !block.controlScript) {
		block.controlScript = {abilityID:block.abilityID};
		block.block_class = "control";
	} else if (block.rules) {
		block.block_class = "control";
		sortGroup = "rules";
	} else if (block.objects) {
		block.block_class = "control";
		sortGroup = "objects";
	}
	
	var parentUids = [];
	if (activeEditBlock) {
		var myData = JSON.parse(activeEditBlock.getAttribute("data"));
		if (myData) var myScripts = (myData.controlScript) ? new RegExp (("^("+myData.controlScript.abilityID+"|"+(myData.controlFalseScript||{abilityID:""}).abilityID).replace(/\|$/,"")+")$","m"):/$.^/;
	}
	while (block_parent && !block_parent.classList.value.match(/\b(crule|obj)\b/) && block_parent != document.getElementById("blocks-container-resizer")) {
		//Check if a block is nested
		var isFalse = isFalseScript(block_parent.parentNode);
		block_parent = (block_parent.parentNode||{parentNode:null}).parentNode||document.getElementById("blocks-container-resizer");
		if (block_parent && !block_parent.classList.value.match(/\b(crule|obj)\b/) && block_parent != document.getElementById("blocks-container-resizer") && myScripts.test( (JSON.parse(block_parent.getAttribute("data"))[(isFalse)?"controlFalseScript":"controlScript"]||{abilityID: JSON.parse(block_parent.getAttribute("data")).abilityID}).abilityID )) isNested = true;
	}
	
	if (JSON.stringify(block) == "{}") {
		return {innerHTML:""};
	}
	COUNT ++; //This is just a testing feature to see how many times this function has been run
	if (!isNested) nestedUuidList = [];
	if (/control/i.test(block.block_class)) var elmClass = "collapsible-container" + ((([26,30,31,32]).indexOf(block.type)!=-1&&block.xPosition==undefined)?" draw":((block.type==123&&block.xPosition==undefined)?" abl":((block.type==6000&&block.xPosition==undefined)?" rule":(block.xPosition!=undefined?" obj":block.rules?" crule":(block.objects?" scn":"")))));
	var labels = (block.xPosition!=null?["obj"]:blockLabels[block.type]||(block.rules?["crule"]:(block.objects?["scn"]:[])));
	var paramString = "";
	for (var i = 0; i < (block.parameters||[]).length; i++) {
		var p = block.parameters[i];
		function doParameter(d) {
			function hsvToRgb(str) {
				var arr = str.replace(/.*\(|\)/g,"").split(",");
				var h = Math.max((Number(arr[0]))/360,0), s = Math.max((Number(arr[1])%101)/100,0), v = Math.max((Number(arr[2])%101)/100,0);
				var r, g, b;
				var i = Math.floor(h * 6); var f = h * 6 - i; var p = v * (1 - s); var q = v * (1 - f * s); var t = v * (1 - (1 - f) * s);
				switch (i % 6) {
					case 0: r = v, g = t, b = p; break; case 1: r = q, g = v, b = p; break; case 2: r = p, g = v, b = t; break; case 3: r = p, g = q, b = v; break; case 4: r = t, g = p, b = v; break; case 5: r = v, g = p, b = q; break;
				}
				return [ Math.round(r*255), Math.round(g*255), Math.round(b*255) ];
			}
			function getVar(id) {
				var name = (projectDict.variables[id]||{}).name;
				return (name||"").htmlEscape()||"<span style=\"color:red;\">unknown</span>";
			}
			function getTrait(id) {
				var name = (blockLabels[(projectDict.traits[id]||{}).HSTraitTypeKey]||[])[0];
				return (name||"").htmlEscape()||"<span style=\"color:red;\">unknown</span>";
			}
			if (!d.datum) {
				if (d.type != 50 && d.value !== String(d.value)) return console.warn("Values must be strings")||"<ps><span></span></ps>";
				if (d.type == 44 && /HSB\(\s?(\-?[0-9]*?\.?[0-9]*?,?\s?){3}\)$/.test(d.value) && !d.variable) {
					return '<ps class="fw" style="background-color:rgb('+hsvToRgb(d.value)+')"></ps>'
				} else {
					switch (d.type) {
						case 50:
							var ep = projectDict.eventParameters[d.variable]||{};
							ep.type = ep.type||ep.blockType;
							if (ep.type == 8e3){
								var o = projectDict.objects[ep.objectID];
								if (o && o.type) {
									var innerText = "<ps>" + (o.type == 1 ? '<img width="36" src="../images/character_sprite_strip.png" style="object-position:0 -30px"/>' : doParameter({"datum":{"type":o.type}}).match(/<i class="fa fa-photo".*?<\/i>|<img style="object-position.*?\/>/)[0]) + o.name + " \u2063 \u2063</ps>";
								} else {
									console.log("no type", o);//var innerText = "<ps><op class=\"val\">\u2063 THIS ONE" + (getVar(d.variable)||"TEST") + " \u2063</op></ps>";
								}
							} else {
								var innerText = "<ps><span>" + (ep.description||blockLabels[(projectDict.eventParameters[ep.id]||{}).type]) + "</span></ps>";
							}
							return innerText;
						default:
							if (d.variable) {
								var vClass = "val";
								var o = projectDict.objects[(projectDict.variables[d.variable]||{}).objectIdString]||projectDict.objects[(projectDict.variables[d.variable]||{}).HSObjectIDString], objectLabel = "";
								if (!o) o = projectDict.objects[(projectDict.traits[d.variable]||{}).HSTraitObjectIDKey];
								vClass = (getTrait(d.variable)!='<span style="color:red;">unknown</span>') ? "otr" : "val";
								if (typeof o == "object") objectLabel = "\u2063 " + (o.type == 1 ? '<img width="36" src="../images/character_sprite_strip.png" style="object-position:0 -30px"/>' : doParameter({"datum":{"type":o.type}}).match(/<i class="fa fa-photo".*?<\/i>|<img style="object-position.*?\/>/)[0]) + o.name + " \u2063";
								return "<ps><op class=\"" + vClass + "\">\u2063" + objectLabel + " " + (getTrait(d.variable)!='<span style="color:red;">unknown</span>'?getTrait(d.variable):getVar(d.variable)) + " \u2063</op></ps>";
							}
							return "<ps><span" + ((d.type==51)?" title=\"This is a sound\" style=\"color:gray;\"":"") + ">\u2063 " + d.value.replace(/\n(.|\n)*/g,"").htmlEscape() + " \u2063</span></ps>";
					}
				}
			}
			//Traits
			if (d.datum.HSTraitTypeKey >= 2e3 && d.datum.HSTraitTypeKey < 4e3) {
				var objectLabel = objectLabel = (blockLabels[d.datum.HSTraitObjectParameterTypeKey]||"");
				if (d.datum.HSTraitObjectParameterTypeKey==8e3) {
					var o = projectDict.objects[d.datum.HSTraitObjectIDKey]||{"name":"Object"};
					objectLabel = "<ps>" + (o.type == 1 ? '<img width="36" src="../images/character_sprite_strip.png" style="object-position:0 -30px"/>' : doParameter({"datum":{"type":o.type}}).match(/<i class="fa fa-photo".*?<\/i>|<img style="object-position.*?\/>/)[0]) + o.name + " \u2063 \u2063</ps>";
				}
				return "<ps><op class=\"otr\">" + objectLabel + "\u2063 " + blockLabels[d.datum.HSTraitTypeKey] + " \u2063</op></ps>";
			}
			//Variables
			if (d.datum.type == 8e3 || (d.datum.type > 8002 && d.datum.type < 8008)) {
				var objectLabel = blockLabels[d.datum.type][0];
				if (d.datum.type == 8e3) {
					var o = projectDict.objects[d.datum.object];
					objectLabel = "<ps>" + (o.type == 1 ? '<img width="36" src="../images/character_sprite_strip.png" style="object-position:0 -30px"/>' : doParameter({"datum":{"type":o.type}}).match(/<i class="fa fa-photo".*?<\/i>|<img style="object-position.*?\/>/)[0]) + o.name + " \u2063 \u2063</ps>";
				}
				return "<ps><op class=\"val\">" + objectLabel + " " + getVar(d.datum.variable) + " \u2063</op></ps>";
			}
			//Products
			if (d.datum.type == 8008) {
				return "<ps><op class=\"prod\">\u2063 \uD83C\uDF81 " + getVar(d.datum.variable) + " \u2063</op></ps>";
			}
			//Images (no block class)
			if (!/operator/i.test(d.datum.block_class)) {
				if (d.datum.type == 1) {
					return "<ps><op class=\"cm\">\u2063 Text <ps><span>" + d.datum["text"].replace(/\n(.|\n)*/g,"") + "</span></ps></op></ps>";
				} else {
					return "<ps><op class=\"fw cm\">" + ((d.datum.type == 2e3)?"<i class=\"fa fa-photo\"></i>":"<img style=\"object-position:0 " + (d.datum.type<166||d.datum.type>3e3?d.datum.type-2835*(d.datum.type>=3e3):-1)*-30 + "px\" src=\"../images/character_sprite_strip.png\" width=\"36\"/>") + "</op></ps>";
				}
			}
			//Random Color
			if (d.datum.type == 5000) return "<ps><op class=\"rcol\"></op></ps>";
			//None Block, Math, Conditionals, Game Rules, Text Operators
			if (d.datum.type < 2e3||(d.datum.type >= 4e3 && d.datum.type < 6e3)||(d.datum.type >= 7e3 && d.datum.type < 8e3)||(d.datum.type >=9e3 && d.datum.type < 10e3)) {
				var isRule = (d.datum.type >= 7e3 && d.datum.type < 8e3), isTextOp = (d.datum.type >= 9e3 && d.datum.type < 10e3);
				var i = 0; return "<ps><op class=\"" + ((d.datum.type < 2e3)?"cnd":(isRule?"":(isTextOp?"looks":"math"))) + (isTextOp?"":" cm") + "\">" + (isRule?"":(blockLabels[d.datum.type]||[])[1]||d.datum.description||"").htmlEscape() + " " + (d.datum.params||[]).repeatEach((x)=>{i++;return (blockLabels[d.datum.type][i+1]||x.key||"").htmlEscape() + doParameter(x);}).join("") + (isRule?blockLabels[d.datum.type][1]:"") + "</op></ps>";
			}
			return "<span style=\"color:#0CF\">unrecognized format</span>";
		}
		paramString += " " + (labels[i+2]||p.key||"").htmlEscape() + " " + doParameter(p);
	};
	var innerHTML = `<bl class="${labels[0]}"><c>${((block.type==123&&!block.rules)?/*(projectDict.abilities[block.controlScript.abilityID]||{"name":null}).name||*/(block.description||(block.controlScript&&block.controlScript.abilityID?(projectDict.abilities[block.controlScript.abilityID]||{"name":null}).name:"")||"").htmlEscape():((block.rules||block.xPosition!=null||block.objects)?block.name:labels[1]))||(block.description||"").htmlEscape()}${paramString}</c><b class="editbtn"></b><b class="handle"></b></bl>`;
	if (/control/i.test(block.block_class)){
		var nestedHTML = "<div class=\"collapsible\">",
			trueScript = (block.controlScript||{}).abilityID||"",
			falseScript = (block.controlFalseScript||{}).abilityID||"",
			addedToHtml = false;
		if (!trueScript && block.rules) {
			//Handle Objects and Custom Rules
			addedToHtml = true;
			if (!keepClosed) {
				(Object.keys(block.rules||{})||[]).repeatEach(rule=>{
					r = block.rules[rule];
					nestedUuidList.push(r);
					var blockInfo = jsonToHtml(r,true,true);
					nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '" data-id="' + blockInfo.id + '" data-group="' + blockInfo.sortGroup + '">' + blockInfo.innerHTML + "</div>";
				});
			} else {
				elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
			}
		} else if (!trueScript && block.objects){
			//Handle objects inside of scenes
			addedToHtml = true;
			if (!keepClosed) {
				(block.objects||[]).repeatEach((o)=>{
					nestedUuidList.push(o);
					var blockInfo = jsonToHtml(o,true,true);
					nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '" data-id="' + blockInfo.id + '" data-group="' + blockInfo.sortGroup + '">' + blockInfo.innerHTML + "</div>";
				});
			} else {
				elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
			}
		}
		var a = projectDict.abilities[trueScript];
		if (a){
			if (a&&nestedUuidList.indexOf(trueScript)==-1) addedToHtml = true;
			if (!keepClosed&&a&&nestedUuidList.indexOf(trueScript)==-1) {
				nestedUuidList.push(a.abilityID);
				
				(Object.keys(a.blocks||{})).repeatEach((k)=>{
					var b = a.blocks[k]||{};
					var blockInfo = jsonToHtml(b,true,(b.type==123));
					if (blockInfo.innerHTML) nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '" data-id="' + blockInfo.id + '" data-group="' + blockInfo.sortGroup + '">' + blockInfo.innerHTML + "</div>";
				});
				
			} else {
				elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
			}
		}
		if (!addedToHtml&&(trueScript||block.rules||block.text!=null&&block.objectID)&&block) {
			var blockInfo = jsonToHtml({},true,keepClosed);
			if (keepClosed) elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
		}
		addedToHtml = false;
		innerHTML = innerHTML.replace("<c>","<b class=\"openbtn\"></b><c>") + nestedHTML + "</div>";
		if (block.type == 124) {
			var nestedHTML = "<div class=\"collapsible\">";
			var a = projectDict.abilities[falseScript];
			if (a) {
				if (!keepClosed&&a&&nestedUuidList.indexOf(falseScript)==-1) {
					addedToHtml = true;
					nestedUuidList.push(a.abilityID);
					(Object.keys(a.blocks)||[]).repeatEach((k)=>{
						var b = a.blocks[k]||{};
						var blockInfo = jsonToHtml(b,true,(b.type==123));
						nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '" data-id="' + blockInfo.id + '" data-id="' + blockInfo.id + '" data-group="' + blockInfo.sortGroup + '">' + blockInfo.innerHTML + "</div>";
					});
				} else {
					elmClass = elmClass.replace("collapsible-container ","");
				}
			}
			innerHTML = innerHTML + nestedHTML + "</div>";
		}
		if (!addedToHtml&&falseScript&&block) {
			var blockInfo = jsonToHtml({},true,keepClosed);
			if (keepClosed) elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
		}
		if (keepClosed) innerHTML = innerHTML.replace(/<div class="collapsible"><\/div>/g,"")
	}
	if (block.rules || block.objects || block.type == 6000) {
		delete block.controlScript;
		delete block.block_class;
		if (block.xPosition!=null) delete block.parameters;
	}
	block = Object.detach(block);
	var web_id = block.web_id;
	if (!block.objects) delete block.web_id;
	var cs = block.controlScript, myScripts = null;
	if (cs) myScripts = "(" + cs.abilityID + (block.controlFalseScript ? "|" + block.controlFalseScript.abilityID : "") + ")";
	return {"id":myScripts||web_id||block.id||block.objectID||"","classList":elmClass||"","data":JSON.stringify(block),"innerHTML":innerHTML,"sortGroup":sortGroup,"focusType":myBlockType,"scripts":myScripts};
}
