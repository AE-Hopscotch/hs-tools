function addText(str, instrument) {
    document.querySelectorAll('.textbox-float.selected textarea').forEach(elm=>{
        if (instrument && instrument !== ((elm.value.match(/(?:[^\/]|\/\*.*?\*\/)*(@[vogpcbh])/)||[])[1] || "")) elm.value += instrument;
        elm.value += str;
    });
}
//Hide keyboard based on instrument selection
document.getElementById('instrument-selection').querySelectorAll('input').forEach(e=>{
    e.addEventListener('input', function(e){
        document.querySelectorAll('div.piano:not([data-start="48"]):not([data-start="60"])').forEach(div=>{
            div.hidden = (e.target.value === "-");
            if (div.hidden) div.classList.remove('selected');
        });
    });
});
//Octave Selection
document.querySelectorAll('.piano').forEach(elm=>{
    elm.addEventListener('click',function(e){if(e.target.classList.contains('piano')){
        document.querySelectorAll('.piano').forEach(elm=>elm.classList.remove('selected'));
        e.target.classList.add('selected');
    }});
});
document.body.addEventListener('keydown', function(e){
    if (document.activeElement.matches('input:not([type=radio]):not([type=checkbox]),textarea,[contenteditable]') || e.ctrlKey || e.altKey || e.metaKey) return;
    let eventKey = e.key.toLowerCase().replace(/[!@#\$%\^&\*\(\)_\+]/g,m0=>{return"1234567890-="["!@#$%^&*()_+".indexOf(m0)]});
    let currentPianoElm = document.querySelector('.piano.selected'),
        noteHotkey = 'awsedftgyhujkp[]\\1234567890-='.indexOf(eventKey.toLowerCase());
    switch (eventKey) {
        case "<":
            if (!currentPianoElm) return;
            if (currentPianoElm.previousElementSibling && !currentPianoElm.previousElementSibling.hidden)
            currentPianoElm.previousElementSibling.classList.add('selected'), currentPianoElm.classList.remove('selected');
            break;
        case ">":
            if (!currentPianoElm) return;
            if (currentPianoElm.nextElementSibling && !currentPianoElm.nextElementSibling.hidden)
                currentPianoElm.nextElementSibling.classList.add('selected'), currentPianoElm.classList.remove('selected');
            break;
    }
    if (noteHotkey > 12) {
        document.querySelector(`button[data-label="${eventKey=='\\'?'\\\\':eventKey.toUpperCase()}"]`).classList.add('active');
    } else if (noteHotkey > -1) {
        if (!currentPianoElm) return;
        document.querySelector(`.piano.selected > div:nth-child(${noteHotkey+1})`).classList.add('active');
        e.preventDefault();
    }
});
document.body.addEventListener('keyup', function(e){
    if (document.activeElement.matches('input:not([type=radio]):not([type=checkbox]),textarea,[contenteditable]') || e.ctrlKey || e.altKey || e.metaKey) return;
    let eventKey = e.key.toLowerCase().replace(/[!@#\$%\^&\*\(\)_\+]/g,m0=>{return"1234567890-="["!@#$%^&*()_+".indexOf(m0)]});
    let noteHotkey = 'awsedftgyhujkp[]\\1234567890-='.indexOf(eventKey.toLowerCase()),
        lastRhythmBtn = document.querySelector('.wait-btns button.selected'), targetElm;
    if (noteHotkey === -1) noteHotkey = 'awsedftgyhujkp[]\\!@#$%^&*()_+'.indexOf(eventKey.toLowerCase());
    if (noteHotkey === -1) return;
    if (noteHotkey > 12) {
        targetElm = document.querySelector(`button[data-label="${eventKey=='\\'?'\\\\':eventKey.toUpperCase()}"]`);
    } else {
        targetElm = document.querySelector(`.piano.selected > div:nth-child(${noteHotkey+1})`);
    }
    if (!targetElm) return;
    if (targetElm.classList.contains('active')) {
        targetElm.classList.remove('active');
        let ev = new MouseEvent('click',{shiftKey:e.shiftKey!==e.getModifierState("CapsLock")});
        ev.initEvent('click');
        targetElm.dispatchEvent(ev);
    }
    if (noteHotkey < 17 && lastRhythmBtn && (e.shiftKey !== e.getModifierState("CapsLock"))) lastRhythmBtn.click();
});

//Add Notes from buttons
document.getElementById("piano-container").querySelectorAll("div.piano > div").forEach(e => {
    e.addEventListener("click", function(e) {
        if (document.querySelector('input[name="instrument"]:checked').value==="-") {
            if (e.target.innerText === "-") return;
            addText(e.target.innerText.replace(/^([a-g])/, "=$1").replace(/([a-g])$/, "$1_").replace(/^low-/, "-").replace(/^high/, "+").replace(/sharp$/, "#").replace(/flat$/, "b"));
        } else {
            addText('>' + (Number(e.target.parentNode.getAttribute('data-start')) + Array.from(e.target.parentNode.querySelectorAll('div:not(.piano)')).indexOf(e.target)),
            document.getElementById('instrument-selection').querySelector('input[type=radio]:checked').value);
        }
    });
});
document.getElementById("piano-container").querySelectorAll("div.button-container button").forEach(e => {
    e.addEventListener("click", function() {
        addText(({gong:'=%_',clap:'=^_',snare:'=&_',bass:'=*_'})[e.innerText]);
    });
});
//Add Wait Times
document.getElementById("insertion-panel").querySelectorAll("button").forEach(e => {
    e.addEventListener("click", function(e) {
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        e.target.parentNode.querySelectorAll('button').forEach(btn=>btn.classList.remove('selected'));
        e.target.classList.add('selected');
        if (e.shiftKey !== e.getModifierState("CapsLock")) return; //Shift = select only
        addText(Math.round(document.getElementById("wait-time").value * Number(e.target.getAttribute("data-multiplier"))));
    });
});

//Add Comments
const commentCounters = {};
document.body.addEventListener("keydown", function(e){
    if (e.keyCode !== 13 || !(navigator.userAgent.includes('Macintosh') ? e.metaKey : e.ctrlKey)) return;
    let textarea = document.getElementById('music-inputs').querySelector('textarea');
    commentCounters[textarea.value] ? commentCounters[textarea.value]++ : commentCounters[textarea.value] = 1;
    addText('/*'+textarea.value.replace(/\*\//g,'*\\/').replace(/\{#\}/g,commentCounters[textarea.value])+'*/');
})

//Mapping
function createTimeMap(str) {
	let index = 0, cumulativeTime = 0, noteMap = {}, safetyExecCap = 0, lastInstrument = "@p";
	while (index < str.length) {
		safetyExecCap++;
		var char = str[index];
		if (char.match(/[-=+>]/)) {
			//Add Note under current time
			noteMap[cumulativeTime] = (noteMap[cumulativeTime]||lastInstrument) + str.substr(index,3);
			index += 3;
		} else if (char.match(/\d/)) {
			let waitString = str.match(new RegExp(`(?:.|\\n){${index}}(\\d+)`))[1];
			cumulativeTime += Number(waitString);
			index += waitString.length;
		} else if (char.match(/[@]/)) {
            lastInstrument = str.substr(index,2);
			noteMap[cumulativeTime] = (noteMap[cumulativeTime]||"") + lastInstrument;
			index += 2;
		} else if (str.substr(index,2).match(/\/\*/)) {
			let commentMatch = str.match(new RegExp(`(?:.|\\n){${index}}((?:.|\\n)*?(?:\\*\\/|$))`));
			index += commentMatch[1].length;
		} else throw new SyntaxError('Unexpected ' + str[index] + ' at char ' + index);
		if (safetyExecCap>str.length) {throw new RangeError('Loop Iterations have exceeded the string length');}
	}
	return noteMap;
}
function newMergedTrack (combinedMap, event, name) {
    let cumulativeString = "", lastTime = 0;
    Object.keys(combinedMap).sort((a,b)=>{return parseInt(a)-parseInt(b)}).forEach(time=>{
        let timeDiff = parseInt(time) - lastTime;
        if (timeDiff !== 0) cumulativeString += String(timeDiff);
        cumulativeString += combinedMap[time];
        lastTime = parseInt(time);
    })
    windowNew(event, cumulativeString, name);
}
function windowMergeTracks(e) {
    let combinedMap = {}, errors = [], textareaList = document.querySelectorAll(`.textbox-float.selected[data-float-id] textarea`);
    if (textareaList.length === 0) return alert('No tracks have been selected');
    console.groupCollapsed('Track Merge Logs');
    textareaList.forEach(elm=>{
        let timeMap;
        try {timeMap = createTimeMap(elm.value);}catch(e){errors.push({name:elm.parentNode.querySelector('.header span').innerText,error:e})}
        if (!timeMap) return;
        Object.keys(timeMap).forEach(key=>{
            combinedMap[key] = (combinedMap[key]||"") + timeMap[key];
        });
    });
    if (errors.length > 0) alert('The following tracks had an error and could not be merged: ' + errors.map(e=>e.name).join(', '));
    console.log(combinedMap, errors);
    console.groupEnd();
    newMergedTrack(combinedMap, e);
}

//Playing the Music
function setPlayerTrack(id) {
    let musicString = document.querySelector(`.textbox-float[data-float-id="${id}"] textarea`).value;
    localStorage.setItem('pData__AE_MUSIC_READER', musicString);
    let frameParent = document.getElementById('iframe-float');
    setTimeout(()=>{frameParent.click()},10);
    frameParent.style.animationName = "none";
    frameParent.style.overflow = "visible";
    setTimeout(function(){frameParent.style.animationName = "border-glow";},0);
}
localStorage.removeItem('pData__AE_MUSIC_READER');
window.document.addEventListener('player-loaded', function(e) {
    setTimeout(()=>{document.querySelector('.textbox-float iframe').hidden = false;},800);
});
/* window.addEventListener('storage',function(e){
    if(e.key === "projectLoadState" && e.newValue === "loaded") setTimeout(()=>{document.querySelector('.textbox-float iframe').hidden = false;},800);
}); */
document.getElementById('tempo-input').addEventListener('keydown', function(e){
    //if (e.ctrlKey||e.metaKey||e.shiftKey)
    //if (!e.key.match(/^([0123456789]|.{2,})$/i)) e.preventDefault();
    if (e.keyCode === 13) e.target.blur();
});
document.getElementById('tempo-input').addEventListener('input', function(e){
    function moveCursorToEnd(){
        const range = document.createRange(), sel = window.getSelection();
        range.setStart(e.target,e.target.innerText?1:0);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }
    if (e.target.innerHTML.match(/[^0-9]/)) e.target.innerText = e.target.innerText.replace(/[^0-9]/g,''), moveCursorToEnd();
    if (Number(e.target.innerText) > 600) e.target.innerText = '600', moveCursorToEnd();
    else if (Number(e.target.innerText) < 0) e.target.innerText = '0', moveCursorToEnd();
    if (Number(e.target.innerText) < 20) return;
    localStorage.setItem('pData__AE_MUSIC_READER', e.target.innerText);
});
document.getElementById('tempo-input').addEventListener('blur', function(e) {
    if (Number(e.target.innerText) < 20) e.target.innerText = '20';
});

//Draggable Windows
interact('.textbox-float').draggable({
    //allowFrom: 'div.bl-container .drag-handle',
    allowFrom: 'span.header',
    ignoreFrom: '[contenteditable], i.fa',
    //Enable inertial throwing
    inertia: true,
    //Keep the element within the area of it's parent
    modifiers: [
        interact.modifiers.restrictRect({
        restriction: 'body',
        // {x: 0, y: 0, width: 10000, height: 4000},
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
}).resizable({
    //Resize from all edges and corners
    edges: { 
        right: ".resizer",
        bottom: ".resizer"
    },
    listeners: {
        move (event) {
            var target = event.target;
            var x = (parseFloat(target.getAttribute('data-x')) || 0);
            var y = (parseFloat(target.getAttribute('data-y')) || 0);
            //Update the element's style
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';
            //Translate when resizing from top or left edges
            x += event.deltaRect.left, y += event.deltaRect.top;
            target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        }
    },
    modifiers: [
        //Keep the edges inside the parent
        interact.modifiers.restrictEdges({
            outer: 'body'
        }),
        //Minimum size
        interact.modifiers.restrictSize({
            min: { width: 190, height: 100 }
        })
    ],
    inertia: true
});
let lastWindowIndex = 0, lastMergeIndex = 0;
function windowNew(e, value, name) {
    if (!name) {if (value) lastMergeIndex++; else lastWindowIndex++;}
    let windowName = name || (value?'Merge '+lastMergeIndex:'New '+lastWindowIndex);
    const floatId = Math.round(Math.random()*36**8).toString(36);
    let div = document.createElement('div'),
        x = (e.clientX||e.pageX)-125,
        y = (e.clientY||e.pageY)-14;
    div.classList.add('textbox-float','new-float');
    div.setAttribute('style',`transform:translate(${x}px,${y}px)`);
    div.setAttribute('data-x',x), div.setAttribute('data-y',y);
    div.setAttribute('data-float-id',floatId);
    div.innerHTML = `<div class="resizer"></div>
    <span class="header"><input type="checkbox" data-float-id="${floatId}" oninput="windowSelectOne('${floatId}',this.checked)"/>
    <span contenteditable onkeydown="if(event.keyCode===13)this.blur();" oninput="windowUpdateTitle('${floatId}',this)" onblur="window.getSelection().removeAllRanges()">${windowName}</span>
    <i class="fa fa-eye-slash" tabindex="0" onclick="this.parentNode.parentNode.hidden=true"></i>
    <i class="fa fa-play" tabindex="0" onclick="setPlayerTrack('${floatId}')"></i></span>
    <textarea autocomplete="off" spellcheck="false" autocapitalize="off" autocorrect="off">${value||""}</textarea>`;
    document.body.appendChild(div);
    let tr = document.createElement('tr');
    tr.setAttribute('data-float-id', floatId)
    tr.innerHTML = `<td><input type="checkbox" oninput="windowSelectOne('${floatId}',this.checked)"></td>
    <td>&nbsp;<span onclick="windowDelayedClick('${floatId}')">${windowName}</span></td>
    <td><i class="fa fa-pencil" onclick="windowFocusTitle('${floatId}')"></i>
    <i class="fa fa-close" onclick="windowClose('${floatId}')"></i></td>`;
    document.querySelector('.textbox-float table tbody').appendChild(tr);
    windowSelectOne(floatId, false);
    windowInitZIndex()
    //setTimeout(()=>{div.click();},10);
    if (!name) windowFocusTitle(floatId);
}
function windowClose(id) {
    if (document.querySelector(`.textbox-float[data-float-id="${id}"] textarea`).value && !confirm('Are you sure you want to delete this track?')) return;
    windowSelectOne(id, false);
    document.querySelector(`.textbox-float table tr[data-float-id="${id}"]`).remove();
    document.querySelector(`.textbox-float[data-float-id="${id}"]`).remove();
    windowSelectOne(-1, false);
}
function windowCloseAll() {
    if (!confirm('Are you sure you want to delete all selected tracks?')) return;
    document.querySelectorAll(`.textbox-float.selected[data-float-id]`).forEach(elm=>{
        windowSelectOne(elm.getAttribute('data-float-id'), false);
        document.querySelector(`.textbox-float table tr[data-float-id="${elm.getAttribute('data-float-id')}"]`).remove();
        elm.remove();
        windowSelectOne(-1, false);
    });
}
function windowSelectAll(bool) {
    document.querySelectorAll('.textbox-float table input').forEach(input=>input.checked=bool);
    document.querySelectorAll('.textbox-float .header input').forEach(input=>input.checked=bool);
    document.querySelectorAll('.textbox-float[data-float-id]').forEach(float=>(bool?float.classList.add('selected'):float.classList.remove('selected')));
}
function windowSelectOne(id, bool) {
    if (document.querySelector(`[data-float-id="${id}"]`)) {
        document.querySelector(`.textbox-float table tr[data-float-id="${id}"] input`).checked=bool;
        document.querySelector(`input[data-float-id="${id}"]`).checked=bool;
        document.querySelector(`.textbox-float[data-float-id="${id}"]`).classList[bool?'add':'remove']('selected');
    }
    let checkedRatio = document.querySelectorAll('.textbox-float table tbody input:checked').length / document.querySelectorAll('.textbox-float table tbody input').length,
        totalInput = document.querySelector('.textbox-float table thead input');
    switch (checkedRatio || 0){
        case 0: totalInput.checked = totalInput.indeterminate = false; break;
        case 1: totalInput.checked = !(totalInput.indeterminate = false); break;
        default: totalInput.indeterminate = !(totalInput.checked = false); break;
    }
}
function windowUpdateTitle(id, elm) {
    document.querySelector(`.textbox-float table tr[data-float-id="${id}"] td:nth-child(2) span`).innerText = elm.innerText;
}
function windowDelayedClick (id, playAnimation) {
    if (playAnimation == undefined) playAnimation = true;
    const elm = document.querySelector(`.textbox-float[data-float-id="${id}"]`);
    setTimeout(()=>{elm.click()},10);
    elm.hidden = false;
    if (!playAnimation) return;
    elm.style.animationName = "none";
        elm.style.overflow = "visible";
    setTimeout(function(){elm.style.animationName = "border-glow";},0);
}
function windowFocusTitle (id) {
    windowDelayedClick(id, false);
    const titleTextBox = document.querySelector(`.textbox-float[data-float-id="${id}"] span[contenteditable]`)
    titleTextBox.focus();
    const range = document.createRange(), sel = window.getSelection();
    range.selectNodeContents(titleTextBox);
    sel.removeAllRanges();
    sel.addRange(range);
}
document.body.addEventListener('keydown', function(e){
    if (e.keyCode === 13 && e.target.classList.contains('fa-close')) e.target.click();
    else if (e.keyCode === 27) document.activeElement.blur();
});
function reorganizefloatingZ (event) {
    var draggables = document.querySelectorAll(".textbox-float");
    var target = event.target, targetZ;
    while (!target.classList || !target.classList.contains("textbox-float")) {
        if (target.parentNode) target = target.parentNode; else break;
    }
    //Set Z Index of the elements
    targetZ = Number(target.style.zIndex);
    for (i = 0; i < draggables.length; i++) {
        if (Number(draggables[i].style.zIndex) > targetZ) draggables[i].style.zIndex = Number(draggables[i].style.zIndex) - 1;
    };
    target.style.zIndex = document.querySelectorAll(".textbox-float").length+9;
}
function windowInitZIndex() {
	var draggables = document.querySelectorAll(".textbox-float");
	for (i = 0; i < draggables.length; i++) {
        if (!draggables[i].style.zIndex) draggables[i].style.zIndex = i + 10;
		draggables[i].removeEventListener("mousedown",reorganizefloatingZ);
		draggables[i].removeEventListener("click",reorganizefloatingZ);
		draggables[i].removeEventListener("touchstart",reorganizefloatingZ);
		draggables[i].addEventListener("mousedown",reorganizefloatingZ);
		draggables[i].addEventListener("click",reorganizefloatingZ);
		draggables[i].addEventListener("touchstart",reorganizefloatingZ);
    }
}
window.addEventListener("blur",function(){
    if ((document.activeElement.parentNode.classList||document.body.classList).contains("textbox-float")) document.activeElement.parentNode.click();
});
windowInitZIndex();
windowSelectOne('0', true);

//MIDI Hacks
const midiInstrumentDict = {
    "bass": "@b",
    "brass": "@o",
    "chromatic percussion": "@v",
    "drums": "<DRUM>",
    "ensemble string": "@c",
    "ensemble voice": "@h",
    "ethnic": "@g",
    "guitar": "@g",
    "organ": "@o",
    "percussive": "<DRUM>",
    "piano": "@p",
    "pipe": "@o",
    "reed": "@o",
    "strings": "@c",
    "synth": "@b"
};
function loadFile(file, position) {
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        const MIDI = new Midi(reader.result);
        console.groupCollapsed('Midi Import Logs');
        console.log(MIDI)
        const midiTracks = MIDI.tracks.filter(t=>t.notes.length);
        midiTracks.forEach((t,i)=>{
            console.group('Midi Track Log');
            let instrument = t.instrument.family + " " + t.instrument.name;
            let computedInstrument = midiInstrumentDict[instrument.match(/^\w+/)[0]] || midiInstrumentDict[instrument.match(/^\w+\s\w+/)[0]] || "NONE";
            console.log(instrument, computedInstrument);
            if (computedInstrument === "NONE") return console.groupEnd(); //FOR NOW
            const noteMap = {0:computedInstrument==="<DRUM>"?'':computedInstrument};
            let lowestUnderAmt = 42 - t.notes.reduce((a,b)=>Math.min(a,b.midi),Infinity),
                highestOverAmt = t.notes.reduce((a,b)=>Math.max(a,b.midi),0) - 84,
                noteOffset = 0;
            if (highestOverAmt > 0 && highestOverAmt > lowestUnderAmt) noteOffset = -12;
            else if (lowestUnderAmt > 0 && lowestUnderAmt > highestOverAmt) noteOffset = 12;
            if (lowestUnderAmt > 12 && highestOverAmt < -18) noteOffset = 24;
            if (highestOverAmt > 12 && lowestUnderAmt < -18) noteOffset = -24;
            console.log(lowestUnderAmt, highestOverAmt, noteOffset);
            t.notes.forEach(n=>{noteMap[Math.round(n.time*1000)]=(noteMap[Math.round(n.time*1000)]||"")+(computedInstrument==="<DRUM>"?'=&_':'>'+(n.midi+noteOffset))});
            //notes = t.notes.map(n=>n.midi);
            console.log({map:noteMap});
            function formatTitle(str){
                return str.replace(/(^\w)|[\-_\s](?![a-hj-zA-HJ-Z]\b|the|an|and|but|for|or|nor|of|in)(.)|([\-_\s])/g,function(m0, m1, m2, m3){return m1?m1.toUpperCase():m3?" ":" "+m2.toUpperCase();});
            }
            let trackName = formatTitle(file.name.replace(/\.\w+$/,''))
                + `-${i+1}: ${formatTitle(t.instrument.name)}`;
            newMergedTrack(noteMap,{clientX:position.x+8*i,clientY:position.y+8*i},trackName);
            console.groupEnd();
        });
        console.groupEnd();
    }, false);
    reader.readAsArrayBuffer(file);
}
function openFilePrompt(e) {
    const fileInputElm = document.getElementById('midi-import-file-input');
    fileInputElm.style.left = (e.clientX || e.pageX) + 'px';
    fileInputElm.style.top = (e.clientY || e.pageY) + 'px';
    fileInputElm.value = "";
    fileInputElm.click();
}
{
    const dropZoneElement = document.querySelector('.drag-file-upload'),
        fileInputElm = document.getElementById('midi-import-file-input');
    //Document dropzone
    document.body.addEventListener('dragover', function(e){
        e.preventDefault();
        dropZoneElement.classList.add("active");
    });
    ['dragleave','dragend'].forEach(ev=>dropZoneElement.addEventListener(ev, function(e){
        e.preventDefault();
        console.log('leave/dragend')
        dropZoneElement.classList.remove("active");
    }));
    dropZoneElement.addEventListener("drop", function(e){
        e.preventDefault();
        fileInputElm.value = "";
        fileInputElm.style.left = (e.clientX || e.pageX) + 'px';
        fileInputElm.style.top = (e.clientY || e.pageY) + 'px';
        //fileInputElm.files = e.dataTransfer.files;
        loadMidi(e.dataTransfer.files);
        dropZoneElement.classList.remove("active");
    });
}
function loadMidi(files) {
    const file = files[0], inputPos = document.getElementById('midi-import-file-input').style;
    loadFile(file, {x:parseInt(inputPos.left), y:parseInt(inputPos.top)});
}