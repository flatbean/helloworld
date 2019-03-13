/**
 * Author  : Lyu
 * Date    : 14/10/25
 * Version : 1.0.0
 * Subject : 初始化函数模板
 * Link    : http://www.lianbi.com.cn
 */
$( document ).ready( function(){

    console.log("1");
    jump_to_selector();
    back_top();
    where_is_top_icon();
} );

/**
 * 跳转至某个选择器上之前
 */
var jump_to_selector = function(){
    $("#id_jump a").bind( "click" , function(e){
        var jump_to = $(this).attr("href");
        var $obj = $(jump_to);
        //console.log( $obj.length );
        if( $obj.length > 0 ){
            $("html,body").animate({scrollTop:$(jump_to).offset().top},500);
            e.preventDefault();
        }
    } );
}

/**
 * 返回顶栏
 */
var back_top = function(){
    $("#back_top").bind("click",function(){
        $("html,body").animate({scrollTop:0},500);
    });
}
/**
 * 计算返回顶栏按钮位置
 */
var where_is_top_icon = function(){
    $(window).bind("scroll",function(){
        change_top_icon();
    });
    $(window).resize(function(){
        change_top_icon();
    });
}
/**
 * 改变返回顶栏按钮位置
 */
var change_top_icon_status = 0;
var change_top_icon = function(){
    var $obj = $("#back_top");
    var icon_el = {
        width:40,
        height:115
    }
    var bw = $(window).width();
    var bh = $(window).height();
    var st = $(document).scrollTop();

    if( st <= 200 ){
        $obj.fadeOut("fast");
        return;
    }
    console.log( st );
    if( bw > 1120 + icon_el.width + 60 ){
        if( bw - icon_el.width * 2 > 0 ){
            $obj.css({
                left:1120 + (bw - 1120)/2 + 20,
                top:bh - icon_el.height - 20 + st
            });
            $obj.fadeIn("slow");
        }
    }
    else{
        $obj.hide();
    }
}