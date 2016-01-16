var fs = require("fs");
var data = '';
 
// 'input.text'파일을 읽을 수 있는 stream 생성
var readerStream = fs.createReadStream('input.txt');
 
// utf8로 인코딩
readerStream.setEncoding('UTF8');
 
// Handle stream events 
// 시작시 실행
readerStream.on('data', function(chunk) {   
    console.log('1.data');
    data += chunk;
});
 
// 종료시 실행 
readerStream.on('end',function(){    
    console.log('2.end');
    console.log(data);
});
 
// error 발생시 실행 
readerStream.on('error', function(err){
    console.log('3.error');
    console.log(err.stack);
});
 
console.log("Program Ended");
