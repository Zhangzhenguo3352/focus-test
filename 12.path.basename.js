var path = require('path');
//获取当前路径中的文件名
	console.log(path.basename(__filename))      // 12.path.basename.js
	console.log(path.basename(__filename,'.js')) // 12.path.basename  去除文件 后缀
//获取文件的 扩展名
	console.log(path.extname(__filename)) //   .js
// 路径分割符, win 下 和 mac 先是不一样的
	console.log(path.sep) //      /
// 环境变量分割符 ， win下 和 linx 也是不一样的
	console.log(path.delimiter)//     :




