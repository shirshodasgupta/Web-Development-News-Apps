/* script.js 
   Author: Shirsho Dasgupta
   Date: 
   Project: Interactive Form Field Submissions
*/


$(document).ready(function(){ // begin document.ready block

	
	$("#problem1").hover(function(){
		$(".caption1", this).fadeToggle(1000);
	});


	
	$(".letter").click(function(){
		var let = $(this).clone();
		console.log(let);
		$("#chalkboard").append(let);
	});
		$("#p2reset").click(function(){
			$("#chalkboard").html("");
	});

	


	$(".photo img").click(function(){
		var bb = $(this).attr("big");
		console.log(bb);
		$("#bigphoto img").attr("src", bb);
	});

		$(".photo img").mouseenter(function(){
			$(this).css("border-color", "snow");
	});

		$(".photo img").mouseleave(function(){
			$(this).css("border-color", "firebrick");
	});


	
	
	
	$("#problem4_btn").click(function(){
		var bgc = $("#p4_bgcolor").val();
		var bor = $("#p4_bordercolor").val();
		console.log(bgc);
		console.log(bor);
		$("#problem4 .photo").css("background-color", bgc);
		$("#problem4 .photo").css("border-color", bor);
	});

	
	$("#add").click(function(){
		var value1 = Number($("#inputno1").val());
		var value2 = Number($("#inputno2").val());
		var total = value1 + value2;
		$("#total").html(total);
	});

	$("#subtract").click(function(){
		var value1 = Number($("#inputno1").val());
		var value2 = Number($("#inputno2").val());
		var total = value1 - value2;
		$("#total").html(total);
	});

	$("#multiply").click(function(){
		var value1 = Number($("#inputno1").val());
		var value2 = Number($("#inputno2").val());
		var total = value1 * value2;
		$("#total").html(total);
	});

	$("#divide").click(function(){
		var value1 = Number($("#inputno1").val());
		var value2 = Number($("#inputno2").val());
		var total = value1/value2;
		$("#total").html(total);
	});


}); //end document.ready block





