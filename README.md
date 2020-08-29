<p align="center"><img src="https://github.com/darklight9811/candlelit/blob/master/example/src/img/logo.svg" width="256"></p>

![GitHub](https://img.shields.io/github/license/darklight9811/candlelit) ![npm](https://img.shields.io/npm/dm/candlelit) ![npm](https://img.shields.io/npm/v/candlelit) [![Build Status](https://travis-ci.org/darklight9811/candlelit.svg?branch=master)](https://travis-ci.org/darklight9811/candlelit) [![Support](https://img.shields.io/badge/Patreon-Support-orange.svg?logo=Patreon)](https://www.patreon.com/rafaelcorrea)

# WIP: candlelit
Candlelit is a bundle of useful functions and patterns to help you build your own matches for entry points in any market.
Developed by Rafael Correa Chaves and Guilherme Vitorino as a way to easily implement and detect graphical patterns in new projects, candlelit is a easy solution for any programmer. If you wish to contribute any patterns we miss, you can write an email to: rafael.correa@aposoftworks.com or a new issue to our github with the title: [NP] <name of your pattern>. We hope you like it and enjoy using it.

## Installation
NPM
```
npm install --save candlelit
```

Yarn
```
yarn add candlelit
```

## Usage
You can easily require our candle module to use with your graph and use it as a promise

``` javascript
import {analyzeCandle} from 'candlelit';

const graph = [/* graph data*/];

analyzeCandle(graph).then(response => {
	console.log(response);
});
```

You can also add your own patterns to the list
``` javascript
function customPattern(graph) {
	// it must return either undefined for not match
	// or the info about the pattern following the interface
}

analyzeCandle.add(graph);

// You can also get the entire list
console.log(analyzeCandle.list());

// Or clear it
analyzeCandle.reset();
```

Here is how you should build your candle graph pattern

``` javascript
const graph = [
	[
		1, // open
		1, // high
		1, // low
		1, // close
	]
];
```

## Patterns available

Remember that testing a large chart with many patterns can be a costy process, so avoid using it every change you make to the chart. Or scope to the patterns you actually care about.
### Candlestick
#### 3 Bar Play
#### Reversed 3 Bar Play