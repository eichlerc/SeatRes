$(document).ready(function(){
    
    $(function(){
      $(document).tooltip();
    });
    
    $('form').hide();
    
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
      $('form').show();
    });
    
    $('button').click(function(){
      console.log('button');
      event.preventDefault();
      $('.seat').each(function(){
        console.log('each');
        if($(this).attr('title') === 'Pending'){
          console.log('yes');
          var seatNo = $(this).attr('id');
          var name = $('#name').val();
          var newRes = {seat: seatNo, name: name};
          reservedSeats.push(newRes);
          $(this).attr('title', 'Reserved by: ' + name);
        }
      });
      $('form').hide();
      $('#name').val("");
    });
    
});