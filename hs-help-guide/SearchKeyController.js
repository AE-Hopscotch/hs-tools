function SearchKeyController(searchList) {
this.elementList = searchList.querySelectorAll('li');
}
SearchKeyController.prototype.moveSelection = function(down) {
if (!this.selectedElement) {
	this.selectedElement = this.elementList[0];
	this.selectedElement.classList.add('searchKeySelected');
	return this;
}
this.selectedElement.className = this.selectedElement.className.replace(/searchKeySelected/g,'');
const oldIndex = Array.from(this.elementList).indexOf(this.selectedElement);
if (down) {
	this.selectedElement = this.elementList[oldIndex + 1];

} else if (!down) {
	this.selectedElement = this.elementList[oldIndex - 1];
}
if (this.selectedElement == undefined) {
	this.selectedElement = this.elementList[0];
	if (oldIndex === 0) {
		this.selectedElement = this.elementList[this.elementList.length-1];
	}
}
this.selectedElement.classList.add('searchKeySelected');
try {
this.elementList[Array.from(this.elementList).indexOf(this.selectedElement) -1].scrollIntoView();
}
catch {
console.log('Could not scroll into view');
this.elementList[0].scrollIntoView();
}
return this
}

SearchKeyController.prototype.selectCurrent = function() {
if (this.selectedElement) {
this.selectedElement.click();
}
return this;
}

SearchKeyController.prototype.newElementList = function(list) {
this.elementList = list;
}