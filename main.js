var theCanvas = null;

function update() {
	var text = document.getElementsByName("text")[0];
	var size = document.getElementsByName("size")[0];
	var color = document.getElementsByName("color")[0];
	var bgcolor = document.getElementsByName("bgcolor")[0];
	var fgselect = document.getElementsByName("colorselect")[0];
	var bgselect = document.getElementsByName("bgcolorselect")[0];
	document.getElementById('text').textContent = text.value;
	document.getElementById('text').style.fontSize = Math.abs(size.value)+'px';
	if (fgselect.options[fgselect.selectedIndex].value == "custom") {
		color.style.display = 'inline-block';
		document.getElementById('text').style.color = color.value;
	} else {
		color.style.display = 'none';
		document.getElementById('text').style.color = fgselect.options[fgselect.selectedIndex].value;
	};
	if (bgselect.options[bgselect.selectedIndex].value == "custom") {
		bgcolor.style.display = 'inline-block';
		document.getElementById('text').style.backgroundColor = bgcolor.value;
	} else {
		bgcolor.style.display = 'none';
		document.getElementById('text').style.backgroundColor = bgselect.options[bgselect.selectedIndex].value;
	};
};


$('input').each(function() {
	var elem = $(this);	
	
	elem.bind("propertychange change click keyup input paste", function(event){
		update();
	});
});

$(document).click(update);

setInterval(function() {
	html2canvas(document.getElementById('text')).then(function(canvas){
		var img = canvas.toDataURL("image/png"); 
		document.getElementById('imgout').src = img;
    });
}, 500);