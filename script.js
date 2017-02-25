$(document).ready(function(){

    $(function(){
      $(document).tooltip();
    });

    $('#formstyle').hide(); // right when the page opens it hides these parts. Happens twice.
    $('#reservations').hide(); // right when the page opens it hides these parts. Happens twice.

    var reservedSeats = []; // creating an array so we have something to push to

    $('.seat').each(function(){ // class of seat is in the rows along with column
      $(this).attr('title', 'Available'); // look for .seat and run through each and add the title available to each one. This sets up the tool tip. It finds and displays the title.
    });

    $('.seat').on('click', function(){
      var seat; // local variable setting the name seat for the first time for the whole js. Only can pick it up under a click function because it's LOCAL.
      $('img',this).attr('src', 'images/seatPending.svg'); // loading up the image to replace the other one. Doesn't change until cicked.
      $(this).addClass('reserved'); // talking to each particular div.
      seat = $(this); //
      seat.attr('title', 'Pending');
      $('#formstyle').show();
      $('#selections').append('<p>Seat Number: ' + seat.attr('id') + ' </p>'); // adding this to the selections id
      $('#reservations').html(''); // what the user reserved '' because nothing is in it until the user puts in it.
      $('#reservations').hide(); // this hides the reseration box
    });

    $('button').on('click', function(){ //SUBMIT BUTTON
      event.preventDefault(); // put this here so that the color of the chairs would stay the same.
      var name = $('#name').val(); //pulling in whatever you submitted in the form under the name field. Form's id is name. Any string can go in it.
      $('#reservations').append(name + ', you have reserved seats: '); //pushed into the array also

      // var resAlert = name + ', you have reserved seats: ';

      $('.seat').each(function(){ //for loop so that each seat gets
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
      $('#selections').html('');
    }); //end of onclick

});
