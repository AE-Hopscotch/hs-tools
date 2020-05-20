var blockTypeCounts = {}, blockDescCounts = {};
function formatProject(p) {
	//Assign each block its own ID
	projectDict = {
		"abilities": {},
		"eventParameters": {},
		"objects": {},
		"rules": {},
		"customRules": {},
		"variables": {},
		"scenes": {}
	};
	//JSON.parse(JSON.stringify(hsProject));
	p.abilities.forEach((a)=>{
		projectDict.abilities[a.abilityID] = {abilityID:a.abilityID,createdAt:a.createdAt,name:a.name,blocks:{}};
		
		for (i = 0; i < (a.blocks||[]).length; i++) {
			b = a.blocks[i];
			b.web_id = a.abilityID + "_b" + i;
			
			projectDict.abilities[a.abilityID].blocks[b.web_id] = b;
			
			var type = blockLabels[b.type][0];
			(blockTypeCounts[type]) ? blockTypeCounts[type]++ : blockTypeCounts[type]=1;
			
			var name = blockLabels[b.type][1];
			(blockDescCounts[name]) ? blockDescCounts[name]++ : blockDescCounts[name]=1;
		}
	});
	//Assign each scene its own ID
	for (i = 0; i < p.scenes.length; i++) {
		var s = p.scenes[i];
		s.web_id = "s" + i;
		projectDict.scenes[s.web_id] = s;
	}
	//Assign objects dictionary
	for (i = 0; i < p.objects.length; i++) {
		var o = p.objects[i];
		projectDict.objects[o.objectID] = o;
	}
	//Assign event parameters dictionary
	for (i = 0; i < p.eventParameters.length; i++) {
		var ep = p.eventParameters[i];
		projectDict.eventParameters[ep.id] = ep;
	}
	//Assign rules dictionary
	for (i = 0; i < p.rules.length; i++) {
		var r = p.rules[i];
		projectDict.rules[r.id] = r;
	}
	//Assign custom rules dictionary
	for (i = 0; i < p.customRules.length; i++) {
		var cr = p.customRules[i];
		projectDict.customRules[cr.id] = cr;
	}
	//Assign variables dictionary
	for (i = 0; i < p.variables.length; i++) {
		var v = p.variables[i];
		projectDict.variables[v.objectIdString] = v;
	}
	return p;
}

function unformatProject(p) {
	//Remove IDs of Individual Blocks and Scenes
	p = JSON.stringify(p).replace(/,"web_id":"[0-9A-F_\-]*?",/gi,",").replace(/,?"web_id":"[0-9A-F_\-]*?",?/gi,"");
	try {return JSON.parse(p);} catch(E){console.log(E, p);}
}

//Initialize Interactables
interact('.page-controls').draggable({
	//allowFrom: 'div.bl-container .drag-handle',
	ignoreFrom: 'button',
	//Enable inertial throwing
	inertia: true,
	//Keep the element within the area of it's parent
	modifiers: [
		interact.modifiers.restrictRect({
		restriction: 'parent',
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