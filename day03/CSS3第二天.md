## 边框
  1. 边框圆角
        1. 边框圆角的实现原理 在4个角分别是左上 右上 右下 左下 设置一个圆 然后裁切掉圆弧以外的部分形成圆角
        2. 语法border-radius:10px 10px 10px 10px / 10px 10px 10px 10px;
        有8个值前4个表示4个角的的圆水平半径  后4个表示4个角的圆的垂直半径        
  2. 边框阴影
        1. 实现原理在盒子周围加一个阴影和盒子本身有一个对比突出盒子显得有点立体感
        2. 语法box-shadow:1px 1px 1px #ccc; box-shadow:inset 1px 1px 1px #ccc;
        分别表示水平偏移 垂直偏移 模糊的 和阴影颜色  inset表示内阴影 内阴影不能超出盒子范围
  3. 边框图片
        1. 实现原理:给盒子加边框 然后加边框图片给图片裁切
        2. 语法 border-image:url(路径) 33 33 repeat;
        border-image-source图片路径
        border-image-slice边框图片裁切位置
        border-image-width边框图片大小
        border-image-repeat边框图片是否平铺
        3. 一些盒子边框的花纹 如相框之类的 应用不多了解即可
    
## 背景
  1. background-size：背景尺寸(大小)   
        1. 语法:background-size:auto | cover | contain | 百分比 | 具体像素;
        auto:默认 表示自动图片该多大就多大
        cover:表示根据背景图的最小边缩放到盒子对应的边 然后最大边也等比例缩放
        contain:表示根据背景图的最大边缩放到盒子对应的边 然后最小边也等比例缩放
        百分比: 设置具体的背景大小百分比 第一个水平的百分比 第二个表示垂直的百分比 百分比是相对盒子大小
        具体像素: 具体的背景大小水平像素 垂直像素
  2. background-origin：背景原点(定位原点)
        1. 其参数设置如下：
            border-box以边框做为参考原点；
            padding-box以内边距做为参考原点；
            content-box以内容区做为参考点；
  3. background-clip：背景裁切
        1. 其参数设置如下：
            border-box裁切边框以内为背景区域；
            padding-box裁切内边距以内为背景区域；
            content-box裁切内容区做为背景区域；
  4. background：url(),url();多背景

## 2D转换
1. X轴和Y轴的概念
    1. X轴就是水平轴 正值往右负值往左
    2. Y轴就是垂直轴 正值往下负值网上
1. 位移 translate(x, y) 可以改变元素的位置，x、y可为负值；
        1. 移动位置相当于自身原来位置        
        2. 除了可以像素值，也可以是百分比，相对于自身的宽度或高度
2. 缩放 scale(x, y) 可以对元素进行水平和垂直方向的缩放，x、y的取值可为小数；
3. 旋转 rotate(deg) 可以对元素进行旋转，正值为顺时针，负值为逆时针；
        1. 当元素旋转以后，坐标轴也跟着发生的转变
        2. 调整顺序可以解决，把旋转放到最后
4. 倾斜 skew(deg, deg) 可以使元素按一定的角度进行倾斜，可为负值，第二个参数不写默认为0。
5. 转换原点 transform-origin:x轴的原点 y轴原点; transform-origin:center center;

## 盒模型
1. CSS3中可以通过box-sizing 来指定盒模型，即可指定为content-box、border-box，这样我们计算盒子大小的方式就发生了改变。
可以分成两种情况：
        1. box-sizing: border-box  盒子大小为 width
        2. box-sizing: content-box  盒子大小为 width + padding + border
