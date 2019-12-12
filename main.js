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

if (window.location.href != "https://awesome-e.github.io/hs-tools/") setCookie('lastPage', window.location.href, 30);

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
		headings = headings.getElementsByTagName('h2');
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
			setLocation('#' + hash);
			setCookie('lastPage', window.location.href, 30);
		}
		//console.log(window.location.href);
	}
	
}, 100);

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
