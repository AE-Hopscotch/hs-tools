function insertBlocks(blocks){
	try{
		blocks.forEach(function(block){
			block = JSON.parse(JSON.stringify(block).replace(/\\n/g,'<br>'));

			var params = [];
			block.parameters.forEach(function(p){
				params.push(`<li ptype="${p.type}">${p.description}</li>`);
			});

			var uses = [];
			block.useful_for.forEach(function(q){
				uses.push(`<li>${q}</li>`);
			});

			var moreinfo = [];
			block.other_info.forEach(function(r){
				moreinfo.push(`<li>${r}</li>`);
			});

			var links = [];
			block.community_links.forEach(function(s){
				links.push(`<li>${s}</li>`);
			});

			var joiner = "\n					";
			var span = document.createElement("span");
			span.innerHTML = `
						<bl type="${block.type}"${(block.collapsible) ? ' collapsible' : ''}>${block.blockHTML}</bl><p style="display:inline; font-size:100%;"> Written by ${block.authors.join(', ')}</p><br/>
							<p><b style="font-size: 120%;">Description</b></p>
							<p style="margin-left: 45px;">${block.about}</p>
							<p><b style="font-size: 120%;">Parameters</b></p>
							${(params.length == 0) ? '<ul><li>There are no parameters for this block.</li></ul>' : '<ol style="font-size: 100%;">' + 
								params.join(joiner)
							+ '</ol>' }
							<p><b style="font-size: 120%;">Useful For</b></p>
							<ul style="font-size: 100%;">
								${uses.join(joiner)}
							</ul>
							<p><b style="font-size: 120%;">Other Info</b></p>
							<ul style="font-size: 100%;">
								<li>Hopscotch Description: ${block.description}</li>
								<li blockID></li>
								<li bstat="${block.availability}"></li>
								${moreinfo.join(joiner)}
							</ul>
							<p><b style="font-size: 120%;">Community Links</b></p>
							<ul style="font-size: 100%; margin-bottom: -10px;">
								${links.join(joiner)}
							</ul>
						`;//.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
			span.setAttribute('hidden', '');
			span.setAttribute('class', 'info');
			span.setAttribute('id', 'info' + block.id);
			
			document.getElementById("info").appendChild(span);
		});
	} catch (Err) { console.error(Err); }
}

function getBlockList() {
	var blockList = []; //Use {} for dictionary

	document.querySelectorAll('.info:not(.header)').forEach(function(x){
		if(x.id != 'info<!ID>'){
			var offset = Number(x.querySelectorAll('li[ptype]').length == 0);

			var writers = [];
			x.querySelector('p').innerHTML.replace(/Written by\s+/, '').split(', ').forEach(function(p){
				writers.push(`
					"${p.replace(/^\s|\s$/g,'')}"
				`);
			});
			var params = [];
			x.querySelectorAll('li[ptype]').forEach(function(p){
				params.push(`{
					"type": "${p.getAttribute('ptype')}",
					"description": "${p.innerHTML.replace(/"/g,'\\"')}"
				}`);
			});
			var uses = [];
			x.querySelectorAll('ul')[offset].querySelectorAll('li').forEach(function(p){
				uses.push(`
					"${p.innerHTML.replace(/"/g,'\\"')}"
				`);
			});
			var moreinfo = [];
			i = 0;
			x.querySelectorAll('ul')[1+offset].querySelectorAll('li').forEach(function(p){
				if (i > 2) moreinfo.push(`
					"${p.innerHTML.replace(/"/g,'\\"')}"
				`);
				i++;
			});
			var links = [];
			x.querySelectorAll('ul')[2+offset].querySelectorAll('li').forEach(function(p){
				links.push(`
					"${p.innerHTML.replace(/"/g,'\\"')}"
				`);
			});

			var out = `
				{
					"id": ${x.id.replace('info','')},
					"type": "${x.querySelector('bl').getAttribute('type')}",
					"name": "${x.querySelector('bl').innerHTML.replace(/\u2063|\s*<i.*?\/i>\s*|\s+(to|by|percent)\s*<i.*/g,'').replace(/\s+$/,'')}",
					"authors": [
						${writers.join(',')}
					],
					"blockHTML": "${x.querySelector('bl').innerHTML.replace(/"/g,'\\"')}",
					"about": "${x.querySelectorAll('p')[2].innerHTML.replace(/"/g,'\\"')}",
					"app_description": "${x.querySelectorAll('ul')[1+offset].querySelectorAll('li')[0].innerHTML.replace('Hopscotch Description: ','').replace(/<br\/?>/g,'\\n').replace(/"/g,'\\"')}",
					"collapsible": ${(x.querySelector('bl').getAttribute('collapsible') == '')},
					"availability": "${x.querySelector('li[bstat]').getAttribute('bstat')}",
					"parameters": [
						${params.join(',')}
					],
					"useful_for": [
						${uses.join(',')}
					],
					"other_info": [
						${moreinfo.join(',')}
					],
					"community_links": [
						${links.join(',')}
					]
				}
			`;
			blockList.push(JSON.parse(out)); //Create List
			//blockList[x.id.replace('info','')] = JSON.parse(out); //Create Dictionary
		}
	});
	console.log(blockList);
	console.log(JSON.stringify(blockList));
}

function doLocalRequest(options, printResult, c) {
	var x = new XMLHttpRequest();
	x.open(options.method, '' + options.url, true);
	//https://api.codetabs.com/v1/proxy?quest=https://c.gethopscotch.com/api/v1/projects/zuasmwksm 'https://cors-anywhere.herokuapp.com/'
	let output = undefined;
	var waitOutput = setInterval(function(){
		try { if (output != undefined) { printResult(output); clearInterval(waitOutput); } } catch (Err) {console.error(Err)}
	}, 250);
	
	x.onload = x.onerror = function() {
		output = (x.responseText||"");
		/*
		//location.replace('https://c.gethopscotch.com/p/aaaaa');
		printResult(x.responseText || '');/*
		printResult(
			//options.method + ' ' + options.url + '\n' +
			//x.status + ' ' + x.statusText + '\n\n' +
			(x.responseText || '')
		);/**/
	};
	if (/^POST/i.test(options.method)) {
		x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	}
	x.send(options.data);
}

function getResource(input_url, fn) {
	doLocalRequest({
		method: 'GET',
		url: input_url,
		//data: dataField.value
	}, fn /*function printResult(result) {
			fn(result);
	} /**/);
};
