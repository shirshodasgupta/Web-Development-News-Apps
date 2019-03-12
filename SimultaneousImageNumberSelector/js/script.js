/* script.js 
   Author: Shirsho Dasgupta
   Date:
*/


$(document).ready(function(){ // begin document.ready block
      
    var sum = 0;

	$("#btn_name").click(function(){
		var yourname = $("#name").val();
		$("#greetings").html("Hello, " + yourname + "!");
	});

 	$(".thumb").mouseenter(function(){
		$(this).css("background-color", "gold");
	});

	$(".thumb").mouseleave(function(){
		$(this).css("background-color", "teal");
	});

	$(".thumb img").click(function(){
		var num = Number($(this).attr("num_val"));
		console.log(num);
		sum += num;
		var imchange = $(this).attr("src");
		$("#display_img").attr("src", imchange);
		$("#total").html(sum);
	});

	$("#reset").click(function(){
		sum = 0;
		$("#total").html(sum);
	});
 	
 	

}); //end document.ready block
