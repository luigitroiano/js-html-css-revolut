$(function(){


  var dropDown = $('li.dropdown');

  dropDown.hover(
    function () {  
      //handler in
    $(this).children('ul.menu_dropdown').removeClass('d_none');
    },

    function () {  
      //handler out
      $(this).children('ul.menu_dropdown').addClass('d_none');
    }
  )





});