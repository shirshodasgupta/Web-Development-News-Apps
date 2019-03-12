/* script.js 
   Author: Shirsho Dasgupta
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	/* Hide/show or fade in/out image when either the image div or the button is clicked. */
    $("#problem1").click(function(){
    	$("#problem1 img").fadeToggle(500);
    });

    $("#p1_btn").click(function(){
    	$("#problem1 img").fadeToggle(500);
    });

    





	/* Fade a caption in and out on rollover/hover. */
	
     $("#problem2").hover(function(){
    	$(".caption2", this).fadeToggle(500);
    }); 





	/* Make tooltip appear when when user hovers over image div */
	$("#problem3").hover(function(){
		$("#toolBox").fadeToggle(500);
	}); 


 



	/* Change image border color and "gallery" background color on hover over each image. */
	$("#problem4 img").mouseenter(function(){
		console.log("Yes");
		$("#problem4").css("background-color", "peachpuff");
		$(this).css("border-color", "snow");
	});

	$("#problem4 img").mouseleave(function(){
		console.log("No");
		$("#problem4").css("background-color", "palegoldenrod");
		$(this).css("border-color", "olive");
	});






	/* Animate (move) the image box to the right 400px, down 100px, increase the box size to 200px when the “move me” button is clicked. Return the image box back to it’s original position when “move me back” button is clicked. */
	
    $("#p5_btn1").click(function(){
    	console.log("ouch!");
    	$("#problem5").animate({
    		left: "400px",
    		top: "100px",
    		width: "200px"
    	});
    });

    $("#p5_btn2").click(function(){
    	console.log("ouch!");
    	$("#problem5").animate({
    		left: "0px" ,
    		top: "0px" ,
    		width: "103px"
    	});
    });





	/* Make captions that slide up and down on rollover/hover. */	
	

    $(".thumb").hover(function(){
    	$(".caption6",this).slideToggle(1000);
    });




	

}); //end document.ready block DO NOT DELETE!!!!!











