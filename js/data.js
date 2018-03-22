'use strict';

function fetch(){
    var url = 'https://api.github.com/repos/'
      + document.getElementById('owner').value
      + '/'
      + document.getElementById('repo').value
      + '/issues?per_page=100'
      + '&direction=' + document.getElementById('direction').value
      + '&sort=' + document.getElementById('sort').value
      + '&state=' + document.getElementById('state').value;

    var labels = document.getElementById('labels').value;
    if(labels.length > 0){
        url += '&labels=' + labels;
    }
    var since = document.getElementById('since').value;
    if(since.length > 0){
        url += '&since=' + since;
    }

    core_ajax({
      'todo': function(result){
          document.getElementById('results-json').value = result;

          result_issues = JSON.parse(result);

          var table_html = '';
          for(var issue in result_issues){
              table_html += '<tr>'
                + '<td>' + result_issues[issue]['number']
                + '<td><a class=external href=' + result_issues[issue]['html_url'] + ' target=_blank>' + core_html_format({
                  'string': result_issues[issue]['title'],
                }) + '</a>'
                + '<td><a class=external href=https://github.com/' + result_issues[issue]['user']['login'] + ' target=_blank>' + result_issues[issue]['user']['login'] + '</a>'
                + '<td>' + result_issues[issue]['created_at']
                + '<td>' + result_issues[issue]['comments']
                + '<td>' + result_issues[issue]['state'];
          }
          document.getElementById('results-table').innerHTML = table_html;
      },
      'url': url,
    });
}
