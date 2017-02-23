$(document).ready(function(){
    
    $('form').hide();
    
    $('.seat img').click(function(){
      $(this).attr('src', 'images/seat.svg');
      $('form').show();
    });
    
    $('button').click(function(){
      $('form').hide();
    });
    
});