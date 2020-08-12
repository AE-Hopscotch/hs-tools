# Get Files from my GitHub Pages

## About
These are reference files regarding information that has to do with either my pages or Hopscotch itself. You are free to use them in any project you wish, whether that is a shortcut, web page, or application.

## A Couple Methods

JavaScript
~~~javascript
var x = new XMLHttpRequest();
x.open('GET', '' + 'https://awesome-e.github.io/hs-tools/get/hopscotch-blocks-list.json', true);
x.onload = x.onerror = function() {
	//Keep in  mind, this is received as plain text. You may want to use JSON.parse() with the data
	alert(x.responseText||"");
};
if (/^POST/i.test('GET')) {
	x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
}
x.send(null);
~~~

Siri Shortcuts
~~~javascript
URL('https://awesome-e.github.io/hs-tools/get/hopscotch-blocks-dictionary.json');
Get_Contents_of_URL([URL]);
Scripting('Get dictionary from', [Contents_of_URL]);
~~~

CURL
~~~
I don't know cURL, Google it
~~~

## Files Currently Available
- Hopscotch Blocks: You can use either one, depending on your preferences. The list variant is in order of appearance in the editor.
    - List (https://awesome-e.github.io/hs-tools/get/hopscotch-blocks-list.json): This arranges all blocks in a list.
    - Dictionary (https://awesome-e.github.io/hs-tools/get/hopscotch-blocks-dictionary.json): You can get a block with this by getting the value for the block's ID.
- Site Status: Use this as an easy way to test if the connection works. Simply test if the key exists.
    - URL: https://awesome-e.github.io/hs-tools/get/site-status.json

## Future Plans
- Hopscotch Math Operators and Game Rules
- Possibly a "lesser" version of the filter regex
