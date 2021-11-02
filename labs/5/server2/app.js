const express = require('express');
const url = require('url');
const app = express();

const connection = require('./modules/db');
const { saveScore, getScores } = require('./modules/utils');

const PORT = process.env.PORT || 8000;
const endpoint = '/api/score';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-with');
  next();
});

app.get(endpoint, (req, res, next) => {
  const respond = (result) => {
    res.status(200).json({
      success: true,
      message: result ? JSON.parse(JSON.stringify(result)) : null
    })
  }

  getScores().then(respond)
             .catch(next);
})

app.post(endpoint, (req, res, next) => {
  let body = '';

  const respond = (result) => {
    res.status(200).json({
      success: true,
      message: result
     });
  }

  req.on('data', chunk => {
    if (chunk) body += chunk;
  });
  req.on('end', () => {
    const { name, score } = JSON.parse(body);
    saveScore(name, score).then(respond)
                          .catch(next);
  })
})

app.use((err, req, res, next) => {
  const statusCode = err.code && (err.code >= 100 && err.code < 600) ?
                     err.code :
                     400;
  res.status(statusCode).json({
    success: false,
    message: err.message
  });
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log('Listening to port', PORT);
})
