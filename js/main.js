'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'fetch': {
          'onclick': fetch,
        },
      },
      'globals': {
        'result_issues': [],
      },
      'keybinds': {
        13: {
          'todo': fetch,
        },
      },
      'title': 'IssueExport.htm',
    });
}
