$(document).ready(function(){
    
    $(function(){
      $(document).tooltip();
    });
    
    $('#toggle').hide();
    
    var reservedSeats = [];
    
    $('.seat').each(function(){
      $(this).attr('title', 'Available');
    });
    
    $('.seat').click(function(){
      var seat;
      $('img',this).attr('src', 'images/seat.svg');
      $(this).addClass('reserved');
      seat = $(this);
      seat.attr('title', 'Pending');
      $('#toggle').show();
      $('#selections').append('<p>Seat Number: ' + seat.attr('id') + ' </p>');
    });
    
    $('button').click(function(){
      event.preventDefault();
      var name = $('#name').val();
      $('#reservations').append(name + ', you have reserved seats: ');
      $('.seat').each(function(){
        if($(this).attr('title') === 'Pending'){
          var seatNo = $(this).attr('id');
          var newRes = {seat: seatNo, name: name};
          reservedSeats.push(newRes);
          $(this).attr('title', 'Reserved by: ' + name);
          console.log('append');
          $('#reservations').append(seatNo + " ");
        }
      });
      $('#toggle').hide();
      $('#name').val("");
      $('#selections').html('');
    });
    
});