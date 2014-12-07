#FlexMenu

A helper jQuery plugin that toggles your menu element's CSS class depending on wether its items fit in one row or not.

##Usage example
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