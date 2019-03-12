/* script.js 
   Author: Shirsho Dasgupta
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	//*** FOR GALLERY

	var width = $(window).width();
	if(width <= 640) {
    	$(".gallcap").removeClass("gallcap"); //prevents fadeins/fadeouts of gallcap on mobile view
    	$(".discap p").html("Bert Potter, owner of Potter Bail Bonds");
    }else {
    	$(".discap p").html("Bert Potter is the owner of Potter Bail Bonds, a 54-year-old bail agency that his father established. He has been a bail agent since he was 18. He had hoped to pass on the business to his children but now doubts whether he will be able to do that.");
    }

	//DESKTOP/TAB/NOTEBOOK/PAD VIEW
	$(".gallcap").click(function(){

		var current = $(".playa").attr("src");
		var bb = $(this).attr("bigBro");
		$(".disbox img").attr("src", bb);
		var cappy = $(this).attr("cap1");
		$(".discap p").html(cappy);
		var audio = $(this).attr("sound-file");
		$(".playa").attr("src", audio);
		console.log(audio);

		if(current == audio) {
			$(".playa")[0].pause();
			$(".playa").attr("src", ""); //resetting the counter
			$(this).html("<p>Click on image for audio</p>");
		} else {
			$(".playa")[0].play();
			$(".gallcap").html("<p>Click on image for audio</p>"); //to change the captions of the other images
			                                                       //if someone shifts from one image to next
			                                                       //in the middle of audio playback
			$(this).html("<p>Click to stop audio</p>");  //over-rides above command and changes the caption
														//thus all the other thumbs except the one clicked are unchanged

		}

		$(".playa").on('ended',function(){
		 	$(".gallcap").html("<p>Click on image for audio</p>");

		 })
	});

	$(".gallery").mouseenter(function(){
    	$(".gallcap", this).fadeIn(1100);
    });

    $(".gallery").mouseleave(function(){
    	$(".gallcap", this).fadeOut(1100);
    });

	//MOBILE/TABLET VIEW


	$(".gallery img").click(function(){
		var bb = $(this).attr("bigBro");
		$(".disbox img").attr("src", bb);
		var cappy = $(this).attr("capmob");
		$(".discap p").html(cappy);
		var current = $(".playa").attr("src");
		var audio = $(this).attr("sound-file");
		$(".playa").attr("src", audio);
		console.log(audio);

		if(current == audio) {
			$(".playa")[0].pause();
			$(".playa").attr("src", ""); //resetting the counter
			$(".capbox1 p").html("<p>Tap on image thumbnail for audio</p>");
		} else {
			$(".playa")[0].play();
			$(".capbox1 p").html("<p>Tap on image thumbnail to stop audio</p>"); 
		}

		$(".playa").on('ended',function(){
		 	$(".capbox1 p").html("<p>Tap on image thumbnail for audio</p>");

		 })
	});


	//*** FOR INFOGRAM

	$(".infothumb").hover(function(){
		$(".infocap p").fadeToggle(1150);
	});


    $(".infocap p").click(function(){
		$(".overlay").fadeIn(1000);
		$("html, body").css({'overflow': 'hidden'});
	});

	$(".infothumb").click(function(){
		$(".overlay").fadeIn(1000);
		$("html, body").css({'overflow': 'hidden'});
	});


	$(".overlay").click(function(){

		$(".overlay").fadeOut(1000);
		$('html, body').css({'overflow': 'scroll'});



	});



}); //end document.ready block
