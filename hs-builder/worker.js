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
