blocks = {"blocks":[
			{"block":{"type":"","name":"Custom Block / Ability"},
				"authors":["Awesome_E"],
				"description":[{"type":"text","content":"A Rainbow Block in the editor that allows you to put blocks inside it and reuse the code"}],
				"parameters":[[{"type":"text","content":"There are no parameters for Custom Blocks at the moment. However, you can rename them by tapping and holding on the editor block."}]],
				"useful":[
					[{"type":"text","content":"Making While Loops by putting a nested ability inside a conditional"}],
					[{"type":"text","content":"Condensing and reusing code templates; they act as a closed, global folder."}],
					[{"type":"text","content":"Code Organization; they can be named and seen at all times."}]],
				"hsdescription":[{"type":"text","content":"There is no description, but there are example names such as jump, fly, and run."}],
				"id":"123",
				"available":1,
				"other":[],
				"links":[
				[{"type":"link","content":"Tip of the week","href":"https://forum.gethopscotch.com/t/tip-of-the-week/52636/69"},{"type":"text","content":" – This is a tutorial I (Awesome_E) made, and it teaches you how to use abilities to make a \"do while\" or \"do until\" loop, neither of which we have normally in Hopscotch. It also showcases hidden abilities, which do not show up as a custom block."}],
					
				[{"type":"text","content":"Under Construction"}]
				]
			},


{"block":{"type":"move","name":"Move Forward","parameters":[{"icon":"hashtag"}]},
				"authors":["Awesome_E"],
				"description":[{"type":"text","content":"Moves the object in their forward direction by the specified distance (pixels) "}],
				"parameters":[[{"type":"text","content":"Distance – This is a number parameter that allows you to input a number, use math operators, or input traits and variables."}]],
				"useful":[
					[{"type":"text","content":"Animating Characters and Moving Things Around in Projects"}],
					[{"type":"text","content":"Drawing Intricate / Complex Shapes; they adapt to the object's rotation"}],
					[{"type":"text","content":"Making Puzzle Games"}]
				],
				"hsdescription":[{"type":"text","content":"Moves your object forward* by the number of pixels specified. Negative numbers will move you robject backwards.\n*Forward means the angle your object is facing. All objects face to the right by default - 0 degrees. You can turn or flip an object to change the direction of Move Forward."}],
				"id":"23",
				"available":1,
				"other":[],
				"links":[	
				[{"type":"text","content":"Under Construction"}]
				]
			},
{
"block":{"type":"move","name":"Turn degrees", "parameters":[{"icon":"hashtag"}]},
"authors":["Awesome_E","Petrichor"],
"description":[{"type":"text","content":"Turns the object by the number of degrees specified."}],
"parameters":[
	[{"type":"text","content":"Degrees – This is a number parameter that allows you to input a number, use math operators, or input traits and variables."}]
],
"useful":[
	[{"type":"text","content":"Animating Loading Screens"}],
	[{"type":"text","content":"Drawing Intricate / Complex Shapes; they change the direction of move forward"}],
	[{"type":"text","content":"Making Rescue Games where your character changes direction"}]
],
"id":"24",
"available":1,
"hsdescription":[{"type":"text","content":"Changes the direction the object is facing by a certain number of degrees. Use a shape like heart to see how it works. Rotating 180 degrees will place the heart upside down with the top edges facing down. Rotating 360 degrees will make the heart turn a full circle!\nFor an example, search the community for Helicopter Rescue. It uses the block to rotate the helicopter as you rescue the people."}],
"other":[
	[{"type":"text","content":"Referred to as 'SetHeading' in webplayer.min.js"}]
],
"links":[
	[{"type":"link","href":"https://c.gethopscotch.com/p/xkj65ux4y","content":"Helicopter Rescue by MagmaPOP"},{"type":"text","content":" – This is a 3D game by MagmaPOP which uses turn degrees to rotate the helicopter. It is mentioned in the Hopscotch description."}],
	[{"type":"text","content":"Under Construction"}]
]
},
{"id":"34",
"block":{"name":"Set Speed to","type":"move","parameters":[{"icon":"hashtag"}]},
"authors": ["Awsome_E","FearlessPhoenix","GameCodingCrazy123","Mathgirl"],
"description":[{"type":"text","content":"Changes execution speed of change x, change y, turn, and move forward blocks for the current object"}],
"parameters":[
	[{"type":"text","content":"Speed – Determines how quickly movement blocks run. Higher speed means faster execution, and negative speed will make objects move the opposite direction. This is a number parameter that allows you to input a number, use math operators, or input traits and variables."}]
],
"useful":[
[{"type":"text","content":"Speeding up trail art"}],
[{"type":"text","content":"Slowing down or speeding up obstacles in your game"}],
[{"type":"text","content":"Timings of overlapping objects"}]
],
"other":[],
"hsdescription":[{"type":"text","content":"Sets the speed for this object. The default setting is 400. Small numbers make it slower and big numbers make it faster."}],
"available":1,
"links":[
	[{"type":"link","href":"https://c.gethopscotch.com/p/10dp4yohyt","content":"CNN Logo Trail Art"},{"type":"text","content":" – The Straight Segments in this trail art can be done quickly because the object's speed is set to a high number."}],
	[{"type":"link","href":"https://c.gethopscotch.com/p/zcs38n565","content":"Hatsune Miku Trail Art"},{"type":"text","content":" – This is another trail art that would have taken ages to load if it were not for the set speed block."}],
	[{"type":"text","content":"Under Construction"}]
]
},
{"id":"55",
"block":{"name":"Destroy","type":"ctrl"},
"authors":["Awesome_E","GameCodingCrazy123"],
"other":[],
"description":[{"type":"text","content":"Destroys the current instance of an object."}],
"parameters":[
	[{"type":"text","content":"There are no parameters for this block."}]
],
"useful": [
	[{"type":"text","content":"Clearing Several Clones just used for drawing a background"}],
	[{"type":"text","content":"Lowering the object count overall for performance"}],
	[{"type":"text","content":"Potential Debug Purposes; however, it is somewhat buggy at the moment"}]
],
"hsdescription":[{"type":"text","content":"Remove this object from your game. This is useful if you made a lot of clones to quickly draw a background but no longer need them any more. Also can be used if you want to get rid of a character that got knocked out in your game."}],
"available":-1,
"links": [
	[{"type":"link","href":"https://c.gethopscotch.com/projects/zwofn3guf","content":"Snowman Stacker"},{"type":"text","content":" – This project would have otherwise been very laggy if background-drawing objects had not been destroyed."}],
"Under Construction"
]
}



			
],
"searchTypes":{"move":"moveblocks","ctrl":"ctrlblocks"},
"textTypes":{"text":{"tagName":"span"},"link":{"tagName":"a","attributes":["href"]}}
}