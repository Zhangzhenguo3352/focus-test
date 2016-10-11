# focus-test
```
var fs = require('fs');
// 创建目录, 同步 和 异步不能一起执行
// 同步创建目录
	fs.mkdirSync('a/aa/aa')
// 异步创建目录
	//如果是异步 最后一个参数一定就是回调参数
	fs.mkdir('b/asa/sss',function(err){
		console.log(err)
	})
```
```
var fs = require('fs');
//读取指定目录下所有文件，结果是个数组
//同步读取指定目录
	var obj = fs.readdirSync('./dataAll')
	//console.log(obj)  //  [ 'a.txt', 'b.txt', 'br0.jpg', 'br1.jpg' ]
//异步读取指定目录	
	var obj2 = fs.readdir('./dataAll',function(err,data){
		if(err){
			//console.log(err)
		}else{
			//console.log(data) // [ 'a.txt', 'b.txt', 'br0.jpg', 'br1.jpg' ]
			
		}
	})
// 异步读取文件
	var obj3 = fs.readdir('./dataAll-2',function(err,data){
		if(err){
			console.log(err)
		}else{
			data.forEach(function(file){
				fs.stat('./dataAll-2/'+file,function(err,stat){
					// stat.isDirectory() 是不是一个文件
					if(stat.isFile()){ // 是一个文件
						fs.readFile('./dataAll-2/'+file,function(err,data){
							if(err){
								console.log(err)
							}else{// 读到文件
								console.log(data.toString()) 
								//bbb
								//aaa
							}
						})
					}else{
						// 是一个目录
						console.log('这是一个目录')
					}
				})

				
			})
		}
	})




```

```
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


```
```
var fs = require('fs');
// 判断文件或文件夹是否存在
// 同步判断
	var judge_file = fs.existsSync('./dataAll-2')
	console.log(judge_file) // true
// 异步判断
	fs.exists('./dataAll-2',function(judge){
		console.log(judge) // true  文件存在
		console.log(arguments) // { '0': true } 第 0 个参数是 true
	})
```
```
var path = require('path');
//根据相对路径获取 文件绝对路径
	console.log(path.join(__dirname,'dataAll-2'))
	// 绝对路径是 /Users/zhangzhenguo/muip/focus-test/dataAll-2   


```
```
var path = require('path');
// 得到绝对路径
	console.log(path.resolve()) 
	console.log(path.resolve('dataAll-2')) 
	console.log(path.resolve('dataAll-2','..'))

//	/Users/zhangzhenguo/muip/focus-test
//  /Users/zhangzhenguo/muip/focus-test/dataAll-2
//  /Users/zhangzhenguo/muip/focus-test
```
```
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

```













