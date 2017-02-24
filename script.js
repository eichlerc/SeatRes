$(document).ready(function(){
    
    $(function(){
      $(document).tooltip();
    });
    
    $('form').hide();
    
    var id;
    var seat;
    var reservedSeats = [];
    
    $('.seat').each(function(){
      $(this).attr('title', 'Available');
    });
    
    $('.seat').click(function(){
      $('img',this).attr('src', 'images/seat.svg');
      $(this).addClass('reserved');
      seat = $(this);
      seat.attr('title', 'Pending');
      id = $(this).attr('id');
      $('form').show();
    });
    
    $('button').click(function(){
      event.preventDefault();
      var name = $('#name').val();
      reservedSeats.push({seat: id, name: $('#name').val()});
      seat.attr('title', 'Reserved by:  ' + name);
      $('form').hide();
      for (i = 0; i < reservedSeats.length; i++){
        console.log(reservedSeats[i].name);
        console.log(reservedSeats[i].seat);
      }
      $('#name').val("");
    });
    

    
});