$(document).ready(
  function() {
    var contactForm = $('#contact-form');
    $("button#submit").click(function(){
      $.ajax({
        url: contactForm.attr('action'),
        method: contactForm.attr('method'),
        data: contactForm.serialize(),
        dataType: 'json',
        beforeSend: function() {
          contactForm.append('<div class="alert-loading" >Sending message…</div>');
        },
        success: function(data) {
          contactForm.find('.alert-loading').remove();
          var succesBox = $('<div class="alert alert-success alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '<strong>Thanks!</strong> I will reply in a few hours' + '</div>').hide();
          contactForm.before(succesBox);
          succesBox.fadeIn("slow");
          succesBox.fadeTo(2000, 500).slideUp(500, function() {
            $(".alert-success").alert('close');
          });
        },
        error: function(err) {
          contactForm.find('.alert-loading').remove();
          var errorBox = $('<div class="alert alert-danger alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '<strong>Error!</strong> Something went wrong' + '</div>').hide();
          contactForm.before(errorBox);
          errorBox.fadeIn("slow");
          errorBox.fadeTo(2000, 500).slideUp(700, function() {
            $(".alert-danger").alert('close');
          });
        });
      }
    });
});
