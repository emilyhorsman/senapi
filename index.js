var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'application/json'
  });

  response.write(JSON.stringify({
    'actor': {
      'senpai': 'https://twitter.com/emilymhorsman'
    },

    'verb': {
      'id': 'noticed',
      'display': {
        'en-US': 'noticed'
      }
    },

    'object': {
      'id': 'you'
    }
  }));

  response.end();
}).listen(process.env.PORT);
