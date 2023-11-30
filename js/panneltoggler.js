$(document).ready(function () {
  $('.btn-default').click(function(){
    $('#slideout').toggleClass('on');
  });

  $('.close').click(function(){
    $('#slideout').toggleClass('on');
  });

  $('.contact-submit-btn').click(function(e){
    e.preventDefault();
    $('.panelform').css('display', 'none');
    $('.confirmation').css('display',  'block').css('margin-top', '40%');
    if($('.confirmation').show()) {
      setTimeout(() => {
        $('#slideout').toggleClass('on');
      }, 1000);
    }
  });
});