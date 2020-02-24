//Change URL Without Page Reload
/*window.onhashchange = window.onload = function(evt) {
	//On New Location
	//document.getElementById('location').innerHTML = window.location.href;
};

var anchors = document.getElementsByClassName('noRedirect');
var historyState = {};
var base = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);

for (var i = 0; i < anchors.length; i++) {
	//Only apply this to same domain links
	if (anchors[i].href.substring(0, location.origin.length) !== location.origin) {
		continue;
	}
	
	anchors[i].addEventListener('click', function(evt) {
		evt.preventDefault();
		
		//Change to new page with hash
		var newPage = window.location.href + '#' + evt.target.href.replace(base, '');
		window.location.href = newPage;
		
		//Remove hash from URL and replace with desired URL
		if (history && history.pushState) {
			//Only do this if history.pushState is supported by the browser
			history.pushState(historyState, evt.target.innerHTML, evt.target.href)
		}
	});
}

/* The Code Above Stops Reloads for Selected Elements*/
function setLocation(href){
	//If Else Statement
	history.pushState ? history.pushState(null, null, href) : location.hash = href;
}

function replaceLocation(href) {
	history.replaceState ? history.replaceState(null, null, href) : location.hash = href;
}

//Access Cookies
function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for( var i = 0; i < ca.length; i++ ){
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

//Go to Homepage
function home(){
	setCookie('lastPage','',30);
	window.location.href = '../';
};

//Add site visit via counter
function addSiteVisit(branch) {
	branch = branch||'';
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log('Visit Added');
		}
	};
	xhttp.open("GET", 'https://counter.websiteout.net/compte.php?S='+encodeURI('https://awesome-e.github.io/hs-tools/visits/'+branch)+'&C=6&D=0&N=0&M=0', true);
	xhttp.send();
}

if (!/https:\/\/awesome-e\.github\.io\/hs-tools\/?($|play-project\/pi-run)/.test(window.location.href)) setCookie('lastPage', window.location.href, 30);
if (getCookie('visitedWithinHour') != 'true' && /https:\/\/awesome-e.github.io\/hs-tools\//gi.test(location.href)) {
	if (window.location.href != "https://awesome-e.github.io/hs-tools/") addSiteVisit(location.href.replace(/.*?hs-tools\//,''));
	addSiteVisit();
}
setCookie('visitedWithinHour', 'true', 0.04);

try {
	//Define Scroll End Function
	$.fn.scrollEnd = function(callback, timeout) {          
	  $(this).scroll(function(){
		var $this = $(this);
		if ($this.data('scrollTimeout')) {
		  clearTimeout($this.data('scrollTimeout'));
		}
		$this.data('scrollTimeout', setTimeout(callback,timeout));
	  });
	};

	//If there is an element with class "save-scroll", then set the hash to the nearest element
	$(window).scrollEnd(function(){
		var headings = document.querySelector(".save-scroll")
		if (headings != undefined) {
			headings = headings.querySelectorAll('h2[id], h3[id]');
			var headingPositions = {};
			var offset = 302 - document.getElementById(headings[0].id).getBoundingClientRect().top;
			for (var i = 0; i < headings.length; i++) {
				headingPositions[Math.floor((document.getElementById(headings[i].id).getBoundingClientRect().top + offset)/2)*2] = headings[i].id;
			}
			
			//When the Scroll Stops, set hash to the closest heading not passed yet
			function closest(arr,val){
				return Math.max.apply(null, arr.filter(function(v){return v <= val}))
			}
			var hash = headingPositions[String(closest(Object.keys(headingPositions), Math.abs(document.body.getBoundingClientRect().top)))]||"";
			//(String(window.location.href.match(RegExp("#" + hash))) != "null")
			if (window.location.href.replace(/.*?#/,"") != hash){
				//Set Hash if Different
				replaceLocation('#' + hash);
				setCookie('lastPage', window.location.href, 30);
			}
			//console.log(window.location.href);
		}
		
	}, 100);
} catch (ReferenceError) {
	console.warn('jQuery is not installed - scroll functions will not work');
}

//Remove Elements
Element.prototype.remove = function() {
	this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for(var i = this.length - 1; i >= 0; i--) {
		if(this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
}

//Space or Enter -> Click Child Element
document.querySelectorAll('*[AE-STCE]').forEach(function(elm){
	elm.addEventListener('keydown', function(){if(event.keyCode == 13 || event.keyCode == 32) this.querySelector('*').click();});
});

//Space or Enter -> Click Current Element
document.querySelectorAll('*[AE-STSE]').forEach(function(elm){
	elm.addEventListener('keydown', function(){if(event.keyCode == 13 || event.keyCode == 32) this.click();});
});

//For Each but with output
Array.prototype.repeatEach = NodeList.prototype.repeatEach = HTMLCollection.prototype.repeatEach = function(fn) {
	var outputs = [];
	if (!(fn && typeof fn == 'function')) throw 'TypeError: ' + fn + ' is not a function';
	for(var i = 0; i < this.length; i++) {
		outputs.push( fn(this[i]) );
	}
	return outputs;
}

//Remove Duplicates
function removeDuplicates(arr) {
	arr.splice(0, arr.length, ...(new Set(arr)));
	return arr;
};

//Better Base 64
var Base64 = {
    _keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode: function(e) {
		var t = "";
		var n, r, i, s, o, u, a;
		var f = 0;
		e = Base64._utf8_encode(e);
		while (f < e.length) {
			n = e.charCodeAt(f++);
			r = e.charCodeAt(f++);
			i = e.charCodeAt(f++);
			s = n >> 2;
			o = (n & 3) << 4 | r >> 4;
			u = (r & 15) << 2 | i >> 6;
			a = i & 63;
			if (isNaN(r)) {
				u = a = 64;
			} else if (isNaN(i)) {
				a = 64;
			}
			t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
		}
		return t;
	},
    decode: function(e) {
		var t = "";
		var n, r, i;
		var s, o, u, a;
		var f = 0;
		e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		while (f < e.length) {
			s = this._keyStr.indexOf(e.charAt(f++));
			o = this._keyStr.indexOf(e.charAt(f++));
			u = this._keyStr.indexOf(e.charAt(f++));
			a = this._keyStr.indexOf(e.charAt(f++));
			n = s << 2 | o >> 4;
			r = (o & 15) << 4 | u >> 2;
			i = (u & 3) << 6 | a;
			t = t + String.fromCharCode(n);
			if (u != 64) {
				t = t + String.fromCharCode(r);
			}
			if (a != 64) {
				t = t + String.fromCharCode(i);
			}
		}
		t = Base64._utf8_decode(t);
		return t;
	},
    _utf8_encode: function(e) {
		e = e.replace(/\r\n/g, "\n");
		var t = "";
		for (var n = 0; n < e.length; n++) {
			var r = e.charCodeAt(n);
			if (r < 128) {
				t += String.fromCharCode(r);
			} else if (r > 127 && r < 2048) {
				t += String.fromCharCode(r >> 6 | 192);
				t += String.fromCharCode(r & 63 | 128);
			} else {
				t += String.fromCharCode(r >> 12 | 224);
				t += String.fromCharCode(r >> 6 & 63 | 128);
				t += String.fromCharCode(r & 63 | 128);
			}
		}
		return t;
	},
    _utf8_decode: function(e) {
		var t = "";
		var n = 0;
		var r = c1 = c2 = 0;
		while (n < e.length) {
			r = e.charCodeAt(n);
			if (r < 128) {
				t += String.fromCharCode(r);
				n++;
			} else if (r > 191 && r < 224) {
				c2 = e.charCodeAt(n + 1);
				t += String.fromCharCode((r & 31) << 6 | c2 & 63);
				n += 2;
			} else {
				c2 = e.charCodeAt(n + 1);
				c3 = e.charCodeAt(n + 2);
				t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
				n += 3;
			}
		}
		return t;
	}
}
