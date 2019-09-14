const skc = new SearchKeyController($('#blockSearch')[0]);
document.addEventListener('keydown',e => {
const key = e.key;
if (key == 'ArrowUp' || key == 'ArrowDown'){
blockSearch(true);
skc.moveSelection(key.length > 7)
} else if (key == 'Escape'){
blockSearch(false);
$('#blockSearchBox').blur();
} else if (key == 'Enter') {
skc.selectCurrent();
}
});