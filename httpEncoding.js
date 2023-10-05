// 요청 내장 모듈 중에 http를 사용하겠다.
const http = require('http');

const server = http.createServer(function(request, response) {
  // console.log(request);
  console.log(typeof(response));
  // 콜론을 쓰는 이유는 http 프로토콜의 일반이기 때문이다.
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  let doc = `<html> <head> <style> h1 {color : salmon;} </style> </head> <body> <h1> hello </h1> </body> </html>`
  // end 끝맺음을 변수로 지정
  // 따옴표를 사용하지 않아도 되는게 마치 html작성법과 똑같음
  response.end(doc);
});

server.listen(1234);