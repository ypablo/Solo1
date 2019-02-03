
$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('open');
	});
});
 
var nav = false;
		
function openSlideMenu(){
	document.getElementById('side1').style.width = '250px';
	document.getElementById('container1').style.marginLeft = '250px';
	document.getElementById('top1').style.marginLeft = '250px';
	nav = true;
} 

function closeSlideMenu(){
	document.getElementById('side1').style.width = '0';
	document.getElementById('container1').style.marginLeft = '0';
	document.getElementById('top1').style.marginLeft = '0';
	nav = false;
}

function toggleNav() {
	nav ? closeSlideMenu() : openSlideMenu();
}


window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        console.log("Screen width is at least 768px");
		document.getElementById('side1').style.width = '10vw';
		document.getElementById('container1').style.marginLeft = '0';
		document.getElementById('top1').style.marginLeft = '0';
		var element = document.getElementById("div");
		element.classList.remove("open");
		nav = false;
    } else {
        console.log("Screen less than 768px");
		document.getElementById('side1').style.width = '0';
		
    }
});  