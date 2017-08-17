## CSS3现状
1、浏览器支持程度差，需要添加私有前缀
2、移动端支持优于PC端
3、不断改进中
4、应用相对广泛
## CSS3实际工作情况
1、坚持渐进增强原则
2、考虑用户群体
3、遵照产品的方案
4、听Boss的
## 如何使用CSS手册
1. []	表示一个区块
2. ||	并列
3. |	多选一
4. ?	0个或1个
5. *	0个或多个
6. {}	范围

## 属性选择器

1. E[attr]		存在attr属性即可
2. E[attr=val]		属性值完全等于val
3. E[attr*=val]		属性值里包含val字符并且在“任意”位置
4. E[attr^=val]		属性值里包含val字符并且在“开始”位置
5. E[attr$=val]		属性值里包含val字符并且在“结束”位置

## 伪类选择器
1. 前面4个是选中第多少个子元素 如果不是这种类型选不中
	E:first-child
	E:last-child
	E:nth-child(n)
	E:nth-last-child(n)
2. 后面4个是选中第多少个当前类型的子元素
	E:first-of-type
	E:last-of-type
	E:nth-of-type(n)
	E:nth-last-of-type(n)

## 伪元素选择器
1. E::before和E::after 在E元素内部的开始位置和结束位创建一个元素，该元素为行内元素，且必须要结合content属性使用。

## 过渡
- transition属性拆解如下：
		1. transition-property		设置过渡属性
		2. transition-duration		设置过渡时间
		3. transition-timing-function		设置过渡速度
		4. transition-delay		设置过渡延时
- transition过渡属性连写： 
		1. transition: 属性 时间 速度 延时; transition: all 1s ease-in 2s;

## 渐变
1. linear-gradient线性渐变指沿着某条直线朝一个方向产生渐变效果
	第一个参数表示渐变的方向 可以写方位名词  也可以写角度
  第二个参数表示渐变的初始颜色
  第三个参数表示渐变的结束颜色
  background-image: linear-gradient(180deg,#fff , #333);
2. radial-gradient径向渐变指从一个中心点开始沿着四周产生渐变效果
	第一个 100px是指水平半径是100px 
	第二个 50px是指垂直半径是50px (也可以用circle 和 ellipse这两个值表示)
	at 是固定写法
	第三个 150px 是指水平的坐标150px 
	第四个150px指的是垂直的坐标150px 
  background-image: radial-gradient(ellipse at 150px 150px,#f00 ,#ff0 );

## 颜色
1. RGBA
	Red、Green、Blue、Alpha即RGBA
	R、G、B 取值范围0~255 表示红绿蓝三原色所占的值
	A 透明度 取值范围0~1
2. HSLA
	Hue、Saturation、Lightness、Alpha即HSLA
	H 色调 取值范围0~360，0/360表示红色、120表示绿色、240表示蓝色
	S 饱和度 取值范围0%~100%
	L 亮度 取值范围0%~100%
	A 透明度 取值范围0~1
3. transparent 透明 指的是取父元素的颜色值

## 阴影
1. text-shadow，可分别设置偏移量、模糊度、颜色（可设透明度）。
如：text-shadow: 2px 2px 2px #CCC;
		1. 水平偏移量 正值向右 负值向左；
		2. 垂直偏移量 正值向下 负值向上；
		3. 模糊度是不能为负值；
1. box-shadow，可分别设置偏移量、模糊度、颜色（可设透明度）。
如：box-shadow: 2px 2px 2px #CCC;
		1. 水平偏移量 正值向右 负值向左；
		2. 垂直偏移量 正值向下 负值向上；
		3. 模糊度是不能为负值；

