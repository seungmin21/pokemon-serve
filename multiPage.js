// 요청 내장 모듈 중에 http를 사용하겠다.
// 콘솔로 멀티페이지를 작성
const http = require('http');

const server = http.createServer(function(request, response) {
  console.log(request.url);
  // 멀티페이지
  // 메인
  if(request.url==="/") {
    console.log("메인 요청입니다.")
  }
  // 서브
  if(request.url=== "/sub") {
    console.log("서브입니다.");
  }
});

server.listen(1234);