var fs = require('fs');
// 判断一个文件是否存在
// 同步判断
	var judge_file = fs.existsSync('./dataAll-2')
	console.log(judge_file) // true
// 异步判断
	fs.exists('./dataAll-2',function(judge){
		console.log(judge) // true  文件存在
		console.log(arguments)
	})






