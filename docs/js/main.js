$(document).ready(function()
{
  $('#load-more-content').click(function()
  {
    
    $('#more-content').toggleClass('shown');

    $('#load-more-content').hide();

    if( $('#more-content').hasClass('shown') )
    {
      $('#mensage_send').hide();
      $('#form1').show();
      $('#load-more-content').text('Close');
      $('#more-content').fadeIn('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
        
      });
    }
    else
    {
      $('#load-more-content').text('Confirmation');
      $('#more-content').fadeOut('slow', function()
      {
        $('#load-more-content').fadeIn('slow');
      });
    }
  });

  var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'white',
    progressColor: '#6d21a5',
    barWidth: 1,
  });

  wavesurfer.load('../song/anita.m4a');
  wavesurfer.on('ready', function () {
    wavesurfer.play();
  });

  document.querySelector('wave').style.height = "30px";
  document.querySelector('wave').style.marginLeft = "20px";

  document.querySelector('.playPauseBtn').addEventListener('click', function() {
    wavesurfer.playPause();
  });

  $('#mensage_send').hide();

  $('#form1').on('submit', function(e) {

  var name = 	$('#name').val();
  var option = $('#options').val();

  $.ajax({
    url:"https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqHlS5Gmnll-_fHSFymxDSl1OTDDvdsdUOkKH4qIKHO5FtBQ/formResponse",
    data:{
      "entry.1851068946": name,
      "entry.105319686": option,
    },
    type: "Post",
    dataType: "xml",
    statusCode: {
      0: function () {

      },
      200: function () {

      }
    }

  })

  $('#form1').hide('slow');
  $('#nameForm').text(name);
	$('#mensage_send').show('slow');
	$('#name').val('');
	$('#options').val('');

});

});
