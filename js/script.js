
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
