$(document).ready(function(){
    
    $(function(){
      $(document).tooltip();
    });
    
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
      event.preventDefault();
      reservedSeats.push({seat: $id, name: $('#name').val()});
      $('form').hide();
      for (i = 0; i < reservedSeats.length; i++){
        console.log(reservedSeats[i].name);
        console.log(reservedSeats[i].seat);
      }
      $('#name').val("");
    });
    

    
});