// 멀티 페이지 만들기
// 요청 내장 모듈 중에 http를 사용하겠다.
const http = require('http');

// 메모점 url === / 일치 조건
// a태그의 주소는 /
// a태그의 주소 서브는 /sub
const server = http.createServer(function(request, response) {
  if(request.url === "/") {
    let doc = `<html><head><style>div {color : salmon}
    </style></head><body><div>연어는 영어로 salmon</div><a href="/sub">서브 페이지</a> </body></html>`
    // 맥락이 비슷하게 생김
    // meta http-equiv='Content-Type' content='text/html; charset=utf-8'
    // 인코딩 값을 UTF-8 방식으로 하겠다는 것
    // 깨지는 글자가 나오지 않음
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(doc);
  }
  if(request.url === "/sub") {
    let doc = `<html><head></head><body><a href="/">메인 페이지</body></html>`
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.end(doc);
  }
});

server.listen(1234);