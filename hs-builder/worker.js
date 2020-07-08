async function compress(data){ /* Input is JSON data */
	//From LZ String
	function is_array(input) {
		return typeof(input) === "object" && (input instanceof Array);
	}
	function convert_to_formated_hex(byte_arr) {
		var hex_str = "",
			i,
			len,
			tmp_hex;
		
		if (!is_array(byte_arr)) {
		return false;
		}
		
		len = byte_arr.length;
		
		for (i = 0; i < len; ++i) {
		if (byte_arr[i] < 0) {
			byte_arr[i] = byte_arr[i] + 256;
		}
		if (byte_arr[i] === undefined) {
			alert("Boom " + i);
			byte_arr[i] = 0;
		}
		tmp_hex = byte_arr[i].toString(16);
		
		// Add leading zero.
		if (tmp_hex.length == 1) tmp_hex = "0" + tmp_hex;
		
		if ((i + 1) % 16 === 0) {
			tmp_hex += "\n";
		} else {
			tmp_hex += " ";
		}
		
		hex_str += tmp_hex;
		}
		
		return hex_str.trim();
	}
	function convert_string_to_hex(s) {
		var byte_arr = [];
		for (var i = 0 ; i<s.length ; i++) {
		var value = s.charCodeAt(i);
		byte_arr.push(value & 255);
		byte_arr.push((value>>8) & 255);
		}
		return convert_to_formated_hex(byte_arr);
	}
	//Measure Performance Time
	var start = performance.now();
	//Actual Function
	function doCompress() {
		return new Promise(resolve=>{
			//document.querySelector("button").innerHTML = '<i class="fa fa-spinner fa-rotate"></i>';
			arr=[];
			var LZString=function(){function o(o,r){if(!t[o]){t[o]={};for(var n=0;n<o.length;n++)t[o][o.charAt(n)]=n}return t[o][r]}var r=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",t={},i={compressToBase64:function(o){if(null==o)return"";var r=i._compress(o,6,function(o){return n.charAt(o)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,function(e){return o(n,r.charAt(e))})},compressToUTF16:function(o){return null==o?"":i._compress(o,15,function(o){return r(o+32)})+" "},decompressFromUTF16:function(o){return null==o?"":""==o?null:i._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=i.compress(o),n=new Uint8Array(2*r.length),e=0,t=r.length;t>e;e++){var s=r.charCodeAt(e);n[2*e]=s>>>8,n[2*e+1]=s%256}return n},decompressFromUint8Array:function(o){if(null===o||void 0===o)return i.decompress(o);for(var n=new Array(o.length/2),e=0,t=n.length;t>e;e++)n[e]=256*o[2*e]+o[2*e+1];var s=[];return n.forEach(function(o){s.push(r(o))}),i.decompress(s.join(""))},compressToEncodedURIComponent:function(o){return null==o?"":i._compress(o,6,function(o){return e.charAt(o)})},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,function(n){return o(e,r.charAt(n))}))},compress:function(o){return i._compress(o,16,function(o){return r(o)})},_compress:function(o,r,n){if(null==o)return"";var e,t,i,s={},p={},u="",c="",a="",l=2,f=3,h=2,d=[],m=0,v=0;for(i=0;i<o.length;i+=1)if(u=o.charAt(i),Object.prototype.hasOwnProperty.call(s,u)||(s[u]=f++,p[u]=!0),c=a+u,Object.prototype.hasOwnProperty.call(s,c))a=c;else{if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++),s[c]=f++,a=String(u)}if(""!==a){if(Object.prototype.hasOwnProperty.call(p,a)){if(a.charCodeAt(0)<256){for(e=0;h>e;e++)m<<=1,v==r-1?(v=0,d.push(n(m)),m=0):v++;for(t=a.charCodeAt(0),e=0;8>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}else{for(t=1,e=0;h>e;e++)m=m<<1|t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t=0;for(t=a.charCodeAt(0),e=0;16>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1}l--,0==l&&(l=Math.pow(2,h),h++),delete p[a]}else for(t=s[a],e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;l--,0==l&&(l=Math.pow(2,h),h++)}for(t=2,e=0;h>e;e++)m=m<<1|1&t,v==r-1?(v=0,d.push(n(m)),m=0):v++,t>>=1;for(;;){if(m<<=1,v==r-1){d.push(n(m));break}v++}return d.join("")},decompress:function(o){return null==o?"":""==o?null:i._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,n,e){var t,i,s,p,u,c,a,l,f=[],h=4,d=4,m=3,v="",w=[],A={val:e(0),position:n,index:1};for(i=0;3>i;i+=1)f[i]=i;for(p=0,c=Math.pow(2,2),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(t=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;l=r(p);break;case 2:return""}for(f[3]=l,s=l,w.push(l);;){if(A.index>o)return"";for(p=0,c=Math.pow(2,m),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;switch(l=p){case 0:for(p=0,c=Math.pow(2,8),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 1:for(p=0,c=Math.pow(2,16),a=1;a!=c;)u=A.val&A.position,A.position>>=1,0==A.position&&(A.position=n,A.val=e(A.index++)),p|=(u>0?1:0)*a,a<<=1;f[d++]=r(p),l=d-1,h--;break;case 2:return w.join("")}if(0==h&&(h=Math.pow(2,m),m++),f[l])v=f[l];else{if(l!==d)return null;v=s+s.charAt(0)}w.push(v),f[d++]=s+v.charAt(0),h--,s=v,0==h&&(h=Math.pow(2,m),m++)}}};return i}();"function"==typeof define&&define.amd?define(function(){return LZString}):"undefined"!=typeof module&&null!=module&&(module.exports=LZString);
			setTimeout(function() {
				LZString.compressToUint8Array(JSON.stringify(data)).forEach(s=>{arr.push((s<16?"0":"")+s.toString(16))});
				resolve(arr.join(""));
			}, 10);
			//setTimeout(async function(){r = convert_string_to_hex(LZString.compress(JSON.stringify(data))), resolve(r);},10);
		});
	}
	result = await doCompress();
	time = performance.now() - start;
	postMessage({"value":result,"time":Math.round(time*100)/100});
	return {"value":result,"time":Math.round(time*100)/100};
}

function workerFormatProject(p, projectDict, data) {
	let iterationsTotal = p.abilities.length*6 + p.eventParameters.length + p.objects.length*2 + p.rules.length*2 + p.customRules.length*2 + p.traits.length*2 + p.variables.length*2 + p.scenes.length + 1,
		iterationsComplete = 0,
		newestCreateDate = 0,
		blockLabels = data.blockLabels,
		charLabels = data.charLabels,
		unformatProject = data.unformatFn,
		hsProject = p,
		checkAbility = {
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
						commentBlk = {"type": 22,"parameters":[{"type": -1},{"key":"^data$","type":-1}]},
						cDataBlock = {"type": 22,"parameters":[{"type": -1},{"key":"^data$","type":-1}]},
						ImgFreezeB = {"type":56,"parameters":[{"datum":"\\{\"type\":4004,\"description\":\"\"\\}","type":"^54$"}]};
				var		isSecretBlocks = (checkAbility.checkScript(blocks,[cloneBlock,timestampBlock,scaleBlock]));
				var		hasNewest = (isSecretBlocks && checkAbility.checkScript(blocks,[cmtVarCond,cdtVarCond,multByCond,sceneTextB,hiddenAbil,setOpacity,commentBlk,cDataBlock,ImgFreezeB]))
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
		},
		editor = {project:{}};		
	function getRange(a, b) {
		var rangeList = [];
		for (i = a; i < b+1; i++) { rangeList.push(i); }
		return rangeList; //Includes b
	}
	function iterationDone(count) {
		count = count||1;
		iterationsComplete += count;
		postMessage({status:"in progress", percent: Math.round(iterationsComplete/iterationsTotal*100)});
	}
	Object.detach = function(o) {
		return JSON.parse(JSON.stringify(o));
	}
	Array.prototype.repeatEach = function(fn) {
		var outputs = [];
		if (!(fn && typeof fn == 'function')) throw new TypeError(fn + ' is not a function');
		for(var i = 0; i < this.length; i++) {
			outputs.push( fn(this[i]) );
		}
		return outputs;
	};
	Array.prototype.removeNull = function() {
		var outputs = [];
		for(var i = 0; i < this.length; i++) {
			if (this[i] != null) outputs.push(this[i]);
		}
		return outputs;
	}

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
	
	iterationDone();
	
	(function(){
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
				JSON.stringify(b).replace(/.*?"block_class":"(?:conditional)?[oO]perator","type":(\d+)(?:.(?!"block_class":"(?:conditional)?[oO]perator"))*|^.*$/g,"$1\n")
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
			iterationDone();
		});
		//Get the Object Type Distribution
		(p.objects||[]).forEach(o=>{
			const name = charLabels[o.type]||"";
			(distributionCounts.objectCharCounts[name]) ? distributionCounts.objectCharCounts[name]++ : distributionCounts.objectCharCounts[name] = 1;			//Name
			(distributionCounts.objectTypeCounts[o.type]) ? distributionCounts.objectTypeCounts[o.type]++ : distributionCounts.objectTypeCounts[o.type] = 1;	//Type
			iterationDone();
		});
		(p.customRules||[]).forEach(cr=>{
			//distributionCounts.variablesUseCount[cr.name] = 0;
			distributionCounts.cstmRulesUseCount[cr.name] = (p.objects||[]).repeatEach(o=>{ return (o.rules && o.rules.indexOf(cr.id) !== -1) || null; }).removeNull().length + (p.customRules||[]).repeatEach(r=>{ return (r.rules && r.rules.indexOf(cr.id) !== -1) || null; }).removeNull().length;
			//(JSON.stringify(hsProject).match(RegExp('"rules":\[[^\{\}\[\]]*?"'+v.objectIdString+'"\]',"g"))||[]).length;
			iterationDone();
		});
		//Get the Rule Type Distribution
		(p.rules||[]).forEach(r=>{
			r = (r.parameters[0]||{}).datum||{};
			const item = blockLabels[r.type]||[], name = ((item[1]||"").replace(/\u2063\s|\s\u2063|^\s$/g,"")||(item[2]||"").replace(/\u2063\s|\s\u2063|^\s$/g,"")||item[3]||(item[0]||"").replace(/\u2063\s|\s\u2063|^\s$/g,"")); //From Full Reference
			(distributionCounts.ruleDescCounts[name]) ? distributionCounts.ruleDescCounts[name]++ : distributionCounts.ruleDescCounts[name] = 1;			//Name
			(distributionCounts.ruleTypeCounts[r.type]) ? distributionCounts.ruleTypeCounts[r.type]++ : distributionCounts.ruleTypeCounts[r.type] = 1;		//Type
			iterationDone();
		});
		//Get the Variable Usage per Variable
		(p.variables||[]).forEach(v=>{
			distributionCounts.variablesTotalUse += distributionCounts.variablesUseCount[(v.type===8003||p.version===24&&!v.HSObjectIDString?"\uD83D\uDCF1 ":"")+v.name] = (JSON.stringify(hsProject).match(RegExp('"variable":"'+v.objectIdString+'"',"g"))||[]).length;
			iterationDone();
		});
		//Get the Trait Usage per trait for old projects
		(p.traits||[]).forEach(t=>{
			distributionCounts.traitsTypeCounts[(t.type >= 3e3?"\uD83D\uDCF1 ":"")+blockLabels[t.HSTraitTypeKey]]?distributionCounts.traitsTypeCounts[(t.type >= 3e3?"\uD83D\uDCF1 ":"")+blockLabels[t.HSTraitTypeKey]]+=(JSON.stringify(hsProject).match(RegExp('"variable":"'+t.HSTraitIDKey+'"',"g"))||[]).length:distributionCounts.traitsTypeCounts[(t.type >= 3e3?"\uD83D\uDCF1 ":"")+blockLabels[t.HSTraitTypeKey]]=(JSON.stringify(hsProject).match(RegExp('"variable":"'+t.HSTraitIDKey+'"',"g"))||[]).length;
			distributionCounts.traitsTotalUsage = Object.keys(distributionCounts.traitsTypeCounts).repeatEach(key=>{return distributionCounts.traitsTypeCounts[key]}).reduce((a,b)=>{return a+b});
			iterationDone();
		});
		let filesize = Math.round(JSON.stringify(unformatProject(hsProject)).length/10)/100;
		//if (editor.useBlockRender) {
			let getSpecialBlockAbilityNames = (function(){
				const hasSbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{iterationDone();if(a.name && checkAbility.secretBlocks(a).contains) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
				const fullSbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{iterationDone();if(a.name && checkAbility.secretBlocks(a).newest) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
				editor.project.secretBlocks = fullSbAbilityName ? "new" : hasSbAbilityName ? "old" : "none";
				const hasIbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{iterationDone();if(a.name && checkAbility.setImgBlocks(a).contains) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
				const fullIbAbilityName = !hsProject.abilities ? null : (hsProject.abilities.repeatEach(a=>{iterationDone();if(a.name && checkAbility.setImgBlocks(a).newest) return (a.name.length > 29) ? a.name.substr(0,27)+"...": a.name})||[]).removeNull()[0];
				editor.project.secretBlocks = fullIbAbilityName ? "new" : hasIbAbilityName ? "old" : "none";
				return {
					imageBlocks: fullIbAbilityName ? fullIbAbilityName.replace(/(^.{20})(.+)/,"$1\u2026") + ' <i title="Up to date" class="fa fa-fw fa-check"></i>' : hasIbAbilityName ? hasIbAbilityName.replace(/(^.{13})(.+)/,"$1\u2026") + ' <i title="Out of date" class="fa fa-fw fa-refresh"></i>' : '<i>Not added</i>',
					secretBlocks: fullSbAbilityName ? fullSbAbilityName.replace(/(^.{20})(.+)/,"$1\u2026") + ' <i title="Up to date" class="fa fa-fw fa-check"></i>' : hasSbAbilityName ? hasSbAbilityName.replace(/(^.{13})(.+)/,"$1\u2026") + ' <i title="Out of date" class="fa fa-fw fa-refresh"></i>' : '<i>Not added</i>'
				}
			})();
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
				"sbAbilityName": getSpecialBlockAbilityNames.secretBlocks,
				"ibAbilityName": getSpecialBlockAbilityNames.imageBlocks
			}
		//}
	})(p);
	
	(p.abilities||[]).forEach(a=>{
		projectDict.abilities[a.abilityID] = {abilityID:a.abilityID,createdAt:a.createdAt,name:a.name,blocks:{}};
		newestCreateDate = Math.max(newestCreateDate,a.createdAt+12.34567);
		for (i = 0; i < (a.blocks||[]).length; i++) {
			b = a.blocks[i];
			b.web_id = a.abilityID + "_b" + i;
			projectDict.abilities[a.abilityID].blocks[b.web_id] = b;
		}
		iterationDone();
	});
	//Assign each scene its own ID
	for (i = 0; i < (p.scenes||[]).length; i++) {
		var s = p.scenes[i];
		s.web_id = "s" + i;
		projectDict.scenes[s.web_id] = s;
		iterationDone();
	}
	// var hasRules = true;
	//Assign objects dictionary
	for (i = 0; i < (p.objects||[]).length; i++) {
		var o = p.objects[i];
		projectDict.objects[o.objectID] = Object.detach(o);
		if (!o.rules) o.rules = [];
		iterationDone();
	}
	//Assign event parameters dictionary
	for (i = 0; i < (p.eventParameters||[]).length; i++) {
		var ep = p.eventParameters[i];
		projectDict.eventParameters[ep.id] = ep;
		iterationDone();
	}
	//Assign rules dictionary
	for (i = 0; i < (p.rules||[]).length; i++) {
		var r = p.rules[i];
		if (!r.id) {
			console.log('test')
			//Assign UUID if it does not exist, then add that to the object
			r.id = uuidv4().toUpperCase();
			var obj = projectDict.objects[r.objectID];
			if (obj) {
				if (!obj.rules) obj.rules = {};
				obj.rules[r.id] = Object.detach(r);
				p.objects.forEach(o=>{
					if (o.objectID == r.objectID) o.rules.push(r.id);
				});
			}
		}
		projectDict.rules[r.id] = Object.detach(r);
		iterationDone();
	}
	//Assign custom rules dictionary
	for (i = 0; i < (p.customRules||[]).length; i++) {
		var cr = p.customRules[i];
		projectDict.customRules[cr.id] = cr;
		iterationDone();
	}
	//Assign variables dictionary
	for (i = 0; i < (p.variables||[]).length; i++) {
		var v = p.variables[i];
		projectDict.variables[v.objectIdString] = v;
		iterationDone();
	}
	//Assign traits dictionary (used in older projects)
	for (i = 0; i < (p.traits||[]).length; i++) {
		var t = p.traits[i];
		projectDict.traits[t.HSTraitIDKey] = t;
		iterationDone();
	}
	postMessage({status:"done",hsProject:p, projectDict:projectDict});
}

function doMidiHack(base64AudioURL) {
	!function(t, e){"object"==typeof exports && "object"==typeof module ? module.exports=e() : "function"==typeof define &&define.amd ? define([], e) : "object"==typeof exports ? exports.MidiConvert=e() : t.MidiConvert=e()}(this, function(){return function(t){function e(r){if (n[r]) return n[r].exports;var i=n[r]={exports:{},id: r,loaded: !1};return t[r].call(i.exports, i, i.exports, e), i.loaded=!0, i.exports}var n={};return e.m=t, e.c=n, e.p="", e(0)}([function(t, e, n){"use strict";Object.defineProperty(e, "__esModule",{value: !0});var r=n(7),i=n(2),a={instrumentByPatchID: i.instrumentByPatchID,instrumentFamilyByID: i.instrumentFamilyByID,parse: function(t){return (new r.Midi).decode(t)},load: function(t, e){var n=(new r.Midi).load(t);return e && n.then(e), n},create: function(){return new r.Midi}};e.default=a, t.exports=a}, function(t, e){"use strict";function n(t){return t.replace(/\u0000/g, "")}function r(t, e){return 60 / e.bpm * (t / e.PPQ)}function i(t){return "number"==typeof t}function a(t){return "string"==typeof t}function o(t){var e=["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],n=Math.floor(t / 12) - 1,r=t % 12;return e[r] + n}var s=function(){var t=/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i;return function(e){return a(e) && t.test(e)}}(),u=function(){var t=/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,e={cbb: -2,cb: -1,c: 0,"c#": 1,cx: 2,dbb: 0,db: 1,d: 2,"d#": 3,dx: 4,ebb: 2,eb: 3,e: 4,"e#": 5,ex: 6,fbb: 3,fb: 4,f: 5,"f#": 6,fx: 7,gbb: 5,gb: 6,g: 7,"g#": 8,gx: 9,abb: 7,ab: 8,a: 9,"a#": 10,ax: 11,bbb: 9,bb: 10,b: 11,"b#": 12,bx: 13};return function(n){var r=t.exec(n),i=r[1],a=r[2],o=e[i.toLowerCase()];return o + 12 * (parseInt(a) + 1)}}();t.exports={cleanName: n,ticksToSeconds: r,isString: a,isNumber: i,isPitch: s,midiToPitch: o,pitchToMidi: u}}, function(t, e){"use strict";function n(t, e, n){return e in t ? Object.defineProperty(t, e,{value: n,enumerable: !0,configurable: !0,writable: !0}) : t[e]=n, t}Object.defineProperty(e, "__esModule",{value: !0});var r;e.instrumentByPatchID=["acoustic grand piano", "bright acoustic piano","electric grand piano", "honky-tonk piano", "electric piano 1","electric piano 2", "harpsichord", "clavi", "celesta", "glockenspiel","music box", "vibraphone", "marimba", "xylophone", "tubular bells","dulcimer", "drawbar organ", "percussive organ", "rock organ", "church organ","reed organ", "accordion", "harmonica", "tango accordion","acoustic guitar (nylon)", "acoustic guitar (steel)","electric guitar (jazz)", "electric guitar (clean)","electric guitar (muted)", "overdriven guitar", "distortion guitar","guitar harmonics", "acoustic bass", "electric bass (finger)","electric bass (pick)", "fretless bass", "slap bass 1", "slap bass 2","synth bass 1", "synth bass 2", "violin", "viola", "cello", "contrabass","tremolo strings", "pizzicato strings", "orchestral harp", "timpani","string ensemble 1", "string ensemble 2", "synthstrings 1", "synthstrings 2","choir aahs", "voice oohs", "synth voice", "orchestra hit", "trumpet","trombone", "tuba", "muted trumpet", "french horn", "brass section","synthbrass 1", "synthbrass 2", "soprano sax", "alto sax", "tenor sax","baritone sax", "oboe", "english horn", "bassoon", "clarinet", "piccolo","flute", "recorder", "pan flute", "blown bottle", "shakuhachi", "whistle","ocarina", "lead 1 (square)", "lead 2 (sawtooth)", "lead 3 (calliope)","lead 4 (chiff)", "lead 5 (charang)", "lead 6 (voice)", "lead 7 (fifths)","lead 8 (bass + lead)", "pad 1 (new age)", "pad 2 (warm)","pad 3 (polysynth)", "pad 4 (choir)", "pad 5 (bowed)", "pad 6 (metallic)","pad 7 (halo)", "pad 8 (sweep)", "fx 1 (rain)", "fx 2 (soundtrack)","fx 3 (crystal)", "fx 4 (atmosphere)", "fx 5 (brightness)", "fx 6 (goblins)","fx 7 (echoes)", "fx 8 (sci-fi)", "sitar", "banjo", "shamisen", "koto","kalimba", "bag pipe", "fiddle", "shanai", "tinkle bell", "agogo","steel drums", "woodblock", "taiko drum", "melodic tom", "synth drum","reverse cymbal", "guitar fret noise", "breath noise", "seashore","bird tweet", "telephone ring", "helicopter", "applause", "gunshot"], e.instrumentFamilyByID=["piano", "chromatic percussion", "organ", "guitar","bass", "strings", "ensemble", "brass", "reed", "pipe", "synth lead","synth pad", "synth effects", "ethnic", "percussive", "sound effects"], e.drumKitByPatchID=(r={}, n(r, 0, "standard kit"), n(r, 8, "room kit"), n(r, 16, "power kit"), n(r, 24, "electronic kit"), n(r, 25, "tr-808 kit"),n(r, 32, "jazz kit"), n(r, 40, "brush kit"), n(r, 48, "orchestra kit"), n(r,56, "sound fx kit"), r)}, function(t, e){"use strict";function n(t, e){var n=0,r=t.length,i=r;if (r > 0 && t[r - 1].time <=e) return r - 1;for (; n < i;){var a=Math.floor(n + (i - n) / 2),o=t[a],s=t[a + 1];if (o.time===e){for (var u=a; u < t.length; u++){var c=t[u];c.time===e && (a=u)}return a}if (o.time < e && s.time > e) return a;o.time > e ? i=a : o.time < e && (n=a + 1)}return -1}function r(t, e){if (t.length){var r=n(t, e.time);t.splice(r + 1, 0, e)}else t.push(e)}Object.defineProperty(e, "__esModule",{value: !0}), e.BinaryInsert=r}, function(t, e){"use strict";function n(t, e){if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e, "__esModule",{value: !0});var r=function(){function t(t, e){for (var n=0; n < e.length; n++){var r=e[n];r.enumerable=r.enumerable || !1, r.configurable=!0, "value" in r &&(r.writable=!0), Object.defineProperty(t, r.key, r)}}return function(e, n, r){return n && t(e.prototype, n), r && t(e, r), e}}(),i={1: "modulationWheel",2: "breath",4: "footController",5: "portamentoTime",7: "volume",8: "balance",10: "pan",64: "sustain",65: "portamentoTime",66: "sostenuto",67: "softPedal",68: "legatoFootswitch",84: "portamentoContro"},a=function(){function t(e, r, i){n(this, t), this.number=e, this.time=r, this.value=i}return r(t, [{key: "name",get: function(){if (i.hasOwnProperty(this.number)) return i[this.number]}}]), t}();e.Control=a}, function(t, e){"use strict";function n(t){for (var e={PPQ: t.header.ticksPerBeat}, n=0; n < t.tracks.length; n++)for (var r=t.tracks[n], i=0; i < r.length; i++){var a=r[i];"meta"===a.type && ("timeSignature"===a.subtype ? e.timeSignature=[a.numerator, a.denominator] : "setTempo"===a.subtype && (e.bpm || (e.bpm=6e7 / a.microsecondsPerBeat)))}return e.bpm=e.bpm || 120, e}Object.defineProperty(e, "__esModule",{value: !0}), e.parseHeader=n}, function(t, e){"use strict";function n(t, e){for (var n=0; n < t.length; n++){var r=t[n],i=e[n];if (r.length > i) return !0}return !1}function r(t, e, n){for (var r=0, i=1 / 0, a=0; a < t.length; a++){var o=t[a],s=e[a];o[s] && o[s].time < i && (r=a, i=o[s].time)}n[r](t[r][e[r]]), e[r] +=1}function i(){for (var t=arguments.length, e=Array(t), i=0; i < t; i++) e[i]=arguments[i];for (var a=e.filter(function(t, e){return e % 2===0}), o=new Uint32Array(a.length), s=e.filter(function(t, e){return e % 2===1}); n(a, o);) r(a, o, s)}Object.defineProperty(e, "__esModule",{value: !0}), e.Merge=i}, function(t, e, n){"use strict";function r(t){return t && t.__esModule ? t :{default: t}}function i(t, e){if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e, "__esModule",{value: !0}), e.Midi=void 0;var a=function(){function t(t, e){for (var n=0; n < e.length; n++){var r=e[n];r.enumerable=r.enumerable || !1, r.configurable=!0, "value" in r &&(r.writable=!0), Object.defineProperty(t, r.key, r)}}return function(e, n, r){return n && t(e.prototype, n), r && t(e, r), e}}(),o=n(11),s=r(o),u=n(10),c=r(u),h=n(1),f=r(h),d=n(9),l=n(5),p=function(){function t(){i(this, t), this.header={bpm: 120,timeSignature: [4, 4],PPQ: 480}, this.tracks=[]}return a(t, [{key: "load",value: function(t){var e=this,n=arguments.length > 1 && void 0 !==arguments[1] ? arguments[1] : null,r=arguments.length > 2 && void 0 !==arguments[2] ? arguments[2] : "GET";return new Promise(function(i, a){var o=new XMLHttpRequest;o.open(r, t), o.responseType="arraybuffer", o.addEventListener("load",function(){4===o.readyState && 200===o.status ? i(e.decode(o.response)) :a(o.status)}), o.addEventListener("error", a),o.send(n)})}},{key: "decode",value: function(t){var e=this;if (t instanceof ArrayBuffer){var n=new Uint8Array(t);t=String.fromCharCode.apply(null, n)}var r=(0, s.default)(t);return this.header=(0, l.parseHeader)(r), this.tracks=[],r.tracks.forEach(function(t, n){var r=new d.Track;r.id=n, e.tracks.push(r);var i=0;t.forEach(function(t){i +=f.default.ticksToSeconds(t.deltaTime, e.header), "meta"===t.type &&"trackName"===t.subtype ?r.name=f.default.cleanName(t.text) : "noteOn"===t.subtype ? (r.noteOn(t.noteNumber,i, t.velocity /127), r.channelNumber===-1 && (r.channelNumber=t.channel)) :"noteOff"===t.subtype ?r.noteOff(t.noteNumber, i) :"controller"===t.subtype &&t.controllerType ? r.cc(t.controllerType, i, t.value / 127) :"meta"===t.type &&"instrumentName"===t.subtype ?r.instrument=t.text :"channel"===t.type &&"programChange"===t.subtype &&(r.patch(t.programNumber),r.channelNumber=t.channel)}), e.header.name || r.length || !r.name ||(e.header.name=r.name)}), this}},{key: "encode",value: function(){var t=this,e=new c.default.File({ticks: this.header.PPQ}),n=this.tracks.filter(function(t){return !t.length})[0];if (this.header.name && (!n || n.name !==this.header.name)){var r=e.addTrack();r.addEvent(new c.default.MetaEvent({time: 0,type: c.default.MetaEvent.TRACK_NAME,data: this.header.name}))}return this.tracks.forEach(function(n){var r=e.addTrack();r.setTempo(t.bpm), n.encode(r, t.header)}), e.toBytes()}},{key: "toArray",value: function(){for (var t=this.encode(), e=new Array(t.length),n=0; n < t.length; n++) e[n]=t.charCodeAt(n);return e}},{key: "toJSON",value: function(){return{header: this.header,startTime: this.startTime,duration: this.duration,tracks: (this.tracks || []).map(function(t){return t.toJSON()})}}},{key: "track",value: function t(e){var t=new d.Track(e);return this.tracks.push(t), t}},{key: "get",value: function(t){return f.default.isNumber(t) ? this.tracks[t] : this.tracks.find(function(e){return e.name===t})}},{key: "slice",value: function(){var e=arguments.length > 0 && void 0 !==arguments[0] ? arguments[0] : 0,n=arguments.length > 1 && void 0 !==arguments[1] ? arguments[1] : this.duration,r=new t;return r.header=this.header, r.tracks=this.tracks.map(function(t){return t.slice(e, n)}), r}},{key: "startTime",get: function(){var t=this.tracks.map(function(t){return t.startTime});return Math.min.apply(Math, t)}},{key: "bpm",get: function(){return this.header.bpm},set: function(t){var e=this.header.bpm;this.header.bpm=t;var n=e / t;this.tracks.forEach(function(t){return t.scale(n)})}},{key: "timeSignature",get: function(){return this.header.timeSignature},set: function(t){this.header.timeSignature=t}},{key: "duration",get: function(){var t=this.tracks.map(function(t){return t.duration});return Math.max.apply(Math, t)}}]), t}();e.Midi=p}, function(t, e, n){"use strict";function r(t){return t && t.__esModule ? t :{default: t}}function i(t, e){if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e, "__esModule",{value: !0}), e.Note=void 0;var a=function(){function t(t, e){for (var n=0; n < e.length; n++){var r=e[n];r.enumerable=r.enumerable || !1, r.configurable=!0, "value" in r &&(r.writable=!0), Object.defineProperty(t, r.key, r)}}return function(e, n, r){return n && t(e.prototype, n), r && t(e, r), e}}(),o=n(1),s=r(o),u=function(){function t(e, n){var r=arguments.length > 2 && void 0 !==arguments[2] ? arguments[2] :0,a=arguments.length > 3 && void 0 !==arguments[3] ? arguments[3] :1;if (i(this, t), s.default.isNumber(e)) this.midi=e;else{if (!s.default.isPitch(e)) throw new Error("the midi value must either be in Pitch Notation (e.g. C#4) or a midi value");this.name=e}this.time=n, this.duration=r, this.velocity=a}return a(t, [{key: "match",value: function(t){return s.default.isNumber(t) ? this.midi===t : s.default.isPitch(t) ? this.name.toLowerCase()===t.toLowerCase() :void 0}},{key: "toJSON",value: function(){return{name: this.name,midi: this.midi,time: this.time,velocity: this.velocity,duration: this.duration}}},{key: "name",get: function(){return s.default.midiToPitch(this.midi)},set: function(t){this.midi=s.default.pitchToMidi(t)}},{key: "noteOn",get: function(){return this.time},set: function(t){this.time=t}},{key: "noteOff",get: function(){return this.time + this.duration},set: function(t){this.duration=t - this.time}}]), t}();e.Note=u}, function(t, e, n){"use strict";function r(t, e){if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e, "__esModule",{value: !0}), e.Track=void 0;var i=function(){function t(t, e){for (var n=0; n < e.length; n++){var r=e[n];r.enumerable=r.enumerable || !1, r.configurable=!0, "value" in r &&(r.writable=!0), Object.defineProperty(t, r.key, r)}}return function(e, n, r){return n && t(e.prototype, n), r && t(e, r), e}}(),a=n(3),o=n(4),s=n(6),u=n(8),c=n(2),h=function(){function t(e){var n=arguments.length > 1 && void 0 !==arguments[1] ? arguments[1] :-1,i=arguments.length > 2 && void 0 !==arguments[2] ? arguments[2] :-1;r(this, t), this.name=e, this.channelNumber=i, this.notes=[], this.controlChanges={},this.instrumentNumber=n}return i(t, [{key: "note",value: function t(e, n){var r=arguments.length > 2 && void 0 !==arguments[2] ? arguments[2] : 0,i=arguments.length > 3 && void 0 !==arguments[3] ? arguments[3] : 1,t=new u.Note(e, n, r, i);return (0, a.BinaryInsert)(this.notes, t), this}},{key: "noteOn",value: function(t, e){var n=arguments.length > 2 && void 0 !==arguments[2] ? arguments[2] : 1,r=new u.Note(t, e, 0, n);return (0, a.BinaryInsert)(this.notes, r), this}},{key: "noteOff",value: function(t, e){for (var n=0; n < this.notes.length; n++){var r=this.notes[n];if (r.match(t) && 0===r.duration){r.noteOff=e;break}}return this}},{key: "cc",value: function t(e, n, r){this.controlChanges.hasOwnProperty(e) || (this.controlChanges[e]=[]);var t=new o.Control(e, n, r);return (0, a.BinaryInsert)(this.controlChanges[e], t),this}},{key: "patch",value: function(t){return this.instrumentNumber=t, this}},{key: "channel",value: function(t){return this.channelNumber=t, this}},{key: "scale",value: function(t){return this.notes.forEach(function(e){e.time *=t, e.duration *=t}), this}},{key: "slice",value: function(){var e=arguments.length > 0 && void 0 !==arguments[0] ? arguments[0] : 0,n=arguments.length > 1 && void 0 !==arguments[1] ? arguments[1] : this.duration,r=Math.max(this.notes.findIndex(function(t){return t.time >=e}), 0),i=this.notes.findIndex(function(t){return t.noteOff >=n}) + 1,a=new t(this.name);return a.notes=this.notes.slice(r, i), a.notes.forEach(function(t){return t.time=t.time - e}), a}},{key: "encode",value: function(t, e){function n(t){var e=Math.floor(r * t),n=Math.max(e - i, 0);return i=e, n}var r=e.PPQ / (60 / e.bpm),i=0,a=Math.max(0, this.channelNumber);this.instrumentNumber !==-1 && t.instrument(a, this.instrumentNumber),(0, s.Merge)(this.noteOns, function(e){t.addNoteOn(a, e.name, n(e.time), Math.floor(127 * e.velocity))}, this.noteOffs, function(e){t.addNoteOff(a, e.name, n(e.time))})}},{key: "toJSON",value: function(){var t={startTime: this.startTime,duration: this.duration,length: this.length};return "undefined" !=typeof this.id && (t.id=this.id),this.name && (t.name=this.name), this.instrumentNumber !==-1 && (t.instrumentNumber=this.instrumentNumber,t.instrument=this.instrument, t.instrumentFamily=this.instrumentFamily), this.channelNumber !==-1 && (t.channelNumber=this.channelNumber, t.isPercussion=this.isPercussion), this.notes.length && (t.notes=this.notes.map(function(t){return t.toJSON()})), Object.keys(this.controlChanges).length &&(t.controlChanges=this.controlChanges), t}},{key: "noteOns",get: function(){var t=[];return this.notes.forEach(function(e){t.push({time: e.noteOn,midi: e.midi,name: e.name,velocity: e.velocity})}), t}},{key: "noteOffs",get: function(){var t=[];return this.notes.forEach(function(e){t.push({time: e.noteOff,midi: e.midi,name: e.name})}), t}},{key: "length",get: function(){return this.notes.length}},{key: "startTime",get: function(){if (this.notes.length){var t=this.notes[0];return t.noteOn}return 0}},{key: "duration",get: function(){if (this.notes.length){var t=this.notes[this.notes.length - 1];return t.noteOff}return 0}},{key: "instrument",get: function(){return this.isPercussion ? c.drumKitByPatchID[this.instrumentNumber] :c.instrumentByPatchID[this.instrumentNumber]},set: function(t){var e=c.instrumentByPatchID.indexOf(t);e !==-1 && (this.instrumentNumber=e)}},{key: "isPercussion",get: function(){return [9, 10].includes(this.channelNumber)}},{key: "instrumentFamily",get: function(){return this.isPercussion ? "drums" : c.instrumentFamilyByID[Math.floor(this.instrumentNumber / 8)]}}]), t}();e.Track=h}, function(t, e, n){(function(t){var n={};! function(t){var e=t.DEFAULT_VOLUME=90,n=(t.DEFAULT_DURATION=128, t.DEFAULT_CHANNEL=0,{midi_letter_pitches:{a: 21,b: 23,c: 12,d: 14,e: 16,f: 17,g: 19},midiPitchFromNote: function(t){var e=/([a-g])(#+|b+)?([0-9]+)$/i.exec(t),r=e[1].toLowerCase(),i=e[2] || "",a=parseInt(e[3], 10);return 12 * a + n.midi_letter_pitches[r] + ("#"==i.substr(0, 1) ? 1 : -1) * i.length},ensureMidiPitch: function(t){return "number" !=typeof t && /[^0-9]/.test(t) ? n.midiPitchFromNote(t) : parseInt(t, 10)},midi_pitches_letter:{12: "c",13: "c#",14: "d",15: "d#",16: "e",17: "f",18: "f#",19: "g",20: "g#",21: "a",22: "a#",23: "b"},midi_flattened_notes:{"a#": "bb","c#": "db","d#": "eb","f#": "gb","g#": "ab"},noteFromMidiPitch: function(t, e){var r, i=0,a=t,e=e || !1;return t > 23 && (i=Math.floor(t / 12) - 1, a=t -12 * i), r=n.midi_pitches_letter[a], e && r.indexOf("#") > 0 && (r=n.midi_flattened_notes[r]), r + i},mpqnFromBpm: function(t){var e=Math.floor(6e7 / t),n=[];do n.unshift(255 & e), e >>=8; while (e);for (; n.length < 3;) n.push(0);return n},bpmFromMpqn: function(t){var e=t;if ("undefined" !=typeof t[0]){e=0;for (var n=0, r=t.length - 1; r >=0; ++n, --r) e |=t[n] << r}return Math.floor(6e7 / t)},codes2Str: function(t){return String.fromCharCode.apply(null, t)},str2Bytes: function(t, e){if (e)for (; t.length / 2 < e;) t="0" + t;for (var n=[], r=t.length - 1; r >=0; r -=2){var i=0===r ? t[r] : t[r - 1] + t[r];n.unshift(parseInt(i, 16))}return n},translateTickTime: function(t){for (var e=127 & t; t >>=7;) e <<=8, e |=127 & t |128;for (var n=[];;){if (n.push(255 & e), !(128 & e)) break;e >>=8}return n}}),r=function(t){return this ? void(!t || null===t.type && void 0===t.type ||null===t.channel && void 0===t.channel || null===t.param1 &&void 0===t.param1 || (this.setTime(t.time), this.setType(t.type), this.setChannel(t.channel), this.setParam1(t.param1), this.setParam2(t.param2))) : new r(t)};r.NOTE_OFF=128, r.NOTE_ON=144, r.AFTER_TOUCH=160, r.CONTROLLER=176, r.PROGRAM_CHANGE=192, r.CHANNEL_AFTERTOUCH=208, r.PITCH_BEND=224, r.prototype.setTime=function(t){this.time=n.translateTickTime(t || 0)}, r.prototype.setType=function(t){if (t < r.NOTE_OFF || t > r.PITCH_BEND) throw new Error("Trying to set an unknown event: " + t);this.type=t}, r.prototype.setChannel=function(t){if (t < 0 || t > 15) throw new Error("Channel is out of bounds.");this.channel=t}, r.prototype.setParam1=function(t){this.param1=t}, r.prototype.setParam2=function(t){this.param2=t}, r.prototype.toBytes=function(){var t=[],e=this.type | 15 & this.channel;return t.push.apply(t, this.time), t.push(e), t.push(this.param1),void 0 !==this.param2 && null !==this.param2 && t.push(this.param2), t};var i=function(t){if (!this) return new i(t);this.setTime(t.time), this.setType(t.type), this.setData(t.data)};i.SEQUENCE=0, i.TEXT=1, i.COPYRIGHT=2, i.TRACK_NAME=3, i.INSTRUMENT=4, i.LYRIC=5, i.MARKER=6, i.CUE_POINT=7, i.CHANNEL_PREFIX=32,i.END_OF_TRACK=47, i.TEMPO=81, i.SMPTE=84, i.TIME_SIG=88, i.KEY_SIG=89, i.SEQ_EVENT=127, i.prototype.setTime=function(t){this.time=n.translateTickTime(t || 0)}, i.prototype.setType=function(t){this.type=t}, i.prototype.setData=function(t){this.data=t}, i.prototype.toBytes=function(){if (!this.type) throw new Error("Type for meta-event not specified.");var t=[];if (t.push.apply(t, this.time), t.push(255, this.type), Array.isArray(this.data)) t.push(this.data.length), t.push.apply(t,this.data);else if ("number"==typeof this.data) t.push(1, this.data);else if (null !==this.data && void 0 !==this.data){t.push(this.data.length);var e=this.data.split("").map(function(t){return t.charCodeAt(0)});t.push.apply(t, e)}else t.push(0);return t};var a=function(t){if (!this) return new a(t);var e=t ||{};this.events=e.events || []};a.START_BYTES=[77, 84, 114, 107], a.END_BYTES=[0, 255, 47, 0], a.prototype.addEvent=function(t){return this.events.push(t), this}, a.prototype.addNoteOn=a.prototype.noteOn=function(t, i, a, o){return this.events.push(new r({type: r.NOTE_ON,channel: t,param1: n.ensureMidiPitch(i),param2: o || e,time: a || 0})), this}, a.prototype.addNoteOff=a.prototype.noteOff=function(t, i, a, o){return this.events.push(new r({type: r.NOTE_OFF,channel: t,param1: n.ensureMidiPitch(i),param2: o || e,time: a || 0})), this}, a.prototype.addNote=a.prototype.note=function(t, e, n, r, i){return this.noteOn(t, e, r, i), n && this.noteOff(t, e, n, i),this}, a.prototype.addChord=a.prototype.chord=function(t, e, n, r){if (!Array.isArray(e) && !e.length) throw new Error("Chord must be an array of pitches");return e.forEach(function(e){this.noteOn(t, e, 0, r)}, this), e.forEach(function(e, r){0===r ? this.noteOff(t, e, n) : this.noteOff(t, e)}, this), this}, a.prototype.setInstrument=a.prototype.instrument=function(t, e,n){return this.events.push(new r({type: r.PROGRAM_CHANGE,channel: t,param1: e,time: n || 0})), this}, a.prototype.setTempo=a.prototype.tempo=function(t, e){return this.events.push(new i({type: i.TEMPO,data: n.mpqnFromBpm(t),time: e || 0})), this}, a.prototype.toBytes=function(){var t=0,e=[],r=a.START_BYTES,i=a.END_BYTES,o=function(n){var r=n.toBytes();t +=r.length, e.push.apply(e, r)};this.events.forEach(o), t +=i.length;var s=n.str2Bytes(t.toString(16), 4);return r.concat(s, e, i)};var o=function(t){if (!this) return new o(t);var e=t ||{};if (e.ticks){if ("number" !=typeof e.ticks) throw new Error("Ticks per beat must be a number!");if (e.ticks <=0 || e.ticks >=32768 || e.ticks % 1 !==0)throw new Error("Ticks per beat must be an integer between 1 and 32767!")}this.ticks=e.ticks || 128, this.tracks=e.tracks || []};o.HDR_CHUNKID="MThd", o.HDR_CHUNK_SIZE="\0\0\0", o.HDR_TYPE0="\0\0", o.HDR_TYPE1="\0", o.prototype.addTrack=function(t){return t ? (this.tracks.push(t), this) : (t=new a, this.tracks.push(t), t)}, o.prototype.toBytes=function(){var t=this.tracks.length.toString(16),e=o.HDR_CHUNKID + o.HDR_CHUNK_SIZE;return e +=parseInt(t, 16) > 1 ? o.HDR_TYPE1 : o.HDR_TYPE0, e +=n.codes2Str(n.str2Bytes(t, 2)), e +=String.fromCharCode(this.ticks / 256, this.ticks % 256), this.tracks.forEach(function(t){e +=n.codes2Str(t.toBytes())}), e}, t.Util=n, t.File=o, t.Track=a, t.Event=r, t.MetaEvent=i}(n), "undefined" !=typeof t && null !==t ? t.exports=n : "undefined" !=typeof e && null !==e ? e=n : this.Midi=n}).call(e, n(12)(t))}, function(t, e){function n(t){function e(t){var e=t.read(4),n=t.readInt32();return{id: e,length: n,data: t.read(n)}}function n(t){var e={};e.deltaTime=t.readVarInt();var n=t.readInt8();if (240==(240 & n)){if (255==n){e.type="meta";var r=t.readInt8(),a=t.readVarInt();switch (r){case 0:if (e.subtype="sequenceNumber", 2 !=a) throw "Expected length for sequenceNumber event is 2, got " +a;return e.number=t.readInt16(), e;case 1:return e.subtype="text", e.text=t.read(a), e;case 2:return e.subtype="copyrightNotice", e.text=t.read(a), e;case 3:return e.subtype="trackName", e.text=t.read(a), e;case 4:return e.subtype="instrumentName", e.text=t.read(a), e;case 5:return e.subtype="lyrics", e.text=t.read(a), e;case 6:return e.subtype="marker", e.text=t.read(a), e;case 7:return e.subtype="cuePoint", e.text=t.read(a), e;case 32:if (e.subtype="midiChannelPrefix", 1 !=a) throw "Expected length for midiChannelPrefix event is 1, got " +a;return e.channel=t.readInt8(), e;case 47:if (e.subtype="endOfTrack", 0 !=a) throw "Expected length for endOfTrack event is 0, got " +a;return e;case 81:if (e.subtype="setTempo", 3 !=a) throw "Expected length for setTempo event is 3, got " +a;return e.microsecondsPerBeat=(t.readInt8() << 16) + (t.readInt8() <<8) + t.readInt8(), e;case 84:if (e.subtype="smpteOffset", 5 !=a) throw "Expected length for smpteOffset event is 5, got " +a;var o=t.readInt8();return e.frameRate={0: 24,32: 25,64: 29,96: 30}[96 & o], e.hour=31 & o, e.min=t.readInt8(), e.sec=t.readInt8(), e.frame=t.readInt8(), e.subframe=t.readInt8(),e;case 88:if (e.subtype="timeSignature", 4 !=a) throw "Expected length for timeSignature event is 4, got " +a;return e.numerator=t.readInt8(), e.denominator=Math.pow(2,t.readInt8()), e.metronome=t.readInt8(), e.thirtyseconds=t.readInt8(), e;case 89:if (e.subtype="keySignature", 2 !=a) throw "Expected length for keySignature event is 2, got " +a;return e.key=t.readInt8(!0), e.scale=t.readInt8(), e;case 127:return e.subtype="sequencerSpecific", e.data=t.read(a), e;default:return e.subtype="unknown", e.data=t.read(a), e}return e.data=t.read(a), e}if (240==n){e.type="sysEx";var a=t.readVarInt();return e.data=t.read(a), e}if (247==n){e.type="dividedSysEx";var a=t.readVarInt();return e.data=t.read(a), e}throw "Unrecognised MIDI event type byte: " + n}var s;0==(128 & n) ? (s=n, n=i) : (s=t.readInt8(), i=n);var u=n >> 4;switch (e.channel=15 & n, e.type="channel", u){case 8:return e.subtype="noteOff", e.noteNumber=s, e.velocity=t.readInt8(),e;case 9:return e.noteNumber=s, e.velocity=t.readInt8(), 0==e.velocity ?e.subtype="noteOff" : e.subtype="noteOn", e;case 10:return e.subtype="noteAftertouch", e.noteNumber=s, e.amount=t.readInt8(),e;case 11:return e.subtype="controller", e.controllerType=s, e.value=t.readInt8(),e;case 12:return e.subtype="programChange", e.programNumber=s, e;case 13:return e.subtype="channelAftertouch", e.amount=s, e;case 14:return e.subtype="pitchBend", e.value=s + (t.readInt8() << 7), e;default:throw "Unrecognised MIDI event type: " + u}}var i;stream=r(t);var a=e(stream);if ("MThd" !=a.id || 6 !=a.length) throw "Bad .mid file - header not found";var o=r(a.data),s=o.readInt16(),u=o.readInt16(),c=o.readInt16();if (32768 & c) throw "Expressing time division in SMTPE frames is not supported yet";ticksPerBeat=c;for (var h={formatType: s,trackCount: u,ticksPerBeat: ticksPerBeat}, f=[], d=0; d < h.trackCount; d++){f[d]=[];var l=e(stream);if ("MTrk" !=l.id) throw "Unexpected chunk - expected MTrk, got " + l.id;for (var p=r(l.data); !p.eof();){var m=n(p);f[d].push(m)}}return{header: h,tracks: f}}function r(t){function e(e){var n=t.substr(s, e);return s +=e, n}function n(){var e=(t.charCodeAt(s) << 24) + (t.charCodeAt(s + 1) << 16) + (t.charCodeAt(s + 2) << 8) + t.charCodeAt(s + 3);return s +=4, e}function r(){var e=(t.charCodeAt(s) << 8) + t.charCodeAt(s + 1);return s +=2, e}function i(e){var n=t.charCodeAt(s);return e && n > 127 && (n -=256), s +=1, n}function a(){return s >=t.length}function o(){for (var t=0;;){var e=i();if (!(128 & e)) return t + e;t +=127 & e, t <<=7}}var s=0;return{eof: a,read: e,readInt32: n,readInt16: r,readInt8: i,readVarInt: o}}t.exports=function(t){return n(t)}}, function(t, e){t.exports=function(t){return t.webpackPolyfill || (t.deprecate=function(){}, t.paths=[], t.children=[],t.webpackPolyfill=1), t}}])});/*# sourceMappingURL=MidiConvert.js.map*/
	/*/																														/*/
	/*		Huge credit to MIDIConvert (https://tonejs.github.io/MidiConvert/) for the MIDI to JSON code!					 */
	/*		Without it, this would not have been possible! Also credit to BuildASnowman for making the original MIDI hack!	 */
	/*		MIDI Hack made by MR.GAM3R. Integrated into Siri Shortcuts + the Hopscotch Project Builder by Awesome_E			 */
	/*/																														/*/
	function parseFile(file){/*read the file*/var reader=new FileReader();reader.onload=function(e){var partsData=MidiConvert.parse(e.target.result);var data=JSON.stringify(partsData, undefined, 2);var json=JSON.parse(data);var tracks=json.tracks; var oldFormatNotes=[]; var oldFormatTimes=[];for (var z=0; z < tracks.length; z++){var track=tracks[z]; var notes=track.notes;if (track.notes !==undefined){for (var x=0; x < notes.length; x++){oldFormatNotes.push(notes[x].name); oldFormatTimes.push(notes[x].time);}/* end for */}/* end if */}/* end for */ var list=[]; for (var j=0; j < oldFormatNotes.length; j++){list.push({'note_name': oldFormatNotes[j], 'note_time': oldFormatTimes[j]});}/* end for */ list.sort(function(a, b){return ((a.note_time < b.note_time) ? -1 : ((a.note_time==b.note_time) ? 0 : 1));}); for (var k=0; k < list.length; k++){oldFormatNotes[k]=list[k].note_name; oldFormatTimes[k]=list[k].note_time;}/* end for */ var hopscotchCode="";var currentTime=0;var midiTimes=[];var midiNotes=[]; for (var i=0; i < oldFormatNotes.length; i++){var note=oldFormatNotes[i]; var first=note.charAt(0); var last=note.charAt(note.length); var accidental=""; var low=""; if (note.length===3){if (first.toLowerCase()=="g" || first.toLowerCase()=="d" || first.toLowerCase()=="a"){if (first.toLowerCase()=="g"){first="a";}/* end if */ else if (first.toLowerCase()=="a"){first="b";}/* end else/if */ else if (first.toLowerCase()=="d"){first="e";}/* end else/if */ accidental="flat";}/* end if */ else{accidental="sharp"}/* end else */ last=note.charAt(1)}/* end if */ if (last <="3"){low="low-";}var currentValue=low + first.toLowerCase() + accidental; midiNotes.push(currentValue); var previousTime=currentTime; currentTime=oldFormatTimes[i]; var time=(currentTime - previousTime); midiTimes.push(Math.round(time * 1000));}/* end for */ var index=midiTimes.indexOf(1);midiTimes.splice(0, 1);midiTimes.push(0);for (var q=0; q < midiTimes.length; q++){hopscotchCode=hopscotchCode + "\n" + "{"+ "\n" + "\"block_class\" : \"method\","+ "\n" + "\"type\" : 52,"+ "\n" + "\"description\" : \"Start Sound\","+ "\n" + "\"parameters\" : ["+ "\n" + "{"+ "\n" + "\"defaultValue\" : \"clickPlayable\","+ "\n" + "\"value\" : \"" + midiNotes[q] + "\","+ "\n" + "\"key\" : \"\","+ "\n" + "\"type\" : 51"+ "\n" + "},"+ "\n" + "{"+ "\n" + "\"defaultValue\" : \"500\","+ "\n" + "\"value\" : \"" + midiTimes[q] + "\","+ "\n" + "\"key\" : \"wait\","+ "\n" + "\"type\" : 42"+ "\n" + "}"+ "\n" + "]"+ "\n" + "}";if (q < midiTimes.length - 1){hopscotchCode=hopscotchCode + ",";}}/* end for *//*document.getElementById("ResultsText").innerHTML=*/postMessage(hopscotchCode);};reader.readAsBinaryString(file);}function dataURLtoFile(dataurl, filename){var arr=dataurl.split(','), mime=arr[0].match(/:(.*?);/)[1],bstr=atob(arr[1]), n=bstr.length, u8arr=new Uint8Array(n);while(n--){u8arr[n]=bstr.charCodeAt(n);}return new File([u8arr], filename,{type:mime});}var file=dataURLtoFile(base64AudioURL, 'test.mid');parseFile(file);
}
	
function doColorSlots(project) {
	var count = 0;
	Array.prototype.repeatEach = function(fn) {
		var outputs = [];
		if (!(fn && typeof fn == 'function')) throw new TypeError(fn + ' is not a function');
		for(var i = 0; i < this.length; i++) {
			outputs.push( fn(this[i]) );
		}
		return outputs;
	}

	function rgbToHsv(r, g, b) {
		r /= 255, g /= 255, b /= 255;
		var max = Math.max(r, g, b), min = Math.min(r, g, b);
		var h, s, v = max;
		var d = max - min;
		s = max == 0 ? 0 : d / max;
		if (max == min) {
			h = 0; // achromatic
		} else {
			switch (max) {
				case r: h = (g - b) / d + (g < b ? 6 : 0); break;
				case g: h = (b - r) / d + 2; break;
				case b: h = (r - g) / d + 4; break;
			}
			h /= 6;
		}
		return [ h*360, s*100, v*100 ];
	}
	function colorParameter(param){
		if (!param.datum) return param;
		if (param.datum.block_class == "operator" && (param.datum.type == 5001 || param.datum.type == 5002)) {
			const dParams = param.datum.params||param.datum.parameters||[];
			dParams[0] = dParams[0]||{},dParams[1] = dParams[1]||{},dParams[2] = dParams[2]||{};
			if (dParams[0].datum || dParams[1].datum || dParams[2].datum || dParams[0].variable || dParams[1].variable || dParams[2].variable) return param; //Do not override anything if there is data such as math or variables.
			const colorArray = param.datum.type === 5001 ? rgbToHsv((Number(dParams[0].value)||0),(Number(dParams[1].value)||0),(Number(dParams[2].value)||0)) : [(Number(dParams[0].value)||0),(Number(dParams[1].value)||0),(Number(dParams[2].value)||0)];
			const colorString = "HSB("+colorArray.repeatEach(item=>{const val = Math.round(item*100)/100; return (val > 0 && val <= 1) ? 1.01 : val}).join(",")+")";
			param.value = colorString, delete param.datum;
			count++;
			return param;
		} else {
			if (param.datum.params) param.datum.params = param.datum.params.repeatEach(p=>{return colorParameter(p)});
			return param;
		}
	}
	project.abilities = (project.abilities||[]).repeatEach(a=>{
		a.blocks = (a.blocks||[]).repeatEach(b=>{
			if (!b.parameters) return b;
			var paramsBefore = JSON.stringify(b.parameters);
			b.parameters = b.parameters.repeatEach(p=>{
				return colorParameter(p);
			});
			return b;
		});
		return a;
	});
	postMessage({project: project, count: count});
}

function doMathOperators(project) {
	Array.prototype.repeatEach = function(fn) {
		var outputs = [];
		if (!(fn && typeof fn == 'function')) throw new TypeError(fn + ' is not a function');
		for(var i = 0; i < this.length; i++) {
			outputs.push( fn(this[i]) );
		}
		return outputs;
	}

	var count = 0;
	function calcParameter(param){
		if (!param.datum) return param;
		if (param.datum.block_class == "operator" && param.datum.type >= 4e3 && param.datum.type <= 4019 && param.datum.type !== 4004) {
			var dParams = param.datum.params||param.datum.parameters||[];
			dParams[0] = dParams[0]||{},dParams[1] = dParams[1]||{};
			if (dParams[0].datum || dParams[1].datum) dParams = dParams.repeatEach(p=>{return calcParameter(p)});
			if (dParams[0].datum || dParams[1].datum || dParams[0].variable || dParams[1].variable) return param; //After simplifying math inside these parameters, quit if there is still data
			if (dParams[0].type === 49 || dParams[1].type === 49) return param; //Return if either parameter slot is a conditional (to keep multiplying by conditional in secret blocks)
			function numVal(p) {
				return (Number(p.value)||0);
			}
			switch (param.datum.type) {
				case 4000: //Addition
					param.value = numVal(dParams[0]) + numVal(dParams[1]);
					if (/^1\.(\d{2,}|[5-9])\.\d+$/.test(project.playerVersion) && (Number(dParams[0].value) != Number(dParams[0].value) || Number(dParams[1].value) != Number(dParams[1].value))) param.value = dParams[0].value + dParams[1].value;
					break;
				case 4001: //Subtraction
					param.value = numVal(dParams[0]) - numVal(dParams[1]);
					break;
				case 4002: //Multiplication
					param.value = numVal(dParams[0]) * numVal(dParams[1]);
					break;
				case 4003: //Division
					param.value = numVal(dParams[1]) == 0 ? 0 : numVal(dParams[0]) / numVal(dParams[1]);
					//Treat it like Hopscotch would treat it - dividing by zero always returns zero
					break;
				case 4005: //Power
					param.value = Math.pow(numVal(dParams[0]),numVal(dParams[1]));
					break;
				case 4006: //Square Root
					param.value = Math.sqrt(numVal(dParams[0]));
					break;
				case 4007: //Sine
					param.value = Math.sin(numVal(dParams[0])*Math.PI/180);
					break;
				case 4008: //Cosine
					param.value = Math.cos(numVal(dParams[0])*Math.PI/180);
					break;
				case 4009: //Round
					param.value = Math.round(numVal(dParams[0]));
					break;
				case 4010: //Absolute Value
					param.value = Math.abs(numVal(dParams[0]));
					break;
				case 4011: //Modulo
					param.value = numVal(dParams[1]) == 0 ? 0 : numVal(dParams[0]) % numVal(dParams[1]);
					break;
				case 4012: //Tangent
					param.value = Math.tan(numVal(dParams[0])*Math.PI/180);
					break;
				case 4013: //Arcsine
					param.value = Math.asin(numVal(dParams[0]))*180/Math.PI;
					break;
				case 4014: //Arccosine
					param.value = Math.acos(numVal(dParams[0]))*180/Math.PI;
					break;
				case 4015: //Arctan
					param.value = Math.atan(numVal(dParams[0]))*180/Math.PI;
					break;
				case 4016: //Max
					var first = dParams[0], second = dParams[1];
					param.value = Math.max(numVal(first), numVal(second));
					first = first.value, second = second.value;
					//From HS Webplayer - modified to check player version, then test if either parameter is not a number
					if (/^1\.(\d{2,}|[5-9])\.\d+$/.test(project.playerVersion) && (Number(first)!==Number(first) || Number(second)!==Number(second))) {
						var B = first.toString(), F = second.toString();
						param.value = B.localeCompare(F) >= 0 ? B : F;
					}
					break;
				case 4017: //Min
					var first = dParams[0], second = dParams[1];
					param.value = Math.min(numVal(first), numVal(second));
					first = first.value, second = second.value;
					//From HS Webplayer - modified to check player version, then test if either parameter is not a number
					if (/^1\.(\d{2,}|[5-9])\.\d+$/.test(project.playerVersion) && (Number(first)!==Number(first) || Number(second)!==Number(second))) {
						var B = first.toString(), F = second.toString();
						param.value = B.localeCompare(F) <= 0 ? B : F;
					}
					break;
				case 4018: //Floor
					param.value = Math.floor(numVal(dParams[0]));
					break;
				case 4019: //Ceil
					param.value = Math.ceil(numVal(dParams[0]));
					break;
			}
			if (typeof param.value == "number") {
				var sciPwr = Number(((String(param.value).match(/(e)[+-]\d+/)||[])[0]||"").replace(/^e/,""));
				param.value = ((Math.round(Number(String(param.value).replace(/e.*$/,""))*10**12)/10**12)*10**sciPwr).toLocaleString('fullwide', {useGrouping:false});
			//	param.value = (Math.round(param.value*10**12)/10**12)//.toLocaleString('fullwide', {useGrouping:false});
			}
			param.value = String(param.value);
			delete param.datum;
			count++;
			return param;
		} else {
			if (param.datum.params) param.datum.params = param.datum.params.repeatEach(p=>{return calcParameter(p)});
			return param;
		}
	}
	project.abilities = (project.abilities||[]).repeatEach(a=>{
		a.blocks = (a.blocks||[]).repeatEach(b=>{
			if (!b.parameters) return b;
			var paramsBefore = JSON.stringify(b.parameters);
			b.parameters = b.parameters.repeatEach(p=>{
				return calcParameter(p);
			});
			return b;
		});
		return a;
	});
	postMessage({project: project, count: count});
}

function savePreset(project, namesDict, doCustomObjs) {
	doCustomObjs = doCustomObjs || false;
	var presetProject = {
		"abilities": [],
		"eventParameters": [],
		"objects": [],
		"rules": [],
		"customRules": [],
		"variables": [],
		"scenes": [],
		"customObjects": [],
		"remote_asset_urls": [],
		"playerVersion": project.playerVersion
	}, abilityIdList = [], cRuleIdList = [], eventParamIdList = [], objIdList = [], ruleIdList = [], scnNameList = [], variableList = [], customObjList = [];
	function pushAbility(id) {
		project.abilities.forEach(abl=>{
			if (abl.abilityID === id && abilityIdList.indexOf(id) === -1) {
				abilityIdList.push(id);
				presetProject.abilities.push(abl);
				//Get Variables within this ability (this does not include traits)
				JSON.stringify(abl.blocks||[]).replace(/.*?"datum":\{[^\{\}\[\]]*?"variable":"([0-9a-fA-F\-]*?)"[^\{\}\[\]]*?\}(?:.(?!"datum"))*|^.*$/g,"$1\n")
					.replace(/\n$/,"").split("\n").forEach(vId=>{
						if (variableList.indexOf(vId) === -1) {
							variableList.push(vId);
							project.variables.forEach(v=>{
								if (v.objectIdString === vId) presetProject.variables.push(v);
							});
						}
					});
				//For each control script, add the ability to the list
				JSON.stringify(abl.blocks||[]).replace(/.*?"control(?:False)?Script":\{"abilityID":"([0-9a-fA-F\-]*?)"\}(?:.(?!"control(?:False)?Script"))*|^.*$/g,"$1\n")
					.replace(/\n$/,"").split("\n").forEach(id=>{
						pushAbility(id);
					});
				//For each custom image in a set image block, add the custom image
				if (doCustomObjs) JSON.stringify(abl.blocks||[]).replace(/.*?"datum":\{[^\{\}\[\]]*?"customObject":"([0-9a-fA-F\-]*?)"[^\{\}\[\]]*?\}(?:.(?!"datum"))*|^.*$/g,"$1\n")
					.replace(/\n$/,"").split("\n").forEach(coId=>{
						if (customObjList.indexOf(coId) === -1) {
							customObjList.push(coId);
						}
					});
			}
		});
	}
	function pushRule(id){
		project.rules.forEach(rule=>{
			if (rule.id === id && ruleIdList.indexOf(id) === -1) {
				ruleIdList.push(id);
				presetProject.rules.push(rule);
				//Push the ability that the rule contains
				pushAbility(rule.abilityID);
				JSON.stringify(rule).replace(/.*?\{[^\{\}\[\]]*?(?:"type":50,[^\{\}\[\]]*?"variable":"([0-9a-fA-F\-]*?)"|"variable":"([0-9a-fA-F\-]*?)",[^\{\}\[\]]*?"type":50)[^\{\}\[\]]*?\}(?:.(?!\{))*|^.*$/g,"$1$2\n")
					.replace(/\n$/,"").split("\n").forEach(epId=>{
						if (eventParamIdList.indexOf(epId) === -1) {
							eventParamIdList.push(epId);
							(project.eventParameters||[]).forEach(ep=>{
								if (ep.id === epId) presetProject.eventParameters.push(ep);
							});
						}
					});
				//Get Variables within this rule block
				JSON.stringify(rule).replace(/.*?"datum":\{[^\{\}\[\]]*?"variable":"([0-9a-fA-F\-]*?)"[^\{\}\[\]]*?\}(?:.(?!"datum"))*|^.*$/g,"$1\n")
					.replace(/\n$/,"").split("\n").forEach(vId=>{
						if (variableList.indexOf(vId) === -1) {
							variableList.push(vId);
							project.variables.forEach(v=>{
								if (v.objectIdString === vId) presetProject.variables.push(v);
							});
						}
					});
			}
		});
		//If the rule is instead a custom rule, push that
		(project.customRules||[]).forEach(cr=>{
			if (cr.id === id && cRuleIdList.indexOf(id) === -1) {
				cRuleIdList.push(id);
				presetProject.customRules.push(cr);
				//Push the ability that the rule contains
				(cr.rules||[]).forEach(r=>{pushRule(r)});
			}
		});
	}
	function pushScene(name){
		(project.scenes||[]).forEach(scn=>{
			if (scn.name === name && scnNameList.indexOf(name) === -1) {
				scnNameList.push(name);
				presetProject.scenes.push(scn);
				//Push the ability that the rule contains
				scn.objects.forEach(objId=>{
					(project.objects||[]).forEach(o=>{
						if (o.objectID === objId && objIdList.indexOf(objId) === -1) {
							objIdList.push(objId);
							presetProject.objects.push(o);
							//Push all of the rules that the object contains
							(o.rules||[]).forEach(r=>{pushRule(r);});
							//If it is a custom object, add that to the list
							if (doCustomObjs && o.customObjectID) {
								customObjList.push(o.customObjectID);
							}
						}
					});
				});
			}
		});
	}
	project.abilities.forEach(abl=>{
		if (namesDict.abilities.indexOf(abl.name) !== -1) {
			pushAbility(abl.abilityID)
		}
	});
	project.customRules.forEach(cr=>{
		if (namesDict.customRules.indexOf(cr.name) !== -1) {
			pushRule(cr.id);
		}
	});
	project.scenes.forEach(scn=>{
		if (namesDict.scenes.indexOf(scn.name) !== -1) {
			pushScene(scn.name);
		}
	});
	//For each Custom Object ID in the list, add the custom object and the remote asset url to the preset project
	if (doCustomObjs) customObjList.forEach(id=>{
		project.customObjects.forEach(co=>{
			if (co.id === id) {
				presetProject.customObjects.push(co);
				presetProject.remote_asset_urls.push(co.fileName);
			}
		});
	});
	postMessage(presetProject);
}

function loadPreset(project, presetArray, options) {
	options = options||{};
	let newestCreateDate = 0;
	function uuidv4() {
		return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
	Array.prototype.repeatEach = function(fn) {
		var outputs = [];
		if (!(fn && typeof fn == 'function')) throw new TypeError(fn + ' is not a function');
		for(var i = 0; i < this.length; i++) {
			outputs.push( fn(this[i]) );
		}
		return outputs;
	};
	Array.prototype.removeDuplicateHsIds = function(reverseMode) {
		var outputs = [], idList = [], input = this;
		function addToList(i) {
			var myId = (input[i].id||input[i].objectID||input[i].abilityID||input[i].objectIdString);
			if (idList.indexOf(myId) === -1) {
				if (myId) idList.push(myId);
				outputs.push(input[i]);
			} else {
				console.log(input[i], "is a duplicate");
			}
		}
		if (reverseMode) { for(var i = input.length - 1; i >= 0; i--) {addToList(i)} } else { for(var i = 0; i < input.length; i++) {addToList(i)}; }
		return outputs;
	};
	let presetsMerged = 0;
	presetArray.forEach(preset=>{
		//Shuffle the UUIDs for all keys except variables
		const newIdDictionary = {};
		Object.keys(preset).forEach(key=>{
			if (Array.isArray(preset[key])) {
				if (key !== "variables") preset[key].forEach(item=>{
					const id = (item.id||item.objectID||item.abilityID||item.objectIdString);
					if (id) newIdDictionary[id] = uuidv4().toUpperCase();
				});
			}
		});
		preset = JSON.parse( JSON.stringify(preset).replace(new RegExp('"('+Object.keys(newIdDictionary).join("|")+')"',"g"), function(m0){return JSON.stringify(newIdDictionary[m0.replace(/"/g,"")])}).replace(/(".*?[^\\](?:\\\\)*"):undefined/g,'$1:""') );
		console.log(preset);
		if (preset.playerVersion === project.playerVersion || options.alwaysMerge) {
			Object.keys(preset).forEach(key=>{
				if (key === "abilities" && !options.originalCreateDates) {
					//Override CreatedAt Dates
					newestCreateDate = Math.max(project.abilities.repeatEach(a=>{return a.createdAt||0}).sort((a,b)=>b-a)[0]+12.345678||0, newestCreateDate);
					for (i = 0; i < preset.abilities.length; i++) {
						preset.abilities[i].createdAt = newestCreateDate + 12.345678*(i+1);
					};
				}
				if (Array.isArray(preset[key])) {
					project[key] = project[key].concat(preset[key]).removeDuplicateHsIds(key === "variables" && options.newVarNames);
				}
			});
			presetsMerged ++;
		}
	})
	postMessage({project:project,mergeCount:presetsMerged});
}

