function Line(option){
    this.lineWidth = option.lineWidth || 1;
    this.strokeStyle = option.strokeStyle || "#000";
    this.ctx = option.ctx;

    this.init(option);
}
Line.prototype = {
    constructor: Line,
    init: function (option) {
        this.drawPath(option);
        this.draw();
    },
    drawPath: function (option) {
        this.ctx.beginPath();
        this.ctx.moveTo(option.x, option.y);
        this.ctx.lineTo(option.x1, option.y1);
    },
    draw: function () {
        //把用户之前所有的设置的状态保存一份，因为我们下面要进行更改了
        this.ctx.save();

        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.stroke();
        this.ctx.beginPath();

        //我们上面的内容已经绘制完毕了，需要把我们修改了所有的状态，恢复到用户使用我们的方法之前的状态
        //为了保证我们的方法，不对外界产生任何影响！
        this.ctx.restore();
    }
}