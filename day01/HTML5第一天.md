# HTML5 基础学习

## 1. 前言

### 1.1 HTML5简介 
1. HTML发展历程 : 1993 HTML1.0 > 1995 HTML2.0 > 1996 HTML3.2 > 1997 HTML4.0 
	> 1999 HTML4.01 > 2000 XHTML1.0 > 2001 XHTML1.1 > 2004 HTML5草案 > 2008年XHTML和HTML合并正式版本HTML5 > 2014 HTML5最终定稿
2. HTML5基本介绍 : HTML5并不仅仅只是做为HTML标记语言的一个最新版本，更重要的是它制定了Web应用开发的一系列标准，成为第一个将Web做为应用开发平台的HTML语言
3. HTML5工作中适用的情况 : 能够做很多富客户端（能做出很多体验和交互好的应用程序）,可以在浏览器内实现类原生应用，制作webApp，甚至结合Canvas我们可开发网页版游戏

### 1.2 HTML5语法规范
1. 早期HTML页面编码风格 : html4 快捷键：html:4s+tab， xhtml 快捷键： html:xt+tab
2. Doctype的作用 : 声明位于文档中的最前面的位置，处于 <html> 标签之前。此标签可告知浏览器文档使用哪种 HTML 或 XHTML 规范
3. HTML5新编码风格 : html:5+tab  或者 !+tab
4. [W3C在线验证](https://validator.w3.org/) 

## 2. 新语义标签

### 2.1 demo 网页经典布局

### 2.2 语义标签的复习 p img h1 ...

### 2.3 div配合Class布局的缺点
- 每个程序员的类名命名规范不一样不好统一例如头部有人用header 有人用head 造成不统一而且浏览器也不知道这就是网页的头部

### 2.4. HTML5常用新语义标签: 
- （1）header  （2）nav （3）section （4）aside  （5）article （6）footer （7） main
```html
<header>头部
	<nav>导航</nav>
</header>
<main>
	<aside>侧边栏</aside>
	<article>文章</article>
</main>
<footer>底部</footer>
```
### 2.5. HTML5新语义标签的兼容处理： 
- （1）if lt ie 9 条件注释 （2）引入htmlshiv.js包 （3） emmet语法： cc:ie6+tab
```html
	<!--[if lte IE 8]>
	<script src="html5shiv.js"></script>	
	<![endif]-->
```
## 3. HTML5表单

### 3.1 demo使用JS实现类似效果

### 3.2 HTML5新表单属性实现验证等效果#

### 3.3 输入类型标签

1. 常用输入类型属性 email tel url number search
2. 移动端和PC端新输入类型的区别
```html
	  <!--email 当PC端提交表单时 如果输入的不是邮箱格式会报错  在移动端会在键盘里多出@-->
        email:
        <input type="email" name="" id="">
        <br>
        <!-- tel在PC端无作用 在移动端能调出电话键盘 -->
        tel:
        <input type="tel" name="" id="">
        <br>
        <!-- url:在PC端提交表单时如果输入不是url格式会报错 在移动端键盘里会有.com -->
        url:
        <input type="url" name="" id="">
        <br>
        <!-- number在pc端限制只能输入数字 在移动端会调出数字键盘 -->
        number:
        <input type="number" name="" id="">
        <br>
        <!-- search在PC端无效果 在移动端右下角的enter的文字会变成搜索 -->
        search:
        <input type="search" name="" id="">
```
### 3.4 表单属性

1. autofocus: 自动获得焦点 
2. placeholder: 占位符	(可以在文本框里面写一些提示信息)
3. requie: 非空验证
4. pattern: 自定义验证规则
```html
	 请输入用户名：<input type="text" name="" id="" placeholder="请输入用户名" autofocus><br>
    请输入密码： <input type="text" name="" id="" required><br>
    请输入手机号： <input type="text" name="" id="" pattern="\d{11}"><br>
```
### 3.5 表单元素

1. meter: 进度条
2. keygen: 加密 (兼容问题目前使用很少)
3. datalist: 数据列表
```html
	<!-- 数据集合： 用于配合input做下拉选择数据提示 数据和select一样写法一样 写在option的value里面不是写在标签中间 需要将datalist和input关联起来才有效果 通过list属性指向datalist的id关联 -->
  <datalist id="source">
		<option value="HTML5"></option>
		<option value="CSS3"></option>
		<option value="JS"></option>
		<option value="Jquery"></option>
	</datalist>
	<input type="text" name="" id="" list="source">
	<br>
	<!-- 生成加密字符串 火狐浏览器有效果 -->
	<keygen>
	<br>
	<!-- output输出 类似于span但是通常在表单里面不用span用output输出一些内容 -->
	输出内容
	<output>输出</output>
	<br>
	度量器
	<meter value="0.5"></meter>
```
### 3.6 表单事件

1. oninput: 输入时会触发
```
	/*input事件是在表单进行输入的时候就会触发*/
		range.addEventListener('input',function () {
			score.innerHTML = '分数:'+range.value;
		});
```
2. oninvalid: 验证失败会触发 this.setCustomValidity('不填休想提交?');设置提示信息
```
		var username = document.querySelector('#username');
		/*invalid是在表单验证失败会触发例如requied不输入内容提交就会触发*/
		username.addEventListener('invalid',function () {
			// this.setCustomValidity('要修改的提示信息') 可以修改默认的提示内容
			this.setCustomValidity('请填写姓名');
		});
```
## 4. HTML5多媒体

### 4.1 网页中的多媒体解决方案： flash,git图片

### 4.2 HTML5中的多媒体标签： 
1. video标签的基本使用
		1. controls： 控制器 控制音频的开始和暂停的控制器
		2. loop: 循环 控制音频的循环播放次数
		3. autoplay: 自动播放 控制音频是否自动播放 
```html
	<audio src="music/薛之谦 - 演员.mp3" controls autoplay loop>
			<source src="music/薛之谦 - 演员.ogg">
			<source src="music/薛之谦 - 演员.wmv">
	</audio>
```
2. audio标签的基本使用
		1. controls： 控制器 控制视频的开始和暂停的控制器
		2. loop: 循环 控制视频的循环播放次数
		3. autoplay: 自动播放 控制视频是否自动播放 
		4. width: 宽度 控制视频区域的宽度
		5. height: 高度 控制视频区域的高度 但是宽度高度不会拉伸视频区域而会取最小值
```html
	<video src="video/movie.mp4" width="400" height="600">
		<source src="video/movie.wmv">
		<source src="video/movie.ogg">
	</video>
```
### 4.3 多媒体标签的缺点
1. 视频加密性问题
2. 视频版权问题

### 4.4 处理音频和视频的兼容性问题：
1.在视频或者音频标签里面添加多个source标签可以放置多个视频和音频文件，达到各种浏览器的支持
```html
	<source src="video/movie.wmv">	
	<source src="video/movie.ogg">
```
## 5. HTML5元素操作

### 5.1 获取元素
1. document.querySelector('选择器') 返回第一个元素 一般用来获取ID类型 需要返回第一个的时候
2. document.querySelectorAll('选择器') 返回所有元素 一般用来获取类选择器 标签选择器的时候用
```
/*在html5里面新增了两个获取元素的方式 
    1.document.querySelector('选择器') 根据选择器获取符合要求的第一个元素 可以是id 类 标签等等选择器 返回的是单个DOM元素对象
    2.document.querySelectorAll('选择器') 根据选择器获取符合要求的所有元素 也同样是可以是任意选择器 返回的是数组*/
    var box = document.querySelector('.box');
    var li = document.querySelector('ul li');
```
### 5.2 类名操作： 

1. dom.classList.add('类名')  添加类名
2. dom.classList.remove('类名')  删除一个类名
3. dom.classList.toggle('类名') 替换一个类名 有则删除无则添加
4. dom.classList.contains('类名') 查询一个类名 有则返回true无则返回false
```
for (var i = 0; i < lis.length; i++) {
	// classList 是html5新增的类名集合的对象 里面提供了4个方法
	// add('类名')添加类名
	// remove('类名') 删除一个类名
	// toggle('类名')替换一个类名 有则删除无则添加
	// contain('类名')查询一个类名 有则返回true无则返回false
	lis[i].classList.remove('active');
}
this.classList.add('active');
```

## 6. 自定义属性
### 6.1 HTML5自定义属性简介 : 
- 用来给定义一些和DOM强相关的数据 一般用在一些JS特效tab栏 轮播图等

### 6.2 data-*的使用 
- 直接在标签上添加data-属性="属性值"
```html
	<div data-info="student">
		<p data-name="张三">张三</p>
		<p data-age="19">19</p>
		<p data-hobby="打篮球">打篮球</p>
	</div>
```

### 6.3. JS操作data-自定义属性的方式

1. 原生JS：  dataset['属性名']  不包含data- ， getAttribute('data-属性名') 包含data-	
```
// 获取自定义属性有两种方式 可以通过getAttribute('属性名') 的方式获取但是这种方式要写完整属性名 例如data-name 要都写并且不能用驼峰命名法 一定要写data-name不能写dataName
	console.log(info[0].getAttribute('data-name'));
//第二种方式是HTML5新增的专门获取自定义属性的方式 dataset['属性名'] 这种方式属性名只要写data-后面的内容 比如 data-name 只要写name 注意这是一个数组是[]不是方法
//而且如果是有两个-的要驼峰命名法 例如data-student-name 要写 dataset['studentName']
console.log(info[0].dataset['name']);
```
2. Jquery： dom.data('属性名') 不包含data- , dom.attr('data-属性名') 包含data-
```
//第三种方式是jquery的方式 data('属性名') 这种方式也和dataset一样不需要带data-只需要data-后面的名字 
// $(info[0]).data('name');
// 第四种方式是jquery的方式 attr('属性名') 这种方式和getAttribute()一样要写全名 带data-
// $(info[0]).attr('data-name');
```
### 6.4 自定义属性案例

1. 给所有的导航定义一个自定义属性data-target="对应的内容的选择器" 来将导航和面板内容标签通过自定义属性的选择器关联起来
2. 删除所有面板内容的active类名
3. 通过获取当前点击的元素的data-target属性的值 来获取对应的元素 添加active类名

4. 代码
```html		
     <nav>
        <ul>
        		<!-- 定义一个自定义属性data-target指定当前导航控制的是哪个新闻面板 这里使用id选择器来关联也可以用类名 -->
            <li class="item active" data-target="#news01"><a href="#" >全部新闻</a></li>
            <li class="item" data-target="#news02"><a href="#">国内新闻</a></li>
            <li class="item" data-target="#news03"><a href="#">国际新闻</a></li>
            <li class="item" data-target="#news04"><a href="#">体育新闻</a></li>
        </ul>
    </nav>
     <main>
        <section class="active" id="news01">
            <p> 全部新闻</p>
        </section>
        <section id="news02">
            <p> 国内新闻</p>
        </section>
        <section id="news03">
            <p> 国际新闻</p>
        </section>
        <section id="news04">
            <p> 体育新闻</p>
        </section>
    </main>
```

```
		var lis = document.querySelectorAll('nav ul li');
	  var news = document.querySelectorAll('main section');
	  for (var i = 0; i < lis.length; i++) {
	  	//给所有li添加一个Index索引
	      // lis[i].index = i;
	      lis[i].addEventListener('click', function() {
	          for (var i = 0; i < lis.length; i++) {
	              lis[i].classList.remove('active');
	          }
	          this.classList.add('active');
	          for (var i = 0; i < news.length; i++) {
	              news[i].classList.remove('active');
	          }
	          // 通过选中news[this.index]选中当前li索引对应的section添加active类名
	          // news[this.index].classList.add('active');
	          //通过获取当前li的data-target存储的选择器对应的元素(就是当前li对应的新闻块)添加 active类名
	          document.querySelector(this.dataset['target']).classList.add('active');
	      });
	  }
```
