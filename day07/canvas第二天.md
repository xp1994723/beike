# Canvas 第2天

## 绘制矩形相关的方法
```js
ctx.rect(x, y, w, h);
//x, y: 矩形左上角的坐标
//w, h: 矩形的宽高

//功能： 绘制一个矩形的路径

ctx.strokeRect(x, y, w, h);
//绘制一个描边矩形
//有自己的路径，下面的任何操作不会对他产生影响

ctx.fillRect(x, y, w, h)
//绘制一个填充矩形
//有自己的路径，下面的任何操作不会对他产生影响

ctx.clearRect(x, y, w, h)
//清除一个矩形的区域
```

## 绘制圆弧
```js
ctx.arc(x, y, r, startAngle, endAngle, anticlockwise)
//x, y： 圆心坐标
//r: 半径
//startAngle endAngle: 起始角度和结束角度，为弧度制！   0度角在x轴的正方向
//anticlockwise: 可选参数，默认为false，表示是否逆时针绘制！
```

## 绘制扇形
1. moveTo到圆心
2. 画弧
3. closePath

## 绘制饼图


## 根据数据绘制饼图
1. 算数据总和
2. 算比例求角度
3. 根据角度绘制扇形！