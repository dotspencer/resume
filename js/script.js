var tags = document.querySelectorAll('t');

// Convert all <t> elements into <span class="tag">
for(var i = 0; i < tags.length; i++){
	var span = document.createElement('span');
  span.classList.add('tag');
  span.innerText = tags[i].innerText;
  tags[i].outerHTML = span.outerHTML;
}
