# ecofy

[eco][] precompiler plugin for [Browserify][] without magic.

Compiles Handlebars templates to plain Javascript. The compiled templates only
have one copy of the Handlebars runtime so they are lightweight and fast!

## Usage

Install hbsfy locally to your project:

npm install ecofy

Handlebars will be automatically installed as [peer dependency][].

Then use it as Browserify transform module with `-t`:

browserify -t eco main.js > bundle.js

where main.js can be like:


```javascript
var template = require("./template.eco");
document.body.innerHTML = template({ name: "Epeli" });
```

and template.hbs:

```html
<h1>Hello <%=name%>!</h1>
```

## Programmatic usage

When compiling using Javascript code custom extensions
can be set:

```javascript
var ecofy = require("ecofy");

var browserify = require("browserify");
var b = browserify("./index.js");
b.transform(ecofy);
b.bundle().pipe(fs.createWriteStream("./bundle.js"));
```

[eco]: https://github.com/sstephenson/eco
[Browserify]: https://github.com/substack/node-browserify
