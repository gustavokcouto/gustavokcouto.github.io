$(document).ready(
  function() {
    var contactForm = $('#contact-form');
    $("button#contato_submit").click(function(){
      $.ajax({
        url: contactForm.attr('action'),
        method: contactForm.attr('method'),
        data: contactForm.serialize(),
        dataType: 'json',
        beforeSend: function() {
          contactForm.append('<div class="alert-loading" >Enviando mensagem...</div>');
        },
        success: function(data) {
          contactForm.find('.alert-loading').remove();
          var succesBox = $('<div class="alert alert-success alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '<strong>Obrigado!</strong> Em breve entraremos em contato' + '</div>').hide();
          contactForm.before(succesBox);
          succesBox.fadeIn("slow");
          succesBox.fadeTo(2000, 500).slideUp(500, function() {
            $(".alert-success").alert('close');
          });
        },
        error: function(err) {
          contactForm.find('.alert-loading').remove();
          var errorBox = $('<div class="alert alert-danger alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '<strong>Erro!</strong> Tem certeza que todos os campos foram preenchidos corretamente?' + '</div>').hide();
          contactForm.before(errorBox);
          errorBox.fadeIn("slow");
          errorBox.fadeTo(2000, 500).slideUp(700, function() {
            $(".alert-danger").alert('close');
          });
        },
      });
    });
    var participeForm = $('#participe-form');
    $("button#participe_submit").click(function(){
      $.ajax({
        url: participeForm.attr('action'),
        method: participeForm.attr('method'),
        data: participeForm.serialize(),
        dataType: 'json',
        beforeSend: function() {
          participeForm.append('<div class="alert-loading" >Enviando mensagem...</div>');
        },
        success: function(data) {
          participeForm.find('.alert-loading').remove();
          var succesBox = $('<div class="alert alert-success alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '<strong>Obrigado por se inscrever!</strong> Em breve entraremos em contato' + '</div>').hide();
          participeForm.after(succesBox);
          succesBox.fadeIn("slow");
          succesBox.fadeTo(2000, 500).slideUp(500, function() {
            $(".alert-success").alert('close');
          });
        },
        error: function(err) {
          participeForm.find('.alert-loading').remove();
          var errorBox = $('<div class="alert alert-danger alert-dismissible" role="alert">' + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + '<strong>Erro!</strong> Tem certeza que todos os campos foram preenchidos corretamente?' + '</div>').hide();
          participeForm.after(errorBox);
          errorBox.fadeIn("slow");
          errorBox.fadeTo(2000, 500).slideUp(700, function() {
            $(".alert-danger").alert('close');
          });
        },
      });
    });
});
