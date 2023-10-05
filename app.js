// 요청 내장 모듈 중에 http를 사용하겠다.
const http = require('http');

const server = http.createServer(function(request, response) {
  // console.log(request);
  console.log(typeof(response));

});

server.listen(1234);