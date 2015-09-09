$(document).ready(function(){
//when photo clicked i want the bio to pop up

$(".Photo").on("click",function(){
	var idName=($(this).attr("id"));
	//hide visible Bio
	$(".Bio").hide();
	//show bios
	$(".Bio."+idName).fadeIn();
});

//when photo clicked i want overlay color to go away

//when a is clicked inside menuesidebar hide default show selected
$("#menusidebar a").on("click", function(){
	$("#menusidebar a").removeClass("active");
	$(this).addClass("active");
});

//when page scrolls to new div i want menue to hide default; show selected

});