var fs = require('fs');
// 创建目录, 同步 和 异步不能一起执行
// 同步创建目录
	fs.mkdirSync('a/aa/aa')
// 异步创建目录
	//如果是异步 最后一个参数一定就是回调参数
	fs.mkdir('b/asa/sss',function(err){
		console.log(err)
	})














