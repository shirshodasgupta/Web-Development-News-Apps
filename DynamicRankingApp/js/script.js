/* script.js 
   Author: Shirsho Dasgupta
   Date:
*/


$(document).ready(function(){ // begin document.ready block

	var colorlist = ["salmon", "tomato", "orange", "lemonchiffon", "papayawhip", "peachpuff", "cornsilk", "blanchedalmond", "bisque", "wheat", "chocolate", "olive", "lime", "cornflowerblue", "lavender", "plum", "honeydew", "mintcream"];
	console.log(colorlist)
	var reslist = [];

	for (var i = 0; i < colorlist.length; i++){
	 	$(".rankingList").append("<div class='list' data-original = '"+ i + "'>" + colorlist[i]+ "</div>");
	 	$(".list").each(function(i){
	 		$(this).css({'background-color': colorlist[i]});
	 	});
	}

	 $(".rankingList").sortable();

	 $(".button").click(function(){
	 	$(".results").html("");
	 	$(".list").each(function(i){
	 		reslist[i] = Number($(this).attr("data-original"));
	 	});

	 	 	console.log(reslist);

	 	for (var i = 0; i < reslist.length; i++){
	 		$(".results").append("<div class='items' data-original = '"+ i + "'><div class='image'><img src='img/food/" + colorlist[reslist[i]] + ".jpg'></img></div><div class='text'><h6>" + colorlist[reslist[i]]+ "</h6><p>Previous Rank: " + (reslist[i]+1) + "<br><br>Current Rank: " + (i+1) + "</p></div></div>");
	 		$(".items").each(function(i){
	 		$(this).css({'background-color': colorlist[reslist[i]]});
	 		});
	 	}
	 });






}); //end document.ready block
