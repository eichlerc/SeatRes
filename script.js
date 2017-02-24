$(document).ready(function(){
    
    $('form').hide();
    
    var $id;
    var reservedSeats = [];
    
    $('.seat').click(function(){
      $('img',this).attr('src', 'images/seat.svg');
      $(this).addClass('reserved').off();
      $id = $(this).attr('id');
      $('form').show();
    });
    
    $('button').click(function(){
      //$('form').reset();
      event.preventDefault();
      //console.log($id);
      //console.log($('#name').prop('value'));
      reservedSeats.push({seat: $id, name: $('#name').prop('value')});
      $('form').hide();
      for (i = 0; i < reservedSeats.length; i++){
        console.log(reservedSeats[i].name);
        console.log(reservedSeats[i].seat);
      }
    });
    

    
});