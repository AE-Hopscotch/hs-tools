var blockTypeCounts = {}, blockDescCounts = {};
function uuidv4() {
	return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

var newestCreateDate = 0;
function formatProject(p) {
	//Assign each block its own ID
	projectDict = {
		"abilities": {},
		"eventParameters": {},
		"objects": {},
		"rules": {},
		"customRules": {},
		"variables": {},
		"scenes": {},
		"traits": {}
	};
	//JSON.parse(JSON.stringify(hsProject));
	(p.abilities||[]).forEach((a)=>{
		projectDict.abilities[a.abilityID] = {abilityID:a.abilityID,createdAt:a.createdAt,name:a.name,blocks:{}};
		for (i = 0; i < (a.blocks||[]).length; i++) {
			b = a.blocks[i];
			b.web_id = a.abilityID + "_b" + i;
			newestCreateDate = Math.max(newestCreateDate,a.createdAt+12.34567);
			
			projectDict.abilities[a.abilityID].blocks[b.web_id] = b;
			
			var type = (blockLabels[b.type]||[])[0];
			(blockTypeCounts[type]) ? blockTypeCounts[type]++ : blockTypeCounts[type]=1;
			
			var name = (blockLabels[b.type]||[])[1];
			(blockDescCounts[name]) ? blockDescCounts[name]++ : blockDescCounts[name]=1;
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
			if (!obj.rules) obj.rules = {};
			obj.rules[r.id] = Object.detach(r);
			p.objects.forEach(o=>{
				if (o.objectID == r.objectID) o.rules.push(r.id);
			});
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

function unformatProject(p) {
	//Remove IDs of Individual Blocks and Scenes
	p = JSON.stringify(p).replace(/,"web_id":"[0-9A-F_\-]*?",/gi,",").replace(/,?"web_id":"[0-9A-F_\-]*?",?/gi,"");
	try {return JSON.parse(p);} catch(E){console.log(E, p);}
}

//Initialize Interactables
if (typeof interact != "undefined") interact('.page-controls').draggable({
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