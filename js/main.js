'use strict';


(function($){
  
    // Load json file
    $.getJSON("calculator.json", function(json) {
      window.calcOBJ = json;
    });

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

    // set the slider
    $('.setVal input').on('input', function(event) {
      var _this = $(this),
          id = _this.parent().attr("id");
        id = id.replace("_val","");
      $('#'+id).mbsetVal(_this.val());
    });

    // on Change Value 
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
      theLine = _this.closest("section"), // Get the section of the element
      theVal  = theLine.find('.setVal input').val(),
      set     = theLine.find("input.val").val(),
      _name   = theLine.data("name"),
      result1 = theLine.find('.result1'),
      result2 = theLine.find('.result2'),
      result3 = theLine.find('.result3');


    try{ // Create all Constants
      var 
        _Constants = calcOBJ[_name]["Constants"],
        _Outputs   = calcOBJ[_name]["Outputs"];

      for(var _Constant in _Constants){
         window[_Constant] = _Constants[_Constant] ;
      }

      // Get the results
      for(var _Output in _Outputs){
         window[_Output] = parseInt(eval(_Outputs[_Output])) ;
      }

      //Set result
      result1.val(co2);
      result2.val(kw);
      result3.val(participation);


    }catch(e){
      $('#the-error').html("Not declared in the database");
      return;
    }
    

    // Get results
    

    /* Get Results
    getResult1(result1, theVal ,data1, data2, data3);   
    var result = getResult2(result2, theVal, data1, data3, data5);    
    getResult3(result3, result ,data6);   */

    // Set the Total
    setTotal(_this);

}

function setTotal(_this){
  var _totalResult1 = 0, 
      _totalResult2 = 0,
      _totalResult3 = 0,
      _theTab = _this.closest(".tab-pane");


  $('.result1').each(function() {
      _totalResult1 += parseInt($(this).val());
  });
  
  $('.result2').each(function() {
      _totalResult2 += parseInt($(this).val());
  });
  
  $('.result3').each(function() {
      _totalResult3 += parseInt($(this).val());
  });
  
  // Set Values
  _theTab.find('.totalResult1').val(_totalResult1);
  _theTab.find('.totalResult2').val(_totalResult2);
  _theTab.find('.totalResult3').val(_totalResult3);

  // Set Slider 
  $('#sl_total_travel').mbsetVal(_totalResult1);

}

})(jQuery);