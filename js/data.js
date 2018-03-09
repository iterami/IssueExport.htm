'use strict';

function fetch(){
    var url = 'https://api.github.com/repos/'
      + document.getElementById('owner').value
      + '/'
      + document.getElementById('repo').value
      + '/issues';

    core_ajax({
      'todo': function(result){
          document.getElementById('result-pre').innerHTML = result;
      },
      'url': url,
    });
}
