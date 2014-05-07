
$(document).ready(function() {

		// Slider
	 		$(".ex1 .mb_slider").mbSlider({
        onSlide:function(o){
        	$("#"+o.id+"_val").find(".val").val($(o).mbgetVal());
        	var _this = $('#'+o.id);
	 				calculate(_this);
	 			},
        onSlideLoad:function(o){
          $("#"+o.id+"_val").find(".val").val($(o).mbgetVal());
        }
      });

	 	// on Change Value car
	 	$('.setVal input').on('change keyup input', function(event) {
	 		event.preventDefault();
	 		var _this = $(this);
	 		calculate(_this);
	 	});

/*
|------------------------------------------------------------------------------------
| All functions
|------------------------------------------------------------------------------------
*/
function calculate(_this){
	var
	// Get the line
		theLine = _this.closest("section"),

		// Get all data
		data1 = theLine.find('.data1').val(),
		data2 = theLine.find('.data2').val(),
		data3 = theLine.find('.data3').val(),
		data4 = theLine.find('.data4').val(),
		data5 = theLine.find('.data5').val(),
		data6 = theLine.find('.data6').val(),
		theVal = theLine.find('.setVal input').val();

		// Get results
		result1 = theLine.find('.result1'),
		result2 = theLine.find('.result2'),
		result3 = theLine.find('.result3');

		// Get Results
 		getResult1(result1, theVal ,data1, data2, data3);		
 		var result = getResult2(result2, theVal, data1, data3, data5);		
 		getResult3(result3, result ,data6);		
}


// Get Result 1
function getResult1(result1, x, y, z, a){
	var result = parseInt(x*y*z*a);
	result1.val(result); 
}

// Get Result 2
function getResult2(result2, x, y, z, a){
	var result = parseInt(x*y*z*a);
	result2.val(result); 
	return result;
}
// Get Result 3
function getResult3(result3, x, y){
	var result = parseInt(x*y);
	result3.val(result); 
}

});	