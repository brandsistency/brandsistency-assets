jQuery('.text').each(function() {
  var word = $(this).html();
  var index = word.indexOf(' ');
  if(index == -1) {
    index = word.length;
  }
  $(this).html('<span class="first-word">' + word.substring(0, index) + '</span>' + word.substring(index, word.length));
});