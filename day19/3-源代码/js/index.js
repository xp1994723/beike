/*
 * @Author: zhengwei
 * @Date:   2017-09-29 16:38:35
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2017-10-06 18:29:57
 */
$(function() {
    var windowHeight = $(window).height();
    console.log(windowHeight);
    var flag = false;
    var flag1 = false;
    $('#fullpage').fullpage({
        // 是否显示项目导航
        navigation: true,
        // navigationPosition: "left",
        // loopBottom: true,
        // 滚动速度，单位为毫秒
        scrollingSpeed: 1200,
        //afterLoad回调函数当滚动到下一屏滚动完成后调用 
        //接收两个参数 anchorLink 是锚链接的名称 index是当前滚动到的屏索引号从1开始
        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                section2Animate();
            }
        },
        //onLeave回调函数 当滚动的时候就会调用的函数 
        //接收三个参数 index当前离开屏幕的索引  nextIndex是将要滚动到的屏幕的索引 direction是滚动的方向 向上就是up向下就是down
        onLeave: function(index, nextIndex, direction) {
            //当第二屏滚动到第三屏
            if (index == 2 && nextIndex == 3 && flag == true) {
                section3Animate();
            }
            //当第三屏滚动到第四屏
            if (index == 3 && nextIndex == 4 && flag1 == true) {
                section4Animate();
            }
            //当第四屏滚动到第五屏
            if (index == 4 && nextIndex == 5) {
                section5Animate()
            }
            //当第五屏滚动到第六屏
            if (index == 5 && nextIndex == 6) {
                section6Animate();
            }
        }
    });

    function section2Animate() {
        // 1. 首先让第一个搜索沙发盒子显示
        // 2. 然后花1.5秒让第一个搜索沙发盒子从右边往左边移动到370px的位置
        $('.section2-search1').show().animate({
            'right': "370px"
        }, 1500, function() {
            //3. 当第一个搜索沙发盒子移动完成后里面的沙发文字花1秒渐渐的显示
            $('.section2-search1 img').animate({
                'opacity': 1
            }, 1000, function() {
                //4. 当沙发文字显示完成后隐藏第一个沙发盒子包括里面的文字
                $('.section2-search1').hide();
                //5. 然后在显示第二个沙发盒子 
                //6. 再花1秒让第二个沙发盒子移动到右上角 并且高度变成30px宽度也会随之变小
                $('.section2-search2').show().animate({
                    'bottom': '452px',
                    'right': '200px',
                    'height': '30px'
                }, 1000);
                //7. 同时沙发图片显示 高度花1秒慢慢的变大到218px
                $('.section2-safa').show().animate({
                    'height': '218px'
                }, 1000, function() {
                    //沙发变大显示了才能往下滚动移动
                    flag = true;
                });
                //8. 同时花1秒让文字盒子里面的第二个文字图片慢慢的显示
                $('.section2-words img').eq(1).animate({
                    'opacity': 1
                }, 1000);
            })
        });
    }

    function section3Animate() {
        //第二屏第一行第二个沙发显示 然后往第三屏移动 
        $('.section2-safa-move').show().animate({
            //沙发要移动的距离是 屏幕高度 - 200（沙发距离main的bottom）- 50（main距离sectio的bottom）
            'width': '207px',
            'bottom': -(windowHeight - 250),
            'left': '290px'
        }, 1500, function() {
            $('.section3-icon2').animate({ 'opacity': 1 });
            $('.section3-cart2').animate({ 'opacity': 1 });
            // 当沙发往下移动到第三屏的时候 才能执行第4屏的移动
            flag1 = true;
        });
        //同时遮盖第二个沙发的白色盒子显示
        $('.section2-safa-mask').show();
    }

    function section4Animate() {
        //当第三屏滚动到第四屏让沙发斜着移动到购物车的位置
        $('.section3-safa-skew').show().animate({
            'bottom': -(windowHeight - 250 + 50),
            'left': '250px'
        }, 1000, function() {
            //让当前斜的图片隐藏
            $(this).hide();
            //让购物车原有的斜沙发显示
            $('.section4-cart img').eq(0).show();
            //让购物车往右移动
            $('.section4-cart').animate({
                'left': '150%'
            }, 1500, 'easeInElastic', function() {
                //让收货地址显示
                $('.section4-address').show();
                $('.section4-address img').eq(0).animate({
                    'opacity': 1
                }, 1000);
                // 让第四屏的文字渐渐的显示出来
                $('.section4-words img:last-of-type').animate({
                    'opacity': 1
                }, 1000);
            });

        });
    }

    function section5Animate() {
        // 先小手上来
        $('.section5-hand').animate({
            'bottom': '0'
        }, 1000, function() {
            // 鼠标显示左键被点击的那个
            $('.section5-mouse img').eq(1).animate({ 'opacity': 1 });
            //沙发从上往下掉下来 从bottom800px到70px
            $('.section5-sofa').show().animate({
                'bottom': '70px'
            }, 1000, function() {
                //银行卡单子往上走 bottom 270 到390
                $('.section5-order').animate({
                    'bottom': '390px'
                }, function() {
                    //单子往上走完后文字立体翻转
                    $('.section5-words').addClass('section5-words-rotate');
                });
            })
        })
    }

    function section6Animate() {
        $('.section5-sofa').animate({
            'bottom': -(windowHeight - 500),
            'left': '40%',
            'width': '65px'
        }, 1000, function() {
            $(this).hide();
        });
        $('.section6-box').animate({
            'left': '38%'
        }, 1000, function() {
            $(this).animate({
                'bottom': '40px'
            }, 500, function() {
                $(this).hide();
                //小车跑起来
                $('.section6').animate({
                    'backgroundPositionX': '100%'
                }, 4000, function() {
                    //让街道信息显示出来
                    $('.section6-car img:last-of-type').show();
                    $('.section6-boy').show().animate({
                        'height': '305px',
                        'bottom': '116px',
                    }, 500, function() {
                        $(this).animate({
                            'right': '500px'
                        }, 500, function() {
                            $('.section6-door').animate({ 'opacity': 1 }, 200, function() {
                                $('.section6-girl').show().animate({
                                    'height': '305px',
                                    'right': '350px'
                                }, 1000,function () {
                                    //请收货显示
                                    $('.section6-receiving').show();
                                });
                            });
                        })
                    });
                })
                //提示文字动画
                $('.section6-words').show().animate({
                    'left':'30%'
                },2000,'easeOutElastic')
            })
        })
    }
});
