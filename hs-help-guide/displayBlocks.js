const info = $('#info')[0];

function htmlFromJson(fullJson) {
const wrapper = document.createElement('span');
const textFromObject = function(json) {
	const typeInfo = blocks.textTypes[json.type] || {"tagName":"span"};
	const e = document.createElement(typeInfo.tagName);
	e.textContent = json.content;
	if (typeInfo.attributes) {
		typeInfo.attributes.forEach(a => {
			e.setAttribute(a,json[a]);
		});
	}
	wrapper.appendChild(e);
}
if (fullJson.forEach) {
fullJson.forEach(json => {
	textFromObject(json);
});
} else if (typeof fullJson == "string") {
	textFromObject({'type':'text','content':fullJson});
} else {
	textFromObject(fullJson);
}
return wrapper
}
function makeBlockSpan(block) {
const blockE = document.createElement('span');

blockE.textContent = block.name;
if (block.parameters) {
	block.parameters.forEach(p => {
		if (p.key) {
			blockE.innerHTML += p.key;
		}
		const param = document.createElement('i');
		param.setAttribute('class','ps fa fa-' + p.icon);
		blockE.appendChild(param);
	});
}
return blockE;
}

function makeBlockElement(block) {
const blockE = document.createElement('bl');
blockE.appendChild(makeBlockSpan(block));
blockE.setAttribute('type',block.type);
return blockE;
}

function makeBElement(htmlOrText,noB) {
const wrapper = document.createElement('p');
let b = document.createElement('b');
if (noB) {
b = wrapper
}
b.innerHTML = htmlOrText;
if (typeof htmlOrText != 'string') {
b.innerHTML = '';
b.appendChild(htmlOrText);
}
b.style.fontSize = "120%";
if (!noB) {
wrapper.appendChild(b);}
return wrapper;
}

function makePElement(htmlOrText) {
const b= document.createElement('p');

b.innerHTML = htmlOrText;
if (typeof htmlOrText != 'string') {
b.innerHTML = '';
b.appendChild(htmlOrText);
}
b.style.textIndent = "40px";
return b
}

function makeOl(array) {
const ol = document.createElement('ol')
ol.style.fontSize = '100%'
array.forEach(parameter => {
	const li = document.createElement('li');
	li.appendChild(htmlFromJson(parameter));
	ol.appendChild(li);
});
return ol;
}

function makeUl(array) {
const ul = document.createElement('ul')
ul.style.fontSize = '100%'
array.forEach(parameter => {
	const li = document.createElement('li');
	li.appendChild(htmlFromJson(parameter));
	ul.appendChild(li);
});
return ul;
}

blocks.blocks.forEach(block => {
const main = document.createElement('span');
main.setAttribute('class',"info");
main.hidden = true;
main.setAttribute('id','info' + block.id);
main.appendChild(makeBlockElement(block.block));

const author = document.createElement('p');
author.setAttribute('style',"display:inline; font-size:100%;");
author.textContent = 'Written by ';
block.authors.forEach(authorName => {
	if (block.authors[0] != authorName) {
		author.textContent += ', ';
	}
	author.textContent += authorName;
});
main.appendChild(author);
main.appendChild(makeBElement('Description'))
main.appendChild(makePElement(htmlFromJson(block.description)))
main.appendChild(makeBElement('Parameters'))
main.appendChild(makeOl(block.parameters));
main.appendChild(makeBElement('Useful for'));
main.appendChild(makeUl(block.useful));
main.appendChild(makeBElement('Other Info'));
const a = block.other;
const hs = block.hsdescription;
hs.unshift({"type":"text","content":"Hopscotch Description: "});
if (block.available == -1) {
a.unshift([{"type":"text","content":'This block is only available through the beta editor or JSON editing.'}]);
} else if (block.available === 0) {
a.unshift([{"type":"text","content":'This block is only available through JSON editing.'}]);
} else if (block.available === 1) {
a.unshift([{"type":"text","content":"This block is available for everyone to use."}]);
} else if (block.customAvailable) {
a.unshift(block.customAvailable);
}
a.unshift([{"type":"text","content":"Block ID: "+block.id}]);
a.unshift(hs);
main.appendChild(makeUl(a))
main.appendChild(makeBElement('Community Links'));
main.appendChild(makeUl(block.links));
if (blocks.searchTypes[block.block.type]) {
block.searchCategory = $(blocks.searchTypes[block.block.type])[0];
} else {
block.searchCategory = $('#blockSearch')[0];
}
const li = document.createElement('li');
li.setAttribute('onclick',`display(${parseInt(block.id)})`);
const searchA = document.createElement('a');
searchA.href = '#';
searchA.appendChild(makeBlockSpan(block.block));
li.appendChild(searchA);
block.searchCategory.appendChild(li);

info.appendChild(main);
});