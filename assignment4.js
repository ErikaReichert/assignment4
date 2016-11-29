(function() {

  console.log('Keepin\'n it clean with an external script!');

  var $url    = $('.flexsearch-input').val() || 'http://www.mattbowytz.com/simple_api.json?data=all';

  $('#mainForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: $url,
      method: 'GET'
    }).success(function(data) {
      var list = '';
      $.each(data.data.interests, function(i, x) { list += '<li>' + x + '</li>';

      });

      console.log(list);
      $('.URLresults').append(list);

      var list = '';
      $.each(data.data.programming, function(i, x) { list += '<li>' + x + '</li>';

      });

      console.log(list);
      $('.URLresults2').append(list);

    }).fail(function(data) {
      console.log(data);
      });
     });
})();
