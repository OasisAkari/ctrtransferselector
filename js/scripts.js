/* http://stackoverflow.com/a/5077091 */
String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
};


$('button.group').on('click', function() {
  if ($(this).hasClass('selected')){
    $(this).removeClass('selected');
  } else {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
  }

  if ($('.region .no_n3ds').hasClass('selected')) {
    $('#n3ds').removeClass('selected');
    $('#n3ds').hide();
  } else {
    $('#n3ds').show();
  }

  if ($('.region .kor').hasClass('selected')) {
    if ($('#o3ds').hasClass('selected')) {
      alert('抱歉，我们暂时没有收集到韩版 O3DS 的 CTRTransfer。')
      $('#download').hide()
      $('.donate').hide()} else {
      $('#download').show()
      $('.donate').show()
    }
  } else {
    $('#download').show()
    $('.donate').show()
  }

  if ($(''))
  if (   $('.region').children().hasClass('selected')
      && $('.console').children().hasClass('selected')
	) {
    $('#download').addClass('active');
  } else {
    $('#download').removeClass('active');
  }
  //if (region_selected('div.region'))
  //$('download')
});

$('#download').on('click', function() {
  if (!$(this).hasClass('active')) {
    return;
  }

  var region = $('.region').children('.selected').attr('id');
  var console_ = $('.console').children('.selected').attr('id');

  var base = "https://www.yzhhsdreamisland.cn/index.php/";

  if(console_ == 'n3ds')
     var filename = "ctrtransfer-{0}-{1}".format(region, console_);
  else
     var filename = "ctrtransfer-{0}-{1}".format(region, console_);
  window.location.href = base + filename;

});
