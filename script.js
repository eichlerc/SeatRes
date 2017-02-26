$(document).ready(function(){

    $(function(){
      $(document).tooltip();
    });

    $('#formstyle').hide();
    $('#reservations').hide();

    var reservedSeats = [];

    $('.seat').each(function(){
      $(this).attr('title', 'Available');
    });

    $('.seat').on('click', function(){
      $('.formtwo').hide();
      var seat;
      $('img',this).attr('src', 'images/seatPending.svg');
      $(this).addClass('reserved');
      seat = $(this);
      seat.attr('title', 'Pending');
      $('#formstyle').show();
      $('#selections').append('<p>Seat Number: ' + seat.attr('id') + ' </p>');
      $('#reservations').html('');
      $('#reservations').hide();
      $('.reserved').off('click');
    });

    $('.formone').on('click', function(){
      $('.formtwo').show();
    });

    $('button').on('click', function(){
      event.preventDefault();
      var name = $('#name').val();
      $('#reservations').append(name + ', you have reserved seats: ');

      // var resAlert = name + ', you have reserved seats: ';

      $('.seat').each(function(){
        if($(this).attr('title') === 'Pending'){
          $('img',this).attr('src', 'images/seat.svg');
          var seatNo = $(this).attr('id');
          var newRes = {seat: seatNo, name: name};
          reservedSeats.push(newRes);
          $(this).attr('title', 'Reserved by: ' + name);
          $('#reservations').append(seatNo + " ");
          // resAlert += seatNo + " ";
        }
      });

      // $('#reservations').dialog({
      //   position: {my:"center top", at:"center", of:window}
      // });

      $('#reservations').show();
      $('#formstyle').hide();
      $('#name').val("");
      $('#email').val("");
      $('#selections').html('');
    }); 

});
