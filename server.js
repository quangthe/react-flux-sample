var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '.')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function (req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

/*
  Get the environment list and its spaces
 */
app.get('/api/env-list', function (req, res) {
  var data = [
    {id: 1, name: 'Live', spaces: [
      {id: 1, name: 'Corporate site'},
      {id: 2, name: 'QA site'},
      {id: 3, name: 'Live site'}
    ]},
    {id: 2, name: 'QA', spaces: [
      {id: 1, name: 'Corporate site'},
      {id: 2, name: 'QA site'}
    ]},
    {id: 3, name: 'Development', spaces: [
      {id: 2, name: 'QA site'},
      {id: 3, name: 'Live site'}
    ]}
  ];
  res.json(data);
});

/*
  Get the instance list of a space
 */
app.get('/api/space/:id', function (req, res) {
  var data = {
    1: [
      {
        id: '1',
        name: 'Public instance 1',
        version: '1',
        status: 'ok'
      },
      {
        id: '2',
        name: 'Public instance 2',
        version: '2',
        status: 'not ok'
      }
    ],
    2: [
      {
        id: '3',
        name: 'Public instance 3',
        version: '2',
        status: 'ok'
      }
    ],
    3: [
      {
        id: '2',
        name: 'Public instance 2',
        version: '2',
        status: 'not ok'
      },
      {
        id: '4',
        name: 'Public instance 4',
        version: '3',
        status: 'ko'
      }
    ]
  };
  res.json(data[req.params.id]);
});

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '.', 'index.html'))
});

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
