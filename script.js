$(document).ready(function(){

    $(function(){
      $(document).tooltip();
    });

    $('#formstyle').hide();

    var reservedSeats = [];

    $('.seat').each(function(){
      $(this).attr('title', 'Available');
    });

    $('.seat').on('click', function(){
      var seat;
      $('img',this).attr('src', 'images/seat.svg');
      $(this).addClass('reserved');
      seat = $(this);
      seat.attr('title', 'Pending');
      $('#formstyle').show();
      $('#selections').append('<p>Seat Number: ' + seat.attr('id') + ' </p>');
      $('#reservations').html('');
    });

    $('button').on('click', function(){
      event.preventDefault();
      var name = $('#name').val();
      $('#reservations').append(name + ', you have reserved seats: ');

      var resAlert = name + ', you have reserved seats: ';

      $('.seat').each(function(){
        if($(this).attr('title') === 'Pending'){
          var seatNo = $(this).attr('id');
          var newRes = {seat: seatNo, name: name};
          reservedSeats.push(newRes);
          $(this).attr('title', 'Reserved by: ' + name);
          $('#reservations').append(seatNo + " ");
          resAlert += seatNo + " ";
        }
      });

      $('#reservations').dialog({
        position: {my:"center top", at:"center", of:window}
      });

      $('#formstyle').hide();
      $('#name').val("");
      $('#selections').html('');
    });

});
