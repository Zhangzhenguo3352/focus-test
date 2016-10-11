var fs = require('fs');
//获取文件详情描述，如：文件创建时间、修改时间
// 同步查看文件描述
	var file_info = fs.statSync('./dataAll-2/a.txt')
	console.log(file_info)
	/*
		只用就有这五项
		size: 3,                        // 文件大小
		atime: 2016-10-11T13:09:16.000Z,
		mtime: 2016-10-11T12:55:11.000Z, // 修改时间只要改过就会变
		ctime: 2016-10-11T13:04:28.000Z, // 改变时间，只有内容改了才会变
		birthtime: 2016-10-11T12:54:52.000Z
	*/
// 异步查看文件描述
	var file_info_1 = fs.stat('./dataAll-2/a.txt',function(err,data){
		console.log(data)
	})
















