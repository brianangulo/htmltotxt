# htmltotxt
## Super basic HTML text parser

htmltotxt is super basic node.js app that can take in html files saved on your directory and it extracts the text out of them then saves it as a .txt file in your folder.

## Features

- Takes in a saved .html file and it spits a .txt file with just the text and none of the nodes

## Tech

- [node.js] - js for all

## Installation

htmltotxt requires [Node.js](https://nodejs.org/) v10+ to run.

```sh
npm i
```
## Usage
```
import { parser, generator } from "htmltotxt";

/* parser returns plain text extracted from the html file and generator 
creates .txt files based on any string passed to it. They can be used 
together as seen below or separately */

generator(parser('./test.html'));
```
## Contributions

I have not planned ahead much for this project but if anyone wants to contribute please feel free to make a pull request.