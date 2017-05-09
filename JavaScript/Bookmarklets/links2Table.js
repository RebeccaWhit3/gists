javascript: d = new Array();

function S() {
	with(open('', 'Links', 'scrollbars,resizable,width=1200,height=1041').document) {
		open();
		var a = '';
		writeln('<head><link rel="stylesheet" href="//codepen.io/rebecca-whit3/pen/JNrNQW.css" media="screen"></head>'); /*presentation stylesheet*/
		for (var ln = 0; ln < document.links.length; ln++) {
			var lk = document.links[ln];
			a += "<tr>";
			a += "<td>";
			a += ln;
			a += "</td>";
			a += "<td>";
			a += lk.innerText.trim() || lk.innerHTML || decodeURIComponent(lk.href);
			a += "</td>";
			a += "<td>";
			a += '<a href="//' + lk.host + '" target="_blank">' + lk.host + '</a>';
			a += "</td>";
			a += "<td>";
			a += '<a href="' + lk.href + '" target="_blank">' + lk.href + '</a>';
			a += "</td>";
			a += "<td>";
			a += '<a href="' + document.location.href + '" target="_blank">' + document.title + '</a>';
			a += "</td>";
			a += "</tr>";
		} /*links*/
		writeln('<h1>' + '<a href="' + document.location.href + '" target="_blank">' + document.title + '</a>' + ' | ' + '<a href="//' + document.location.host + '" target="_blank">' + document.location.host + '</a>' + '</h1>');
		writeln('<h2>' + '<button class="selectAll">' + document.links.length + ' link(s)' + '</button>' + '</h2>');
		writeln('<table>');
		writeln('<thead>');
		writeln('<tr>');
		writeln('<th>Index</th>');
		writeln('<th>Text</th>');
		writeln('<th>Domain</th>');
		writeln('<th>URL</th>');
		writeln('<th>Origin</th>');
		writeln('</tr>');
		writeln('</thead>');
		writeln('<tbody id="links">');
		writeln(a); /*links*/
		writeln('</tbody>');
		writeln('</table>');
		writeln('<h2>' + d.length + ' domain(s)</h2>');
		writeln('<pre>');
		for (i = 0; D = d[i]; ++i) {
			writeln('<br>' + D);
		}
		writeln('</pre>');
		writeln('<script>');
		writeln('function SelectText(element) {');
		writeln(' var doc = document');
		writeln(', text = doc.getElementById(element)');
		writeln(', range, selection');
		writeln(' ; ');
		writeln(' if (doc.body.createTextRange) {');
		writeln('range = document.body.createTextRange();');
		writeln('range.moveToElementText(text);');
		writeln('range.select();');
		writeln(' } else if (window.getSelection) {');
		writeln('selection = window.getSelection(); ');
		writeln('range = document.createRange();');
		writeln('range.selectNodeContents(text);');
		writeln('selection.removeAllRanges();');
		writeln('selection.addRange(range);');
		writeln(' }');
		writeln('}');
		writeln('document.onclick = function(e) { ');
		writeln('if (e.target.className === "selectAll") {');
		writeln('SelectText("links");');
		writeln('}');
		writeln('};');
		writeln('</script>');
		close();
	}
}

function A(u) {
	if (u.indexOf('http') != 0) return;
	P = u.indexOf('://');
	if (P > 0) {
		u = u.substring(P + 3);
		P = u.indexOf('/');
		if (P > 0) {
			u = u.substring(0, P);
			F = false;
			for (j = 0; D = d[j]; ++j) {
				if (D == u) {
					F = true;
					break;
				}
			}
			if (!F) d[d.length] = u;
		}
	}
}
for (i = 0; L = document.links[i]; ++i) {
	A(L.href);
}
if (d.length == 0) alert('No domains');
else S();