/*
 * @Author: zhengwei
 * @Date:   2017-10-10 17:11:05
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-10-10 18:24:18
 */
$(function() {
    // 调用fullpage插件
    $('#fullpage').fullpage({
        // 是否显示项目导航 但是注意调用了也可能不显示 还需要引入fullpage的css文件
        navigation: true,
        scrollingSpeed: 1200,
        //afterLoad回调函数是当滚动到下一屏滚动完成后调用的回调函数
        //接收两个参数anchorLink 是锚点的名称  index是当前滚动到屏幕的索引号 从1开始
        afterLoad: function(anchorLink, index) {
            //判断滚动到了第二屏
            if (index == 2) {
                //调用第二屏动画的方法
                section2Animate();
            }
            //判断滚动到了第三屏
            if (index == 3) {
                //调用第三屏的动画方法
                section3Animate();
            }
            //判断滚动到了第四屏
            if (index == 4) {
                //调用第四屏的动画方法
                section4Animate();
            }
            //判断滚动到了第五屏
            if (index == 5) {
                //调用第五屏的动画方法
                section5Animate();
            }
            //判断滚动到了第六屏
            if (index == 6) {
                //调用第六屏的动画方法
                section6Animate();
            }
            //判断滚动到了第七屏
            if (index == 7) {
                //调用第七屏的动画方法
                section7Animate();
            }
            //判断滚动到了第八屏
            if (index == 8) {
                //调用第八屏的动画方法
                section8Animate();
            }
        },
        //onleave是当滚动就会调用的回调函数
        //index 是当前要离开的屏幕的索引  nextIndex是要滚动到的屏幕的索引 direction是滚动的方向 有两个up向上 down向下
        onleave: function(index, nextIndex, direction) {
            //
        }
    });


    function section2Animate() {
        // 让右侧的搜索框显示 并且从右往左移动到right370px的位置
        $('.section2-search1').show().animate({
            'right': '370px'
        }, 1000, function() {
            //搜索框移动完后 里面的搜索文字图片渐渐的出现
            $('.section2-search1 img').animate({
                'opacity': 1
            }, 500, function() {
                //第一个搜索框和文字动画完后隐藏
                $('.section2-search1').hide();
                // 显示第二个带有文字的搜索框 同时往右上角移动到right 270px和 bottom452px的位置 同时高度变小到30px
                $('.section2-search2').show().animate({
                    'right': '270px',
                    'bottom': '452px',
                    'height': '30px'
                }, 1000);
                //第二个搜索框移动的同时 所有沙发的图片显示 并且变大
                $('.section2-sofas').show().animate({
                    'height': '218px',
                    'width': '441px'
                }, 1000);
                // 同时上方的第二个文字渐渐的显示 覆盖之前的文字
                $('.section2-words2').animate({
                    'opacity': 1
                }, 1000)
            })
        })
    }

    function section3Animate() {

    }

    function section4Animate() {
        // 沙发从上往下掉下来到购物车里面
        $('.section4-cart img').eq(0).animate({
            'bottom': '200px'
        }, 1500, 'easeOutExpo', function() {
            //沙发掉下来后购物车开始往右走走到left 150%的位置看不见车
            $('.section4-cart').animate({
                'left': '150%'
            }, 2000, 'easeInOutElastic', function() {
                //购物车走完后收货地址信息单显示 同时让里面的收货地址信息渐渐的显示
                $('.section4-address').show().children(0).animate({
                    'opacity': 1
                }, 1000);
                //同时把收货地址上面的第二个文字渐渐的显示覆盖之前的文字
                $('.section4-words2').animate({
                    'opacity': 1
                }, 1000);
            });
        })
    }

    function section5Animate() {
        // 沙发显示同时往下掉到银行卡下面
        $('.section5-sofa').show().animate({
            'bottom': '70px'
        }, 1000, 'swing', function() {
            //银行卡信息显示 同时移动到银行卡的上方
            $('.section5-order').show().animate({
                'bottom': '390px'
            }, 1000, 'swing', function() {
                // 小手从下往上出现移动到鼠标的位置
                $('.section5-hand').show().animate({
                    'bottom': "0px"
                }, 1000, 'swing', function() {
                    //小手移动完后鼠标显示成第二个左键被点击的图片把之前的鼠标覆盖
                    $('.section5-mouse2').show();
                    // 最后让上方的提示文字旋转显示
                    $('.section5-words').addClass('section5-words-rotate');
                });
            });
        });
    }

    function section6Animate() {
        // 沙发从上往下掉下来
        $('.section6-sofa').show().animate({
                'bottom': '500px',
                'left': '40%'
            }, 1500, function() {
                //掉到装沙发的盒子里面的时候隐藏
                $(this).hide();
            })
            //同时装沙发的盒子从左往右移动
        $('.section6-box').show().animate({
            'left': '38%'
        }, 1500, function() {
            //接到沙发之后往下掉到车里
            $(this).animate({
                'bottom': '40px'
            }, 1000, function() {
                // 掉到车里之后隐藏当前的装沙发的盒子
                $(this).hide();
                // 让车从左往右动起来(原理就是切换背景的定位值显得背景在动就显得车在走)
                $('.section6').animate({
                    'backgroundPositionX': '100%'
                }, 3000, function() {
                    //车停止之后让接到的信息显示出来
                    $('.section6-street').show();
                    //同时让送货的小男孩变高同时站起来
                    $('.section6-boy').show().animate({
                        'height': '305px',
                        'bottom': '116px'
                    }, 500, function() {
                        //然后让小男孩往右走到小女孩的家门口                   
                        $(this).animate({
                            'right': '500px'
                        }, 1000, function() {
                            //小女孩把门打开             
                            $('.section6-door').animate({
                                'opacity': 1
                            }, 500, function() {
                                //小女孩出来往左走到小男孩面前
                                $('.section6-girl').show().animate({
                                    'right': '350px',
                                    'height': '305px'
                                }, 1000, function() {
                                    // 小女孩到小男孩面前之后 小男孩说请收货
                                    $('.section6-receiving').show();
                                })
                            })
                        })
                    })
                });
                // 当小车在走的时候上面的文字也跟着往右走
                $('.section6-words').show().animate({
                    'left': '30%'
                }, 3000, function() {

                });
            })
        })
    }

    function section7Animate() {
        // 好评的五角星盒子的宽度渐渐地变宽让五角星背景图显示出来
        $('.section7-star').animate({
            'width': '120px'
        }, 1000, function() {
            //五角星显示完毕后让好评两个字显示出来
            $('.section7-good').show();
        });
    }

    function section8Animate() {
        //当鼠标在页面移动的时候记录当前鼠标的X和Y轴的位置
        $(document).on('mousemove', function(e) {
            //为了让手和鼠标中间对齐让手再往右走20px
            var x = e.pageX + 20;
            var y = e.pageY;
            // 把记录到当前鼠标的位置设置到手的定位left 和 top值上
            $('.section8-hand').css({
                'left': x,
                'top': y
            });
        });
        //当鼠标移动到开始购物的盒子的时候显示第二个动态图的开始购物覆盖之前的静态图
        $('.section8-begin').on('mouseover', function() {
            $('.section8-begin2').show();
        });
        //当鼠标离开开始购物的盒子的时候隐藏第二个动态图的开始购物 让静态图显示出来
        $('.section8-begin').on('mouseleave', function() {
            $('.section8-begin2').hide();
        });
    }
});
