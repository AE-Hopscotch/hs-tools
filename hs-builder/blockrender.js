var hsBlocksHTML = "";

var blockLabels = {
	19: ["old","Wait til Timestamp","milliseconds"],
	22: ["old","\/\/"],
	23: ["move","Move Forward"," "],
	24: ["move","Turn", "degrees"],
	27: ["move","Change X", "by"],
	28: ["move","Change Y", "by"],
	29: ["old","Scale", "by"],
	30: ["draw","Clear"],
	31: ["draw","Set Trail Width", "to"],
	32: ["draw","Set Trail Color", "to"],
	33: ["looks","Change Pose"],
	34: ["move","Set Speed", "to"],
	35: ["old","Wait", "milliseconds"],
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
	61: ["ctrl","Wait","seconds"],
	62: ["looks","Start Sound"," ","wait"], //Start Sound Seconds
	26: ["draw","Draw a Trail","color","width"],
	120: ["ctrl","Repeat","times"],
	121: ["ctrl","Repeat Forever"],
	122: ["ctrl","Check Once If"," "],
	123: ["abl","Ability"],
	124: ["ctrl","Check If Else"," "],
	125: ["ctrl","Change Scene","to"],
	233: ["Random"],
	234: ["XPos"],
	235: ["YPos"],
	236: ["Random110"],
	237: ["Random1100"],
	238: ["Random11000"],
	239: ["Variable"],
	1e3: [" "," ","="],
	1001: [" "," ","\u2260"],
	1002: [" "," ","<"],
	1003: [" "," ",">"],
	1004: [" "," ","and"],
	1005: [" "," ","or"],
	1006: [" "," ","≥"],
	1007: [" "," ","≤"],
	1008: ["HS_END_OF_CONDITIONAL_OPERATORS"],
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
	2010: ["ZIndex"],
	2011: ["HS_END_OF_OBJECT_TRAITS"],
	3e3: ["\uD83D\uDCF1 Width"],
	3001: ["\uD83D\uDCF1 Height"],
	3002: ["\uD83D\uDCF1 Tilt Up %"],
	3003: ["\uD83D\uDCF1 Tilt Down %"],
	3004: ["\uD83D\uDCF1 Tilt Left %"],
	3005: ["\uD83D\uDCF1 Tilt Right %"],
	3006: ["\uD83D\uDCF1 Last Touch X"],
	3007: ["\uD83D\uDCF1 Last Touch Y"],
	3008: ["\uD83D\uDCF1 Total Objects"],
	3009: ["HS_END_OF_STAGE_TRAITS"],
	4e3: [" "," ","+"],
	4001: [" "," ","\u2212"],
	4002: [" "," ","\u00D7"],
	4003: [" "," ","\u00F7"],
	4004: ["\u2063 random"," ","to"],
	4005: [" "," ","^"],
	4006: ["\u2063 sqrt"," "],
	4007: ["\u2063 sin"," "],
	4008: ["\u2063 cos"," "],
	4009: ["\u2063 round"," "],
	4010: ["abs"," "],
	4011: [" "," ","%"],
	4012: ["\u2063 tan"," "],
	4013: ["\u2063 arcsin"," "],
	4014: ["\u2063 arccos"," "],
	4015: ["\u2063 arctan"," "],
	4016: ["\u2063 max"," "," "],
	4017: ["\u2063 min"," "," "],
	4018: ["HS_END_OF_MATH_OPERATORS"],
	5e3: ["ColorOperatorRandom"],
	5001: ["\u2063 ","R","G","B"],
	5002: ["\u2063 ","H","S","B"],
	5003: ["HS_END_OF_COLOR_OPERATORS"],
	6e3: ["Rule"], //Rule
	6001: ["RulePreview"], //Rule Preview
	7e3: ["game starts"], //Event operator start
	7001: [" ","is tapped"],
	7002: [" "," ","is touching"],
	7003: [" ","is pressed"],
	7004: ["EventOperatorTiltRight"],
	7005: ["EventOperatorTiltLeft"],
	7006: ["EventOperatorTiltUp"],
	7007: ["EventOperatorTiltDown"],
	7008: ["EventOperatorLoudNoise"],
	7009: ["\uD83D\uDCF1 is shaken"],
	7010: [" "," ","bumps"],
	7011: [" ","is swiped right"],
	7012: [" ","is swiped left"],
	7013: [" ","is swiped up"],
	7014: [" ","is swiped down"],
	7015: ["EventOperatorEnterTheWorld"], //Game starts?
	7016: ["EventOperatorTiltRightEditor"],
	7017: ["EventOperatorTiltLeftEditor"],
	7018: ["EventOperatorTiltUpEditor"],
	7019: ["EventOperatorTiltDownEditor"],
	7020: [" ","is not pressed"],
	7021: ["game is playing"],
	7022: ["touch ends"],
	7023: ["HS_END_OF_EVENT_OPERATORS"],
	8e3: ["<ps><i class=\"fa fa-fw fa-cubes\"></i></ps>"],
	8001: ["<i class=\"fa fa-fw fa-question-circle\"></i>"],
	8002: ["<i class=\"fa fa-fw fa-mobile\"></i> Edge"],
	8003: ["\u2063 \uD83D\uDCF1"],
	8004: ["<ps><span>Self</span></ps>"],
	8005: ["<ps><span>\u2063 Original Object \u2603</span></ps>"],
	8006: ["HS_END_OF_EVENT_PARAMETER_BLOCKS"]
}

function jsonToHtml(block, isNested) {
	isNested = isNested||false;console.log(isNested);
	//console.log(block);
	if (COUNT > 125) {
		alert("safety limit 125 reached. Please report the URL & ability.");
		return {innerHTML:""};//{"classList":elmClass||"","innerHTML":innerHTML};
	}
	COUNT ++;
	if (!isNested) nestedUuidList = [];
	if (/control/i.test(block.block_class)) var elmClass = "collapsible-container" + ((([26,30,31,32]).indexOf(block.type)!=-1)?" draw":((block.type==123)?" abl":""));
	var labels = blockLabels[block.type];
	var paramString = "";
	for (var i = 0; i < (block.parameters||[]).length; i++) {
		var p = block.parameters[i];
		function doParameter(d) {
			function hsvToRgb(str) {
				var arr = str.replace(/.*\(|\)/g,"").split(",");
				var h = Math.max(Number(arr[0])/360,0), s = Math.max(Number(arr[1])/100,0), v = Math.max(Number(arr[2])/100,0);
				var r, g, b;
				var i = Math.floor(h * 6); var f = h * 6 - i; var p = v * (1 - s); var q = v * (1 - f * s); var t = v * (1 - (1 - f) * s);
				switch (i % 6) {
					case 0: r = v, g = t, b = p; break; case 1: r = q, g = v, b = p; break; case 2: r = p, g = v, b = t; break; case 3: r = p, g = q, b = v; break; case 4: r = t, g = p, b = v; break; case 5: r = v, g = p, b = q; break;
				}
				return [ r * 255, g * 255, b * 255 ];
			}
			function getVar(id) {
				var name;
				hsProject.variables.forEach((v)=>{
					if (v.objectIdString == id) name = v.name;
				});
				return (name||"").htmlEscape()||"<span style=\"color:red;\">unknown</span>";
			}
			if (!d.datum) {
				return	(d.type == 44 && /HSB\(\s?(\-?[0-9]*?\.?[0-9]*?,?\s?){3}\)$/.test(d.value)) ? '<ps class="fw" style="background:rgb('+hsvToRgb(d.value)+')"></ps>'
						: "<ps><span" + ((d.type==51)?" title=\"This is a sound\" style=\"color:gray;\"":"") + ">\u2063 " + d.value.htmlEscape() + " \u2063</span></ps>";
			}
			//console.log(d.datum.block_class);
			if (d.datum.type == 5000) return "<ps><op class=\"rcol\"></op></ps>";
			if (d.datum.type == 8000 || (d.datum.type > 8002 && d.datum.type < 8006)) return "<ps><op class=\"val\">" + blockLabels[d.datum.type]+" "+getVar(d.datum.variable)+" \u2063</op></ps>";
			if (d.datum.HSTraitTypeKey >= 2e3 && d.datum.HSTraitTypeKey < 4e3) return "<ps><op class=\"otr\">" + (blockLabels[d.datum.HSTraitObjectParameterTypeKey]||"") + "\u2063 " + blockLabels[d.datum.HSTraitTypeKey] + " \u2063</op></ps>";
			if ((d.datum.type >= 1e3 && d.datum.type < 2e3)||(d.datum.type >= 4e3 && d.datum.type < 6e3)) {
				var i = 0; return "<ps><op class=\"" + ((d.datum.type < 2e3)?"cnd":"math") + " cm\">" + (blockLabels[d.datum.type][0]||d.datum.description||"") + d.datum.params.repeatEach((x)=>{i++;return (blockLabels[d.datum.type][i]||x.key||"") + doParameter(x);}).join("") + "</op></ps>";
			}
			if (!/operator/i.test(d.datum.block_class)) {
				//console.log(d.datum.block_class);
				return "<ps><op class=\"fw cm\">" + ((d.datum.type == 2e3)?"<i class=\"fa fa-photo\"></i>":"<img style=\"object-position:0 " + d.datum.type*-30 + "px\" src=\""+'../images/character_sprite_strip.png'+"\" width=\"36\"/>") + "</op></ps>";
			}
			return "<span style=\"color:#0CF\">unrecognized format</span>";
		}
		paramString += " " + (labels[i+2]||"") + " " + doParameter(p);
	};
	var innerHTML = `<bl class="${labels[0]}"><c>${((block.type==123)?block.description:labels[1])||block.description||""}${paramString}</c><b class="editbtn"></b><b class="handle"></b></bl>`;
	if (/control/i.test(block.block_class)){
		var nestedHTML = "<div class=\"collapsible\">", trueScript = (block.controlScript||{}).abilityID||"", falseScript = (block.controlFalseScript||{}).abilityID||"";
		//console.log(trueScript);
		//console.log(falseScript);
		var pAbilities = (hsProject.abilities||[]).repeatEach((a)=>{return JSON.stringify(a)}).join("\n")||"";
		(pAbilities.match(new RegExp('^.*"abilityID":"' + trueScript + '".*$',"gm"))||[]).forEach((a)=>{
			a = JSON.parse(a);
			if (a.abilityID != trueScript) return;
			if (a&&nestedUuidList.indexOf(trueScript)==-1) {
				nestedUuidList.push(a.abilityID);
				(a.blocks||[]).repeatEach((b)=>{
					//console.log(jsonToHtml(b));
					var blockInfo = jsonToHtml(b,true);
					nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '">' + blockInfo.innerHTML + "</div>";
					console.log('<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '">' + blockInfo.innerHTML );
				});
			} else {
				elmClass = elmClass.replace("collapsible-container","disabled");
			}
		});
		//console.log(nestedHTML);
		innerHTML = innerHTML.replace("<c>","<b class=\"openbtn\"></b><c>") + nestedHTML + "</div>";
		if (block.type == 124) {
			var nestedHTML = "<div class=\"collapsible\">";
			pAbility = JSON.parse((pAbilities.match(new RegExp('^.*"abilityID":"' + falseScript + '".*$',"m"))||[])[0]||'""');
			(pAbilities.match(new RegExp('^.*"abilityID":"' + falseScript + '".*$',"gm"))||[]).forEach((a)=>{
				a = JSON.parse(a);
				if (a.abilityID != falseScript) return;
				if (a&&nestedUuidList.indexOf(falseScript)==-1) {
					nestedUuidList.push(a.abilityID);
					(a.blocks||[]).repeatEach((b)=>{
						var blockInfo = jsonToHtml(b,true);
						nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '">' + blockInfo.innerHTML + "</div>";
						console.log(nestedHTML);
					});
				} else {
					elmClass = elmClass.replace("collapsible-container ","");
				}
			});
			innerHTML = innerHTML + nestedHTML + "</div>";
		}
		//console.log(nestedUuidList);
	}
	return {"classList":elmClass||"","data":JSON.stringify(block),"innerHTML":innerHTML};
}
