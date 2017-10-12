## HTML5了解 知道HTML5是什么 新一代web富客户端端整体解决方案  他能够干什么 能做很好看的网页 PC,APP,weiChat端应用程序 一些游戏 

## HTML5的基本语法规范 和语义化标签 

## HTML5的智能表单 输入类型 输出类型 表单属性

## 多媒体 视频和音频

## DOM扩展 获取元素 添加事件监听 类名操作 自定义属性

# HTML5 API学习

## online 网络状态
	## 可以提供网络状态的显示
	## 给window对象添加一个online 事件 或者 offline事件 ，如果有断网 和 连网操作就会触发这个事件 触发了会给出一些提示信息
	## 应用不是特别广泛 可以做一些网络是否接通的提示

## fullscreen 全屏
	## 可以让网页或者某个元素全屏在窗口显示
	## 可以实现一些PPT放映操作 和播放视频等地方用到
	## 开启全屏 requestFullScreen()  不同浏览器要加上前缀
	关闭全屏 cancelFullScreen() 不同浏览器要加上前缀
	fullScreen 不同浏览器要加上前缀 webkitIs
	## 应用也不是很多 


## 拖拽
	1.拖拽事件 
		1.拖拽物的事件： drag dragstart dragleave dragend
		2.目标物的事件: dragenter dragover dragleave drop 
		3.重点掌握 dragstart dragover drop
## 1. 网络状态 有2个事件 online offline  navigator.online
	2. 全屏操作 只有2个方法 开启全屏 requestFullScreen() 注意添加浏览器前缀和关闭全屏cancelFullScreen() 有兼容性 特殊document.cancelFullScreen() 还有一个属性 fullScren  webkitIsFullScreen
	3. 拖拽操作 8个事件 只要掌握dragstart(拖拽物) drop dragover（目标物）
		拖拽事件对象 dataTransfer属性存储了拖拽相关的信息 getData('text') text/uri-list(读取图片) text/plain 读取文字

## drag 拖拽

1. 什么叫拖拽:就是一个文字 或者 图片 或者标签 或者文件进行拉选然后拖拽的操作
2. 为什么要学习拖拽: 开发中会有一些情况比如将一些文字拖拽到一块区域显示,
或者图片拖拽到一些区域或者盒子拖拽 甚至文件拖拽等等很多地方用到
3. 怎么学习拖拽:
	 1. 首先要支持拖拽 默认 a标签 ,文字, 图片标签是支持拖拽的 div之类盒子默认是不支持的 想要支持拖拽 在标签里面加上 draggable="true"
	 2. 目标元素: 就是拖拽物要放入到的一个目标,可能是一个盒子 可能是一个页面
	 3. 拖拽事件 分类两种 
		1. 拖拽元素事件
			1. ondrag 整个过程都会触发
			2. ondragstart 拖拽开始的时候触发
			3. ondragleave 鼠标离开拖拽物的时候触发
			4. ondragend 拖拽结束触发
		2. 目标元素事件
			1. ondragenter	当拖拽元素进入时调用
			2. ondragover	当停留在目标元素上时调用
			3. ondrop		当在目标元素上松开鼠标时调用
			4. ondragleave	当鼠标离开目标元素时调用
		3. 事件对象 dragevent
			1. dataTransfer 属性 存储拖拽物的一系列数据
			2. getData() 方法 获取拖拽物的一些数据 
			3. setData() 方法 设置拖拽物的一些数据
4. 总结: 可以做一些页面上的拖拽效果 例如 盒子拖拽,图片拖拽,文字拖拽

## 文件操作 
	1.file 对象 在拖拽文件的时候e.dataTransfer.files[0]; 然后 input:file里面选择的文件也是file对象
	2.fileReader实例 var reader = new fileReader(); 
	3.使用reader实例去读取文件 读取的方式有3种readAsText() 以读取文本的形式读取文件
	readAsDataURL() 以DataURL的形式读取文件 readAsBinaryString() 以二进制的形式读取文件 重点掌握前两个
	4.读取的时候需要添加一个load读取完成事件才能拿到读取的结果 reader.result属性里面

## file 文件操作

1. 什么是文件操作: 就是读写文件等等一系列操作		
2. 为什么要学习文件操作: 因为现在的前端业务越来越广泛,有些时候也会涉及到读写文件等等操作,例如上传头像等等
3. 如何学习文件操作:
	1. FileList 文件集合对象 
		1. 是一个文件对象的集合里面可以放好多个文件对象(伪数组)
	2. FileReader 文件读写对象
		1.实例化对象 var file = new FileReader();
		2.读取文件方法 readAsDataURL() 以DataURL() 方式读取 返回的是 支持url传递的数据类型 (就是url里面放的一堆编码)
	3. onload事件 读取完成之后触发的事件
	4. 事件对象event
		1. result属性 事件对象的返回结果e.result 返回的dataurl格式的字符串
## geolocation 地理定位
1. 什么是地理定位: 就是获取你当前的位置
2. 为什么要学习地理定位: 可以做一些地图,或者购物设置收获地址,天气等等需要地址的地方等等
3. 如何学习地理定位:
	1. 获取当前位置API
		- navigator.geolocation.getCurrentPosition(callback)
	2. 重复获取当前位置
		- navigator.geolocation.watchPosition(callback)
	3. 事件对象position对象
		- position.coords.latitude 纬度
		- position.coords.longitude 经度
4. 总结: 应用在一些地图 ,导航 天气等等一些地方 ,可以搭配百度地图做出很多功能

## storage web存储

1. 什么是web存储: localStorage 本地存储 ,sessionStorage 会话存储
可以存储一些网页上需要的数据
2. 为什么要学习web存储: 可以用来存储网页上的数据 要用到的时候直接渲染到页面上 提升网站性能,做到一些缓存的效果
3. 如何学习
	1. 理解2种web存储方式的区别 localStorage 永久存储 除非手动删除
	sessionStorage 临时存储 关闭浏览器清除
	2. 2个存储对象都是属于window 分别为window.sessionStorage, window.localStorage 
	3. 存储的方法
		1.setItem(key,value) 根据键设置存储的内容
		2.getItem(key,value) 根据键获取存储的内容
		3.removeItem(key) 根据键删除存储的内容
		4.clear() 清空所有存储的内容
		5.key(n) 以索引值来存储内容
		6.注意 存储的key是不能重复的 相当于数组的下标一样
4. 总结: 以后开发中一般用来存储一些不是很重要的用户信息,或者一些网站里面比较固定的内容 方便后续网站打开的速度,减轻服务器压力

## appCache 应用缓存

1. 什么是应用缓存: 就是可以实现无网络状态访问一个应用或者一个网站
2. 为什么要学习应用缓存: 可以实现网页的离线访问 提升用户体验 特别是手机端的体验
3. 如何学习
	1. 设置缓存清单文件
		1. 在页面的html 节点添加manifest="demo.manifest"  保证文件在网页的旁边
	2. manifest文件格式
		1. 顶部写 CACHE MANIFEST
		2. version: 1.0.0 指定缓存的版本 一旦版本更改了浏览器可以重新缓存 ,可以实现缓存的同步更新
		3. CACHE: 换行 tab 指定需要缓存的静态资源 如.css .js .html等
		4. NETWORK: 换行 tab 指定需要在线访问的资源 ,可使用通配符 * 等等
		5. FALLBACK: 换行 tab 当被缓存的文件找不到的备用资源
