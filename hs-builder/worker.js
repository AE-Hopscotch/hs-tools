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
	let iterationsTotal = (p.abilities?.length*6||0) + (p.eventParameters?.length||0) + (p.objects?.length*2||0) + (p.rules?.length*2||0) + (p.customRules?.length*2||0) + (p.traits?.length*2||0) + (p.variables?.length*2||0) + (p.scenes?.length||0) + 1,
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
	function uuidv4() {
		return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
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
		// if (editor.useBlockRender) {
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
		// }
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
			//Assign UUID if it does not exist, then add that to the object
			r.id = uuidv4().toUpperCase();
		}
		var obj = projectDict.objects[r.objectID];
		if (obj) {
			if (!obj.rules) obj.rules = [];//{};
			obj.rules.push(r.id);
			//obj.rules[r.id] = Object.detach(r);
			p.objects.forEach(o=>{
				if (o.objectID == r.objectID) o.rules.push(r.id);
			});
			/*if (!obj.rules) obj.rules = {};
			obj.rules[r.id] = Object.detach(r);
			p.objects.forEach(o=>{
				if (o.objectID == r.objectID) o.rules.push(r.id);
			});*/
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
	project.rules = (project.rules||[]).repeatEach(r=>{
		if (!r.parameters) return r;
		var paramsBefore = JSON.stringify(r.parameters);
		r.parameters = r.parameters.repeatEach(p=>{
			return calcParameter(p);
		});
		return r;
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
	presetArray = presetArray||[];
	let newestCreateDate = 0;
	function rgbToHsv(r, g, b) {r /= 255, g /= 255, b /= 255;var max = Math.max(r, g, b), min = Math.min(r, g, b);var h, s, v = max;var d = max - min;s = max == 0 ? 0 : d / max;if (max == min) {h = 0;} else {switch (max) {case r: h = (g - b) / d + (g < b ? 6 : 0); break;case g: h = (b - r) / d + 2; break;case b: h = (r - g) / d + 4; break;}h /= 6;}return [ h*360, s*100, v*100 ];}
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
	if (typeof presetArray === "string" && /bg-/.test(presetArray)) {
		const rgbColors = [0,1,2,3].repeatEach(i=>(options.colors[i]||"FFFFFF").match(/[0-9A-F]{2}/gi).repeatEach(r=>parseInt(r,16)));
		var R1 = rgbColors[0][0], R2 = rgbColors[1][0], R3 = rgbColors[2][0], R4 = rgbColors[3][0],
			G1 = rgbColors[0][1], G2 = rgbColors[1][1], G3 = rgbColors[2][1], G4 = rgbColors[3][1],
			B1 = rgbColors[0][2], B2 = rgbColors[1][2], B3 = rgbColors[2][2], B4 = rgbColors[3][2];
		if (options.bgHsv) {
			let hsvColors = [[R1,G1,B1],[R2,G2,B2],[R3,G3,B3],[R4,G4,B4]].repeatEach(rgb=>{
				return rgbToHsv(rgb[0],rgb[1],rgb[2]);
			});
			R1 = hsvColors[0][0], R2 = hsvColors[1][0], R3 = hsvColors[2][0], R4 = hsvColors[3][0],
			G1 = hsvColors[0][1], G2 = hsvColors[1][1], G3 = hsvColors[2][1], G4 = hsvColors[3][1],
			B1 = hsvColors[0][2], B2 = hsvColors[1][2], B3 = hsvColors[2][2], B4 = hsvColors[3][2];
		}
		switch (presetArray) {
			case "bg-quad":
				presetArray = [JSON.parse(`{"abilities":[{"abilityID":"CA33C272-33B3-659A-6AD8-D75FBC4C7B2E","blocks":[{"block_class":"method","description":"Set","type":45,"parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"56EFA38C-7D18-4DFC-BDB2-054BA38153EE-1617-0000034D1C6941A1","description":"Variable"},"type":47},{"defaultValue":"10","value":"${R1}","key":"to","type":48}]},{"block_class":"method","description":"Set","type":45,"parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"3226ED07-20DB-40B1-AC16-D6D15C297AF5-1617-0000034D1FD0ACB4","description":"Variable"},"type":47},{"defaultValue":"10","value":"${G1}","key":"to","type":48}]},{"block_class":"method","type":45,"description":"Set","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"F19B36B9-5B29-4E08-8C71-36AE4EF3C70A-1617-0000034D27A0C8AF","description":"Variable"},"type":47},{"defaultValue":"10","value":"${B1}","key":"to","type":48}]},{"block_class":"method","type":45,"description":"Set","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"2A985977-F799-4386-873F-1E99D430B068-1617-0000034D2B1AC765","description":"Variable"},"type":47},{"defaultValue":"10","value":"${R2}","key":"to","type":48}]},{"block_class":"method","description":"Set","type":45,"parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"E4E4D92A-7B39-43CB-ABE5-39A5961355BC-1617-0000034D2DFBAA30","description":"Variable"},"type":47},{"defaultValue":"10","value":"${G2}","key":"to","type":48}]},{"block_class":"method","type":45,"description":"Set","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"3A755D58-F48D-48F6-AB6A-BB89CCB99196-1617-0000034D3170FDDD","description":"Variable"},"type":47},{"defaultValue":"10","value":"${B2}","key":"to","type":48}]},{"block_class":"method","description":"Set","type":45,"parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"EA57774B-D0D5-4766-99D1-649A3A32AC9D-1617-00000352069B9381","description":"Variable"},"type":47},{"defaultValue":"10","value":"${R3}","key":"to","type":48}]},{"block_class":"method","type":45,"description":"Set","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"D66504A8-20EB-4D20-8250-334B8D2A4D63-1617-000003520A660AB2","description":"Variable"},"type":47},{"defaultValue":"10","value":"${G3}","key":"to","type":48}]},{"block_class":"method","description":"Set","type":45,"parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"6A2669EC-43B6-4E04-B7EF-900A6C0703AB-1617-0000035210581D61","description":"Variable"},"type":47},{"defaultValue":"10","value":"${B3}","key":"to","type":48}]},{"block_class":"method","type":45,"description":"Set","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"6AD4CA77-C6EC-4991-AB29-5FACB92E7405-1617-00000352148749BA","description":"Variable"},"type":47},{"defaultValue":"10","value":"${R4}","key":"to","type":48}]},{"block_class":"method","description":"Set","type":45,"parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"90BD8917-D494-46E5-B2DD-EFCA155F10D4-1617-0000035218B6B72C","description":"Variable"},"type":47},{"defaultValue":"10","value":"${G4}","key":"to","type":48}]},{"block_class":"method","type":45,"description":"Set","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":8003,"variable":"DBC97C9B-F8C1-4585-9CF9-551B3589277C-1617-000003521C401B51","description":"Variable"},"type":47},{"defaultValue":"10","value":"${B4}","key":"to","type":48}]},{"block_class":"method","type":53,"description":"Create a Clone of This Object","parameters":[{"defaultValue":"5","value":"2050","key":"times","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2050","key":"","datum":{"HSTraitIDKey":"ED4EF3D0-CFD2-4279-B028-8EA2F783680F-1890-0000036D44911DC5","HSTraitTypeKey":3000,"description":"Width"},"type":42},{"defaultValue":"3","value":"2","key":"×","type":42}]},"type":42}]}],"createdAt":0},{"abilityID":"880347C8-D013-0D6D-877E-8A6CF35E598B","blocks":[{"block_class":"method","description":"Set Position","type":41,"parameters":[{"defaultValue":"200","value":"100","key":"to x","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"-1","key":"","type":42},{"defaultValue":"3","value":"","key":"+","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"1B3B12AB-C1F2-4A67-AC0A-F7C332CA4D67-1890-0000036D448872AC","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"2","value":"2","key":"÷","type":42}]},"type":42}]},"type":42},{"defaultValue":"200","value":"512","key":"y","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"","key":"","datum":{"HSTraitIDKey":"1648035F-CF24-430D-96AC-E3B4E3BB53B3-1890-0000036D4488A492","HSTraitTypeKey":3001,"description":"Height"},"type":42},{"defaultValue":"3","value":"3","key":"×","datum":{"block_class":"operator","type":4011,"description":"%","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"1B3B12AB-C1F2-4A67-AC0A-F7C332CA4D67-1890-0000036D448872AC","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"2","value":"2","key":"%","type":42}]},"type":42}]},"type":42}]},{"controlScript":{"abilityID":"CED22272-4146-FB8C-D1E6-A3F8253183D3"},"block_class":"control","description":"Draw a Trail","type":26,"parameters":[{"defaultValue":"HSB(288,57,43)","value":"HSB(288,57,43)","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"34","value":"","key":"${options.bgHsv?"H":"R"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"","key":"","datum":{"type":8003,"variable":"56EFA38C-7D18-4DFC-BDB2-054BA38153EE-1617-0000034D1C6941A1","description":"Variable"},"type":42},{"defaultValue":"3","value":"","key":"+","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"6E20CB5F-D82A-40A5-A1AE-734966110C46-1890-0000036D44896C8D","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"type":8003,"variable":"2A985977-F799-4386-873F-1E99D430B068-1617-0000034D2B1AC765","description":"Variable"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"type":8003,"variable":"56EFA38C-7D18-4DFC-BDB2-054BA38153EE-1617-0000034D1C6941A1","description":"Variable"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"2","value":"128","key":"÷","datum":{"HSTraitIDKey":"63F5C64C-1950-4BF3-8A85-25493700BD02-1890-0000036D4489A6C6","HSTraitTypeKey":3000,"description":"Width"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4011,"description":"%","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"C3929730-4603-447B-8DCB-3E1846843F5E-1890-0000036D4489C294","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"2","value":"2","key":"%","type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"3","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"","key":"","datum":{"type":8003,"variable":"EA57774B-D0D5-4766-99D1-649A3A32AC9D-1617-00000352069B9381","description":"Variable"},"type":42},{"defaultValue":"3","value":"","key":"+","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"593F6FA8-1673-4651-AE9C-097FC5F20586-1890-0000036D448A0AB8","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"type":8003,"variable":"6AD4CA77-C6EC-4991-AB29-5FACB92E7405-1617-00000352148749BA","description":"Variable"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"type":8003,"variable":"EA57774B-D0D5-4766-99D1-649A3A32AC9D-1617-00000352069B9381","description":"Variable"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"2","value":"128","key":"÷","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"A8D3631C-E789-4979-B2EC-282FECBA9E7F-1890-0000036D448A4235","description":"Width"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4011,"description":"%","params":[{"defaultValue":"5","value":"5","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"1C6E00F0-68DA-4FB1-8271-328895335C04-1890-0000036D448A6CE4","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"3","value":"1","key":"+","type":42}]},"type":42},{"defaultValue":"2","value":"2","key":"%","type":42}]},"type":42}]},"type":42}]},"type":42},{"defaultValue":"246","value":"246","key":"${options.bgHsv?"S":"G"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"","key":"","datum":{"type":8003,"variable":"3226ED07-20DB-40B1-AC16-D6D15C297AF5-1617-0000034D1FD0ACB4","description":"Variable"},"type":42},{"defaultValue":"3","value":"","key":"+","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"531A3BFE-E614-4803-94A0-AC29C2BDCDA9-1890-0000036D448AE3C6","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"type":8003,"variable":"E4E4D92A-7B39-43CB-ABE5-39A5961355BC-1617-0000034D2DFBAA30","description":"Variable"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"type":8003,"variable":"3226ED07-20DB-40B1-AC16-D6D15C297AF5-1617-0000034D1FD0ACB4","description":"Variable"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"2","value":"128","key":"÷","datum":{"HSTraitIDKey":"EC508648-62B7-4440-A300-F69B9660F06D-1890-0000036D448B20C6","HSTraitTypeKey":3000,"description":"Width"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4011,"description":"%","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"35AEE991-2049-404C-B245-9D0137DE3F27-1890-0000036D448B3C80","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"2","value":"2","key":"%","type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"3","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"","key":"","datum":{"type":8003,"variable":"D66504A8-20EB-4D20-8250-334B8D2A4D63-1617-000003520A660AB2","description":"Variable"},"type":42},{"defaultValue":"3","value":"","key":"+","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"73354278-E0AF-4927-871D-BC6A0DEC191E-1890-0000036D448B85D9","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"type":8003,"variable":"90BD8917-D494-46E5-B2DD-EFCA155F10D4-1617-0000035218B6B72C","description":"Variable"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"type":8003,"variable":"D66504A8-20EB-4D20-8250-334B8D2A4D63-1617-000003520A660AB2","description":"Variable"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"2","value":"128","key":"÷","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"56E686CA-E4D5-4DF3-8658-0DB577B98566-1890-0000036D448BBF45","description":"Width"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4011,"description":"%","params":[{"defaultValue":"5","value":"5","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"2BC968A5-4BC0-4715-8D61-7A5D099C09F7-1890-0000036D448BF7C9","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"3","value":"1","key":"+","type":42}]},"type":42},{"defaultValue":"2","value":"2","key":"%","type":42}]},"type":42}]},"type":42}]},"type":42},{"defaultValue":"217","value":"217","key":"B","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"","key":"","datum":{"type":8003,"variable":"F19B36B9-5B29-4E08-8C71-36AE4EF3C70A-1617-0000034D27A0C8AF","description":"Variable"},"type":42},{"defaultValue":"3","value":"","key":"+","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"3B0854F8-BF3E-4921-9D99-A7612BDE8999-1890-0000036D448C533D","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"type":8003,"variable":"3A755D58-F48D-48F6-AB6A-BB89CCB99196-1617-0000034D3170FDDD","description":"Variable"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"type":8003,"variable":"F19B36B9-5B29-4E08-8C71-36AE4EF3C70A-1617-0000034D27A0C8AF","description":"Variable"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"2","value":"128","key":"÷","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"002334C0-C15B-46DB-A88B-1D201B71E518-1890-0000036D448CA0C9","description":"Width"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4011,"description":"%","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"B381660D-E9B3-43CA-8E10-60873D919088-1890-0000036D448CD71B","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"2","value":"2","key":"%","type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"3","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"","key":"","datum":{"type":8003,"variable":"6A2669EC-43B6-4E04-B7EF-900A6C0703AB-1617-0000035210581D61","description":"Variable"},"type":42},{"defaultValue":"3","value":"","key":"+","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"EC14EC62-E6E7-427A-840F-D498C3C4F444-1890-0000036D448D29D6","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"type":8003,"variable":"DBC97C9B-F8C1-4585-9CF9-551B3589277C-1617-000003521C401B51","description":"Variable"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"type":8003,"variable":"6A2669EC-43B6-4E04-B7EF-900A6C0703AB-1617-0000035210581D61","description":"Variable"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"2","value":"128","key":"÷","datum":{"HSTraitIDKey":"BF6D83AE-5994-423E-BBF6-593741538C23-1890-0000036D448D620E","HSTraitTypeKey":3000,"description":"Width"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"","key":"×","datum":{"block_class":"operator","type":4011,"description":"%","params":[{"defaultValue":"5","value":"5","key":"","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"6439460F-0CBD-4085-8EDA-F0E8D8E51CE7-1890-0000036D448D9886","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"3","value":"1","key":"+","type":42}]},"type":42},{"defaultValue":"2","value":"2","key":"%","type":42}]},"type":42}]},"type":42}]},"type":42}]},"type":44},{"defaultValue":"10","value":"2","key":"width","type":43}]},{"block_class":"method","type":55,"description":"Destroy"}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","description":"Set Position","type":41,"parameters":[{"defaultValue":"200","value":"","key":"to x","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2001,"HSTraitIDKey":"0F1E913E-E14B-4D7E-ABD0-4CC7ABB5E03F-1890-0000036D448E3920","HSTraitObjectParameterTypeKey":8004,"description":"X Position"},"type":42},{"defaultValue":"3","value":"0.5","key":"+","type":42}]},"type":42},{"defaultValue":"200","value":"256","key":"y","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"","key":"","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"E3FE84F9-6ED6-41D5-82B2-DE15D7179AC4-1890-0000036D448E573F","description":"Height"},"type":42},{"defaultValue":"2","value":"","key":"−","datum":{"HSTraitTypeKey":2002,"HSTraitIDKey":"5FB18E01-0584-4103-B44E-18BF1A076F38-1890-0000036D448E66F8","HSTraitObjectParameterTypeKey":8004,"description":"Y Position"},"type":42}]},"type":42}]}],"abilityID":"CED22272-4146-FB8C-D1E6-A3F8253183D3"}],"eventParameters":[],"objects":[],"rules":[{"ruleBlockType":6000,"id":"DA6486B1-F78F-E495-F1CC-3A8C2F4E2C53","abilityID":"CA33C272-33B3-659A-6AD8-D75FBC4C7B2E","name":"","objectID":"","parameters":[{"datum":{"type":7000,"block_class":"operator","description":"Game Starts"},"value":"","key":"","defaultValue":"","type":52}]},{"ruleBlockType":6000,"id":"3DFC0616-9061-E503-7395-397A0A48205C","abilityID":"880347C8-D013-0D6D-877E-8A6CF35E598B","objectID":"","name":"","parameters":[{"datum":{"type":7015,"block_class":"operator","description":"Object is Cloned"},"value":"","key":"","defaultValue":"","type":52}]}],"customRules":[{"name":"${options.name}","rules":["DA6486B1-F78F-E495-F1CC-3A8C2F4E2C53","3DFC0616-9061-E503-7395-397A0A48205C"],"id":"23FE2F00-5259-7B01-E3E9-41C8A62DF2E2"}],"variables":[{"type":8003,"objectIdString":"56EFA38C-7D18-4DFC-BDB2-054BA38153EE-1617-0000034D1C6941A1","name":"R1"},{"name":"G1","objectIdString":"3226ED07-20DB-40B1-AC16-D6D15C297AF5-1617-0000034D1FD0ACB4","type":8003},{"type":8003,"objectIdString":"F19B36B9-5B29-4E08-8C71-36AE4EF3C70A-1617-0000034D27A0C8AF","name":"B1"},{"type":8003,"name":"R2","objectIdString":"2A985977-F799-4386-873F-1E99D430B068-1617-0000034D2B1AC765"},{"type":8003,"objectIdString":"E4E4D92A-7B39-43CB-ABE5-39A5961355BC-1617-0000034D2DFBAA30","name":"G2"},{"type":8003,"objectIdString":"3A755D58-F48D-48F6-AB6A-BB89CCB99196-1617-0000034D3170FDDD","name":"B2"},{"type":8003,"objectIdString":"EA57774B-D0D5-4766-99D1-649A3A32AC9D-1617-00000352069B9381","name":"R3"},{"type":8003,"objectIdString":"D66504A8-20EB-4D20-8250-334B8D2A4D63-1617-000003520A660AB2","name":"G3"},{"name":"B3","type":8003,"objectIdString":"6A2669EC-43B6-4E04-B7EF-900A6C0703AB-1617-0000035210581D61"},{"type":8003,"objectIdString":"6AD4CA77-C6EC-4991-AB29-5FACB92E7405-1617-00000352148749BA","name":"R4"},{"type":8003,"objectIdString":"90BD8917-D494-46E5-B2DD-EFCA155F10D4-1617-0000035218B6B72C","name":"G4"},{"type":8003,"objectIdString":"DBC97C9B-F8C1-4585-9CF9-551B3589277C-1617-000003521C401B51","name":"B4"}],"scenes":[],"customObjects":[],"remote_asset_urls":[],"playerVersion":"1.5.0"}`)];
				break;
			case "bg-radial":
				R3 = R1; R1 = R2; R2 = R3; G3 = G1; G1 = G2; G2 = G3; B3 = B1; B1 = B2; B2 = B3;
				presetArray = [JSON.parse(`{"abilities":[{"abilityID":"8371E1B0-C070-99EE-707C-28DC8AEC2720","blocks":[{"controlScript":{"abilityID":"9234E040-E148-B230-0792-76129705A399"},"block_class":"control","type":26,"description":"Draw a Trail","parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"${R1}","key":"${options.bgHsv?"H":"R"}","type":42},{"defaultValue":"","value":"${G1}","key":"${options.bgHsv?"S":"G"}","type":42},{"defaultValue":"","value":"${B1}","key":"B","type":42}]},"type":44},{"defaultValue":"10","value":"4096","key":"width","type":43}]},{"block_class":"method","description":"Create a Clone of This Object","type":53,"parameters":[{"defaultValue":"5","value":"","key":"times","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitIDKey":"1612DCED-3F1E-4FB9-8E8D-92A781AACF60-1890-0000036E68C2C325","HSTraitTypeKey":3000,"description":"Width"},"type":42},{"defaultValue":"2","value":"4","key":"÷","type":42}]},"type":42}]}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","type":42},{"defaultValue":"200","value":"0","key":"y","type":42}]}],"abilityID":"9234E040-E148-B230-0792-76129705A399"},{"abilityID":"CFEF83AF-CEAD-B4D4-90F7-13CAE236D9CE","blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"200","key":"to x","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitIDKey":"D4AC7E7B-CF9A-4110-8139-A1F2833DDB9E-1890-0000036E68D46224","HSTraitTypeKey":3000,"description":"Width"},"type":42},{"defaultValue":"2","value":"2","key":"÷","type":42}]},"type":42},{"defaultValue":"200","value":"","key":"y","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitIDKey":"AEBF3710-D38E-4610-A959-6CE0EFB66ED1-1890-0000036E68D47682","HSTraitTypeKey":3001,"description":"Height"},"type":42},{"defaultValue":"2","value":"2","key":"÷","type":42}]},"type":42}]},{"block_class":"method","description":"Set Angle","type":39,"parameters":[{"defaultValue":"30","value":"0","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"F9F79F8E-1C17-4C15-800C-65CFF3A800F5-1890-0000036E68D49E81","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"2","value":"100","key":"÷","type":42}]},"type":42},{"defaultValue":"2","value":"2","key":"÷","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitIDKey":"B75F6DB7-A383-4D7C-9AC9-EB8491ADA334-1890-0000036E68D4BAD7","HSTraitTypeKey":3000,"description":"Width"},"type":42},{"defaultValue":"2","value":"4","key":"÷","type":42}]},"type":42}]},"type":42}]},{"description":"Draw a Trail","block_class":"control","type":26,"controlScript":{"abilityID":"00E544BB-F2E0-002E-9CC0-545D651DC77B"},"parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"","key":"${options.bgHsv?"H":"R"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${R1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2000,"HSTraitIDKey":"9F3219DA-B5AE-45A9-959F-553BFAA98184-1890-0000036E68D4E3B0","HSTraitObjectParameterTypeKey":8004,"description":"Rotation"},"type":42},{"defaultValue":"","value":"${(R2-R1)*100}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"${options.bgHsv?"S":"G"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${G1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2000,"HSTraitIDKey":"8B2F7201-9183-403E-983C-FED345646E15-1890-0000036E68D4FAA8","HSTraitObjectParameterTypeKey":8004,"description":"Rotation"},"type":42},{"defaultValue":"","value":"${(G2-G1)*100}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"96","value":"100","key":"B","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${B1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2000,"HSTraitIDKey":"1597696D-010F-4AD5-A1D8-B4897D48DF6C-1890-0000036E68D51958","HSTraitObjectParameterTypeKey":8004,"description":"Rotation"},"type":42},{"defaultValue":"","value":"${(B2-B1)*100}","key":"×","type":42}]},"type":42}]},"type":42}]},"type":44},{"defaultValue":"10","value":"","key":"width","datum":{"block_class":"operator","type":4001,"description":"−","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitIDKey":"954B8E75-CA13-4F58-859E-92B76AE6A9BE-1890-0000036E68D52A3B","HSTraitTypeKey":3000,"description":"Width"},"type":42},{"defaultValue":"2","value":"2","key":"−","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"0729ED12-9EC2-49C8-9EDF-6AE1DBDE0A4C-1890-0000036E68D538E5","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"3","value":"4","key":"×","type":42}]},"type":42}]},"type":43}]}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"200","key":"to x","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitIDKey":"9E8623D5-94C9-4183-831F-6A34F4EBF3A6-1890-0000036E68D704DB","HSTraitTypeKey":3000,"description":"Width"},"type":42},{"defaultValue":"2","value":"2","key":"÷","type":42}]},"type":42},{"defaultValue":"200","value":"","key":"y","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"7080CC42-4817-44AF-A2FB-0388B052BA88-1890-0000036E68D71468","description":"Height"},"type":42},{"defaultValue":"2","value":"2","key":"÷","type":42}]},"type":42}]}],"abilityID":"00E544BB-F2E0-002E-9CC0-545D651DC77B"}],"eventParameters":[],"objects":[],"rules":[{"ruleBlockType":6000,"id":"D32038AD-D0F0-705C-41E5-CF4C7703D2B1","abilityID":"8371E1B0-C070-99EE-707C-28DC8AEC2720","name":"","objectID":"","parameters":[{"defaultValue":"","datum":{"type":7000,"block_class":"operator","description":"Game Starts"},"key":"","value":"","type":52}]},{"ruleBlockType":6000,"id":"1EE920D4-5537-3094-142A-7F4497249E07","objectID":"","name":"","abilityID":"CFEF83AF-CEAD-B4D4-90F7-13CAE236D9CE","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":7015,"block_class":"operator","description":"Object is Cloned"},"type":52}]}],"customRules":[{"name":"${options.name}","rules":["D32038AD-D0F0-705C-41E5-CF4C7703D2B1","1EE920D4-5537-3094-142A-7F4497249E07"],"id":"693F4B12-CDE8-874B-131E-B138C5407553"}],"variables":[],"scenes":[],"customObjects":[],"remote_asset_urls":[],"playerVersion":"1.5.0"}`)];
				break;
			case "bg-horizontal":
				presetArray = [JSON.parse(`{"abilities":[{"abilityID":"D328B748-CA85-4F59-8321-EC5565083AD2-1890-0000036E68D731BB","blocks":[{"controlScript":{"abilityID":"2D329500-83EC-4B68-A8CE-A4A029931A54-1890-0000036F7B822360"},"block_class":"control","type":26,"description":"Draw a Trail","parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"${R1}","key":"${options.bgHsv?"H":"R"}","type":42},{"defaultValue":"","value":"${G1}","key":"${options.bgHsv?"S":"G"}","type":42},{"defaultValue":"","value":"${B1}","key":"B","type":42}]},"type":44},{"defaultValue":"10","value":"4096","key":"width","type":43}]},{"block_class":"method","description":"Create a Clone of This Object","type":53,"parameters":[{"defaultValue":"5","value":"5","key":"times","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"787B95A8-34C2-4D82-9F7A-3F3E7655F459-1890-0000036E68D75476","description":"Width"},"type":42}]}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","type":42},{"defaultValue":"200","value":"0","key":"y","type":42}]}],"abilityID":"2D329500-83EC-4B68-A8CE-A4A029931A54-1890-0000036F7B822360"},{"abilityID":"A15CA08F-3861-453F-9AA7-99331B01378B-1890-0000036E68D764CC","blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"82AC6A63-9E7C-4A1B-96C1-4A3853EC7E6B-1890-0000036E68D771D6","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"200","value":"0","key":"y","type":42}]},{"parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"","key":"${options.bgHsv?"H":"R"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${R1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"0B989EF8-EB5F-4338-8475-4C7AF49FDC6F-1890-0000036E68D7A935","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"787B95A8-34C2-4D82-9F7A-3F3E7655F459-1890-0000036E68D75476","description":"Width"},"type":42}]},"type":42},{"defaultValue":"","value":"${R2-R1}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"${options.bgHsv?"S":"G"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${G1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"7DBDD4A3-8FFF-4F91-896B-BF43962A4A1C-1890-0000036E68D7D49E","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"787B95A8-34C2-4D82-9F7A-3F3E7655F459-1890-0000036E68D75476","description":"Width"},"type":42}]},"type":42},{"defaultValue":"","value":"${G2-G1}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"B","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${B1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"1E4EEE3D-B404-48AC-AAC8-40C9359672A6-1890-0000036E68D7FD53","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"787B95A8-34C2-4D82-9F7A-3F3E7655F459-1890-0000036E68D75476","description":"Width"},"type":42}]},"type":42},{"defaultValue":"","value":"${B2-B1}","key":"×","type":42}]},"type":42}]},"type":42}]},"type":44},{"defaultValue":"10","value":"2","key":"width","type":43}],"block_class":"control","type":26,"description":"Draw a Trail","controlScript":{"abilityID":"959E4133-7B5B-4DEA-961E-BC163F8A9B48-1890-0000036E68D80C28"}}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","description":"Set Position","type":41,"parameters":[{"defaultValue":"200","value":"","key":"to x","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"666D03EF-A51F-4230-B77A-423713A2A2B4-1890-0000036E68D81F7A","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"200","value":"","key":"y","datum":{"HSTraitIDKey":"DA14A6AA-E89C-428B-B5E0-0F3F349FD177-1890-0000036E68D82958","HSTraitTypeKey":3001,"description":"Height"},"type":42}]}],"abilityID":"959E4133-7B5B-4DEA-961E-BC163F8A9B48-1890-0000036E68D80C28"}],"eventParameters":[],"objects":[],"rules":[{"ruleBlockType":6000,"id":"FEFC7ABE-7700-4B12-83F0-09E0B320BDA5-1890-0000036E68DC0D75","abilityID":"D328B748-CA85-4F59-8321-EC5565083AD2-1890-0000036E68D731BB","objectID":"","name":"","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":7000,"block_class":"operator","description":"Game Starts"},"type":52}]},{"ruleBlockType":6000,"id":"8A56FC96-F5DF-414C-AED0-85DA471CE600-1890-0000036E68DC19C9","abilityID":"A15CA08F-3861-453F-9AA7-99331B01378B-1890-0000036E68D764CC","objectID":"","name":"","parameters":[{"datum":{"type":7015,"block_class":"operator","description":"Object is Cloned"},"value":"","key":"","defaultValue":"","type":52}]}],"customRules":[{"name":"${options.name}","rules":["FEFC7ABE-7700-4B12-83F0-09E0B320BDA5-1890-0000036E68DC0D75","8A56FC96-F5DF-414C-AED0-85DA471CE600-1890-0000036E68DC19C9"],"id":"DA2678E0-7755-470D-A3D1-0AEBE36F44B7-1890-0000036E68DCB23C"}],"variables":[],"scenes":[],"customObjects":[],"remote_asset_urls":[],"playerVersion":"1.5.0"}`)];
				break;
			case "bg-vertical":
				R3 = R1; R1 = R2; R2 = R3; G3 = G1; G1 = G2; G2 = G3; B3 = B1; B1 = B2; B2 = B3;
				presetArray = [JSON.parse(`{"abilities":[{"abilityID":"A6E9E0D1-D4E5-8165-1A8C-8E608D1ACE04","blocks":[{"controlScript":{"abilityID":"68ACA643-740F-14F4-8669-C9FCDE8ACD18"},"block_class":"control","type":26,"description":"Draw a Trail","parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"${R1}","key":"${options.bgHsv?"H":"R"}","type":42},{"defaultValue":"","value":"${G1}","key":"${options.bgHsv?"S":"G"}","type":42},{"defaultValue":"","value":"${B1}","key":"B","type":42}]},"type":44},{"defaultValue":"10","value":"4096","key":"width","type":43}]},{"block_class":"method","description":"Create a Clone of This Object","type":53,"parameters":[{"defaultValue":"5","value":"5","key":"times","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"B3C32104-080B-46F5-BA94-BCAD1EED0E8E-1890-0000036E68D85C34","description":"Height"},"type":42}]}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","type":42},{"defaultValue":"200","value":"0","key":"y","type":42}]}],"abilityID":"68ACA643-740F-14F4-8669-C9FCDE8ACD18"},{"abilityID":"DF71D382-4A9C-02BE-C7EC-3161BE7864FF","blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","type":42},{"defaultValue":"200","value":"0","key":"y","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"B60ADABA-39DE-4A13-A11B-B38524359405-1890-0000036E68D886F3","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42}]},{"parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"","key":"${options.bgHsv?"H":"R"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${R1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"AF838937-41F0-4938-A5AA-2321084F38FC-1890-0000036E68D8C2D5","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"4B79AC56-4637-4011-8967-CCFA3B80C0AE-1890-0000036E68D8CD8D","description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${R2-R1}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"${options.bgHsv?"S":"G"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${G1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"82E060E5-B807-4FBE-90EC-08B129F1BB92-1890-0000036E68D8E91B","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitIDKey":"41ADD362-3162-4CF8-B0BB-A02825C49092-1890-0000036E68D8F5EF","HSTraitTypeKey":3001,"description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${G2-G1}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"B","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${B1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"C4C6CCC6-B7BE-446B-A953-0C963A220138-1890-0000036E68D9113F","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"2","value":"2","key":"÷","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"A4F01B8B-A984-41C0-98FE-9B6A3FD908E8-1890-0000036E68D91A79","description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${B2-B1}","key":"×","type":42}]},"type":42}]},"type":42}]},"type":44},{"defaultValue":"10","value":"2","key":"width","type":43}],"block_class":"control","type":26,"controlScript":{"abilityID":"CA7121AF-BFD7-943B-0318-216D2B1E2827"},"description":"Draw a Trail"},{"block_class":"method","description":"Destroy","type":55}],"createdAt":0},{"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"","key":"to x","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"3D13D739-3CD2-4001-90E1-84A76F471630-1890-0000036E68D93252","description":"Width"},"type":42},{"defaultValue":"200","value":"","key":"y","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"FDC7D150-28FE-42B7-A3A3-06C27C3F1432-1890-0000036E68D93B1C","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42}]}],"createdAt":0,"abilityID":"CA7121AF-BFD7-943B-0318-216D2B1E2827"}],"eventParameters":[],"objects":[],"rules":[{"ruleBlockType":6000,"id":"362771F0-3793-16E9-6520-58C9F9F302A8","objectID":"","name":"","abilityID":"A6E9E0D1-D4E5-8165-1A8C-8E608D1ACE04","parameters":[{"datum":{"type":7000,"block_class":"operator","description":"Game Starts"},"defaultValue":"","key":"","value":"","type":52}]},{"ruleBlockType":6000,"id":"21597407-BF9E-081C-14EF-89DE791716C1","abilityID":"DF71D382-4A9C-02BE-C7EC-3161BE7864FF","name":"","objectID":"","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":7015,"block_class":"operator","description":"Object is Cloned"},"type":52}]}],"customRules":[{"name":"${options.name}","rules":["362771F0-3793-16E9-6520-58C9F9F302A8","21597407-BF9E-081C-14EF-89DE791716C1"],"id":"27BFE11F-DE1F-BE2A-75EF-A1C94C0F4916"}],"variables":[],"scenes":[],"customObjects":[],"remote_asset_urls":[],"playerVersion":"1.5.0"}`)];
				break;
			case "bg-nesw":
				presetArray = [JSON.parse(`{"abilities":[{"abilityID":"11C5A271-3EB1-4A6E-8855-1E3A4E3764F0-1890-0000036E68D97D27","blocks":[{"controlScript":{"abilityID":"2D329500-83EC-4B68-A8CE-A4A029931A54-1890-0000036F7B822360"},"block_class":"control","type":26,"description":"Draw a Trail","parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"${R1}","key":"${options.bgHsv?"H":"R"}","type":42},{"defaultValue":"","value":"${G1}","key":"${options.bgHsv?"S":"G"}","type":42},{"defaultValue":"","value":"${B1}","key":"B","type":42}]},"type":44},{"defaultValue":"10","value":"4096","key":"width","type":43}]},{"block_class":"method","type":53,"description":"Create a Clone of This Object","parameters":[{"defaultValue":"5","value":"5","key":"times","datum":{"HSTraitIDKey":"EB791663-2129-4365-A8DD-1D9174F0E4E5-1890-0000036E68D9A4FC","HSTraitTypeKey":3001,"description":"Height"},"type":42}]}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","type":42},{"defaultValue":"200","value":"0","key":"y","type":42}]}],"abilityID":"2D329500-83EC-4B68-A8CE-A4A029931A54-1890-0000036F7B822360"},{"abilityID":"34215CD2-1ED7-4C17-B704-BA04F5F60322-1890-0000036E878DDEB8","blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","type":42},{"defaultValue":"200","value":"200","key":"y","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"CC91DD07-D94B-455A-9A7B-881778B85B89-1890-0000036E914F7F19","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"3","value":"2","key":"×","type":42}]},"type":42}]},{"type":26,"block_class":"control","description":"Draw a Trail","controlScript":{"abilityID":"87895CF5-45E2-4FC8-B4B7-17EF1DB70834-1890-0000036E95496023"},"parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"","key":"${options.bgHsv?"H":"R"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${R1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"C0478744-C7EA-4E0B-AFEF-50793C0AB9A1-1890-0000036F829F2E7B","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitIDKey":"D601C255-108D-4969-B43A-2E7F4F453955-1890-0000036F829F37E6","HSTraitTypeKey":3001,"description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${R2-R1}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"${options.bgHsv?"S":"G"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${G1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"BD75D6AB-4B08-4C88-BB70-79F072F89FBC-1890-0000036F829F52C8","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitIDKey":"CBCDEA5E-FC0B-4F3F-8D6F-411DCDD80FD6-1890-0000036F829F5C15","HSTraitTypeKey":3001,"description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${G2-G1}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"B","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${B1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"9BC95402-9B0B-45CC-ADDB-565E98A1E84E-1890-0000036F829F77BF","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"9D68CA22-C240-478B-AF18-E6D84442FC9E-1890-0000036F829F8102","description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${B2-B1}","key":"×","type":42}]},"type":42}]},"type":42}]},"type":44},{"defaultValue":"10","value":"4","key":"width","type":43}]}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"20","key":"to x","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"9116E853-75BE-4661-BD33-FFADACBDA053-1890-0000036EA7A56C74","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"3","value":"2","key":"×","type":42}]},"type":42},{"defaultValue":"3","value":"3","key":"×","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitIDKey":"71162EF5-4382-442B-A10E-6898DB9C4986-1890-0000036EAC16D65C","HSTraitTypeKey":3000,"description":"Width"},"type":42},{"defaultValue":"2","value":"2","key":"÷","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"A408A08D-BBEB-4E34-9DE7-F51C02D5EF5E-1890-0000036EAF89E99B","description":"Height"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"200","value":"0","key":"y","type":42}]}],"abilityID":"87895CF5-45E2-4FC8-B4B7-17EF1DB70834-1890-0000036E95496023"}],"eventParameters":[],"objects":[],"rules":[{"ruleBlockType":6000,"id":"3DFBBC2E-1A9E-4D62-ADA6-E4D3FDD74602-1890-0000036E68A871FA","abilityID":"11C5A271-3EB1-4A6E-8855-1E3A4E3764F0-1890-0000036E68D97D27","objectID":"","name":"","parameters":[{"defaultValue":"","value":"","datum":{"type":7000,"block_class":"operator","description":"Game Starts"},"key":"","type":52}]},{"ruleBlockType":6000,"id":"4901DB53-CC1F-42C2-A8AB-DEDA718E3345-1890-0000036E82EEBC62","abilityID":"34215CD2-1ED7-4C17-B704-BA04F5F60322-1890-0000036E878DDEB8","objectID":"","name":"","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":7015,"block_class":"operator","description":"Object is Cloned"},"type":52}]}],"customRules":[{"name":"${options.name}","rules":["3DFBBC2E-1A9E-4D62-ADA6-E4D3FDD74602-1890-0000036E68A871FA","4901DB53-CC1F-42C2-A8AB-DEDA718E3345-1890-0000036E82EEBC62"],"id":"D8595B21-0BB7-4E84-B48F-83090BA8E1A4-1890-0000036F72DC18B1"}],"variables":[],"scenes":[],"customObjects":[],"remote_asset_urls":[],"playerVersion":"1.5.0"}`)];
				break;
			case "bg-nwse":
				R3 = R1; R1 = R2; R2 = R3; G3 = G1; G1 = G2; G2 = G3; B3 = B1; B1 = B2; B2 = B3;
				presetArray = [JSON.parse(`{"abilities":[{"abilityID":"01DA5985-7846-4345-A04F-D76C54A8FB32-1890-0000036F7B81FA15","blocks":[{"controlScript":{"abilityID":"2D329500-83EC-4B68-A8CE-A4A029931A54-1890-0000036F7B822360"},"block_class":"control","type":26,"description":"Draw a Trail","parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"${R1}","key":"${options.bgHsv?"H":"R"}","type":42},{"defaultValue":"","value":"${G1}","key":"${options.bgHsv?"S":"G"}","type":42},{"defaultValue":"","value":"${B1}","key":"B","type":42}]},"type":44},{"defaultValue":"10","value":"4096","key":"width","type":43}]},{"block_class":"method","description":"Create a Clone of This Object","type":53,"parameters":[{"defaultValue":"5","value":"5","key":"times","datum":{"HSTraitIDKey":"BE9E8BA4-ACD4-408F-B4F6-294E50D53404-1890-0000036F7B825221","HSTraitTypeKey":3001,"description":"Height"},"type":42}]}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","type":42},{"defaultValue":"200","value":"0","key":"y","type":42}]}],"abilityID":"2D329500-83EC-4B68-A8CE-A4A029931A54-1890-0000036F7B822360"},{"abilityID":"FED09EC8-96B9-4EA7-94CD-1F0054E78F86-1890-0000036F829EF20B","blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"0","key":"to x","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"C3CA6D32-FF90-4F8F-B823-20C118E4C41A-1890-0000036F926266F4","description":"Width"},"type":42},{"defaultValue":"200","value":"200","key":"y","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"94203982-DAD8-4765-9DDA-36B8850694CF-1890-0000036F829F0575","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"3","value":"2","key":"×","type":42}]},"type":42}]},{"type":26,"block_class":"control","description":"Draw a Trail","controlScript":{"abilityID":"C2C0649F-DEC1-4D0A-8E88-23B8123C0956-1890-0000036F829F85A1"},"parameters":[{"defaultValue":"","value":"","key":"color","datum":{"block_class":"operator","type":${options.bgHsv?5002:5001},"description":"${options.bgHsv?"HSB":"RGB"}","params":[{"defaultValue":"","value":"","key":"${options.bgHsv?"H":"R"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${R1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"C0478744-C7EA-4E0B-AFEF-50793C0AB9A1-1890-0000036F829F2E7B","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitIDKey":"D601C255-108D-4969-B43A-2E7F4F453955-1890-0000036F829F37E6","HSTraitTypeKey":3001,"description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${R2-R1}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"${options.bgHsv?"S":"G"}","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${G1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"BD75D6AB-4B08-4C88-BB70-79F072F89FBC-1890-0000036F829F52C8","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitIDKey":"CBCDEA5E-FC0B-4F3F-8D6F-411DCDD80FD6-1890-0000036F829F5C15","HSTraitTypeKey":3001,"description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${G2-G1}","key":"×","type":42}]},"type":42}]},"type":42},{"defaultValue":"","value":"","key":"B","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"","value":"${B1}","key":"","type":42},{"defaultValue":"","value":"","key":"+","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"","value":"","key":"","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"","value":"","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"9BC95402-9B0B-45CC-ADDB-565E98A1E84E-1890-0000036F829F77BF","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"","value":"","key":"÷","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"9D68CA22-C240-478B-AF18-E6D84442FC9E-1890-0000036F829F8102","description":"Height"},"type":42}]},"type":42},{"defaultValue":"","value":"${B2-B1}","key":"×","type":42}]},"type":42}]},"type":42}]},"type":44},{"defaultValue":"10","value":"4","key":"width","type":43}]},{"block_class":"method","description":"Destroy","type":55}],"createdAt":0},{"createdAt":0,"blocks":[{"block_class":"method","type":41,"description":"Set Position","parameters":[{"defaultValue":"200","value":"20","key":"to x","datum":{"block_class":"operator","type":4000,"description":"+","params":[{"defaultValue":"2","value":"20","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"block_class":"operator","type":4002,"description":"×","params":[{"defaultValue":"2","value":"2","key":"","datum":{"HSTraitTypeKey":2006,"HSTraitIDKey":"F3AE3298-4F79-416E-88FE-8DC649571F72-1890-0000036F829FA26E","HSTraitObjectParameterTypeKey":8004,"description":"Clone Index"},"type":42},{"defaultValue":"3","value":"-2","key":"×","type":42}]},"type":42},{"defaultValue":"3","value":"3","key":"×","datum":{"block_class":"operator","type":4003,"description":"÷","params":[{"defaultValue":"5","value":"5","key":"","datum":{"HSTraitTypeKey":3000,"HSTraitIDKey":"23B099BF-07C1-4B8C-80EC-C34B9B04E9A6-1890-0000036F829FB1E8","description":"Width"},"type":42},{"defaultValue":"2","value":"2","key":"÷","datum":{"HSTraitTypeKey":3001,"HSTraitIDKey":"9E73FB6B-AA96-4A9A-9945-48CDF839B7DD-1890-0000036F829FBA67","description":"Height"},"type":42}]},"type":42}]},"type":42},{"defaultValue":"3","value":"3","key":"+","datum":{"HSTraitIDKey":"9EAAE7A4-ECA4-429B-A8EC-9EE040E4BF96-1890-0000036F9C8980DD","HSTraitTypeKey":3000,"description":"Width"},"type":42}]},"type":42},{"defaultValue":"200","value":"0","key":"y","type":42}]}],"abilityID":"C2C0649F-DEC1-4D0A-8E88-23B8123C0956-1890-0000036F829F85A1"}],"eventParameters":[],"objects":[],"rules":[{"ruleBlockType":6000,"id":"E4A5C4CC-AA3E-4F1B-95D7-AAB912C1621C-1890-0000036F7B597679","objectID":"","name":"","abilityID":"01DA5985-7846-4345-A04F-D76C54A8FB32-1890-0000036F7B81FA15","parameters":[{"defaultValue":"","datum":{"type":7000,"block_class":"operator","description":"Game Starts"},"value":"","key":"","type":52}]},{"ruleBlockType":6000,"id":"541FF5C6-A9EA-4294-BE89-365B736F37D8-1890-0000036F826FAA0D","abilityID":"FED09EC8-96B9-4EA7-94CD-1F0054E78F86-1890-0000036F829EF20B","objectID":"","name":"","parameters":[{"defaultValue":"","value":"","key":"","datum":{"type":7015,"block_class":"operator","description":"Object is Cloned"},"type":52}]}],"customRules":[{"name":"${options.name}","rules":["E4A5C4CC-AA3E-4F1B-95D7-AAB912C1621C-1890-0000036F7B597679","541FF5C6-A9EA-4294-BE89-365B736F37D8-1890-0000036F826FAA0D"],"id":"7C60D40D-6594-4C2C-8A5E-8F72B2C597AB-1890-0000036F8B5044A1"}],"variables":[],"scenes":[],"customObjects":[],"remote_asset_urls":[],"playerVersion":"1.5.0"}`)];
				break;
		}
	}
	console.log(presetArray);
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
					project[key] = (project[key]||[]).concat(preset[key]).removeDuplicateHsIds(key === "variables" && options.newVarNames);
				}
			});
			presetsMerged ++;
		}
	})
	postMessage({project:project,mergeCount:presetsMerged});
}

