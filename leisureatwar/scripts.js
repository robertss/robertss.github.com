$(document).ready(function(){
$(".nav li.mobile").hide();
$(".nav ul.mobile").click(function(){
	$(".nav li.mobile").toggle()
	});
$("#letter-dropnav").hide();
$("#letter-drop").click(function(){
	$("#letter-dropnav").toggle()
	});
	
});

