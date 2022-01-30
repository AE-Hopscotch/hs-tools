function initPage(runApp) {	
	setInnerHTML(document.querySelector('head'),document.querySelector('head').innerHTML + `<meta content="width=device-width,initial-scale=1,user-scalable=no,maximum-scale=1" name="viewport" />
		<link rel="stylesheet" media="screen" href="https://ae-hopscotch.github.io/play-project/application.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<style>body{background-color:#FFFFFF;color:#4D4D4D;font-family:'Avenir W02', 'Montserrat', "HelveticaNeue", sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-size:62.5%;line-height:1;}#AE_MOD--play-project-div.embedded #player{position:relative;top:0;left:0;right:0;bottom:0;width:100%;height:100%;}#AE_MOD--play-project-div.embedded .player-icon-toolbar{position: absolute}#AE_MOD--play-project-div.embedded #project-image{width:100%}#AE_MOD--play-project-div.embedded #fullscreen-button{display:inline-block}#AE_MOD--play-project-div.embedded #hopscotch-link{display:none}h2{font-size:2em;font-weight:600}hopscotch-player#player:before{padding:0;}#player{overflow: hidden;}</style>`);

	setInnerHTML(document.getElementById('AE_MOD--play-project-div'),`<div class="wrapper"><div class="content" id="body_content"><script id="svgInsert" src="https://ae-hopscotch.github.io/hs-tools/play-project/html_svg.js"></script><script>var projectImport = projectImport || {};var AE_MOD = {"projectData": {},"uuid": "","playerVersion": ""};var BASE_IMAGE_URL = 'https://hopscotch-images.s3.amazonaws.com/production/images/project-images/';var HS_INDEX_PATH = "https://d3nbkco6xo1vz0.cloudfront.net/production/";var HS_WEBPLAYER_VERSION = AE_MOD.playerVersion;function init() {document.getElementById('hopscotch-link').href = "https://c.gethopscotch.com/p/" + AE_MOD.uuid;BASE_IMAGE_URL = "https://hopscotch-images.s3.amazonaws.com/production/images/project-images/";HS_INDEX_PATH = "https://d3nbkco6xo1vz0.cloudfront.net/production/";HS_WEBPLAYER_VERSION = AE_MOD.playerVersion;
	document.getElementById("appJs").src = "https://ae-hopscotch.github.io/hs-tools/play-project/application.js"; var pTitle = AE_MOD.projectData.title||'Untitled';var pAuthor = (AE_MOD.projectData.user||{'nickname': AE_MOD.projectData.author}).nickname;var pTitleFull = pTitle + ((pAuthor == undefined) ? '' : ' by ' + pAuthor); if (pTitleFull == "Untitled") pTitleFull = "Awesome_E's Project Player";document.title = pTitleFull;}function doCORSRequest(options, printResult) {var x = new XMLHttpRequest();x.open(options.method, 'https://cors-anywhere.herokuapp.com/' + options.url);x.onload = x.onerror = function() { printResult((x.responseText || ''));};if (/^POST/i.test(options.method)) {x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');}x.send(options.data);}function request(input_url) {doCORSRequest({method: 'GET',url: input_url,}, function printResult(result) {try {var p = JSON.parse(result);AE_MOD.projectData = p;AE_MOD.uuid = p.uuid;AE_MOD.playerVersion = p.playerVersion||"1.0.0";AE_MOD.isCustom = false;init();} catch (SyntaxError) {document.querySelector('#AE_MOD--play-project-div').innerHTML = "<h2 style='display: block; width: 100%; text-align: center; position: fixed; top: calc(50% - 12px); font-size: 24px;'>Unable to load the project...</h2>";console.log('Unable to load');console.error(SyntaxError);return;}});}var url = new URL(window.location.href);var customUUID = url.searchParams.get("id");
	function loadCode() { try {var p = projectImport;AE_MOD.projectData = p;AE_MOD.uuid = p.uuid;AE_MOD.playerVersion = p.playerVersion||"1.0.0";AE_MOD.isCustom = true;init();} catch (SyntaxError) {document.querySelector('#AE_MOD--play-project-div').innerHTML = "<h2 style='display: block; width: 100%; text-align: center; position: fixed; top: calc(50% - 12px); font-size: 24px;'>Unable to load the project...</h2>";console.error(SyntaxError);}}loadCode();</script>
	<hopscotch-player id="player" width="Infinity"><div class="player-icon-toolbar"><img alt="mute" id="mute-button" class="player-icon" src="https://c.gethopscotch.com/assets/webplayer/speaker-9713bf0a2c5e18bbcf82ff55b8b02a23c2feeb26fe4e18c2c2b96986856e3a42.svg"> <img alt="replay" id="restart-button" class="player-icon" src="https://c.gethopscotch.com/assets/webplayer/refresh_button-5a6475850ec2e0b6a9dd0df4a26cfcd2ddc6cf79c858b931df8534d4be6bb67e.svg"> <img alt="fullscreen" id="fullscreen-button" class="player-icon" src="https://c.gethopscotch.com/assets/webplayer/fullscreen_button-e27fd53c82e53e33b0c77ccad29570543d1060028d4b1ab26521cf9a09cedd4b.svg"> <a id="hopscotch-link" target="_top"><img alt="hopscotch" id="hopscotch-button" class="player-icon" src="https://c.gethopscotch.com/assets/webplayer/hopscotch_button-a64dbfaa6e5b9f817bb28c67cf5dcf6741aac3034464d3305065f1edb6a97617.svg"></a></div><div hidden id="project_error"><div class="project_error_message"><h2>Sorry, try again later.</h2><script>setTimeout(function() {if (!window.main) {project_loading.style.display = 'none';project_error.style.display = 'block';}}, 30000);</script></div></div><div class="row content" id="play_container_row"><img id="project_loading" src="../images/loading_apple.gif"><div id="play_container" style="display:none"><div id="play_container_bg"></div><img id="project-image"><a id="play" class="pos-abs" href="#"><div class="play-button teal-button"><span class="triangle"></span></div></a></div></div></hopscotch-player></div></div><script id="appJs"></script><script src="asset_urls.js"></script>`);
}

function setInnerHTML (elm, html) {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll("script")).forEach( oldScript => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes)
      .forEach( attr => newScript.setAttribute(attr.name, attr.value) );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

document.getElementById('AE_MOD--play-project-div').setAttribute("class", "project webplayer embedded");

document.querySelectorAll('script').forEach(function(s){
	if(s.src.match(/play-project\/players\//)) {
		document.querySelector('#appJs').src = '';
		s.remove();
		//document.querySelector('#appJs').src = "https://ae-hopscotch.github.io/hs-tools/play-project/application.js";
	}
});

initPage(true);
