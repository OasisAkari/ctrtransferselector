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
