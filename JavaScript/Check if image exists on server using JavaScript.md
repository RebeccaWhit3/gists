Check if image exists on server 
===============================

How to: JavaScript
-------------------------------

_Adapted from: [Check if image exists on server using JavaScript?](stackoverflow.com/questions/18837735)_

### @ Mikael Engver

> You can use the basic way image preloaders work to test if an image exists.

<table class="js-csv-data csv-data js-file-line-container"><thead><tr>
  <th>Syntax</th>
  <th>Console output</th>
  </tr></thead>
  <tbody>
<tr>

<td>

#### _Function Definition_

```js
function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
}
```

#### _Function Usage_

```js
imageUrl = "https://www.google.com/favicon.ico";
checkImage(imageUrl, function(){
    console.log(true);
  }, function(){
    console.log(false); }
);
```

</td>
<td>

#### _Chrome DevTools_

<kbd>true</kbd>

</td></tr></tbody>
</table>
