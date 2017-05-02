Multi-Line JavaScript Strings
=============================

How to
-----------------------------

_Adapted from: [Multi-Line JavaScript Strings](https://davidwalsh.name/multiline-javascript-strings) by David Walsh on November 2, 2012_

> The JavaScript language performs automatic semicolon insertion at the end lines, so creating multiline strings usually ends up looking something like this:
> 
> ```js
> var multiStr = "This is the first line" +
> 	"This is the second line" +
> 	"This is more...";
> ```
> 
> String upon string of concatenated JavaScript mess...ugly, slow, and ...ugly.  Many novice JavaScript developers don't know that there's a better way to create multiline strings:
> 
> ```js
> var multiStr = "This is the first line\
> 	This is the second line\
> 	This is more...";
> ```
> 
> Adding a backslash at the end of each line tells the JavaScript engine that the string will continue to the next line, thus avoiding the automatic semicolon insertion annoyance. Note that the second string includes line breaks within the string itself.  Just another nice tip to add to your JavaScript arsenal!

### More examples

#### Vertical string alignment

Skip the first line for reading/pasting convenience

<table class="js-csv-data csv-data js-file-line-container"><thead><tr>
  <th>Syntax</th>
  <th>Console output</th>
  </tr></thead>
  <tbody>
<tr>

<td>

```js
var multiStr = "\
This is the first line \
This is the second line \
This is more...";
```

</td>
<td>

```
"This is the first line 
This is the second line
This is more..."
```

</td></tr></tbody>
</table>

#### Personal recipe

1. Strings are vertically aligned and easy to read
1. Strings can be copy and pasted easily between tables
1. New lines are escaped at the start of each line to make prefixing non-formatted text easy (benefits #2)
1. Line separation for quotes surrounding string (benefits #2)
1. Easier to decompile in general
1. Linebreak before and after quotes output by Chrome DevTools when using console.log()   

<table class="js-csv-data csv-data js-file-line-container"><thead><tr>
  <th>Syntax</th>
  <th>Console output</th>
  </tr></thead>
  <tbody>
<tr>

<td>

```js
var multiStr = "\
\n"+ "This is the first line \
\n"+ "This is the second line \
\n"+ "This is more... \
\n";
```

</td>
<td>

```
"
This is the first line 
This is the second line
This is more...
"
```

</td></tr></tbody>
</table>
