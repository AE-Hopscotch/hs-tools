if (typeof editor == "undefined") var editor = {};
const onIos = (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)||(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

const letterCasing = {
	dashedToTitle: function(string) {
		//Convert dashes and underscores to capital letters
		return string.replace(/(^\w)|[\-_](?![a-hj-zA-HJ-Z]\b|the|an|and|but|for|or|nor|of|in)(.)|([\-_])/g,function(m0, m1, m2, m3){return m1?m1.toUpperCase():m3?" ":" "+m2.toUpperCase();})
	},
	pascalToTitle: function(string) {
		//Converts pascal capitalization to title casing
		return string.replace(/(^\w)|([a-z])([A-Z])/g,function(m0,m1,m2,m3){return m1?m1.toUpperCase():m2+" "+m3;})
	}
};
let distributionCounts = {};
let projectQuickStats = {};
const bodyScroll = {
	enable: function(){
		document.body.style.overflow = "";
		document.body.style.touchAction = "";
		document.body.ontouchmove = (e) => {void(0);};
		document.querySelector(".fullscreen-elms").style.pointerEvents = "none";
	},
	disable: function(){
		document.body.style.overflow = "hidden";
		document.body.style.touchAction = "none";
		document.body.ontouchmove = (e) => {if(e.target.classList.contains("touch-scroll"))e.preventDefault()};
		document.querySelector(".fullscreen-elms").style.pointerEvents = "auto";
	},
	getX: function() {
		return (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft);
	},
	getY: function() {
		return (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop);
	},
	setX: function() {
		document.documentElement.style.setProperty("--scroll-x", (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft) + "px");
	},
	setY: function() {
		document.documentElement.style.setProperty("--scroll-y", (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) + "px");
	},
	coordsInterval: null
}
function uuidv4() {
	return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
if (onIos) {
	window.addEventListener("touchstart", function(){
		bodyScroll.coordsInterval = setInterval(function(){bodyScroll.setX();bodyScroll.setY();},5);
	})
	window.addEventListener("scroll", function(){
		if (bodyScroll.coordsInterval) clearInterval(bodyScroll.coordsInterval);
	})
}
window.addEventListener("scroll", function(e){
	bodyScroll.setX();
	bodyScroll.setY();
	if (document.body.style.overflow == "hidden") e.preventDefault();
})

let newestCreateDate = 0;
function getProjectDistributions(p) {
	distributionCounts = {
		blockCatgCounts: {},
		blockDescCounts: {},
		blockTypeCounts: {},
		totalBlockCount: 0,
		objectCharCounts: {},
		objectTypeCounts: {},
		operatorCatgCounts: {},
		operatorDescCounts: {},
		operatorTypeCounts: {},
		operatorBlockCount: 0,
		ruleDescCounts: {},
		ruleTypeCounts: {},
		abilitiesUseCount: {},
		cstmRulesUseCount: {},
		variablesUseCount: {},
		variablesTotalUse: 0,
		traitsTypeCounts: {},
		traitsTotalUsage: 0
		//Add traits some time
	};
	//Get the Ability Usage and Block Distribution within the project
	(p.abilities||[]).forEach(a=>{
		if (a.name && !distributionCounts.abilitiesUseCount[a.name]) distributionCounts.abilitiesUseCount[a.name] = 0;
		(JSON.stringify(a.blocks||[]).match(/"HSTraitTypeKey":[23]\d\d\d\D/g)||[]).forEach(tr=>{
			distributionCounts.traitsTotalUsage ++;
			distributionCounts.traitsTypeCounts[blockLabels[tr.match(/[23]\d\d\d/)[0]]] ? distributionCounts.traitsTypeCounts[blockLabels[tr.match(/[23]\d\d\d/)[0]]]++ : distributionCounts.traitsTypeCounts[blockLabels[tr.match(/[23]\d\d\d/)[0]]] = 1;
		});
		for (i = 0; i < (a.blocks||[]).length; i++) {
			b = a.blocks[i];
			//Get Ability Usage
			if (b.type === 123 && b.controlScript && b.controlScript.abilityID) hsProject.abilities.forEach(ability=>{if(ability.name&&ability.abilityID===b.controlScript.abilityID)distributionCounts.abilitiesUseCount[ability.name]?distributionCounts.abilitiesUseCount[ability.name]++:distributionCounts.abilitiesUseCount[ability.name]=1});
			//Get Block Type Distribution
			distributionCounts.totalBlockCount ++;
			const category = (blockLabels[b.type]||[])[0], name = (blockLabels[b.type]||[])[1];
			(distributionCounts.blockCatgCounts[category]) ? distributionCounts.blockCatgCounts[category]++ : distributionCounts.blockCatgCounts[category] = 1;	//Category
			(distributionCounts.blockDescCounts[name]) ? distributionCounts.blockDescCounts[name]++ : distributionCounts.blockDescCounts[name] = 1;				//Name
			(distributionCounts.blockTypeCounts[b.type]) ? distributionCounts.blockTypeCounts[b.type]++ : distributionCounts.blockTypeCounts[b.type] = 1;		//Type
			//Get Operator Count and Types
			distributionCounts.operatorBlockCount += (JSON.stringify(b).match(/"block_class":"(?:conditional)?[oO]perator"/g)||[]).length;
			JSON.stringify(b).replace(/.*?"block_class":"(?:conditional)?[oO]perator","type":(\d+)(?:[^\{\}\[\]]*)(?:.(?!"block_class":"(?:conditional)?[oO]perator"))*|.*$/g,"$1\n")
				.replace(/\n$/,"").split("\n").forEach(oType=>{
					if (!oType) return;
					const item = blockLabels[oType]||[], opCatg = (blockLabels[oType]||[])[0];
					const opName = (
							(oType<5e3) ? (item[0+3*(oType>=1e3)-3*(oType>=2e3)+(oType>=4e3)].replace(/^\s$/,"")||item[3]).replace(/(Random)1/,"$1<br/>1-") :
							(oType<6e3) ? ["Random","RGB","HSB"][oType-5e3] : ((item[1]||"").replace(/\u2063\s|\s\u2063|^\s$/g,"")||(item[2]||"").replace(/\u2063\s|\s\u2063|^\s$/g,"")||item[3]||(item[0]||"").replace(/\u2063\s|\s\u2063|^\s$/g,""))
						).replace(/\u2063\s|\s\u2063/g,""); //Taken from Full Reference
					(distributionCounts.operatorCatgCounts[opCatg]) ? distributionCounts.operatorCatgCounts[opCatg]++ : distributionCounts.operatorCatgCounts[opCatg] = 1;
					(distributionCounts.operatorDescCounts[opName]) ? distributionCounts.operatorDescCounts[opName]++ : distributionCounts.operatorDescCounts[opName] = 1;
					(distributionCounts.operatorTypeCounts[oType]) ? distributionCounts.operatorTypeCounts[oType]++ : distributionCounts.operatorTypeCounts[oType] = 1;
				});
		}
	});
	//Get the Object Type Distribution
	(p.objects||[]).forEach(o=>{
		const name = charLabels[o.type]||"";
		(distributionCounts.objectCharCounts[name]) ? distributionCounts.objectCharCounts[name]++ : distributionCounts.objectCharCounts[name] = 1;			//Name
		(distributionCounts.objectTypeCounts[o.type]) ? distributionCounts.objectTypeCounts[o.type]++ : distributionCounts.objectTypeCounts[o.type] = 1;	//Type
	});
	(p.customRules||[]).forEach(cr=>{
		//distributionCounts.variablesUseCount[cr.name] = 0;
		distributionCounts.cstmRulesUseCount[cr.name] = (p.objects||[]).repeatEach(o=>{ return (o.rules && o.rules.indexOf(cr.id) !== -1) || null; }).removeNull().length + (p.customRules||[]).repeatEach(r=>{ return (r.rules && r.rules.indexOf(cr.id) !== -1) || null; }).removeNull().length;
		//(JSON.stringify(hsProject).match(RegExp('"rules":\[[^\{\}\[\]]*?"'+v.objectIdString+'"\]',"g"))||[]).length;
	});
	//Get the Rule Type Distribution
	(p.rules||[]).forEach(r=>{
		r = (r.parameters[0]||{}).datum||{};
		const item = blockLabels[r.type]||[], name = ((item[1]||"").replace(/\u2063\s|\s\u2063|^\s$/g,"")||(item[2]||"").replace(/\u2063\s|\s\u2063|^\s$/g,"")||item[3]||(item[0]||"").replace(/\u2063\s|\s\u2063|^\s$/g,"")); //From Full Reference
		(distributionCounts.ruleDescCounts[name]) ? distributionCounts.ruleDescCounts[name]++ : distributionCounts.ruleDescCounts[name] = 1;			//Name
		(distributionCounts.ruleTypeCounts[r.type]) ? distributionCounts.ruleTypeCounts[r.type]++ : distributionCounts.ruleTypeCounts[r.type] = 1;		//Type
	});
	//Get the Variable Usage per Variable
	(p.variables||[]).forEach(v=>{
		distributionCounts.variablesTotalUse += distributionCounts.variablesUseCount[(v.type===8003||p.version===24&&!v.HSObjectIDString?"\uD83D\uDCF1 ":"")+v.name] = (JSON.stringify(hsProject).match(RegExp('"variable":"'+v.objectIdString+'"',"g"))||[]).length;
	});
	//Get the Trait Usage per trait for old projects
	(p.traits||[]).forEach(t=>{
		distributionCounts.traitsTypeCounts[(t.type >= 3e3?"\uD83D\uDCF1 ":"")+blockLabels[t.HSTraitTypeKey]]?distributionCounts.traitsTypeCounts[(t.type >= 3e3?"\uD83D\uDCF1 ":"")+blockLabels[t.HSTraitTypeKey]]+=(JSON.stringify(hsProject).match(RegExp('"variable":"'+t.HSTraitIDKey+'"',"g"))||[]).length:distributionCounts.traitsTypeCounts[(t.type >= 3e3?"\uD83D\uDCF1 ":"")+blockLabels[t.HSTraitTypeKey]]=(JSON.stringify(hsProject).match(RegExp('"variable":"'+t.HSTraitIDKey+'"',"g"))||[]).length;
		distributionCounts.traitsTotalUsage = Object.keys(distributionCounts.traitsTypeCounts).repeatEach(key=>{return distributionCounts.traitsTypeCounts[key]}).reduce((a,b)=>{return a+b});
	});
	let filesize = Math.round(JSON.stringify(unformatProject(hsProject)).length/10)/100;
	if (editor.useBlockRender) {
		function getSpecialBlockAbilityNames(){
			const hasSbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{if(a.name && checkAbility.secretBlocks(a).contains) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
			const fullSbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{if(a.name && checkAbility.secretBlocks(a).newest) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
			editor.project.secretBlocks = fullSbAbilityName ? "new" : hasSbAbilityName ? "old" : "none";
			const hasIbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{if(a.name && checkAbility.setImgBlocks(a).contains) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
			const fullIbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{if(a.name && checkAbility.setImgBlocks(a).newest) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
			editor.project.secretBlocks = fullIbAbilityName ? "new" : hasIbAbilityName ? "old" : "none";
			return {
				imageBlocks: fullIbAbilityName ? fullIbAbilityName.replace(/(^.{20})(.+)/,"$1\u2026") + ' <i title="Up to date" class="fa fa-fw fa-check"></i>' : hasIbAbilityName ? hasIbAbilityName.replace(/(^.{13})(.+)/,"$1\u2026") + ' <i title="Out of date" class="fa fa-fw fa-refresh"></i>' : '<i>Not added</i>',
				secretBlocks: fullSbAbilityName ? fullSbAbilityName.replace(/(^.{20})(.+)/,"$1\u2026") + ' <i title="Up to date" class="fa fa-fw fa-check"></i>' : hasSbAbilityName ? hasSbAbilityName.replace(/(^.{13})(.+)/,"$1\u2026") + ' <i title="Out of date" class="fa fa-fw fa-refresh"></i>' : '<i>Not added</i>'
			}
		}
		projectQuickStats = {
			"uuid": hsProject.uuid||"",
			"filesize": ((filesize < 1000) ? filesize + " KB" : Math.round(filesize/10)/100 + " MB"),
			"stageSize": (hsProject.stageSize.width||1024)+'x'+(hsProject.stageSize.height||768),
			"version": hsProject.version,
			"playerVersion": hsProject.playerVersion,
			"edited_at": hsProject.edited_at,
			"baseObjectScale": hsProject.baseObjectScale,
			"fontSize": hsProject.fontSize,
			"requires_beta_editor": hsProject.requires_beta_editor,
			"abilities": (hsProject.abilities||[]).length,
			"customRules": (hsProject.customRules||[]).length,
			"eventParameters": (hsProject.eventParameters||[]).length,
			"objects": (hsProject.objects||[]).length,
			"rules": (hsProject.rules||[]).length,
			"scenes": (hsProject.scenes||[]).length,
			"traits": (hsProject.traits||[]).length,
			"variables": (hsProject.variables||[]).length,
			"sbAbilityName": getSpecialBlockAbilityNames().secretBlocks,
			"ibAbilityName": getSpecialBlockAbilityNames().imageBlocks
		}
	}
}
function formatProject(p) {
	//Backwards compatibility with standalone block rendering page
	if (typeof projectDict == "undefined" || JSON.stringify(projectDict) == "{}") projectDict = {
		"abilities": {},
		"eventParameters": {},
		"objects": {},
		"rules": {},
		"customRules": {},
		"variables": {},
		"scenes": {},
		"traits": {},
		"stageSize": {"width":1024,"height":768},
		"version": 31,
		"playerVersion": "1.5.0",
		"playerUpgrades": {},
		"edited_at": new Date().toISOString().replace(/\.\d{1,3}Z/,"Z"),
		"baseObjectScale": 1,
		"fontSize": 80,
		"requires_beta_editor": false,
		"customObjects": [],
		"remote_asset_urls": []
	};
	//Assign each block its own ID
	if (p.abilities) p.abilities = p.abilities.removeNull();
	if (p.eventParameters) p.eventParameters = p.eventParameters.removeNull();
	if (p.objects) p.objects = p.objects.removeNull();
	if (p.rules) p.rules = p.rules.removeNull();
	if (p.customRules) p.customRules = p.customRules.removeNull();
	if (p.variables) p.variables = p.variables.removeNull();
	if (p.scenes) p.scenes = p.scenes.removeNull();
	if (p.traits) p.traits = p.traits.removeNull();
	
	if (editor.useBlockRender) getProjectDistributions(p);
	
	(p.abilities||[]).forEach(a=>{
		projectDict.abilities[a.abilityID] = {abilityID:a.abilityID,createdAt:a.createdAt,name:a.name,blocks:{}};
		newestCreateDate = Math.max(newestCreateDate,a.createdAt+12.34567);
		for (i = 0; i < (a.blocks||[]).length; i++) {
			b = a.blocks[i];
			b.web_id = a.abilityID + "_b" + i;
			projectDict.abilities[a.abilityID].blocks[b.web_id] = b;
		}
	});
	//Assign each scene its own ID
	for (i = 0; i < (p.scenes||[]).length; i++) {
		var s = p.scenes[i];
		s.web_id = "s" + i;
		projectDict.scenes[s.web_id] = s;
	}
	// var hasRules = true;
	//Assign objects dictionary
	for (i = 0; i < (p.objects||[]).length; i++) {
		var o = p.objects[i];
		projectDict.objects[o.objectID] = Object.detach(o);
		if (!o.rules) o.rules = [];
	}
	//Assign event parameters dictionary
	for (i = 0; i < (p.eventParameters||[]).length; i++) {
		var ep = p.eventParameters[i];
		projectDict.eventParameters[ep.id] = ep;
	}
	//Assign rules dictionary
	for (i = 0; i < (p.rules||[]).length; i++) {
		var r = p.rules[i];
		if (!r.id) {
			//Assign UUID if it does not exist, then add that to the object
			r.id = uuidv4().toUpperCase();
			var obj = projectDict.objects[r.objectID];
			if (obj) {
				/*if (!obj.rules) obj.rules = {};
				obj.rules[r.id] = Object.detach(r);*/
				if (!obj.rules) obj.rules = [];//{};
				obj.rules.push(r.id);
				
				p.objects.forEach(o=>{
					if (o.objectID == r.objectID) o.rules.push(r.id);
				});
			}
		}
		projectDict.rules[r.id] = Object.detach(r);
	}
	//Assign custom rules dictionary
	for (i = 0; i < (p.customRules||[]).length; i++) {
		var cr = p.customRules[i];
		projectDict.customRules[cr.id] = cr;
	}
	//Assign variables dictionary
	for (i = 0; i < (p.variables||[]).length; i++) {
		var v = p.variables[i];
		projectDict.variables[v.objectIdString] = v;
	}
	//Assign traits dictionary (used in older projects)
	for (i = 0; i < (p.traits||[]).length; i++) {
		var t = p.traits[i];
		projectDict.traits[t.HSTraitIDKey] = t;
	}
	return p;
}
function formatProjectWorker(p) {
	return new Worker(URL.createObjectURL(new Blob(["("+workerFormatProject.toString()+")("+JSON.stringify(p)+","+JSON.stringify(projectDict)+",{blockLabels:"+JSON.stringify(blockLabels)+",charLabels:"+JSON.stringify(charLabels)+",unformatFn:"+unformatProject.toString()+"})"], {type: 'text/javascript'})));
}
function unformatProject(p) {
	//Remove Null
	if (p.abilities) p.abilities = p.abilities.removeNull();
	if (p.eventParameters) p.eventParameters = p.eventParameters.removeNull();
	if (p.objects) p.objects = p.objects.removeNull();
	if (p.rules) p.rules = p.rules.removeNull();
	if (p.customRules) p.customRules = p.customRules.removeNull();
	if (p.variables) p.variables = p.variables.removeNull();
	if (p.scenes) p.scenes = p.scenes.removeNull();
	if (p.traits) p.traits = p.traits.removeNull();
	//Remove IDs of Individual Blocks and Scenes
	p = JSON.stringify(p).replace(/,"web_id":"[0-9A-F_\-]*?",/gi,",").replace(/,?"web_id":"[0-9A-F_\-]*?",?/gi,"");
	try {return JSON.parse(p);} catch(E){console.log(E, p);}
}
function getRange(a, b) {
	var rangeList = [];
	for (i = a; i < b+1; i++) { rangeList.push(i); }
	return rangeList; //Includes b
}

//Initialize Interactables
if (typeof interact != "undefined") {
	interact('.page-controls').draggable({
		//allowFrom: 'div.bl-container .drag-handle',
		allowFrom: 'h1, h2, img',
		//ignoreFrom: 'button, table, input, select, .traits-info',
		//Enable inertial throwing
		inertia: true,
		//Keep the element within the area of it's parent
		modifiers: [
			interact.modifiers.restrictRect({
			restriction: //'parent',
			{x: 0, y: 0, width: 10000, height: 4000},
			endOnly: true
			})
		],
		//Enable autoScroll
		autoScroll: true,

		listeners: {
			//Call this function on every dragmove event
			move (event) {
				var target = event.target;
				//Keep the dragged position in the data-x/data-y attributes
				var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
				var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

				//Translate the element
				target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';// update the posiion attributes
				target.setAttribute('data-x', x); target.setAttribute('data-y', y);
			}
		}
	});
	if (document.getElementById("window-controls-resizer")) document.getElementById("window-controls-resizer").querySelectorAll("td[data-for]").forEach(cell=>{
		var owner = cell.getAttribute("data-for");
		cell.innerHTML = '<i title="Toggle visibility" class="fa fa-eye" onclick="floatWindow.invis(&quot;'+owner+'&quot;,this)"></i> <i title="Bring in front of other windows" class="fa fa-clone fa-flip-horizontal" onclick="floatWindow.front(&quot;'+owner+'&quot;,this)"></i> <i title="Reset position" class="fa fa-repeat" onclick="floatWindow.reset(&quot;'+owner+'&quot;,this,event)"></i>';
	});
}
if (editor.useBlockRender) {
	var hsProject = {
		"abilities": [],
		"eventParameters": [],
		"objects": [],
		"rules": [],
		"customRules": [],
		"variables": [],
		"scenes": [],
		"traits": [],
		"stageSize": {"width":1024,"height":768},
		"version": 31,
		"playerVersion": "1.5.0",
		"playerUpgrades": {},
		"edited_at": new Date().toISOString().replace(/\.\d{1,3}Z/,"Z"),
		"baseObjectScale": 1,
		"fontSize": 80,
		"requires_beta_editor": false,
		"customObjects": [],
		"remote_asset_urls": []
	}, projectDict = {
		"abilities": {},
		"eventParameters": {},
		"objects": {},
		"rules": {},
		"customRules": {},
		"variables": {},
		"scenes": {},
		"traits": {},
		"stageSize": {"width":1024,"height":768},
		"version": 31,
		"playerVersion": "1.5.0",
		"playerUpgrades": {},
		"edited_at": new Date().toISOString().replace(/\.\d{1,3}Z/,"Z"),
		"baseObjectScale": 1,
		"fontSize": 80,
		"requires_beta_editor": false,
		"customObjects": {},
		"remote_asset_urls": []
	};
	var COUNT = 0;
	editor.blockrender = {
		setState: function(state) {
			switch (state) {
				case 0: //Ready State
					document.documentElement.style.setProperty("--display-rstate", "none");
					break;
				case 1: //Needs Refresh
					document.documentElement.style.setProperty("--display-rstate", "inline");
					break;
			}
		},
		refresh: function() {
			//if (editor.blockrender.lastRender) replaceRender(editor.blockrender.lastRender.data,editor.blockrender.lastRender.tct,editor.blockrender.lastRender.desc); else replaceRender(-1);
			activeEditBlock = document.getElementById('blocks-container');
			editor.blockrender.editfocus();
		},
		editopen: function() {			
			document.querySelector(".edit-box").style.display = "block";
			bodyScroll.disable();
			document.querySelectorAll(".editor-blockrender").forEach(elm=>{elm.hidden = false});
			document.querySelectorAll(".editor-jsonrender").forEach(elm=>{elm.hidden = true});
		},
		editclose: function(){
			document.querySelector(".edit-box").style.display = "none";
			activeEditBlock = null;
			bodyScroll.enable();
		},
		editsave: function(forceOpen) {
			forceOpen = forceOpen||false; // swap state?
			var savetext = cmEditor.getValue()||'{}';
			try {
				//Valid Block
				if (JSON.parse(savetext).type == 123) {
					var data = JSON.parse(savetext);
					//Create New Ability with name if it does not exist already
					var added = false, before = "";
					(hsProject.abilities||[]).forEach(a=>{if (a.abilityID == (data.controlScript||{}).abilityID) {
						added=true,before=a.name;
						a.name=data.description;
					}});
					if (!added) {
						newAbil = {name:data.description,createdAt:hsProject.abilities.repeatEach(a=>{return a.createdAt||0}).sort((a,b)=>b-a)[0]+12.345678||0,abilityID:(data.controlScript||{}).abilityID};
						if (newAbil) hsProject.abilities.push(newAbil);
						projectDict.abilities[(data.controlScript||{}).abilityID] = newAbil;
					} else {
						//Renamed Ability means project needs to refresh
						if (before != data.description) {
							var currentActive = activeEditBlock;
							//Update each visible ability block with that same control script ID
							document.querySelectorAll('.abl[data-group="blocks"][data-id="('+data.controlScript.abilityID+')"]').forEach(abl=>{
								activeEditBlock = abl;
								var blockData = JSON.parse(abl.getAttribute("data"));
								blockData.description = data.description;
								cmEditor.getDoc().setValue(JSON.stringify(blockData));
								editor.blockrender.editsave();
							});
							activeEditBlock = currentActive;
						}
					}
					if (data.description != null) (projectDict.abilities[(data.controlScript||{}).abilityID]||{}).name = data.description;
				}
				var info = jsonToHtml(JSON.parse(savetext), undefined, !(forceOpen||activeEditBlock.classList.contains("collapsible-container")));
				//Open the block if forced to open or is already open
				activeEditBlock.innerHTML = info.innerHTML;
				activeEditBlock.setAttribute("class", info.classList);
				activeEditBlock.setAttribute("data", info.data);
				if (info.id) activeEditBlock.setAttribute("data-id", info.id);
				//if (info.scripts) activeEditBlock.setAttribute("data-id", info.id);
				activeEditBlock.setAttribute("data-group", info.sortGroup);
				
				var activeParent = activeEditBlock.parentNode;
				if (!activeEditBlock.innerHTML) activeEditBlock.parentNode.removeChild(activeEditBlock);
				if (activeEditBlock.innerHTML && document.querySelector(".edit-box").style.display == "block") updatescript(activeEditBlock, true);
				updatescript(activeParent);
				document.querySelector(".edit-box").style.display = "none";
				addBlockFunctions(activeEditBlock);
				activeEditBlock = null;
				bodyScroll.enable();
			} catch (E) {
				console.error(E);
				//Valid JSON but invalid block, can indicate delete
				try {
					JSON.parse(savetext);
					document.querySelector(".edit-box").style.display = "none";
					activeEditBlock = null;
					bodyScroll.enable();
				} catch (E) {
					alert("Invalid JSON");
				}
			}
		},
		editdelete: function() {
			cmEditor.getDoc().setValue('{}');
			var parent = activeEditBlock.parentNode;
			if (activeEditBlock) editor.blockrender.editsave();
		},
		editfocus: function(){
			var blockData = JSON.parse(activeEditBlock.getAttribute("data"));
			document.getElementById("blocks-container-resizer").setAttribute("data", JSON.stringify(blockData));
			if (!blockData) replaceRender(-1);
			else if (blockData.objects) replaceRender(blockData.objects, "objects", "Objects in \u201C" + blockData.name + "\u201D");
			else if (blockData.rules) replaceRender(blockData.rules, "rules", "Rules of \u201C" + blockData.name + "\u201D");
			else if (blockData.abilityID) replaceRender(Object.keys(projectDict.abilities[blockData.abilityID].blocks).repeatEach(b=>{return projectDict.abilities[blockData.abilityID].blocks[b]}), "blocks", "When \u201C" + (blockLabels[(blockData.parameters[0].datum||{}).type][1]||"").replace(/\u2063\s|\s\u2063/g,"") + "\u201D for \u201C" + (blockData.objectID?projectDict.objects[blockData.objectID||{}].name:JSON.parse(activeEditBlock.parentNode.parentNode.getAttribute("data")).name) + "\u201D");
			else if (blockData.controlScript) replaceRender(Object.keys(projectDict.abilities[blockData.controlScript.abilityID].blocks).repeatEach(b=>{return projectDict.abilities[blockData.controlScript.abilityID].blocks[b]}), "blocks", "Blocks in \u201C" + blockData.description + "\u201D");
			//console.log(activeEditBlock,jsonToHtml(blockData).focusType);
			document.getElementById("blocks-container").setAttribute("data", JSON.stringify(blockData));
			editor.blockrender.editclose();
		},
		editcopy: function() {
			var newNode = document.createElement("div");
			activeEditBlock.parentNode.insertBefore(newNode, activeEditBlock);
			newNode.innerHTML = activeEditBlock.innerHTML;
			newNode.class = activeEditBlock.class;
			newNode.setAttribute("data", activeEditBlock.getAttribute("data"));
			newNode.setAttribute("data-id", activeEditBlock.getAttribute("data-id"));
			newNode.setAttribute("data-group", activeEditBlock.getAttribute("data-group"));
			editor.blockrender.editsave();
			
			activeEditBlock = newNode;
			cmEditor.getDoc().setValue(activeEditBlock.getAttribute("data"));
			editor.blockrender.editsave();
		}
	};
	editor.project = {
		presetCode: {
			//The 5th block is the rainbow block holding the hidden abilities
			secretBlocksAbility: {"abilityID":"_TOP_ABILITY_ID","blocks":[{"block_class":"method","description":"Set","type":45,"parameters":[{"defaultValue":"","value":"","key":"","type":47},{"defaultValue":"10","value":"10","key":"to","datum":{"block_class":"conditionalOperator","type":1000,"description":"=","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":22,"description":"","params":[{"defaultValue":"","value":"","key":"\u00BB","type":55}]},"type":42},{"defaultValue":"7","value":"","key":"=","type":42}]},"type":49}]},{"block_class":"method","type":44,"description":"Increase","parameters":[{"defaultValue":"","value":"","key":"","type":47},{"defaultValue":"","value":"","key":"by","datum":{"block_class":"conditionalOperator","type":1000,"description":"=","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":22,"description":"","params":[{"defaultValue":"","value":"","key":"\u00BB","type":55}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"=","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":22,"description":"","params":[{"defaultValue":"","value":"","key":"\u00BB","type":55},{"defaultValue":"","value":"","key":"data","type":42}]},"type":42}]},"type":42}]},"type":49}]},{"block_class":"method","type":34,"description":"Set Speed","parameters":[{"defaultValue":"1000","value":"1000","key":"to","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"","key":"","type":49},{"defaultValue":"3","value":"","key":"×","type":42}]},"type":42}]},{"block_class":"method","type":125,"description":"Change Scene","parameters":[{"defaultValue":"Scene 1","value":"","key":"to","type":53}]},{"parameters":[{"defaultValue":"","value":"Custom Abilities","key":"Custom","type":55}],"block_class":"control","description":"","controlScript":{"abilityID":"_HIDDEN_SCRIPTS_ABILITY_ID"},"type":123},{"block_class":"method","description":"Create a Clone of This Object","type":53,"parameters":[{"defaultValue":"5","value":"5","key":"times","type":42}]},{"block_class":"method","type":19,"description":"","parameters":[{"defaultValue":"1538918950","value":"","key":"Wait Until Unix Timestamp","type":42}]},{"block_class":"method","description":"Change Scene","type":125,"parameters":[{"defaultValue":"Scene 1","value":"","key":"to","type":56}]},{"type":55,"block_class":"method","description":"Destroy"},{"block_class":"method","type":29,"description":"Scale by","parameters":[{"defaultValue":"100","value":"80","key":"percent","type":42}]},{"block_class":"method","description":"Set Opacity","type":36,"parameters":[{"defaultValue":"80","value":"80","key":"","type":42}]},{"block_class":"method","type":22,"description":"","parameters":[{"defaultValue":"","value":"","key":"Comment","type":55}]},{"block_class":"method","type":22,"description":"","parameters":[{"defaultValue":"","value":"","key":"Comment","type":55},{"defaultValue":"","value":"","key":"data","type":42}]},{"block_class":"method","description":"Set Image","type":56,"parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":4004,"description":""},"type":54}]},{"block_class":"method","type":35,"description":"Wait","parameters":[{"defaultValue":"500","value":"500","key":"milliseconds","type":42}]},{"block_class":"method","type":52,"description":"Start Sound","parameters":[{"defaultValue":"clickPlayable","value":"clickPlayable","key":"","type":51},{"defaultValue":"500","value":"500","key":"wait","type":42}]},{"block_class":"method","type":127,"description":"Request Seeds","parameters":[{"defaultValue":"5","value":"5","key":"","type":57},{"defaultValue":"","value":"","key":"","type":58}]},{"block_class":"method","description":"Set Angle","type":39,"parameters":[{"defaultValue":"30","value":"30","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4014,"description":"Arccos","params":[{"defaultValue":"0.5","value":"0.5","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"47FEC2FE-4F06-4EC5-B615-F29A82453906-1995-000006129EB7BBDD","HSTraitObjectParameterTypeKey":8000,"description":"X Position"},"type":42},{"defaultValue":"2","value":"2","key":"−","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"B62E526E-1936-4080-B8CA-9FFA2FEF0480-1995-000006129EE2CCB6","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42}]},"type":42},{"defaultValue":"2","value":"2","key":"÷","datum":{"block_class":"operator","type":4006,"description":"√","params":[{"defaultValue":"25","value":"25","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4005,"description":"^","params":[{"defaultValue":"2","value":"","key":"","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"F5FB8A3A-E004-4042-89B2-CCAF34EAB413-1995-000006129EB7E581","HSTraitObjectParameterTypeKey":8000,"description":"X Position"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"75208AE2-B5D8-4990-9330-93BC96018A04-1995-000006129EE2F99A","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42}]},"type":42},{"defaultValue":"3","value":"2","key":"^","type":42}]},"type":42},{"defaultValue":"3","value":"3","key":"+","datum":{"block_class":"operator","type":4005,"description":"^","params":[{"defaultValue":"2","value":"","key":"","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"HSTraitTypeKey":2002,"HSTraitIDKey":"E53EEC06-BA3C-4AE6-BFC5-2603FA921A8B-1995-000006129EB80E73","HSTraitObjectParameterTypeKey":8000,"description":"Y Position"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"HSTraitTypeKey":2002,"HSTraitIDKey":"044627E9-C3E7-4339-BE6D-A19591A97B00-1995-000006129EE319CE","HSTraitObjectParameterTypeKey":8004,"description":"Y Position"},"type":42}]},"type":42},{"defaultValue":"3","value":"2","key":"^","type":42}]},"type":42}]},"type":42}]},"type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"-1","key":"×","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"-1","key":"","type":42},{"defaultValue":"3","value":"3","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"","key":"","datum":{"block_class":"conditionalOperator","type":1003,"description":"＞","params":[{"defaultValue":"8","value":"8","key":"","datum":{"HSTraitTypeKey":2002,"HSTraitIDKey":"FEC9904A-D2E1-4A01-B11B-CA6FF31E03E0-1995-000006129EB840BC","HSTraitObjectParameterTypeKey":8000,"description":"Y Position"},"type":42},{"defaultValue":"7","value":"7","key":"＞","datum":{"HSTraitTypeKey":2002,"HSTraitIDKey":"4A3CBCEE-D917-4FF4-8E53-061DFB740885-1995-000006129EE34456","HSTraitObjectParameterTypeKey":8004,"description":"Y Position"},"type":42}]},"type":49},{"defaultValue":"3","value":"2","key":"×","type":42}]},"type":42}]},"type":42}]},"type":42}]}],"createdAt":0,"name":"_TOP_ABILITY_NAME"},
			hiddenAbilityBlock: '{"parameters":[{"defaultValue":"","value":"Hidden","key":"Custom","type":55}],"block_class":"control","type":123,"description":"","controlScript":{"abilityID":"_CONTROL_SCRIPT_ABILITY_ID"}}',
			setImageBlocksList: [{"block_class":"method","type":56,"description":"Set Image","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":3e4,"description":""},"type":54}]},{"block_class":"method","type":56,"description":"Set Image","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":1,"text":"Above does not Freeze","description":""},"type":54}]}].concat([0].concat(getRange(2,32),getRange(34,56),getRange(58,74),getRange(100,126),getRange(150,164),[3001,3002]).repeatEach(id=>{return {"block_class":"method","type":56,"description":"Set Image","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":id,"description":""},"type":54}]}}))
		},
		secretBlocks: "none", // "none", "old", "new"
		imageBlocks: "none", // "none", "old", "new"
		hiddenAbils: "", // The ability ID that holds hidden blocks
		play: function(popupWindow) {
			if (editor.project.canAddPlayer) {
				if ((hsProject.objects||[]).length == 0) return alert("There is no code to run");
				this.canAddPlayer = false;
				editor.project.buildStartTime = performance.now();
				document.querySelector(".project-build-status").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Compressing Data';
				popup.playProject();
				var worker = new Worker(URL.createObjectURL(new Blob(["("+compress.toString()+")("+JSON.stringify(unformatProject(hsProject))+")"], {type: 'text/javascript'})));
				worker.onmessage = function(msg) {
					//Handle the situation that the popup was closed
					if (document.getElementById("playProjectLoader").hidden) return editor.project.canAddPlayer = true;
					localStorage.setItem("projectFromStorage", msg.data.value.replace(/\s/g,""));
					const buildTime = Math.round((performance.now()-editor.project.buildStartTime)*100)/100;
					document.querySelector(".project-build-status").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Loading Player Page ('+buildTime+'ms)';
					console.log("%cProject Build Time: " + buildTime + "ms", "color: teal; font-weight: 600");
					if (typeof popupWindow != "undefined" && popupWindow)  {
						window.open("../play-project/index.html?from=hsBuilder&play=1");
					} else {
						var playFrame = document.createElement('div');
						playFrame.id = "embed-container";
						playFrame.style = "display:absolute;position:fixed;width:100%;height:100%;left:0;bottom:-105%;transition:bottom 0.5s;z-index:101;";
						playFrame.innerHTML = '<iframe id="project-player" src="../play-project/index.html?play=1&from=hsBuilder" style="position:absolute;display:block;width:100%;height:100%;border:none;top:0;left:0;z-index:1;"></iframe>'
							+ '<button onclick="editor.project.removePlayer()" id="close-player-btn" style="position:absolute;display:block;width:44px;height:44px;border-radius:4px;top:4px;left:4px;margin:2px;z-index:2;border:none;outline:none;background-color:rgba(0,0,0,0.54);cursor:pointer;"><i class="fa fa-close" style="color:white;font-size:32px;position:relative;top:-1px;left:-'+Number(onIos)+'px;"></i></button>';
						document.querySelector(".fullscreen-elms").appendChild(playFrame);
					}
					localStorage.setItem("projectLoadState", "loadingPlayPage");
					if (typeof popupWindow == "undefined" || !popupWindow) {
						setTimeout(function(){
							document.getElementById('embed-container').style.bottom = '0';
						},250);
						//Prevent the user from scrolling
						bodyScroll.disable();
					}
				}
				worker.onerror = function(){
					console.error(new Error("You somehow made an invalid project"));
				}
			}
		},
		removePlayer: function() {
			document.getElementById('embed-container').style.bottom = '-105%';
			setTimeout(function(){
				document.getElementById('embed-container').remove();
				editor.project.canAddPlayer = true;
				popup.close();
			},500);
			//Re-enable scrolling
			popup.close();
			bodyScroll.enable();
			editor.project.canAddPlayer = true;
			//$('body').off('touchmove');
			localStorage.removeItem("projectFromStorage");
		},
		canAddPlayer: true
	};
	editor.display = {
		renderjson: function() {
			if (document.getElementById("renderjson-container").hidden) {
				document.getElementById("renderjson-container").innerHTML = "";
				document.getElementById("renderjson-container").appendChild(renderjson(unformatProject(hsProject)));
				document.getElementById("blocks-container").setAttribute("hidden","");
				document.getElementById("renderjson-container").removeAttribute("hidden");
				document.getElementById("blocks-container-resizer").querySelector('*[label="blockrender"]').style.display = "none";
				document.getElementById("blocks-container-resizer").querySelector('*[label="renderjson"]').style.display = "inline";
			} else {
				document.getElementById("blocks-container").removeAttribute("hidden");
				document.getElementById("renderjson-container").setAttribute("hidden","");
				document.getElementById("blocks-container-resizer").querySelector('*[label="blockrender"]').style.display = "inline";
				document.getElementById("blocks-container-resizer").querySelector('*[label="renderjson"]').style.display = "none";
			}
		}
	};
	editor.jsonEditor = {
		"open": function() {
			cmEditor.operation(function() {
				document.querySelector(".edit-box").style.display = "block";
				bodyScroll.disable();
				document.querySelectorAll(".editor-blockrender").forEach(elm=>{elm.hidden = true});
				document.querySelectorAll(".editor-jsonrender").forEach(elm=>{elm.hidden = false});
				//Fold everything except for the top level
				//editor.codemirror.unfoldToLevel(cmEditor, 2); it doesnt even work :(
			}); 
		},
		"close": function() {
			document.querySelector(".edit-box").style.display = "none";
			bodyScroll.enable();
		},
		"save": function() {
			const traitName = document.getElementById("traits-other").querySelector("select").value;
			try {
				if (traitName=="project") {
					hsProject = JSON.parse(cmEditor.getValue()||'{}');
				} else {
					hsProject[traitName] = JSON.parse(cmEditor.getValue()||'{}');
				}
				formatProject(hsProject);
				editor.traits.updateFields();
				updateDrawers();
				document.querySelector(".edit-box").style.display = "none";
				bodyScroll.enable();
			} catch(e) {
				alert("Invalid JSON");
			}
		}
	};
	editor.codemirror = {
		unfoldToLevel: function(cm, level) {
			editor.codemirror.unfoldAll(cm);
			for(i=0;i<2**level;i++){setTimeout(function(){
				for (var i = 0; i < cm.lastLine() ; i++) {cm.foldCode({ line: i, ch: 0 },function(n,o){for(var e=n.getHelpers(o,"fold"),r=0;r<e.length;r++){var t=e[r](n,o);if(t&&(n.doc.children[0].lines[i]||{}).height!=0)return {to:t.to,from:t.from}}},"")}
			},0);}
		},
		unfoldAll: function(cm) {
			for (var i = 0; i < cm.lastLine() ; i++) {
				cm.foldCode({ line: i, ch: 0 }, null, "unfold");
			}
		},
		foldAll: function(cm) {
			for (var i = 0; i < cm.lastLine() ; i++) {
				cm.foldCode({ line: i, ch: 0 }, null, "fold");
			}
		}
	}
	var checkAbility = {
		checkBlock: function(block, checkAgainst) {
			block.parameters = block.parameters||[];
			var i=-1,passingParams = checkAgainst.parameters.repeatEach(p=>{return i++,Object.keys(p).repeatEach(k=>{
				block = Object.detach(block);
				if (typeof (block.parameters[i]||{}).datum == "object") block.parameters[i].datum = JSON.stringify(block.parameters[i].datum);
				return (block.parameters[i] && new RegExp(p[k]).test((block.parameters[i]||{})[k]||"") || p[k]==-1 && (block.parameters[i]||{})[k]!=undefined)||null;
			}).removeNull().length==Object.keys(p).length||null}).removeNull().length;
			return ((block.type == checkAgainst.type || checkAgainst.type == -1) && passingParams == checkAgainst.parameters.length);
		},
		checkScript: function(blocks, checkArray) {
			return (checkArray.repeatEach(item=>{return (blocks.repeatEach(b=>{return checkAbility.checkBlock(b,item)||null}).removeNull().length > 0)||null;}).removeNull().length == checkArray.length);
		},
		secretBlocks: function(a) {
			var blocks = a.blocks||[];
			//Required Blocks since version 0.1; -1 means must exist
			const 	cloneBlock = {"type":53,"parameters":[{"key":"times","type":-1}]},
					timestampBlock = {"type":19,"parameters":[{"type":-1}]},
					scaleBlock = {"type":29,"parameters":[{"type":-1}]};
			//Required Blocks in order to identify as the newest secret blocks
			const	cmtVarCond = {"type":45,"parameters":[{"type": -1},{"datum":"{\"block_class\":\"conditionalOperator\",\"type\":10[0-1][0-9],[^\\{\\}\\[\\]]*?\"params\":\\[\\{[^\\{\\}\\[\\]]*?\"datum\":\\{[^\\{\\}\\[\\]]*?\"type\":22,[^\\{\\}\\[\\]]*?\"params\":\\[\\{[^\\{\\}\\[\\]]*?(\"value\":\".*?\")?[^\\{\\}\\[\\]]*?\\}\\]\\},[^\\{\\}\\[\\]]*?\"type\":[0-9]{1,3}\\},\\{[^\\{\\}\\[\\]]*?\"type\":[0-9]{1,3}[^\\{\\}\\[\\]]*?\\}\\]}","type":"^49$"}]},
					cdtVarCond = {"type":44,"parameters":[{"type": -1},{"datum":"({\"block_class\":\"conditionalOperator\",\"type\":10[0-1][0-9],[^\\{\\}\\[\\]]*?\"params\":\\[)(\\{.*?\"type\":4000[^\\{\\}\\[\\]]*?\"params\":\\[\\{[^\\{\\}\\[\\]]*?\"datum\":\\{[^\\{\\}\\[\\]]*?\"type\":22[^\\{\\}\\[\\]]*?\"params\":\\[\\{[^\\{\\}\\[\\]]*?(\"value\":\".*?)?[^\\{\\}\\[\\]]*?\"type\":[0-9]{1,3}\\}[^\\{\\}\\[\\]]*?\\]\\},[^\\{\\}\\[\\]]*?\"type\":[0-9]{1,3}\\}(,\\{.*?\\})?\\]\\}[^\\{\\}\\[\\]]*?\"type\":[0-9]{1,3}\\},?)(\\{.*?\"type\":4000[^\\{\\}\\[\\]]*?\"params\":\\[\\{[^\\{\\}\\[\\]]*?\"datum\":\\{[^\\{\\}\\[\\]]*?\"type\":22[^\\{\\}\\[\\]]*?\"params\":\\[(\\{[^\\{\\}\\[\\]]*?(\"value\":\".*?)?[^\\{\\}\\[\\]]*?\"type\":[0-9]{1,3}\\},?){2}(,\\{.*?\\})?\\]\\})(.*?\"type\":[0-9]{1,3},?\\}(,\\{.*?\\})?\\]\\}){2}","type":"^49$"}]},
					multByCond = {"type":-1,"parameters":[{"datum":"\\{[^\\{\\}\\[\\]]*?\"type\":4002[^\\{\\}\\[\\]]*?\"params\":\\[\\{[^\\{\\}\\[\\]]*?\"type\":49[^\\{\\}\\[\\]]*?\\},\\{[^\\{\\}\\[\\]]*?\"type\":42[^\\{\\}\\[\\]]*?\\}\\]\\}","type":-1}]},
					sceneTextB = {"type":125,"parameters":[{"type":"^53$"}]},
					hiddenAbil = {"type":123,"parameters":[{"key":"^[Cc]ustom","type":"^55$"}]},
					setOpacity = {"type":36,"parameters":[{"type":-1}]},
					commentBlk = {"type":22,"parameters":[{"type": -1},{"key":"^data$","type":-1}]},
					cDataBlock = {"type":22,"parameters":[{"type": -1},{"key":"^data$","type":-1}]},
					ImgFreezeB = {"type":56,"parameters":[{"datum":"\\{(?:\"name\":\".*?\",)?\"type\":4004,\"description\":\"\"\\}","type":"^54$"}]},
					reqSeedsBl = {"type":127,"parameters":[{"type":"^57$"},{"type":"^58$"}]};
			var		isSecretBlocks = (checkAbility.checkScript(blocks,[cloneBlock,timestampBlock,scaleBlock]));
			var		hasNewest = (isSecretBlocks && checkAbility.checkScript(blocks,[cmtVarCond,cdtVarCond,multByCond,sceneTextB,hiddenAbil,setOpacity,commentBlk,cDataBlock,ImgFreezeB,reqSeedsBl]))
			return 	{"contains":isSecretBlocks,"newest":hasNewest};
		},
		setImgBlocks: function(a) {
			var blocks = a.blocks||[];
			//Required blocks since version 0.1; -1 means must exist
			const	halloweenChars = getRange(11,19).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}}),
					winterChars = getRange(64,74).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}}),
					eosBlock = getRange(3e4,3e4).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}}),
					originalChars1 = getRange(0,10).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",(\"text\":\"[\\s\\w]+\",)?\"description\":\"\"\\}$"}]}}),
					originalChars2 = getRange(20,32).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}}),
					originalShapes = getRange(34,56).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}}),
					jungleCharacts = getRange(58,63).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}}),
					fullSizeShapes = getRange(100,126).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}}),
					fullSzV3Shapes = getRange(150,164).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}}),
					version2_Chars = getRange(3001,3002).repeatEach(id=>{return {"type":56,"parameters":[{"type":-1,"datum":"^\\{\"type\":"+id+",\"description\":\"\"\\}$"}]}});
			const	fullBlocksList = halloweenChars.concat(winterChars,eosBlock,originalChars1,originalChars2,originalShapes,jungleCharacts,fullSizeShapes,fullSzV3Shapes,version2_Chars);
			var 	isImageBlocks = (checkAbility.checkScript(blocks,halloweenChars));
			var 	hasNewestImgB = (checkAbility.checkScript(blocks,fullBlocksList));
			return 	{"contains":isImageBlocks,"newest":hasNewestImgB};
		}
	}
	function addBlockFunctions(parent) {
		parent.querySelectorAll(".editbtn").forEach((elm)=>{
			elm.onclick = function(e){
				activeEditBlock = e.target.parentNode.parentNode;
				//document.querySelector(".edit-box textarea").value = JSON.stringify(JSON.parse(activeEditBlock.getAttribute("data")),null,"\t");
				editor.blockrender.editopen();
				var blockData = JSON.parse(activeEditBlock.getAttribute("data"));
				(jsonToHtml(blockData).focusType != "blocks" || blockData.type == 123) ? document.getElementById("focus-btn").removeAttribute("disabled") : document.getElementById("focus-btn").setAttribute("disabled","");
				cmEditor.getDoc().setValue(JSON.stringify(JSON.parse(activeEditBlock.getAttribute("data")),null,"\t"));
				cmEditor.clearHistory();
			}
		});
		parent.querySelectorAll("*:not(.disabled) > bl .openbtn").forEach((elm)=>{
			elm.onclick = function(e){
				var parentBlock = e.target.parentNode.parentNode;
				var hasDomInside = Boolean(parentBlock.childElementCount>1);
				if (hasDomInside) {
					parentBlock.classList.toggle("collapsible-container");
					parentBlock.querySelectorAll("div.collapsible").remove();
				} else {
					//If there is no child container, close other blocks with the same ID and refresh the block and load what's inside.
					var parentId = parentBlock.getAttribute("data-id");
					if (parentId) {
						const parentIdList = [parentId.match(/[0-9A-Z\-_]*/gi)[0],parentId.match(/[0-9A-Z\-_]*/gi)[1]].removeNull();
						//console.log(parentIdList);
						document.querySelectorAll("div[data][data-id]").forEach(block=>{
							if (parentBlock == block) return;
							var idRegex = new RegExp("^" + block.getAttribute("data-id") + "$");
							if (parentIdList.repeatEach(item=>{return idRegex.test(item)||null}).removeNull().length > 0) {
								var HDI = Boolean(block.childElementCount>1);
								//Close matching blocks
								if (HDI) {
									block.classList.toggle("collapsible-container");
									block.querySelectorAll("div.collapsible").remove();
								}
							};
						});
					}
					
					activeEditBlock = parentBlock;
					cmEditor.getDoc().setValue(activeEditBlock.getAttribute("data"));
					editor.blockrender.editsave(true);
				}
			}
		});
		var list = parent.querySelectorAll(".collapsible");
		list.forEach((l)=>{
			new Sortable(l, {
				group: l.parentNode.getAttribute("data-group"),
				ghostClass: 'invis',
				dragClass: 'dragged',
				fallbackTolerance: 5,
				forceFallback: true,
				delayOnTouchOnly: true,
				animation: 150,
				handle: '.handle',
				fallbackOnBody: true,
				swapThreshold: 0.65,
				multiDrag: true,
				selectedClass: 'selected',
				onEnd: function(e){
					updatescript(e.from), updatescript(e.to);
					//Update Object ID of rules
					if (JSON.parse(e.item.getAttribute("data")).objectID != undefined && JSON.parse(e.item.getAttribute("data")).abilityID != undefined) e.item.setAttribute("data",e.item.getAttribute("data").replace(/("objectID":")[A-Z0-9\-]*?"/i,"$1" + (JSON.parse(e.to.parentNode.getAttribute("data")).objectID||"") + "\"") );
				}
			});
		});
	}
	function replaceRender(data, tct, desc) {
		editor.blockrender.setState(0);
		if (data == -1) {
			desc = "Entire Project";
			if (hsProject.scenes) {
				data = hsProject.scenes, tct = "scenes";
			} else {
				data = hsProject.objects||[], tct = "objects";
			}
		}
		document.getElementById("blocks-container-resizer").innerHTML = '<div class="drag-handle"><span label="blockrender">Block Rendering: ' + desc + (desc!="Entire Project"&&tct?' <a title="See Entire Project" href="javascript:replaceRender(-1)" ondragstart="event.preventDefault()">&ic; <i class="fa fa-list-alt"></i></a>':'')+' <a class="refresh-btn" title="Refresh Project" href="javascript:editor.blockrender.refresh()" ondragstart="event.preventDefault()">&ic; <i class="fa fa-refresh"></i></a></span><span hidden label="renderjson">JSON Project Render</span></a><a title="Toggle Code Viewing" style="position:absolute;top:3px;right:30px;" href="javascript:editor.display.renderjson()" ondragstart="event.preventDefault()"><i class="fa fa-code"></i></a><a title="Run the Project" style="position:absolute;top:3.5px;right:6px;" oncontextmenu="event.preventDefault();editor.project.play(true)" href="javascript:editor.project.play()" ondragstart="event.preventDefault()"><i class="fa fa-play"></i></a></div><div id="blocks-container" class="bl-container" style="padding: 36px 8px;" data-group="'+tct+'"></div><div hidden id="renderjson-container"></div><div class="resizer"></div>';
		//Data = Data Array, Top Container Type (e.g. Rules, Objects)
		data.forEach(function(item) {
			var blockElm = document.createElement("div");
			var blockInfo = jsonToHtml(item, undefined, (item.type==123||typeof item == "string"||item.xPosition!=null||(item.objects&&data.length>1)));
			blockElm.setAttribute("class", blockInfo.classList);
			blockElm.setAttribute("data", blockInfo.data);
			if (blockInfo.id) blockElm.setAttribute("data-id", blockInfo.id);
			blockElm.setAttribute("data-group", blockInfo.sortGroup);
			blockElm.innerHTML = blockInfo.innerHTML;
			document.getElementById("blocks-container").appendChild(blockElm);
		});
		
		x = new Sortable(document.getElementById("blocks-container"), {
			group: tct, fallbackOnBody: true,
			ghostClass: 'invis', dragClass: 'dragged', fallbackTolerance: 5,
			forceFallback: true, delayOnTouchOnly: true, animation: 150,
			handle: '.handle', multiDrag: true, selectedClass: 'selected',
			onEnd: function(e){
				updatescript(e.from), updatescript(e.to);
			}
		});
		
		document.querySelector(".bl-container").setAttribute("data-group", tct);
		
		addBlockFunctions(document);
	}
	replaceRender([],"","No project loaded");
 		
	var activeEditBlock;
	editclose = editsave = editdelete = editfocus = editcopy = function() {
		console.trace("NO");
		alert("WRONG FUNCTION CALLED");
	};
	const keypressDelta = 350;
	var lastKeypressTime = 0;
	function showElm(elm, scrollIntoView) {
		if (typeof scrollIntoView == "undefined") scrollIntoView = true;
		elm.style.animationName = "none";
			elm.style.overflow = "visible";
		setTimeout(function(){elm.style.animationName = "border-glow";},0);
		if (scrollIntoView) elm.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
			elm.style.overflow = "";
	}
	document.body.onkeydown = function(e) {
		switch (e.keyCode) {
			case 13:
				if (document.activeElement && document.activeElement.parentNode && document.activeElement.parentNode.id.match(/^traits-/)) document.querySelector("button.traits-confirm").click();
				break;
			case 17:
				//Double pressing the control key brings out the control window
				var thisKeypressTime = new Date();
				if ( thisKeypressTime - lastKeypressTime <= keypressDelta ) {
					var wcs = document.getElementById("window-controls-resizer");
					wcs.click();
					showElm(wcs);
					//Optional,if we'd rather not detect a triple-press as a second double-press, reset the timestamp
					thisKeypressTime = 0;
				}
				lastKeypressTime = thisKeypressTime;
				break;
			case 27:
				popup.close();
				break;
			case 46:		
				if (!activeEditBlock) {
					document.getElementById("blocks-container").querySelectorAll(".selected").forEach(e=>{
						activeEditBlock = e;
						editor.blockrender.editdelete();
					});
				}
				break;
		}
		if (activeEditBlock) {
			if (e.keyCode == 27) editor.blockrender.editclose();
			if ((e.ctrlKey||e.metaKey)&&e.keyCode == 13) editor.blockrender.editsave();
		} else if (document.querySelector(".edit-box").style.display == "block") {
			if ((e.ctrlKey||e.metaKey)&&e.keyCode == 13) editor.jsonEditor.save();
		}
	}
	function updateDrawers() {
		document.getElementById("abilities-drawer").innerHTML = '<div data="{&quot;block_class&quot;:&quot;control&quot;,&quot;description&quot;:&quot;&quot;,&quot;type&quot;:123,&quot;controlScript&quot;:{&quot;abilityID&quot;:&quot;&quot;}}" data-group="blocks"><bl class="abl"><b class="openbtn"></b><c>New Ability</c><b class="editbtn"></b><b class="handle"></b></bl></div>';
		document.getElementById("customRules-drawer").innerHTML = '<div data="{&quot;name&quot;:&quot;New Custom Rule&quot;,&quot;rules&quot;:[],&quot;id&quot;:&quot;&quot;}" data-group="rules"><bl class="crule"><b class="openbtn"></b><c>New Custom Rule</c><b class="editbtn"></b><b class="handle"></b></bl></div>';
		(hsProject.abilities||[]).forEach(ab=>{
			if (!ab.name) return;
			var abBlock = document.createElement("div");
			abBlock.setAttribute("data",JSON.stringify({"block_class":"control","description":ab.name,"type":123,"controlScript":{"abilityID":ab.abilityID}}));
			abBlock.setAttribute("data-group","blocks");
			abBlock.innerHTML = '<bl class="abl"><b class="openbtn"></b><c>'+ab.name+'</c><b class="editbtn"></b><b class="handle"></b></bl>';
			document.getElementById("abilities-drawer").appendChild(abBlock);
		});
		(hsProject.customRules||[]).forEach(cr=>{
			var crBlock = document.createElement("div");
			crBlock.setAttribute("data",JSON.stringify({"name":cr.name,"rules":cr.rules,"id":cr.id}));
			crBlock.setAttribute("data-group","rules");
			crBlock.innerHTML = '<bl class="crule"><b class="openbtn"></b><c>'+cr.name+'</c><b class="editbtn"></b><b class="handle"></b></bl>';
			document.getElementById("customRules-drawer").appendChild(crBlock);
		});
	}
	function saveCompressed() {
		//Calls the worker function
		var worker = new Worker(URL.createObjectURL(new Blob(["("+compress.toString()+")("+JSON.stringify(unformatProject(hsProject))+")"], {type: 'text/javascript'})));
		worker.onmessage = function(e) {
			localStorage.setItem("projectFromStorage", e.data.value.replace(/\s/g,""));
			console.log("%cProject Instance Saved","color:green;font-weight:600;");
			console.log(hsProject);
			localStorage.setItem("projectStorageState","saved");
		}
	}
	var storageWarning = false;
	function writedata(type, web_id, newdata, isParent) {
		switch (type) {
			case "project":
				if (hsProject.scenes) {
					//Write to scenes (newer projects)
					hsProject.scenes = newdata.removeNull();
				} else {
					//Write to objects (older projects)
					hsProject.objects = newdata;
				}
				break;
			case "scene":
				projectDict.scenes[web_id] = newdata;
				var added = false;
				for (i = 0; i < (hsProject.scenes||[]).length; i++){
					if (hsProject.scenes[i].web_id == web_id) {
						added = true;
						hsProject.scenes[i] = newdata;
						hsProject.scenes[i].web_id = web_id;
					}
				}
				if (!added && !isParent && newdata) {
					newdata.web_id = web_id;
					hsProject.scenes.push(newdata);
				}
				break;
			case "object":
				projectDict.objects[web_id] = newdata;
				var added = false;
				for (i = 0; i < (hsProject.objects.removeNull()||[]).length; i++) {
					if (hsProject.objects[i].objectID == web_id) hsProject.objects[i] = newdata, added = true;
				};
				if (!added && !isParent && newdata) hsProject.objects.push(newdata);
				break;
			case "crule":
				projectDict.customRules[web_id] = newdata;
				var added = false;
				for (i = 0; i < (hsProject.customRules||[]).length; i++) {
					if (hsProject.customRules[i].id == web_id) hsProject.customRules[i] = newdata, added = true;
				};
				if (!added && !isParent && newdata) hsProject.customRules.push(newdata);
				break;
			case "rule":
				projectDict.rules[web_id] = newdata;
				var added = false;
				for (i = 0; i < (hsProject.rules||[]).length; i++) {
					if (hsProject.rules[i].id == web_id) hsProject.rules[i] = newdata, added = true;
				};
				if (!added && !isParent && newdata) hsProject.rules.push(newdata);
				break;
			case "ability": //Input the whole new ability
				if (!newdata.name) newdata.name = (projectDict.abilities[web_id]||{}).name;
				projectDict.abilities[web_id] = projectDict.abilities[web_id]||{},
					projectDict.abilities[web_id].blocks = {},
					projectDict.abilities[web_id].name = newdata.name,
					projectDict.abilities[web_id].createdAt = newdata.createdAt,
					projectDict.abilities[web_id].abilityID = newdata.abilityID;
				for (i = 0; i < (newdata.blocks||[]).length; i++) {
					newblock = newdata.blocks[i];
					newblock.web_id = web_id + "_b" + i;
					projectDict.abilities[web_id].blocks[newblock.web_id] = newblock;
				}
				var added = false;
				for (i = 0; i < (hsProject.abilities||[]).length; i++) {
					if (hsProject.abilities[i].abilityID == web_id) {
						added = true;
						for (j = 0; j < (newdata.blocks||[]).length; j++) {
							newdata.blocks[j].web_id = web_id + "_b" + j;
							
						}
						hsProject.abilities[i] = newdata;
						hsProject.abilities[i].blocks = newdata.blocks;
						hsProject.abilities[i].name = newdata.name;
					}
				};
				if (!added && newdata) {
					for (i = 0; i < (newdata.blocks||[]).length; i++) {
						newdata.blocks[i].web_id = web_id + "_b" + i;
					};
					hsProject.abilities.push(newdata);
				}
				break;
			//There is no need to update a block because it updates the ability regardless
		}
		var url = new URL(location.href);
		if (url.searchParams.get("play") == "1") {
			try {
				localStorage.setItem("projectFromStorage", JSON.stringify(hsProject));
				console.log("%cProject Instance Saved","color:lime;font-weight:600;");
				console.log(hsProject);
			} catch (e) {
				try {
					localStorage.setItem("projectStorageState","saving");
					saveCompressed();
				} catch (e) {
					if (!storageWarning) alert("Data cannot be written to this project")
					storageWarning = true;
				}
			}
		}
		//Update the Traits Table and the Drawer with Custom Rules and Abilities
		editor.traits.updateFields();
		updateDrawers();
	}
	function updatescript(container, isBlock) { //TASK: UPDATE MATCHING BLOCKS (DUPLICATE IDS) RULES AND OBJECTS LISTS (SCENES + OBJS + CRULES)
		isBlock = isBlock||false;
		var cp = (!isBlock) ? container.parentNode : container;
		var scData = JSON.parse(cp.getAttribute("data"));
		scType = !scData ? "project" : (scData.objects?"scene":(scData.xPosition!=undefined?"object":(scData.rules?"crule":(scData.abilityID?"rule":"ability"))));
		scId = (!scData ? "none" : scData.web_id||scData.id||scData.abilityID||scData.objectID||cp.getAttribute("data-id"));
		if (scData && (scData.controlScript || scData.controlFalseScript)) scId = (container.previousElementSibling && container.previousElementSibling.classList.contains("collapsible")) ? scData.controlFalseScript.abilityID : scData.controlScript.abilityID
		var newdata = {};
		if (isBlock && scType == "ability") return;
		switch (scType) {
			case "ability": //Change the parent ability
				newdata = {
					"abilityID": scId,
					"blocks": container.children.repeatEach(c=>{
						return JSON.parse(c.getAttribute("data"));
					}),
					"createdAt": (projectDict.abilities[scId]||{createdAt:newestCreateDate}).createdAt
				};
				// console.log(newdata, scData);
				// if (scData.description) newdata.name = scData.description;
				// console.log(newdata, scData);
				break;
			case "rule":
				if (isBlock) {
					//Change the rule block itself
					newdata = scData;
					scId = scData.id;
				} else {
					//Change the ability within the rule
					newdata = {
						"abilityID": scData.abilityID,
						"blocks": container.children.repeatEach(c=>{
							return JSON.parse(c.getAttribute("data"));
						}),
						"createdAt": (projectDict.abilities[scData.abilityID]||{createdAt:newestCreateDate}).createdAt
					};
					if (scData.name) newdata.name = projectDict.abilities[scData.abilityID].name;
					scType = "ability";
					scId = scData.abilityID;
				}
				break;
			case "crule": //Change the rules within the custom rule
			case "object": //Change the rules within the object
				newdata = scData;
				if (!isBlock) newdata.rules = container.children.repeatEach(c=>{
					return JSON.parse(c.getAttribute("data")||'{}').id;
				});
				scId = scData.id||scData.objectID;
				break;
			case "scene": //Change the objects in the scene
				newdata = scData;
				if (!isBlock) newdata.objects = container.children.repeatEach(c=>{
					return JSON.parse(c.getAttribute("data")).objectID;
				});
				break;
			case "project":
				newdata = document.querySelectorAll(".bl-container > div").repeatEach(c=>{
					return JSON.parse(c.getAttribute("data"));
				});
				break;
		}
		if (scType == "crule" || scType == "object" || scType == "scene") cp.setAttribute("data", JSON.stringify(newdata));
		writedata(scType, scId, newdata, !isBlock);
	}
	/* CodeMirror */
	var cmEditor = CodeMirror.fromTextArea(document.querySelector("textarea"), {
		matchBrackets: true,
		autoCloseBrackets: true,
		mode: "application/ld+json",
		foldGutter: true,
		lint: true,
		gutters: ["CodeMirror-lint-markers","CodeMirror-linenumbers", "CodeMirror-foldgutter"],
		lineWrapping: false,
		value: '{}',
		lineNumbers: true,
		indentWithTabs: true,
		tabSize: 2
	});
	cmEditor.on("change",function(e){
		try {
			JSON.parse(cmEditor.getValue());
			//console.log("Successful JSON Parse")
			document.querySelector(".edit-box .block-preview").innerHTML = jsonToHtml(JSON.parse(cmEditor.getValue())).innerHTML.replace(/<b class="editbtn"><\/b>/g,"").replace(/ class="(handle|openbtn)/g,' style="cursor:unset;opacity:1;" class="'+"$1");
		} catch (E) {}
	});
	/* Interact JS */
	if (typeof interact != "undefined") interact('.resize-drag').resizable({
		//Resize from all edges and corners
		edges: { 
			right: ".resizer",
			bottom: ".resizer"
		},
		listeners: {
			move (event) {
				var target = event.target;
				var x = (parseFloat(target.getAttribute('data-x')) || 0);
				var y = (parseFloat(target.getAttribute('data-y')) || 0);
				//Update the element's style
				target.style.width = event.rect.width + 'px';
				target.style.height = event.rect.height + 'px';
				//Translate when resizing from top or left edges
				x += event.deltaRect.left, y += event.deltaRect.top;
				target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
			}
		},
		modifiers: [
			//Keep the edges inside the parent
			interact.modifiers.restrictEdges({
				//outer: 'parent'
			}),
			//Minimum size
			interact.modifiers.restrictSize({
			min: { width: 200, height: 150 }
			})
		],
		inertia: true
	}).draggable({
		allowFrom: 'div.drag-handle',
		ignoreFrom: 'a',
		//Enable inertial throwing
		inertia: true,
		//Keep the element within the area of it's parent
		modifiers: [
			interact.modifiers.restrictRect({
			restriction: //'parent',
			{x: 0, y: 0, width: 10000, height: 4000},
			endOnly: true
			})
		],
		//Enable autoScroll
		autoScroll: true,

		listeners: {
			//Call this function on every dragmove event
			move (event) {
				var target = event.target;
				//Keep the dragged position in the data-x/data-y attributes
				var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
				var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
				
				//Translate the element
				target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';// update the posiion attributes
				target.setAttribute('data-x', x); target.setAttribute('data-y', y);
			}
		}
	});
	//Z Index of draggable elements
	var draggables = document.querySelectorAll(".float");
	for (i = 0; i < draggables.length; i++) {
		draggables[i].style.zIndex = i;
		function reorganizefloatingZ (event) {
			var target = event.target;
			while (!target.classList.contains("float")) {
				if (target.parentNode) target = target.parentNode; else break;
			}
			//Set Z Index of the elements
			for (i = 0; i < draggables.length; i++) {
				if (Number(draggables[i].style.zIndex) > Number(target.style.zIndex)) draggables[i].style.zIndex = draggables[i].style.zIndex - 1;
			};
			target.style.zIndex = document.querySelectorAll(".float").length;
		}
		draggables[i].addEventListener("mousedown",function(event){reorganizefloatingZ(event)});
		draggables[i].addEventListener("click",function(event){reorganizefloatingZ(event)});
		draggables[i].addEventListener("touchstart",function(event){reorganizefloatingZ(event)});
		draggables[i].addEventListener("touchend",function(){
			if (typeof DeviceOrientationEvent.requestPermission === "function") DeviceOrientationEvent.requestPermission(); //iOS ask for permission
		});
	};
	/* Sortable JS */
	(function(){
		new Sortable(document.getElementById("blocks-drawer"), {
			group: { name: "blocks", pull: "clone", put: false },
			sort: false,
			//ghostClass: 'invis',
			dragClass: 'dragged', fallbackTolerance: 5,
			forceFallback: true, delayOnTouchOnly: true, animation: 150,
			handle: '.handle', multiDrag: true, selectedClass: 'selected',
			fallbackOnBody: true,
			onEnd: function(e){
				if (e.from == e.to) return;
				activeEditBlock = e.item;
				cmEditor.getDoc().setValue(JSON.stringify(JSON.parse(activeEditBlock.getAttribute("data")),null,"\t"));
				editor.blockrender.editsave();
				updatescript(e.to);
			}
		});
		new Sortable(document.getElementById("abilities-drawer"), {
			group: { name: "blocks", pull: "clone", put: false },
			sort: false,
			//ghostClass: 'invis',
			dragClass: 'dragged', fallbackTolerance: 5,
			forceFallback: true, delayOnTouchOnly: true, animation: 150,
			handle: '.handle', multiDrag: true, selectedClass: 'selected',
			fallbackOnBody: true,
			onEnd: function(e){
				if (e.from == e.to) return;
				//Set the Ability ID
				e.item.setAttribute("data",e.item.getAttribute("data").replace(/("abilityID":")"/,"$1" + uuidv4().toUpperCase() + "\"") );
				activeEditBlock = e.item;
				cmEditor.getDoc().setValue(JSON.stringify(JSON.parse(activeEditBlock.getAttribute("data")),null,"\t"));
				editor.blockrender.editsave();
				updatescript(e.item, true);
				updatescript(e.to);
			}
		});
		new Sortable(document.getElementById("rules-drawer"), {
			group: { name: "rules", pull: "clone", put: false },
			sort: false,
			//ghostClass: 'invis',
			dragClass: 'dragged', fallbackTolerance: 5,
			forceFallback: true, delayOnTouchOnly: true, animation: 150,
			handle: '.handle', multiDrag: true, selectedClass: 'selected',
			fallbackOnBody: true,
			onEnd: function(e){
				if (e.from == e.to) return;
				//Set the Ability ID and the ID. Also set the Object ID of a rule so that it works in an older editor version
				e.item.setAttribute("data",e.item.getAttribute("data").replace(/("abilityID":")"/,"$1" + uuidv4().toUpperCase() + "\"")
																	  .replace(/("id":")"/,"$1" + uuidv4().toUpperCase() + "\"")
																	  .replace(/("objectID":")"/,"$1" + (JSON.parse(e.to.parentNode.getAttribute("data")).objectID||"") + "\"") );
				activeEditBlock = e.item;
				cmEditor.getDoc().setValue(JSON.stringify(JSON.parse(activeEditBlock.getAttribute("data")),null,"\t"));
				editor.blockrender.editsave();
				updatescript(e.item, true);
				updatescript(e.to);
			}
		});
		new Sortable(document.getElementById("customRules-drawer"), {
			group: { name: "rules", pull: "clone", put: false },
			sort: false,
			//ghostClass: 'invis',
			dragClass: 'dragged', fallbackTolerance: 5,
			forceFallback: true, delayOnTouchOnly: true, animation: 150,
			handle: '.handle', multiDrag: true, selectedClass: 'selected',
			fallbackOnBody: true,
			onEnd: function(e){
				if (e.from == e.to) return;
				e.item.setAttribute("data",e.item.getAttribute("data").replace(/("(id)":")"/g,"$1" + uuidv4().toUpperCase() + "\""));
				activeEditBlock = e.item;
				cmEditor.getDoc().setValue(JSON.stringify(JSON.parse(activeEditBlock.getAttribute("data")),null,"\t"));
				editor.blockrender.editsave();
				updatescript(e.item, true);
				updatescript(e.to);
			}
		});
		new Sortable(document.getElementById("objects-drawer"), {
			group: { name: "objects", pull: "clone", put: false },
			sort: false,
			//ghostClass: 'invis',
			dragClass: 'dragged', fallbackTolerance: 5,
			forceFallback: true, delayOnTouchOnly: true, animation: 150,
			handle: '.handle', multiDrag: true, selectedClass: 'selected',
			fallbackOnBody: true,
			onEnd: function(e){
				if (e.from == e.to) return;
				e.item.setAttribute("data",e.item.getAttribute("data").replace(/("objectID":")"/g,"$1" + uuidv4().toUpperCase() + "\""));
				activeEditBlock = e.item;
				cmEditor.getDoc().setValue(JSON.stringify(JSON.parse(activeEditBlock.getAttribute("data")),null,"\t"));
				editor.blockrender.editsave();
				updatescript(e.item, true);
				updatescript(e.to);
			}
		});
		new Sortable(document.getElementById("scenes-drawer"), {
			group: { name: "scenes", pull: "clone", put: false },
			sort: false,
			//ghostClass: 'invis',
			dragClass: 'dragged', fallbackTolerance: 5,
			forceFallback: true, delayOnTouchOnly: true, animation: 150,
			handle: '.handle', multiDrag: true, selectedClass: 'selected',
			fallbackOnBody: true,
			onEnd: function(e){
				if (e.from == e.to) return;
				e.item.setAttribute("data",e.item.getAttribute("data").replace(/\{/g,'{"web_id":"s' + (hsProject.scenes||[]).length + '",')); /\}/;
				activeEditBlock = e.item;
				cmEditor.getDoc().setValue(JSON.stringify(JSON.parse(activeEditBlock.getAttribute("data")),null,"\t"));
				editor.blockrender.editsave();
				updatescript(e.item, true);
				updatescript(e.to);
			}
		});
	})();
	window.addEventListener("blur",function(){
		if ((document.activeElement.parentNode.parentNode.classList||document.body.classList).contains("resize-drag")) document.activeElement.parentNode.parentNode.click();
	});
	var floatWindow = {
		"invis": function(name, elm) {
			var block = document.getElementById(name + "-resizer");
			elm.setAttribute("class",(block.style.display == "none" ? "fa fa-eye" : "fa fa-eye-slash"));
			block.style.display = block.style.display == "none" ? "block" : "none";
			if (block.style.display == "block") showElm(block); else block.click();
		},
		"front": function(name, elm) {
			var block = document.getElementById(name + "-resizer");
			block.click();
			showElm(block);
		},
		"reset": function(name, elm, event) {
			var block = document.getElementById(name + "-resizer");
			block.style = block.getAttribute("data-init-style");
			block.removeAttribute("data-x");
			block.removeAttribute("data-y");
			block.click();
			showElm(block, event.isTrusted);
			const viewBtn = elm.previousElementSibling.previousElementSibling;
			if (viewBtn.classList.contains("fa-eye-slash")) viewBtn.classList.replace("fa-eye-slash","fa-eye")
			if (event.isTrusted) var scrollInt = setInterval(function(){
				block.style.overflow = "visible";
				block.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
				block.style.overflow = "";
			},1);
			setTimeout(function(){clearInterval(scrollInt)},1000);
		},
		"resetAll": function() {
			document.getElementById("window-controls-resizer").querySelectorAll("td i.fa-repeat").forEach(block=>{
				//var block = document.getElementById(name + "-resizer");
				block.style = block.getAttribute("data-init-style");
				block.removeAttribute("data-x");
				block.removeAttribute("data-y");
				block.click();
				//showElm(block, false);
					
				var scrollInt = setInterval(function(){
					block.style.overflow = "visible";
					//block.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
					block.style.overflow = "";
				},1);
				setTimeout(function(){clearInterval(scrollInt)},1000);
			});
		},
		"saveCurrent": function() {
			document.querySelectorAll(".float").forEach(elm=>{
				elm.setAttribute("data-init-style","min-width: "+(elm.style.minWidth||"")+"; left: calc("+(getComputedStyle(elm).left||"0")+" + "+(elm.getAttribute("data-x")||"0")+"px); top: calc("+(getComputedStyle(elm).top||"0")+" + "+(elm.getAttribute("data-y")||"0")+"px); width: "+elm.style.width+"; height: "+elm.style.height+";");
				elm.setAttribute("style","min-width: "+(elm.style.minWidth||"")+"; left: calc("+(getComputedStyle(elm).left||"0")+" + "+(elm.getAttribute("data-x")||"0")+"px); top: calc("+(getComputedStyle(elm).top||"0")+" + "+(elm.getAttribute("data-y")||"0")+"px); width: "+elm.style.width+"; height: "+elm.style.height+";");
				setTimeout(function(){
					elm.removeAttribute("data-x");
					elm.removeAttribute("data-y");
				},10);
				//elm.setAttribute("data-init-style",elm.getAttribute("style").replace(/transform:\s?translate.*?\;/,""));
			});
		}
	}
	document.querySelectorAll(".float").forEach(elm=>{
		elm.setAttribute("data-init-style",elm.getAttribute("style"));
	});
	replaceRender(-1);
	window.addEventListener("devicemotion",function(e){
		//Focus Window Controls on shake
		const a = e.acceleration;
		if ((a.x+a.y+a.z)/3 > 5) {
			var wcs = document.getElementById("window-controls-resizer");
			wcs.click();
			showElm(wcs);
		}
		if (a.x||a.y||a.z) document.getElementById("window-controls-resizer").querySelector("span.center").innerHTML = "To bring this window into focus,<br/>you can shake your device."
	});
	window.addEventListener("storage",function(){
		switch (localStorage.getItem("projectLoadState")) {
			case "loadingPlayer":
				document.querySelector(".project-build-status").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Initiating Player';
				break;
			case "loaded":
				document.querySelector(".project-build-status").innerHTML = '<i class="fa fa-check"></i> Build Complete ('+Math.round((performance.now()-editor.project.buildStartTime)*100)/100+'ms)';
				localStorage.removeItem("projectLoadState");
				delete editor.project.buildStartTime;
				//Manually Close Popup so scrolling stays locked
				document.querySelectorAll(".popup .container").forEach(e=>{e.setAttribute("hidden","")});
				document.querySelectorAll(".popup input:not([type=checkbox]):not([type=radio]):not(.noEmpty)").forEach(e=>{e.value=""});
				document.querySelector(".popup").setAttribute("hidden","");
				if (!document.getElementById("project-player")) editor.project.canAddPlayer=true, popup.close(), bodyScroll.enable();
				break;
			default:
				break;
		}
	});
}
if (editor.useFileSysCode) {
	editor.traits = {
		showFields: function() {
			document.querySelectorAll(".traits-editor > div").forEach(elm=>{
				elm.style.display = (elm.id == "traits-" + document.getElementById("traits-selector").value) ? "inline-block" : "none";
			});
		},
		updateFields: function() {
			if (typeof hsProject.stageSize == "undefined") hsProject.stageSize = {};
			document.getElementById("traits-stageSize").querySelector("input").value = hsProject.stageSize.width||1024;
			document.getElementById("traits-stageSize").querySelector("input:nth-child(2)").value = hsProject.stageSize.height||768;
			document.getElementById("traits-version").querySelector("input").value = hsProject.version||31;
			document.getElementById("traits-playerVersion").querySelector("input").value = hsProject.playerVersion||"1.0.0";
			document.getElementById("traits-edited_at").querySelector("input").value = hsProject.edited_at||"";
			document.getElementById("traits-baseObjectScale").querySelector("input").value = hsProject.baseObjectScale||1;
			document.getElementById("traits-fontSize").querySelector("input").value = hsProject.fontSize||80;
			document.getElementById("traits-requires_beta_editor").querySelector("select").value = hsProject.requires_beta_editor||false;
			var filesize = Math.round(JSON.stringify(unformatProject(hsProject)).length/10)/100;
			//Re-render the JSON preview if it is visible
			if (!document.getElementById("renderjson-container").hidden) document.getElementById("renderjson-container").innerHTML = "", document.getElementById("renderjson-container").appendChild(renderjson(unformatProject(hsProject)));
			function getSbAbility(){
				const hasSbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{if(a.name && checkAbility.secretBlocks(a).contains) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
				const fullSbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{if(a.name && checkAbility.secretBlocks(a).newest) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
				editor.project.secretBlocks = fullSbAbilityName ? "new" : hasSbAbilityName ? "old" : "none";
				return fullSbAbilityName ? fullSbAbilityName.replace(/(^.{13})(.+)/,"$1\u2026") + ' <i title="Up to date" class="fa fa-fw fa-check"></i>' : hasSbAbilityName ? hasSbAbilityName.replace(/(^.{13})(.+)/,"$1\u2026") + ' <i title="Out of date" class="fa fa-fw fa-refresh"></i>' : '<i>Not added</i>';
				//+' <i class="fa fa-check"></i>').replace(/^undefined <i class="fa fa-check"><\/i>$/,"<i>Not added</i>")
			}
			document.querySelector(".traits-info").innerHTML =	  '<span><i class="fa fa-fw fa-link fa-flip-horizontal"></i> Project ID: '+(hsProject.uuid||"")+'</span><br/>'
																+ '<span><i class="fa fa-fw fa-info-circle"></i> File Size: '+ ((filesize < 1000) ? filesize + " KB" : Math.round(filesize/10)/100 + " MB")+'</span><br/>'
																+ '<span><i class="fa fa-fw fa-arrows"></i> Stage Size: '+(hsProject.stageSize.width||1024)+'x'+(hsProject.stageSize.height||768)+'</span><br/>'
																+ '<span><i class="fa fa-fw fa-history"></i> Version: Editor '+hsProject.version+', Player '+(hsProject.playerVersion||"1.0.0")+'</span><br/>'
																+ '<span><i class="fa fa-fw fa-pencil"></i> Edited: '+new Date(hsProject.edited_at).toString().replace(/^\w{3}\s|\sGMT.*$/g,"")+'</span><br/>'
																+ '<span><i class="fa fa-fw fa-arrows-alt"></i> Base Object Scale: '+(hsProject.baseObjectScale||1)+'</span><br/>'
																+ '<span><i class="fa fa-fw fa-text-height"></i> Font Size: '+(hsProject.fontSize||80)+'</span><br/>'
																+ '<span><i class="fa fa-fw fa-star-o"></i> Requires Beta Editor: '+(hsProject.requires_beta_editor||false)+'</span><br/>'
																+ '<span><i class="fa fa-fw fa-bolt"></i> Secret Blocks: '+getSbAbility()+'</span><br/>';
		},
		updateTrait: function() {
			if (typeof hsProject.stageSize == "undefined") hsProject.stageSize = {};
			var activeTraitFields = document.querySelector(".traits-editor > div[style*=\"inline-block\"]");
			var activeTraitType = activeTraitFields.id.replace(/^traits-/,"");
			if (activeTraitFields.querySelector(":invalid")) return alert("You have invalid fields");
			switch (activeTraitType) {
				case "other":
					const traitName = document.getElementById("traits-other").querySelector("select").value;
					//Set the preview name to the option label
					editor.jsonEditor.open();
					document.querySelector(".block-preview.editor-jsonrender span").innerHTML = document.getElementById("traits-other").querySelector('select option[value="'+traitName+'"]').innerText
					cmEditor.getDoc().setValue(JSON.stringify(traitName=="project"?hsProject:hsProject[traitName],null,"\t"));					
					for (var i = 1; i < cmEditor.lastLine() ; i++) {
						cmEditor.foldCode({ line: i, ch: 0 }, null, "fold");
					}
					cmEditor.clearHistory();
					break;
				case "presetActions":
					switch (document.getElementById("traits-presetActions").querySelector("select").value) {
						case "secret-blocks":
							//var sbAbility = JSON.parse(JSON.stringify(editor.project.presetCode.secretBlocksAbility).replace(/_HIDDEN_SCRIPTS_ABILITY_ID/,uuidv4().toUpperCase()));
							document.getElementById("pAct-sBlocks0").value = "Secret Blocks";
							document.getElementById("pAct-sBlocks1").value = hsProject.abilities.repeatEach(a=>{return a.createdAt||0}).sort((a,b)=>b-a)[0]+12.345678||0;
							document.getElementById("pAct-sBlocks2").value = uuidv4().toUpperCase();
							popup.presetActions("sBlocks");
							break;
						case "image-blocks":
							document.getElementById("pAct-imgBlocks0").value = "Set Image Blocks";
							document.getElementById("pAct-imgBlocks1").value = hsProject.abilities.repeatEach(a=>{return a.createdAt||0}).sort((a,b)=>b-a)[0]+12.345678||0;
							document.getElementById("pAct-imgBlocks2").value = uuidv4().toUpperCase();
							popup.presetActions("imgBlocks");
							break;
						case "color-slots":
							popup.presetActions("colSlots");
							break;
						case "math-operators":
							popup.presetActions("mathOperators");
							break;
						case "save-preset":
							popup.presetActions("savePreset");
							document.getElementById("pAct-savePreset0").value = "New Preset";
							document.getElementById("pAct-savePreset1").value = ((hsProject.scenes||[])[0]||{}).name||"";
							document.getElementById("pAct-savePreset2").value = (hsProject.customRules||[]).repeatEach(cr=>{return cr.name||null}).removeNull().join("\n");
							document.getElementById("pAct-savePreset3").value = (hsProject.abilities||[]).repeatEach(abl=>{if(abl.name)return abl.name;}).removeNull().join("\n");
							break;
						case "load-preset":
							popup.presetActions("loadPreset");
							document.getElementById("pAct-preset-file-label").innerText = "No file chosen";
							document.getElementById("pAct-loadPreset0").value = "[]";
							break;
						case "remove-deleted":
							popup.presetActions("removeDeleted");
							break;
						case "remove-unused":
							popup.presetActions("removeUnused");
							break;
						case "gradient-bg":
							popup.presetActions("gradientBg");
							document.getElementById("pAct-gradientBg0").value = "";
							break;
						case "midi-hack":
							popup.presetActions("midiHack");
							document.getElementById("pAct-midiHack0").value = "";
							document.getElementById("pAct-midiHack1").value = hsProject.abilities.repeatEach(a=>{return a.createdAt||0}).sort((a,b)=>b-a)[0]+12.345678||0;
							document.getElementById("pAct-midiHack2").value = uuidv4().toUpperCase();
							break;
						default:
							alert("I have not added this functionality yet ;(");
					}
					break;
				case "stageSize":
					hsProject.stageSize.width = Number(activeTraitFields.querySelector("input").value);
					hsProject.stageSize.height = Number(activeTraitFields.querySelector("input:nth-child(2)").value);
					break;
				case "playerVersion":
				case "edited_at":
					hsProject[activeTraitType] = activeTraitFields.querySelector("input, select").value;
					break;
				case "requires_beta_editor":
					hsProject[activeTraitType] = (activeTraitFields.querySelector("input, select").value == "true");
					break;
				case "version":
					//Apply necessary updates if the editor crosses from 25- to 26+
					if (hsProject.version < 26 && Number(activeTraitFields.querySelector("input, select").value) >= 26) {
						//Only do the conversion if there is no new data (as in new variable or trait formats) in the project
						if (!/"datum":\{[^\{\}\[\]]*?\"variable"[^\{\}\[\]]*?}/g.test(JSON.stringify(hsProject))) {
							//Make a Variable ID to Object ID Dictionary, Trait ID to Trait Dictionary, and an Event Parameter ID Idenfitication Dictionary
							let varIdDict = {}, traitDict = {}, paramDict = {};
							hsProject.variables.repeatEach(v=>{
								if (v.HSObjectIDString) varIdDict[v.objectIdString] = v.HSObjectIDString;
								else v.type = 8003;
							});
							hsProject.traits.repeatEach(t=>{traitDict[t.HSTraitIDKey] = t;});
							hsProject.eventParameters.repeatEach(e=>{paramDict[e.id] = true;});
							count=0;
							hsProject = JSON.parse(JSON.stringify(hsProject).replace(/"variable":"(.*?)"/g,function(m0,m1,m2){
								if (paramDict[m1]) return m0;
								if (traitDict[m1]) return '"datum":'+JSON.stringify(traitDict[m1]);
								if (varIdDict[m1]) return '"datum": {"variable": "'+m1+'","type": 8000,"object":"'+varIdDict[m1]+'","description": "Variable"}';
								/* otherwise... */ return '"datum": {"variable": "'+m1+'","description": "Variable","type": 8003}';
							}));
							formatProject(hsProject);
						}
					}
				default:
					hsProject[activeTraitType] = Number(activeTraitFields.querySelector("input, select").value);
					break;
			}
			editor.traits.updateFields();
		}
	},
	editor.presetActions = {
		secretBlocks: function() {
			var hiddenScriptId = uuidv4().toUpperCase();
			var sbAbility = {
				"name": document.getElementById("pAct-sBlocks0").value,
				"createdAt": Number(document.getElementById("pAct-sBlocks1").value),
				"abilityID": document.getElementById("pAct-sBlocks2").value,
				"blocks": JSON.parse(JSON.stringify(editor.project.presetCode.secretBlocksAbility.blocks).replace(/_HIDDEN_SCRIPTS_ABILITY_ID/,hiddenScriptId))
			};
			var hbAbility = {
				"createdAt": Number(document.getElementById("pAct-sBlocks1").value + 12.345678),
				"abilityID": hiddenScriptId,
				"blocks": (function(i){return".".repeat(i).split("").repeatEach(()=>{return JSON.parse(editor.project.presetCode.hiddenAbilityBlock.replace(/_CONTROL_SCRIPT_ABILITY_ID/,uuidv4().toUpperCase()))})})(50)
			};
			if (!projectDict.abilities[sbAbility.abilityID]) {
				hsProject.abilities.push(sbAbility);
				hsProject.abilities.push(hbAbility);
				projectDict.abilities[sbAbility.abilityID] = sbAbility;
				projectDict.abilities[hbAbility.abilityID] = hbAbility;
				editor.traits.updateFields();
				updateDrawers();
				popup.close();
			} else return alert("There is already an ability with that ID");
		},
		imgBlocks: function() {
			var imgBlocksAbility = {
				"name": document.getElementById("pAct-imgBlocks0").value,
				"createdAt": Number(document.getElementById("pAct-imgBlocks1").value),
				"abilityID": document.getElementById("pAct-imgBlocks2").value,
				"blocks": editor.project.presetCode.setImageBlocksList
			};
			if (!projectDict.abilities[imgBlocksAbility.abilityID]) {
				hsProject.abilities.push(imgBlocksAbility);
				projectDict.abilities[imgBlocksAbility.abilityID] = imgBlocksAbility;
				editor.traits.updateFields();
				updateDrawers();
				popup.close();
			} else return alert("There is already an ability with that ID");
		},
		colorSlots: function() {
			document.getElementById("pAct-colSlots").querySelector("button").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Optimizing';
			const performanceStart = performance.now();
			var worker = new Worker(URL.createObjectURL(new Blob(["("+doColorSlots.toString()+")("+JSON.stringify(hsProject)+")"], {type: 'text/javascript'})));
			worker.onmessage = function(msg) {
				document.getElementById("pAct-colSlots").querySelector("button").innerHTML = "Optimize";
				console.log(msg.data);
				hsProject = msg.data.project;
				console.log("%cColor Slot Optimization Complete (" + msg.data.count + (msg.data.count==1?" slot in ":" slots in ") + Math.round((performance.now() - performanceStart)*100)/100 + "ms)", "color:teal;font-weight:600;");
				formatProject(hsProject);
				editor.traits.updateFields();
				popup.close();
			};
			worker.onerror = function() {
				document.getElementById("pAct-mathOperators").querySelector("button").innerHTML = "Optimize";
				alert("Your project encountered an error");
			};
		},
		mathOperators: function() {
			document.getElementById("pAct-mathOperators").querySelector("button").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Optimizing';
			const performanceStart = performance.now();
			var worker = new Worker(URL.createObjectURL(new Blob(["("+doMathOperators.toString()+")("+JSON.stringify(hsProject)+")"], {type: 'text/javascript'})));
			worker.onmessage = function(msg) {
				document.getElementById("pAct-mathOperators").querySelector("button").innerHTML = "Optimize";
				console.log(msg.data);
				hsProject = msg.data.project;
				console.log("%cMath Evaluation Complete (" + msg.data.count + (msg.data.count==1?" math block in ":" math blocks in ") + Math.round((performance.now() - performanceStart)*100)/100 + "ms)", "color:teal;font-weight:600;");
				formatProject(hsProject);
				editor.traits.updateFields();
				popup.close();
			};
			worker.onerror = function() {
				document.getElementById("pAct-mathOperators").querySelector("button").innerHTML = "Optimize";
				alert("Your project encountered an error");
			};
		},
		savePreset: function() {
			//New Presets will be saved in plain JSON format with the .hspre extension
			document.getElementById("pAct-savePreset").querySelector("button").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Saving';
			const performanceStart = performance.now();
			const namesDict = {scenes: document.getElementById("pAct-savePreset1").value.match(/^.+$/gm)||[], customRules: document.getElementById("pAct-savePreset2").value.match(/^.+$/gm)||[], abilities: document.getElementById("pAct-savePreset3").value.match(/^.+$/gm)||[]};
			var worker = new Worker(URL.createObjectURL(new Blob(["("+savePreset.toString()+")("+JSON.stringify(unformatProject(hsProject))+","+JSON.stringify(namesDict)+")"], {type: 'text/javascript'})));
			worker.onmessage = function(msg) {
				document.getElementById("pAct-savePreset").querySelector("button").innerHTML = "Save Preset";
				console.log(msg.data);
				myPreset = msg.data;
				console.log("%cPreset Complete ("
					+ (myPreset.abilities.length==1?"1 ability, ":myPreset.abilities.length+" abilities, ")
					+ (myPreset.rules.length==1?"1 rule, ":myPreset.rules.length+" rules, ")
					+ (myPreset.customRules.length==1?"1 custom rule, ":myPreset.customRules.length+" customRules, ")
					+ (myPreset.objects.length==1?"1 object, ":myPreset.objects.length+" objects, ")
					+ (myPreset.scenes.length==1?"1 scen, e":myPreset.scenes.length+" scenes, ")
					+ (myPreset.eventParameters.length==1?"1 event parameter, and ":myPreset.eventParameters.length+" event parameters, and ")
					+ (myPreset.variables.length==1?"1 variable in ":myPreset.variables.length+" variables in ")
					+ Math.round((performance.now() - performanceStart)*100)/100 + "ms)", "color:teal;font-weight:600;");
				if (/iPhone|iPad|iPod/.test(navigator.userAgent)) popup.download();
				const	blob = new Blob([JSON.stringify(myPreset)],{type:"application/json"}),
						responseFn = function(xhr) {
							//Consider making this a default
							if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
								localStorage.setItem("hsProject",JSON.stringify(hsProject));
								setTimeout(function(){location.href = 'workflow://run-workflow?name=Save%20HS%20Project&input={"name":"'+(hsProject.filename||hsProject.uuid+".hopscotch")+'","url":"' + (JSON.parse(xhr.responseText).link) + '"}';},50);
								setTimeout(function(){location.href = "?r=1";},150);
							} else {
								location.href = JSON.parse(xhr.responseText).link;
							}
							document.getElementById("download-btn").innerHTML = '<i class="fa fa-download"></i> Save'
						};
				downloadItem(blob, document.getElementById("pAct-savePreset0").value + ".hspre", responseFn, responseFn);
				popup.close();
			};
			worker.onerror = function() {
				document.getElementById("pAct-savePreset").querySelector("button").innerHTML = "Save Preset";
				alert("Your project encountered an error");
			};
		},
		loadPreset: function() {
			//Read files from the input, which gives a list of presets to import
			document.getElementById("pAct-loadPreset").querySelector("button:not(.file-btn)").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Importing';
			const performanceStart = performance.now();
			var worker = new Worker(URL.createObjectURL(new Blob(["("+loadPreset.toString()+")("
				+JSON.stringify(unformatProject(hsProject))+","+document.getElementById("pAct-loadPreset0").value
				+","+JSON.stringify({newVarNames:document.getElementById("pAct-loadPreset-c0").checked,alwaysMerge:document.getElementById("pAct-loadPreset-c1").checked,originalCreateDates:document.getElementById("pAct-loadPreset-c2").checked})+")"], {type: 'text/javascript'})));
			worker.onmessage = function(msg) {
				document.getElementById("pAct-loadPreset").querySelector("button:not(.file-btn)").innerHTML = 'Import Preset(s)';
				myProject = msg.data.project;
				hsProject = unformatProject(hsProject);
					hsProject.abilities = myProject.abilities,
					hsProject.rules = myProject.rules,
					hsProject.customRules = myProject.customRules,
					hsProject.objects = myProject.objects,
					hsProject.scenes = myProject.scenes,
					hsProject.eventParameters = myProject.eventParameters,
					hsProject.customObjects = myProject.customObjects,
					hsProject.remote_asset_urls = myProject.remote_asset_urls,
					hsProject.variables = myProject.variables;
				const presetCount = JSON.parse(document.getElementById("pAct-loadPreset0").value).length, mergedCount = msg.data.mergeCount;
				console.log("%cMerged "+mergedCount+"/"+presetCount+" preset"+(presetCount===1?"":"s")+" ("+ Math.round((performance.now() - performanceStart)*100)/100 + "ms)", "color:teal;font-weight:600;");
				formatProject(hsProject);
				editor.traits.updateFields();
				updateDrawers();
				replaceRender(-1);
				popup.close();
			};
			worker.onerror = function() {
				document.getElementById("pAct-loadPreset").querySelector("button:not(.file-btn)").innerHTML = 'Import Preset(s)';
				alert("Your project encountered an error");
			};
		},
		removeDeleted: function() {
			//This is similar to removing unused code, except that we keep all custom rules, abilities, variables, and custom objects
			document.getElementById("pAct-removeUnused").querySelector("button").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Cleaning';
			const performanceStart = performance.now();
			const namesDict = {scenes: (hsProject.scenes||[]).repeatEach(s=>{return s.name}).removeNull(), customRules: (hsProject.customRules||[]).repeatEach(cr=>{return cr.name}).removeNull(), abilities: (hsProject.abilities||[]).repeatEach(abl=>{if(abl.name)return abl.name;}).removeNull()};
			var worker = new Worker(URL.createObjectURL(new Blob(["("+savePreset.toString()+")("+JSON.stringify(unformatProject(hsProject))+","+JSON.stringify(namesDict)+",true)"], {type: 'text/javascript'})));
			worker.onmessage = function(msg) {
				document.getElementById("pAct-removeUnused").querySelector("button").innerHTML = "Continue";
				myProject = msg.data;
				hsProject = unformatProject(hsProject);
					hsProject.abilities = myProject.abilities,
					hsProject.rules = myProject.rules,
					hsProject.customRules = myProject.customRules,
					hsProject.objects = myProject.objects,
					hsProject.scenes = myProject.scenes,
					hsProject.eventParameters = myProject.eventParameters,
					//hsProject.customObjects = myProject.customObjects,
					//hsProject.remote_asset_urls = myProject.remote_asset_urls,
					//hsProject.variables = myProject.variables;
				console.log("%cRemoved all Deleted Code ("+ Math.round((performance.now() - performanceStart)*100)/100 + "ms)", "color:teal;font-weight:600;");
				editor.traits.updateFields();
				updateDrawers();
				popup.close();
			};
			worker.onerror = function() {
				document.getElementById("pAct-removeUnused").querySelector("button").innerHTML = "Continue";
				alert("Your project encountered an error");
			};
			editor.traits.updateFields();
		},
		removeUnused: function() {
			document.getElementById("pAct-removeUnused").querySelector("button").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Cleaning';
			const performanceStart = performance.now();
			//What we actually do is create a preset of all scenes, which (at least in theory) collects all used code and makes it into a project.
			//Then we use that preset and write that to the project. This does suport removal of remote_asset_urls or customObjects.
			const namesDict = {scenes: (hsProject.scenes||[]).repeatEach(s=>{return s.name}).removeNull(), customRules: [], abilities: []};
			var worker = new Worker(URL.createObjectURL(new Blob(["("+savePreset.toString()+")("+JSON.stringify(unformatProject(hsProject))+","+JSON.stringify(namesDict)+",true)"], {type: 'text/javascript'})));
			worker.onmessage = function(msg) {
				document.getElementById("pAct-removeUnused").querySelector("button").innerHTML = "Continue";
				myProject = msg.data;
				hsProject = unformatProject(hsProject);
					hsProject.abilities = myProject.abilities,
					hsProject.rules = myProject.rules,
					hsProject.customRules = myProject.customRules,
					hsProject.objects = myProject.objects,
					hsProject.scenes = myProject.scenes,
					hsProject.eventParameters = myProject.eventParameters,
					hsProject.customObjects = myProject.customObjects,
					hsProject.remote_asset_urls = myProject.remote_asset_urls,
					hsProject.variables = myProject.variables;
				console.log("%cRemoved all Unused Code ("+ Math.round((performance.now() - performanceStart)*100)/100 + "ms)", "color:teal;font-weight:600;");
				editor.traits.updateFields();
				updateDrawers();
				popup.close();
			};
			worker.onerror = function() {
				document.getElementById("pAct-removeUnused").querySelector("button").innerHTML = "Continue";
				alert("Your project encountered an error");
			};
			editor.traits.updateFields();
		},
		gradientBg: function() {
			document.getElementById("insert-gradient-bg-btn").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Generating Code...';
			document.getElementById("insert-gradient-bg-btn").setAttribute("disabled","");
			document.getElementById("presetActions").querySelector(".fa-close").classList.add("disabled");
			//Call the worker to load a preset with the background color
			const performanceStart = performance.now();
			var worker = new Worker(URL.createObjectURL(new Blob(["("+loadPreset.toString()+")("
				+JSON.stringify(unformatProject(hsProject))+',"bg-'+document.getElementById("gradient-preview").getAttribute("type")
				+'",'+JSON.stringify({newVarNames:false,alwaysMerge:true,originalCreateDates:false,name:document.getElementById("pAct-gradientBg0").value||"Gradient Background",bgHsv:document.getElementById("bg-c2").checked,colors:document.getElementById("color-preview-box").querySelectorAll("input").repeatEach(input=>input.value)})+")"], {type: 'text/javascript'})));
			worker.onmessage = function(msg) {
				document.getElementById("insert-gradient-bg-btn").innerHTML = 'Insert Custom Rule';
				document.getElementById("insert-gradient-bg-btn").removeAttribute("disabled");
				document.getElementById("presetActions").querySelector(".fa-close").classList.remove("disabled");
				myProject = msg.data.project;
				hsProject = unformatProject(hsProject);
					hsProject.abilities = myProject.abilities,
					hsProject.rules = myProject.rules,
					hsProject.customRules = myProject.customRules,
					hsProject.objects = myProject.objects,
					hsProject.scenes = myProject.scenes,
					hsProject.eventParameters = myProject.eventParameters,
					hsProject.customObjects = myProject.customObjects,
					hsProject.remote_asset_urls = myProject.remote_asset_urls,
					hsProject.variables = myProject.variables;
				console.log("%cLoaded Gradient Background in "+ Math.round((performance.now() - performanceStart)*100)/100 + "ms", "color:teal;font-weight:600;");
				formatProject(hsProject);
				editor.traits.updateFields();
				updateDrawers();
				replaceRender(-1);
				popup.close();
			};
			worker.onerror = function() {
				document.getElementById("insert-gradient-bg-btn").innerHTML = 'Insert Custom Rule';
				document.getElementById("insert-gradient-bg-btn").removeAttribute("disabled");
				document.getElementById("presetActions").querySelector(".fa-close").classList.remove("disabled");
				alert("Your project encountered an error");
			};
		},
		midiHack: function() {
			document.getElementById("insert-midi-btn").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> Generating Code...';
			document.getElementById("insert-midi-btn").setAttribute("disabled","");
			document.getElementById("presetActions").querySelector(".fa-close").classList.add("disabled");
			var worker = new Worker(URL.createObjectURL(new Blob(["("+doMidiHack.toString()+")('"+document.getElementById("pAct-midiHack3").value+"')"], {type: 'text/javascript'})));
			worker.onmessage = function(msg) {
				document.getElementById("insert-midi-btn").innerHTML = "Insert Song Ability";
				document.getElementById("insert-midi-btn").removeAttribute("disabled");
				document.getElementById("presetActions").querySelector(".fa-close").classList.remove("disabled");
				var midiAbility = {
					"name": document.getElementById("pAct-midiHack0").value,
					"createdAt": Number(document.getElementById("pAct-midiHack1").value),
					"abilityID": document.getElementById("pAct-midiHack2").value,
					"blocks": JSON.parse("[" + msg.data + "]")
				};
				if (!projectDict.abilities[midiAbility.abilityID]) {
					hsProject.abilities.push(midiAbility);
					projectDict.abilities[midiAbility.abilityID] = midiAbility;
					editor.traits.updateFields();
					updateDrawers();
					popup.close();
				} else return alert("There is already an ability with that ID");
				document.getElementById("pAct-midiHack3").value = "";
				document.getElementById("pAct-midi-file").value = "";
				document.getElementById("pAct-midi-file-label").innerHTML = "No file chosen";
			}
			worker.onerror = function(){
				document.getElementById("pAct-midi-file-label").innerHTML = "Invalid File";
				document.getElementById("insert-midi-btn").innerHTML = "Insert Song Ability";
				document.getElementById("insert-midi-btn").removeAttribute("disabled");
				document.getElementById("presetActions").querySelector(".fa-close").classList.remove("disabled");
				document.getElementById("pAct-midiHack3").value = "";
				document.getElementById("pAct-midi-file").value = "";
				document.getElementById("pAct-midi-file-label").innerHTML = "No file chosen";
			}
		}
	};
	editor.fileReader = {
		getContents: function(method, input, fn, properties) {
			//const input = event.target;
			const filename = (input.value||"").replace(/^.*\\/,"");
			document.getElementById(input.id + "-label").innerHTML = filename.replace(new RegExp("(^.{"+(16)+"})(.+)"),"$1\u2026")||"No file chosen";
			var ext;
			try {
				ext = input.files[0].name.split(".")[input.files[0].name.split(".").length-1];
			} catch (TypeError) {
				return;
			}
			var file = input.files[0];
			if ('files' in input && input.files.length > 0) {
				editor.fileReader.readFile(method,file).then(content => {
					
					fn(content, filename.replace(/\..*?$/,""), "." + ext);
				}).catch(error => console.log(error))
			} else if ('files' in input && input.files.length > 0) console.log('Invalid File');
		},
		readFile: function(method, file) {
			const reader = new FileReader();
			return new Promise((resolve, reject) => {
				reader.onload = event => resolve(event.target.result)
				reader.onerror = error => reject(error)
				switch (method) {
					case "text":
						reader.readAsText(file);
						break;
					case "dataURL":
						reader.readAsDataURL(file);
						break;
					default:
						throw new TypeError("Unsupported Read Method");
				}
			});
		},
		AAStringify: function (a) {
			//To be used in the case of diff-checking
			var pString = ""; Object.keys(a).forEach(key=>{pString+=","+(Array.isArray(a[key]) ? '\n"'+key+'": ['+((a[key].length>0)?'\n\t' + a[key].repeatEach(item=>JSON.stringify(item)).join(",\n\t") + '\n]':']') : '\n"'+key+'": ' +JSON.stringify(a[key],null,"\t"))});pString+=`\n}`;pString.replace(/\n(?!\}$)/g,"\n\t").replace(/^,/,"{");
		},
		showDiff: function (displayElm, text1, text2) {
			const diff = Diff.diffLines(text1, text2),
				fragment = document.createDocumentFragment();

			diff.forEach((part) => {
			// green for additions, red for deletions
			// grey for common parts
			const color = part.added ? 'lightgreen' :
				part.removed ? 'pink' : 'none';
			const className = part.added ? 'addition' :
				part.removed ? 'deletion' : '';
			var span;
			if (className) {
				span = document.createElement('span');
				span.style.backgroundColor = color;
				span.classList.add(className);
				span.appendChild(document.createTextNode(part.value));
			} else {
				span = document.createTextNode(part.value);
			}
			fragment.appendChild(span);
			});
			displayElm.appendChild(fragment);
		}
	};
	
	//Read Link from Input
	function importLink() {
		var indicator = document.getElementById("link-ind");
		indicator.removeAttribute("hidden");
		var input = document.getElementById("hs-project-link").value;
		if (input == "") {
			indicator.innerHTML = "Please enter a link";
			return;
		} else if (input.match(/https?:\/\/.*/) && !input.match(/https?:\/\/c(ommunity)?.gethopscotch.com\/(p|projects|e)\//)) {
			indicator.innerHTML = "Please enter a Hopscotch link";
			return;
		}
		indicator.innerHTML = "Uploading...";
		var goButton = document.getElementById("import").querySelector("button[onclick=\"importLink()\"]");
		goButton.setAttribute("disabled","");
		goButton.style.cursor = "default";
		input = input.split('/p/')[1] || input.split('/projects/')[1] || input.split('/e/')[1] || input;
		XHR.requestExt("GET","https://c.gethopscotch.com/api/v1/projects/" + input, function(r,s){
			if (s != 200) {
				indicator.innerHTML = (s == 500) ? "This project does not exist" : (s >= 500) ? "Server Error" : "Error " + s;
				goButton.removeAttribute("disabled");
				goButton.style.cursor = "";
			} else {
				indicator.innerHTML = "Loading...";
				setTimeout(function(){
					hsProject = JSON.parse(r);
					if (!hsProject.stageSize) hsProject.stageSize = {width:1024,height:768};
					//updateFields();
					editor.traits.updateFields();
					let worker = formatProjectWorker(hsProject);
					worker.onmessage = function(msg) {
						if (msg.data.status === "in progress") {
							document.getElementById("link-ind").innerHTML = "Loading (" + msg.data.percent + "%)...";
						} else if (msg.data.status === "done") {
							indicator.setAttribute("hidden","");
							hsProject = msg.data.hsProject, projectDict = msg.data.projectDict;
							replaceRender(-1);
							updateDrawers();
							popup.close();
							goButton.removeAttribute("disabled");
							goButton.style.cursor = "";
						}
					};
					worker.onerror = function(msg) {
						indicator.innerHTML = "Loading Error";
						goButton.removeAttribute("disabled");
						goButton.style.cursor = "";
					}
				},0);
			}
		}, 1);
	}
	
	//Read User Input File
	document.getElementById('hs-project-file-btn').addEventListener('click', function(event){
		document.getElementById('hs-project-file').click();
		document.getElementById('hs-project-file').value = "";
		getFile(event);
	});
	document.getElementById('hs-project-file').addEventListener('change', getFile);
	function getFile(event) {
		const input = event.target;
		document.getElementById("file-label").innerHTML = (input.value||"").replace(/^.*\\/,"")||"No file chosen";
		try {
			var ext = input.files[0].name.split(".")[input.files[0].name.split(".").length-1];
		} catch (TypeError) {
			return;
		}
		var file = input.files[0];
		if ('files' in input && input.files.length > 0) {
			readFileContent(file).then(content => {
				try {
					hsProject = JSON.parse(content);
					if (!hsProject.stageSize) hsProject.stageSize = {width:1024,height:768};
					hsProject.filename = input.value.replace(/^.*(\/|\\)/,"");	
					editor.traits.updateFields();
					formatProject(hsProject);
					replaceRender(-1);
					updateDrawers();
					popup.close();
					document.getElementById('hs-project-file').value = "";
				} catch (SyntaxError) { console.log('Invalid File'); document.getElementById("file-label").innerHTML = "Invalid File"; }
			}).catch(error => console.log(error))
		} else if ('files' in input && input.files.length > 0) console.log('Invalid File');
	}
	function readFileContent(file) {
		const reader = new FileReader()
		return new Promise((resolve, reject) => {
			reader.onload = event => resolve(event.target.result)
			reader.onerror = error => reject(error)
			reader.readAsText(file);
		})
	}
	
	//Read MIDI File
	document.getElementById("pAct-midi-file-btn").addEventListener("click", function(event){
		//Click the input that has the same ID wihtout -btn at the end and clear the value of that same input
		const fileInput = document.getElementById("pAct-midi-file");
		fileInput.click();
		fileInput.value = "";
		const changeFn = function(){
			editor.fileReader.getContents("dataURL", fileInput, function(content, filename, ext){
				if (!/^\.midi?$/.test(ext)) return alert("The file must be a MIDI file");
				if (document.getElementById("pAct-midiHack0").value == "") document.getElementById("pAct-midiHack0").value = letterCasing.dashedToTitle(filename);
				document.getElementById("pAct-midiHack3").value = content;
			},{maxDisplayLength:21});
		};
		fileInput.onchange = changeFn;
		changeFn();
	});
	//Read Preset File(s)
	document.getElementById("pAct-preset-file-btn").addEventListener("click", function(event){
		//Click the input that has the same ID wihtout -btn at the end and clear the value of that same input
		const fileInput = document.getElementById("pAct-preset-file");
		fileInput.click();
		fileInput.value = "";
		const changeFn = async function(){
			document.getElementById("pAct-preset-file-label").innerText = "No file chosen";
			let invalidPresetCount = 0, presetArray = [];
			function contentHandler(content, filename, ext) {
				console.log(filename, ext, content);
				if (!/^\.(hspre|txt|json|hopscotch)$/.test(ext)) return invalidPresetCount++;
				//These are the individual preset files
				var presetProject = {};
				try {
					//Old .hspre format
					presetProject = JSON.parse(Base64.decode(Base64.decode(content)).replace(/_\\EQUALS/g,"="));
				} catch (e) {
					try {
						//New .hspre format
						presetProject = JSON.parse(content);
					} catch (e) {
						return invalidPresetCount++;
					}
				}
				presetArray.push(presetProject);
				document.getElementById("pAct-preset-file-label").innerText = presetArray.length==0?"No file chosen":presetArray.length==1?filename.replace(new RegExp("(^.{"+(20)+"})(.+)"),"$1\u2026")+ext:presetArray.length+" files chosen";
				return;
			}
			function handleFile(file, name) {
				return new Promise(resolve=>{
					JSZip.loadAsync(file)
					.then(function(zip) {
						zip.forEach(function (relativePath, zipEntry) {
							zipEntry.async('string').then(function(fileData) {
								contentHandler(fileData, zipEntry.name.replace(/\..*?$/,""), zipEntry.name.match(/\..*?$/)[0]);
								resolve();
							})
						});
					}, function (e) {
						editor.fileReader.readFile("text", file).then(content=>{
							contentHandler(content, name.replace(/\..*?$/,""), name.match(/\..*?$/)[0]);
							resolve();
						});
					});
				});
			}
			const files = fileInput.files;
			for (var i = 0; i < files.length; i++) {
				await handleFile(files[i], files[i].name);
			}
			document.getElementById("pAct-loadPreset0").value = JSON.stringify(presetArray);
			if (invalidPresetCount > 0) alert(invalidPresetCount + " of your preset files " + (invalidPresetCount===1?"is":"are") + " corrupted");
		};
		fileInput.onchange = changeFn;
		changeFn();
	});
	
	//Manage Popup
	var popup = {
		"close": function() {
			document.querySelectorAll(".popup .container").forEach(e=>{e.setAttribute("hidden","")});
			document.querySelectorAll(".popup input:not([type=checkbox]):not([type=radio]):not(.noEmpty)").forEach(e=>{e.value=""});
			document.querySelector(".popup").setAttribute("hidden","");
			bodyScroll.enable();
		},
		"importProject": function() {
			document.querySelector("#import").removeAttribute("hidden");
			document.querySelector(".popup").removeAttribute("hidden");
			bodyScroll.disable();
		},
		"download": function() {
			document.querySelector("#download").removeAttribute("hidden");
			document.querySelector(".popup").removeAttribute("hidden");
			bodyScroll.disable();
		},
		"presetActions": function(actionType) {
			document.querySelector("#presetActions").removeAttribute("hidden");
			document.querySelector(".popup").removeAttribute("hidden");
			document.querySelector("#presetActions").querySelectorAll('div[id*="pAct"]').forEach(elm=>{elm.setAttribute("hidden","")});
			document.getElementById("pAct-"+actionType).removeAttribute("hidden");
			bodyScroll.disable();
		},
		"projectStats": function() {
			document.querySelector("#stats-popup").removeAttribute("hidden");
			document.querySelector(".popup").removeAttribute("hidden");
			getProjectDistributions(hsProject);
			document.getElementById("stats-quickInfo").innerHTML = '<h3>Basic Traits:</h3><div>'
				+ '<i class="fa fa-fw fa-link fa-flip-horizontal"></i> Project ID: '+(projectQuickStats.uuid||"<i>No UUID present</i>")+'<br/>'
				+ '<i class="fa fa-fw fa-info-circle"></i> File Size: '+ projectQuickStats.filesize +'<br/>'
				+ '<i class="fa fa-fw fa-arrows"></i> Stage Size: '+(projectQuickStats.stageSize.width||1024)+'x'+(projectQuickStats.stageSize.height||768)+'<br/>'
				+ '<i class="fa fa-fw fa-history"></i> Version: Editor '+projectQuickStats.version+', Player '+(projectQuickStats.playerVersion||"1.0.0")+'<br/>'
				+ '<i class="fa fa-fw fa-pencil"></i> Edited: '+new Date(projectQuickStats.edited_at).toString().replace(/^\w{3}\s|\sGMT.*$/g,"")+'<br/>'
				+ '<i class="fa fa-fw fa-arrows-alt"></i> Base Object Scale: '+(projectQuickStats.baseObjectScale||1)+'<br/>'
				+ '<i class="fa fa-fw fa-text-height"></i> Font Size: '+(projectQuickStats.fontSize||80)+'<br/>'
				+ '<i class="fa fa-fw fa-star-o"></i> Requires Beta Editor: '+(projectQuickStats.requires_beta_editor||false)+'<br/>'
				+ '<i class="fa fa-fw fa-bolt"></i> Secret Blocks: '+projectQuickStats.sbAbilityName+'<br/>'
				+ '<i class="fa fa-fw fa-photo"></i> Set Image Blocks: '+projectQuickStats.ibAbilityName+'<br/>'
				+ '</div><h3>Quick Statistics:</h3><div>'
				+ '<h>\u200B </h>Number of Abilities: '+projectQuickStats.abilities+'<br/>'
				+ '<h>\u200B </h>Number of Custom Rules: '+projectQuickStats.customRules+'<br/>'
				+ '<h>\u200B </h>Number of Event Parameters: '+projectQuickStats.eventParameters+'<br/>'
				+ '<h>\u200B </h>Number of Objects: '+projectQuickStats.objects+'<br/>'
				+ '<h>\u200B </h>Number of Rules: '+projectQuickStats.rules+'<br/>'
				+ '<h>\u200B </h>Number of Scenes: '+projectQuickStats.scenes+'<br/>'
				+ '<h>\u200B </h>Number of Traits: '+projectQuickStats.traits+'<br/>'
				+ '<h>\u200B </h>Number of Variables: '+projectQuickStats.variables+'</div>'
				
			google.charts.load('current', {'packages':['corechart','bar']});
			google.charts.setOnLoadCallback(drawChart);
			function drawChart() {
				var arr;
				
				//Category Distributions (Blocks and Operators)
				var data = new google.visualization.DataTable();
				data.addColumn('string', '');
				data.addColumn('number', '');
				data.addRows(Object.keys(distributionCounts.blockCatgCounts).length===0?[]:["abl", "move", "looks", "draw", "var", "ctrl", "old"].repeatEach(key=>{return [
					({ctrl:"Control",abl:"Ability",looks:"Looks",move:"Movement",draw:"Draw","var":"Variable","old":"Non-Editor"})[key],
					distributionCounts.blockCatgCounts[key]
				]}));
				var options = {
					textStyle: {color: "white"},
					titleTextStyle: {color: "white",fontSize: 16},
					width: 350, height: 180, is3D: true,
					backgroundColor: "transparent",
					chartArea: {"left": 8, "top": 8, "width": 334, "height": 160},
					legend: {textStyle: {color: "white", fontSize: 14}},
					sliceVisibilityThreshold: 0,
					colors: ["#f2f2f2", "#d73e1e", "#63ae1e", "#a6006e", "#e7b601", "#3e83be", "#647f96"]
				};
				var chart = new google.visualization.PieChart(document.getElementById('stats-chart1'));
				chart.draw(data, options);
				data = new google.visualization.DataTable();
				data.addColumn('string', '');
				data.addColumn('number', '');
				data.addRows(Object.keys(distributionCounts.operatorCatgCounts).length===0?[]:["math", "conditional", "color", "old"].repeatEach(key=>{return [
					({math:"Math",conditional:"Conditional",color:"Color",old:"Non-Editor"})[key],
					distributionCounts.operatorCatgCounts[key]
				]}));
				options = {
					textStyle: {color: "white"},
					titleTextStyle: {color: "white",fontSize: 16},
					width: 350, height: 180, is3D: true,
					backgroundColor: "transparent",
					chartArea: {"left": 8, "top": 8, "width": 334, "height": 160},
					legend: {textStyle: {color: "white", fontSize: 14}},
					sliceVisibilityThreshold: 0,
					colors: ["#733977", "#be2961", "#1acfff", "#647f96"]
				};
				chart = new google.visualization.PieChart(document.getElementById('stats-chart3'));
				chart.draw(data, options);
				
				//Bar Chart (Rules and Objects)
				data = google.visualization.arrayToDataTable(
					(arr = [["","",{ role: "style" }]],Object.keys(distributionCounts.ruleDescCounts).length===0?arr.push(["",0,"color:transparent"],["",2,"color:transparent"]):Object.keys(distributionCounts.ruleDescCounts).repeatEach(key=>{arr.push([
						key,
						distributionCounts.ruleDescCounts[key]||0,
						"color:#be2961;stroke-color:transparent;stroke-width:2px"
					])}), arr)
				);
				options = {
					textStyle: {color: "white"},
					width: 350, height: 280, is3D: true,
					backgroundColor: {fill: "transparent"},
					legend: { position: 'none' },
					chartArea: {"left": 114, "top": 8, "width": 220, "height": 230},
					bars: 'horizontal',
					axes: {
						x: {0: { side: 'top', label: ''}, all: {range: {min: 0}} },
						y: {0: { side: 'left', label: ''}, all: {range: {min: 0}} }
					},
					hAxis: { title: "Occurrences", titleTextStyle: { color: "white" } },
					vAxis: { title: "Rule Type", titleTextStyle: { color: "white" }, textStyle: { color: "white", fontSize: 8 }, baselineColor: "white" },
					bar: { groupWidth: "90%" }
				};
				chart = new google.visualization.BarChart(document.getElementById('stats-chart2'));
				chart.draw(data, options);
				data = google.visualization.arrayToDataTable(
					(arr = [["","",{ role: "style" }]],Object.keys(distributionCounts.objectCharCounts).length===0?arr.push(["",0,"color:transparent"],["",2,"color:transparent"]):Object.keys(distributionCounts.objectCharCounts).repeatEach(key=>{arr.push([
						key,
						distributionCounts.objectCharCounts[key]||0,"color:#6bdaed;stroke-color:transparent;stroke-width:2px"
					])}), arr)
				);
				options = {
					textStyle: {color: "white"},
					width: 350, height: 280, is3D: true,
					backgroundColor: {fill: "transparent"},
					legend: { position: 'none' },
					chartArea: {"left": 114, "top": 8, "width": 220, "height": 230},
					bars: 'horizontal',
					axes: {
						x: {0: { side: 'top', label: ''}, all: {range: {min: 0}} },
						y: {0: { side: 'left', label: ''}, all: {range: {min: 0}} }
					},
					hAxis: { title: "Occurrences", titleTextStyle: { color: "white" } },
					vAxis: { title: "Object Type", titleTextStyle: { color: "white" }, textStyle: { color: "white", fontSize: 10 }, baselineColor: "white" },
					bar: { groupWidth: "90%" }
				};
				chart = new google.visualization.BarChart(document.getElementById('stats-chart4'));
				chart.draw(data, options);
				
				let usedVars = Object.keys(distributionCounts.variablesUseCount).repeatEach(key=>{if (distributionCounts.variablesUseCount[key]) return [
						key,
						distributionCounts.variablesUseCount[key],
						"color:#f9cc1e;stroke-color:transparent;stroke-width:2px"
					]}).removeNull();
				data = google.visualization.arrayToDataTable(
					(arr = [["","",{ role: "style" }]],usedVars.length===0?arr.push(["",0,"color:transparent"],["",2,"color:transparent"]):usedVars.forEach(v=>{arr.push(v)}), arr)
				);
				options = {
					textStyle: {color: "white"},
					width: 350, height: Math.max(70+12*usedVars.length,200), is3D: true,
					backgroundColor: {fill: "transparent"},
					legend: { position: 'none' },
					chartArea: {"left": 114, "top": 8, "width": 220, "height": Math.max(20+12*usedVars.length,150)},
					bars: 'horizontal',
					axes: {
						x: {0: { side: 'top', label: ''}, all: {range: {min: 0}} },
						y: {0: { side: 'left', label: ''}, all: {range: {min: 0}} }
					},
					hAxis: { title: "Occurrences in Code", titleTextStyle: { color: "white" } },
					vAxis: { title: "Variable Name", titleTextStyle: { color: "white" }, textStyle: { color: "white", fontSize: 9 }, baselineColor: "white" },
					bar: { groupWidth: "90%" }
				};
				chart = new google.visualization.BarChart(document.getElementById('stats-chart5'));
				chart.draw(data, options);
				var usedTraits = Object.keys(distributionCounts.traitsTypeCounts).repeatEach(key=>{if (distributionCounts.traitsTypeCounts[key]) return [
						key,
						distributionCounts.traitsTypeCounts[key],
						"color:#f9ad1e;stroke-color:transparent;stroke-width:2px"
					]}).removeNull();
				data = google.visualization.arrayToDataTable(
					(arr = [["","",{ role: "style" }]],usedTraits.length===0?arr.push(["",0,"color:transparent"],["",2,"color:transparent"]):usedTraits.forEach(t=>{arr.push(t)}), arr)
				);
				options = {
					textStyle: {color: "white"},
					width: 350, height: Math.max(70+12*usedTraits.length,200), is3D: true,
					backgroundColor: {fill: "transparent"},
					legend: { position: 'none' },
					chartArea: {"left": 114, "top": 8, "width": 220, "height": Math.max(20+12*usedTraits.length,150)},
					bars: 'horizontal',
					axes: {
						x: {0: { side: 'top', label: ''}, all: {range: {min: 0}} },
						y: {0: { side: 'left', label: ''}, all: {range: {min: 0}} }
					},
					hAxis: { title: "Occurrences in Code", titleTextStyle: { color: "white" } },
					vAxis: { title: "Trait Type", titleTextStyle: { color: "white" }, textStyle: { color: "white", fontSize: 10 }, baselineColor: "white" },
					bar: { groupWidth: "90%" }
				};
				chart = new google.visualization.BarChart(document.getElementById('stats-chart6'));
				chart.draw(data, options);
				var usedAbils = Object.keys(distributionCounts.abilitiesUseCount).repeatEach(key=>{if (distributionCounts.abilitiesUseCount[key]) return [
						key,
						distributionCounts.abilitiesUseCount[key],
						"color:#f2f2f2;stroke-color:transparent;stroke-width:2px"
					]}).removeNull();
				data = google.visualization.arrayToDataTable(
					(arr = [["","",{ role: "style" }]],usedAbils.length===0?arr.push(["",0,"color:transparent"],["",2,"color:transparent"]):usedAbils.forEach(a=>{arr.push(a)}), arr)
				);
				options = {
					textStyle: {color: "white"},
					width: 350, height: Math.max(70+12*usedAbils.length,200), is3D: true,
					backgroundColor: {fill: "transparent"},
					legend: { position: 'none' },
					chartArea: {"left": 114, "top": 8, "width": 220, "height": Math.max(20+12*usedAbils.length,150)},
					bars: 'horizontal',
					axes: {
						x: {0: { side: 'top', label: ''}, all: {range: {min: 0}} },
						y: {0: { side: 'left', label: ''}, all: {range: {min: 0}} }
					},
					hAxis: { title: "Occurrences in Code", titleTextStyle: { color: "white" } },
					vAxis: { title: "Ability Name", titleTextStyle: { color: "white" }, textStyle: { color: "white", fontSize: 10 }, baselineColor: "white" },
					bar: { groupWidth: "90%" }
				};
				chart = new google.visualization.BarChart(document.getElementById('stats-chart7'));
				chart.draw(data, options);
				var usedCrules = Object.keys(distributionCounts.cstmRulesUseCount).repeatEach(key=>{if (distributionCounts.cstmRulesUseCount[key]) return [
						key,
						distributionCounts.cstmRulesUseCount[key],
						"color:#ce628a;stroke-color:transparent;stroke-width:2px"
					]}).removeNull();
				console.log(usedCrules);
				data = google.visualization.arrayToDataTable(
					(arr = [["","",{ role: "style" }]],usedCrules.length===0?arr.push(["",0,"color:transparent"],["",2,"color:transparent"]):usedCrules.forEach(cr=>{arr.push(cr)}), console.log(arr), arr)
				);
				options = {
					textStyle: {color: "white"},
					width: 350, height: Math.max(70+12*usedCrules.length,200), is3D: true,
					backgroundColor: {fill: "transparent"},
					legend: { position: 'none' },
					chartArea: {"left": 114, "top": 8, "width": 220, "height": Math.max(20+12*usedCrules.length,150)},
					bars: 'horizontal',
					axes: {
						x: {0: { side: 'top', label: ''}, all: {range: {min: 0}} },
						y: {0: { side: 'left', label: ''}, all: {range: {min: 0}} }
					},
					hAxis: { title: "Occurrences in Code", titleTextStyle: { color: "white" } },
					vAxis: { title: "Custom Rule Name", titleTextStyle: { color: "white" }, textStyle: { color: "white", fontSize: 10 }, baselineColor: "white" },
					bar: { groupWidth: "90%" }
				};
				var chart = new google.visualization.BarChart(document.getElementById('stats-chart8'));
				chart.draw(data, options);
				
				//Show or hide carets that allow for expansion of graphs
				document.querySelectorAll(".gchart.gchart-expandable > div").forEach(div => {
					div.classList.remove("gchart-expanded");
					let caretBtn = div.parentNode.previousElementSibling.querySelector("i.fa");
					caretBtn.style.display = (div.scrollHeight > 280) ? "inline-block" : "none";
					caretBtn.onclick = function() {
						if (caretBtn.classList.contains("fa-caret-down")) {
							caretBtn.classList.replace("fa-caret-down", "fa-caret-up");
							caretBtn.parentNode.nextElementSibling.classList.add("gchart-expanded");
						} else {
							caretBtn.classList.replace("fa-caret-up", "fa-caret-down");
							caretBtn.parentNode.nextElementSibling.classList.remove("gchart-expanded");
						}
					};
				});
			}
			
			function getMostUsed(key, index) {
				index = index || 1;
				var highestCount = Object.keys(distributionCounts[key]).repeatEach(k=>{return distributionCounts[key][k]}).sort((a,b)=>{return b-a})[index-1];
				return Object.keys(distributionCounts[key]).repeatEach(k=>{if(distributionCounts[key][k]===highestCount)return k}).removeNull().join(", ")||"–";
			}
			var mostUsedBlocks = [getMostUsed("blockDescCounts"),getMostUsed("blockDescCounts",2),getMostUsed("blockDescCounts",3)].repeatEach(item=>{if(item&&item!="–")return item}).removeNull().join(", ")||"–";
			
			document.getElementById("stats-moreInfo1").innerHTML = '<h3>Usage Statistics:</h3><div>'
				+ '<h>\u200B </h>Number of Player Upgrades: '+Object.keys(hsProject.playerUpgrades||{}).length+'<br/>'
				+ '<h>\u200B </h>Number of Blocks: '+distributionCounts.totalBlockCount+'<br/>'
				+ '<h>\u200B </h>Number of Operators: '+distributionCounts.operatorBlockCount+'<br/>'
				+ '<h>\u200B </h>Number of Variables in code: '+distributionCounts.variablesTotalUse+'<br/>'
				+ '<h>\u200B </h>Number of Traits in code: '+distributionCounts.traitsTotalUsage+'<br/>'
				+ '<h>\u200B </h>Most Used Ability: '+getMostUsed("abilitiesUseCount")+'<br/>'
				+ '<h>\u200B </h>Most Used Custom Rule: '+getMostUsed("cstmRulesUseCount")+'<br/>'
				+ '<h>\u200B </h>Most Used Variable: '+getMostUsed("variablesUseCount")+'<br/>'
				+ '<h>\u200B </h>Most Common Blocks: '+mostUsedBlocks+'<br/>'
				+ '<h>\u200B </h>Has Filtered Words: Checking...</div>'
			
			XHR.get("https://awesome-e.github.io/hs-tools/json-shortcut/shortcut-info.json", function(r,s) {
				document.getElementById("stats-moreInfo1").innerHTML = '<h3>Usage Statistics:</h3><div>'
					+ '<h>\u200B </h>Number of Player Upgrades: '+Object.keys(hsProject.playerUpgrades||{}).length+'<br/>'
					+ '<h>\u200B </h>Number of Blocks: '+distributionCounts.totalBlockCount+'<br/>'
					+ '<h>\u200B </h>Number of Operators: '+distributionCounts.operatorBlockCount+'<br/>'
					+ '<h>\u200B </h>Number of Variables in code: '+distributionCounts.variablesTotalUse+'<br/>'
					+ '<h>\u200B </h>Number of Traits in code: '+distributionCounts.traitsTotalUsage+'<br/>'
					+ '<h>\u200B </h>Most Used Ability: '+getMostUsed("abilitiesUseCount")+'<br/>'
					+ '<h>\u200B </h>Most Used Custom Rule: '+getMostUsed("cstmRulesUseCount")+'<br/>'
					+ '<h>\u200B </h>Most Used Variable: '+getMostUsed("variablesUseCount")+'<br/>'
					+ '<h>\u200B </h>Most Common Blocks: '+mostUsedBlocks+'<br/>'
					+ '<h>\u200B </h>Has Filtered Words: '+RegExp(JSON.parse(r).filterRegexB64).test(JSON.stringify(hsProject))+'</div>'
			}, false);
			
			document.getElementById("stats-renderjson").innerHTML = '<b class="center" style="text-align:center;">Full Distribution Dictionary</b>';
			document.getElementById("stats-renderjson").appendChild(renderjson(unformatProject(distributionCounts)));
			
			bodyScroll.disable();
		},
		"playProject": function() {
			document.querySelector("#playProjectLoader").removeAttribute("hidden");
			document.querySelector(".popup").removeAttribute("hidden");
			bodyScroll.disable();
		}
	}
	function updateFields() {
		alert("wrong function called");
		document.getElementById("stageSize.width").value = hsProject.stageSize.width;
		document.getElementById("stageSize.height").value = hsProject.stageSize.height;
		document.getElementById("version").value = hsProject.version;
		document.getElementById("playerVersion").value = hsProject.playerVersion||"1.0.0";
		document.getElementById("edited_at").value = hsProject.edited_at;
		document.getElementById("baseObjectScale").value = hsProject.baseObjectScale;
		document.getElementById("fontSize").value = hsProject.fontSize;
		document.getElementById("requires_beta_editor").value = hsProject.requires_beta_editor||false;
		alert("This has been used?")
	}
	function updateProject(action) {
		switch (action) {
			case "stageSize.width":
				hsProject.stageSize.width = Number(document.getElementById("stageSize.width").value);
				break;
			case "stageSize.height":
				hsProject.stageSize.height = Number(document.getElementById("stageSize.height").value);
				break;
			case "version":
				hsProject.version = Number(document.getElementById("version").value);
				break;
			case "playerVersion":
				hsProject.playerVersion = document.getElementById("playerVersion").value;
				break;
			case "edited_at":
				hsProject.edited_at = document.getElementById("edited_at").value;
				break;
			case "baseObjectScale":
				hsProject.baseObjectScale = Number(document.getElementById("baseObjectScale").value);
				break;
			case "fontSize":
				hsProject.fontSize = Number(document.getElementById("fontSize").value);
				break;
			case "requires_beta_editor":
				hsProject.requires_beta_editor = Boolean(document.getElementById("requires_beta_editor").value);
				break;
		}
	}
	document.querySelectorAll("table table input, table table select").forEach((e)=>{
		e.onchange = function(){if (hsProject.uuid /*If project exists*/) updateProject(e.id)}; //Might change if exists later
	});
	//Reload Import
	let url = new URL(location.href);
	if (url.searchParams.get("r") == "1" || localStorage.getItem("hsProject")) {
		hsProject = JSON.parse(localStorage.getItem("hsProject"));
		formatProject(hsProject);
		//updateFields();
		editor.traits.updateFields();
		updateDrawers();
		replaceRender(-1);
		localStorage.removeItem("hsProject");
		replaceLocation("?r=0");
		popup.download();
		bodyScroll.disable();
		setTimeout(function(){bodyScroll.disable();},1000);
	}
	//Download Project
	function downloadItem(blob, filename, loadFn, errFn) {
		var xhr = new XMLHttpRequest();
		var formData = new FormData();
		formData.append("file", blob, filename);
		xhr.open("POST", "https://file.io/?expires=1d");
		xhr.onload = function(){loadFn(xhr)};
		xhr.onerror = function(){errFn(xhr)};
		xhr.send(formData);
	}
	function downloadProject() {
		if (!hsProject.uuid&&!hsProject.filename&&!hsProject.objects) return alert("There is no file to download");
		document.getElementById("download-btn").innerHTML = '<i class="fa fa-spinner fa-pulse"></i> \u2063\u200aWait\u200a';
		if (/iPhone|iPad|iPod/.test(navigator.userAgent)) popup.download();
		var jsonse = JSON.stringify(hsProject);
		const blob = new Blob([jsonse], {type: "application/json"}), filename = (hsProject.filename||(hsProject.uuid||uuidv4().toUpperCase())+".hopscotch");
		const responseFn = function(xhr){
			if (onIos) {
				localStorage.setItem("hsProject",JSON.stringify(hsProject));
				setTimeout(function(){location.href = 'workflow://run-workflow?name=Save%20HS%20Project&input={"name":"'+(hsProject.filename||(hsProject.uuid||uuidv4().toUpperCase())+".hopscotch")+'","url":"' + (JSON.parse(xhr.responseText).link) + '"}';},50);
				setTimeout(function(){location.href = "?r=1";},150);
			} else {
				location.href = JSON.parse(xhr.responseText).link;
			}
			document.getElementById("download-btn").innerHTML = '<i class="fa fa-download"></i> Save'
		}
		downloadItem(blob, filename, responseFn, responseFn);
	}
	editor.traits.updateFields();
	if (onIos) document.querySelectorAll("input[type=file][accept]").forEach(input=>{
		input.accept = ""; //Unfortunately, I have to do this to allow files to be selected.
	});
}
if (editor.modulesScripts) {
	//JS Color Inputs
	for (i = 1; i < 5; i++) {
		var colorVal = 'xxxxxx'.split("").repeatEach(x=>{return"0123456789ABCDEF".substr(Math.round(Math.random()*6),1)}).join("");
		var input = document.createElement('input');
		var picker = new jscolor(input, {backgroundColor: "rgba(32, 90, 82, 0.85)", borderColor: "rgba(46, 132, 121, 0.9)", hash: true, closable: true, inI: true, closeText: 'Close Color Picker', value: colorVal, scrollKeepLocked: true});
		input.id = "bg-col" + i;
		input.classList.add("noEmpty");
		document.getElementById("gradient-preview").style.setProperty("--col-g"+i, "#"+colorVal);
		input.addEventListener("change", (e)=>{document.getElementById("gradient-preview").style.setProperty("--col-g"+e.target.id.replace(/^bg-col/,""), e.target.value);});
		document.getElementById('color-preview-box').appendChild(input);
	}
	document.getElementById("pAct-gradientBg").querySelectorAll("table input").forEach(elm=>{
		elm.oninput = (e)=>{document.getElementById('gradient-preview').setAttribute("type",e.target.value); document.getElementById('color-preview-box').setAttribute("type",e.target.value);};
	});
}
if (editor.logConsoleMesg) {
	console.log("\u2063%c@\u2063@\u2063@\u2063@\u2063%c@\u2063%c@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063%c,\u2063%c,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063%c,\u2063%c,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063%c,%c\n\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063#\u2063%c,\u2063%c*\u2063%c/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063%c*\u2063%c,\u2063,\u2063,\u2063%c%\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\n\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063%c*\u2063%c/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063%c*\u2063%c/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063%c*\u2063%c/\u2063/\u2063/\u2063%c*\u2063%c,\u2063,\u2063,\u2063%c@\u2063@\u2063@\u2063@\n\u2063@\u2063@\u2063@\u2063@\u2063%c/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063%c/\u2063%c(\u2063%c%\u2063%\u2063%\u2063%\u2063%c#\u2063%c#\u2063%c/\u2063%c/\u2063/\u2063%c*\u2063%c/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063%c,\u2063,\u2063,\u2063%c@\u2063@\n\u2063@\u2063%c@\u2063%c@\u2063%c/\u2063/\u2063%c*\u2063%c/\u2063/\u2063/\u2063%c*\u2063%c/\u2063/\u2063/\u2063%c(\u2063%c#\u2063#\u2063#\u2063%c#\u2063%c#\u2063#\u2063#\u2063%c#\u2063%c%\u2063%c%\u2063%\u2063%c%\u2063%c#\u2063#\u2063#\u2063%c#\u2063%c#\u2063%c#\u2063%c/\u2063%c*\u2063%c/\u2063/\u2063/\u2063%c*\u2063%c,\u2063,\u2063%c@\n\u2063@\u2063@\u2063%c%\u2063%c/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063%c#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063%c%\u2063%\u2063%\u2063%c#\u2063#\u2063%c#\u2063%c#\u2063#\u2063#\u2063#\u2063%c/\u2063%c/\u2063/\u2063/\u2063%c*\u2063%c,\u2063%c%\n\u2063%c@\u2063@\u2063%c@\u2063%c/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063%c/\u2063%c#\u2063#\u2063#\u2063%c#\u2063%c#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063%c%\u2063%\u2063%\u2063%c#\u2063%c#\u2063%c#\u2063#\u2063#\u2063#\u2063#\u2063%c(\u2063%c/\u2063/\u2063/\u2063%c,\u2063%c&\n\u2063%c@\u2063@\u2063@\u2063%c/\u2063/\u2063/\u2063/\u2063/\u2063/\u2063%c#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063%c*\u2063*\u2063*\u2063*\u2063*\u2063*\u2063*\u2063%c#\u2063%c%\u2063%\u2063%\u2063%\u2063%\u2063%c%\u2063%c*\u2063*\u2063*\u2063*\u2063*\u2063*\u2063%c/\u2063/\u2063/\u2063%c,\u2063%c@\n\u2063@\u2063@\u2063@\u2063@\u2063%c*\u2063%c*\u2063%c/\u2063/\u2063/\u2063%c#\u2063#\u2063#\u2063#\u2063%c#\u2063%c#\u2063#\u2063%c*\u2063%c,\u2063,\u2063,\u2063%c#\u2063%c/\u2063%c,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063%c,\u2063%c,\u2063,\u2063%c#\u2063%c*\u2063%c,\u2063,\u2063%c/\u2063%c*\u2063%c,\u2063%c@\u2063@\n\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063%c/\u2063%c/\u2063/\u2063/\u2063%c#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063%c,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063,\u2063%c,\u2063%c,\u2063,\u2063,\u2063,\u2063,\u2063%c/\u2063%c/\u2063%c@\u2063@\u2063@\u2063@\n\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063%c/\u2063/\u2063/\u2063%c#\u2063%c#\u2063%c#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063%c#\u2063%c#\u2063#\u2063#\u2063%c/\u2063%c@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\n\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063%c@\u2063%c/\u2063%c/\u2063%c#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063#\u2063%c@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\u2063@\n\u2063@%c\n Welcome to the Hopscotch Project Builder ","color:rgba(126, 0, 0, 0);","color:rgba(127, 0, 0, 0);","color:rgba(126, 0, 0, 0);","color:;","color:rgb(105, 253, 210);","color:rgb(106, 255, 212);","color:rgb(105, 253, 210);","color:;","color:rgba(125, 0, 0, 0);","color:rgba(126, 0, 0, 0);","color:rgba(127, 0, 0, 0);","color:rgb(84, 206, 168);","color:rgb(91, 221, 182);","color:rgb(105, 253, 210);","color:rgba(126, 0, 0, 0);","color:rgb(85, 209, 171);","color:rgb(84, 206, 168);","color:rgb(85, 208, 170);","color:rgb(84, 206, 168);","color:rgb(85, 208, 170);","color:rgb(84, 206, 168);","color:rgb(89, 217, 178);","color:rgb(105, 253, 210);","color:rgba(126, 0, 0, 0);","color:rgb(84, 206, 168);","color:rgb(99, 183, 156);","color:rgb(182, 54, 87);","color:rgb(116, 6, 32);","color:rgb(218, 0, 57);","color:rgb(200, 27, 72);","color:rgb(111, 165, 146);","color:rgb(84, 206, 168);","color:rgb(85, 208, 170);","color:rgb(84, 206, 168);","color:rgb(105, 253, 210);","color:rgba(126, 0, 0, 0);","color:rgba(127, 0, 0, 0);","color:rgba(126, 0, 0, 0);","color:rgb(84, 206, 168);","color:rgb(85, 208, 170);","color:rgb(84, 206, 168);","color:rgb(85, 208, 170);","color:rgb(84, 206, 168);","color:rgb(167, 80, 101);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(119, 6, 33);","color:rgb(116, 6, 32);","color:rgb(118, 6, 33);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(218, 0, 57);","color:rgb(204, 20, 68);","color:rgb(84, 206, 168);","color:rgb(85, 208, 170);","color:rgb(84, 206, 168);","color:rgb(90, 219, 179);","color:rgb(105, 253, 210);","color:rgba(126, 0, 0, 0);","color:rgba(124, 42, 60, 0.21);","color:rgb(84, 206, 168);","color:rgb(218, 0, 57);","color:rgb(116, 6, 32);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(218, 0, 57);","color:rgb(86, 202, 166);","color:rgb(84, 206, 168);","color:rgb(96, 232, 192);","color:rgb(105, 253, 210);","color:rgba(123, 37, 70, 0.235);","color:rgba(126, 0, 0, 0);","color:rgba(125, 16, 19, 0.07);","color:rgb(84, 206, 168);","color:rgb(87, 201, 165);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(218, 0, 57);","color:rgb(116, 6, 32);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(218, 0, 57);","color:rgb(187, 47, 83);","color:rgb(84, 206, 168);","color:rgb(105, 253, 210);","color:rgba(120, 23, 31, 0.114);","color:rgba(126, 0, 0, 0);","color:rgb(84, 206, 168);","color:rgb(218, 0, 57);","color:rgb(142, 169, 159);","color:rgb(122, 77, 86);","color:rgb(116, 6, 32);","color:rgb(117, 7, 33);","color:rgb(142, 169, 159);","color:rgb(84, 206, 168);","color:rgb(105, 253, 210);","color:rgba(126, 0, 0, 0);","color:;","color:rgb(85, 208, 170);","color:rgb(84, 206, 168);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(218, 0, 57);","color:rgb(142, 170, 160);","color:rgb(105, 253, 210);","color:rgb(218, 0, 57);","color:rgb(162, 127, 134);","color:rgb(105, 253, 210);","color:rgb(106, 255, 212);","color:rgb(105, 253, 210);","color:rgb(218, 0, 57);","color:rgb(144, 165, 157);","color:rgb(105, 253, 210);","color:rgb(84, 206, 168);","color:rgb(85, 208, 170);","color:;","color:rgba(126, 0, 0, 0);","color:;","color:rgb(84, 206, 168);","color:rgb(218, 0, 57);","color:rgb(105, 253, 210);","color:rgb(106, 255, 212);","color:rgb(105, 253, 210);","color:rgb(84, 206, 168);","color:;","color:rgba(126, 0, 0, 0);","color:rgb(84, 206, 168);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(218, 0, 57);","color:rgb(220, 0, 58);","color:rgb(218, 0, 57);","color:rgb(84, 205, 168);","color:rgba(126, 0, 0, 0);","color:rgba(124, 9, 11, 0.043);","color:;","color:rgb(129, 136, 130);","color:rgb(218, 0, 57);","color:rgba(126, 0, 0, 0);","color:salmon;font-weight:900;")
	console.log('%cHopscotch Project Builder, beta 1.3.0 r1 %c \u2063 Made by Awesome_E ¯\\_(ツ)_/¯','display:block; padding: 4px 6px; border: 4px solid red; background-color: salmon; color: white; font-weight: bold;','');
}