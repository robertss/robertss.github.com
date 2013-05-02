$(document).ready(function(){
$(".nav li.mobile").hide();
$(".nav ul.mobile").click(function(){
	$(".nav li.mobile").toggle()
	});

$('#letter-show') 
.before('<div id="letter-nav">') 
.cycle({ 
    fx:     'turnDown', 
    speed:  'fast', 
    timeout: 0, 
    pager:  '#letter-nav' 
})
//.after('</div>');

});

