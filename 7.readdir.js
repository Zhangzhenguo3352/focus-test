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



