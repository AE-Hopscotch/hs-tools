var hexaUID = {
	uuidAddDashes: function (a) {
		var groupings = a.match(/[0-9A-F]{4}/gi);
		([2,4,6,8]).forEach(function(i){
			groupings.splice(i,0,'-');
		});
		return groupings.join("");
	},
	uuidToAid: function (a) {
		var pairs = [];
		a.replace('-','').replace('-','').replace('-','').replace('-','').match(/[0-9A-F]{1,12}|\-/gi).forEach((p)=>{
			var seq = parseInt('0x1'+p).toString(36);
			pairs.push(seq);
		});
		return pairs.join("_").replace(/_1_/g,'!');
	},
	uuidToAid2: function (a) {
		var pairs = [];
		a.split('-').forEach((s)=>{
			s.match(/[0-9A-F]{1,12}/gi).forEach((p)=>{
				var seq = parseInt('0x1'+p).toString(36);
				pairs.push(seq);
			});
		});
		console.log(a, pairs.join("_"));
		return pairs.join("_");
	},
	aidToUuid: function (a) {
		var cumulative = "";
		a.split("_").forEach((p)=>{
			//console.log(parseInt(p,36).toString(16));
			cumulative += String(parseInt(p,36).toString(16)).replace(/^1/,'');
		});
		return cumulative;
	}
}

