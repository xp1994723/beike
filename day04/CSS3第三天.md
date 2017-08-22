## 3D 转换
1. XYZ轴的概念:
    1. X轴水平轴 水平方向 正值往右负值往左
    2. Y轴垂直轴 垂直方向 正值往下负值网上
    3. Z轴前后轴 前后方向 正值往后负值往前
2. perspective(透视)
   1. 电脑显示屏是一个2D平面，图像之所以具有立体感（3D效果），其实只是一种视觉呈现 ，通过透视可以实现此目的。
  透视可以将一个2D平面，在转换的过程当中，呈现3D效果。（没有perspective，便“没有”Z轴）
   2. perspective有两种写法
        1. 作为一个属性，设置给父元素，作用于所有3D转换的子元素
        2. 作为transform属性的一个值，做用于元素自身
        3. perspective:1000px;

3. transform-style

## 动画  

1. 关键帧动画
    1. 关键帧动画就是有一张很长的图里面有很多动作在不同时刻切换到不同的动作对应的位置
2. 自定义动画
    1. 必要元素：
      a、通过@keyframes指定动画序列；
      b、通过百分比将动画序列分割成多个节点；
      c、在各节点中分别定义各属性
      d、通过animation将动画应用于相应元素；
    2. 关键属性
      a、animation-name设置动画序列名称
      b、animation-duration动画持续时间
      c、animation-delay动画延时时间
      d、animation-timing-function动画执行速度，linear、ease等
      e、animation-play-state动画播放状态，running、paused等
      f、animation-direction动画逆播，alternate等
      g、animation-fill-mode动画执行完毕后状态，forwards、backwards等
      h、animation-iteration-count动画执行次数，inifinate等
      i、steps(60) 表示动画分成60步完成

3. 动画库的使用animate.css
    1. 引包引入animate.css
    2. 调用动画 把类名加到需要加动画的元素上
    3. 设置动画的执行时间
    4. 注意使用的时候需要设置元素的动画执行时间不然看不到效果

## 兼容性

1. 通过http://caniuse.com/ 可查询CSS3各特性的支持程度，一般兼容性处理的常见方法是为属性添加私有前缀，如不能解决，应避免使用，无需刻意去处理CSS3的兼容性问题