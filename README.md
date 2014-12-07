#FlexMenu
A helper jQuery plugin that toggles your menu element's CSS class depending on whether its items fit in one row or not.

##The Problem
Sometimes a static breakpoint for a single-row, horizontal menu to go into "mobile mode" is problematic. Sometimes you just can't know for sure
how many items your menu wrapper will be holding or how many characters your link items will have (cases where your client can add and remove main level pages, language versions, etc.).

##The Solution
A script that actually adds up the width of your items and throws the menu into "mobile mode" when the items won't fit.
It does this both on load and on the window's resize event.

![demo](http://i.imgur.com/4BdKgKm.gif)

##Usage Example

###HTML
See this repo's [index.html](https://github.com/ThePaavero/FlexMenu/blob/master/index.html)

###JS
```javascript
var menu = $('header nav');
menu.flexMenu();
```

###CSS
```css
header nav.reduced .nav-hamburger {
	display: inline-block;
}

header nav.reduced ul {
	display: none;
}

header nav a {
	display: block;
	padding: 10px 30px;
	color: #beffb9;
	font-size: 20px;
	font-family: Arial;
	text-decoration: none;
}

header .nav-hamburger {
	display: none;
}
```

##Options (key: default value)
* itemSelector: "ul li a",
* hamburgerSelector: ".nav-hamburger",
* bufferSize: 30,
* classNameReduced: "reduced"
