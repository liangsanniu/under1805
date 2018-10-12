$(function () {
    //滑入
    $(".Li_One_Search").click(function () {
        $(".Li_One_Search").animate({
            width: 246

        }, 500);
    });

    $(".Li_One_Search").blur(function () {
        $(".Li_One_Search").animate({
            width: 120
        }, 500);
    });
})
// 导航栏固定
$(function () {
    $(window).scroll(function () {
        var scrolls = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrolls >= 34) {
            $(".Nav_Box1").css({ position: "fixed", top: "0", background: "#fff", zIndex: "999" });
        } else if (scrolls <= 0) {
            $(".Nav_Box1").css({ position: "relative", zIndex: "10" });
        }
    });
})

// 轮播图
$(function () {
    initUI();
    //顺序变换（自动播放）
    changeImg();
    //跳转到对应的图片
    let lis = UN("#btns").children;
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            goImg(i + 1);
        };
    }

})

//初始化UI
function initUI() {
    let lis = UN("#btns").children;
    lis[0].style.backgroundColor = "gray";
}

let myTimer;
var ord = 1;//当前图片的序号
//跳转到指定的图片上。
function goImg(transOrd) {
    //1、改变数据
    let outOrd = ord;
    ord = transOrd;
    //2、处理边界
    if (ord > 3) {
        ord = 1;
    }
    //3、外观呈现
    changeUI(outOrd, ord);
}

//自动播放
function changeImg() {

    myTimer = setInterval(function () {
        //1、改变数据
        let outOrd = ord;
        ord++;
        //2、处理边界
        if (ord > 3) {
            ord = 1;
        }
        //3、外观呈现
        changeUI(outOrd, ord);
    }, 3000);
}

//改变外观
function changeUI(outOrd, inOrd) {
    let lis = UN("#btns").children;
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = "#eee";
    }
    lis[inOrd - 1].style.backgroundColor = "gray";
    //3)、改变图片
    changeImgUI(outOrd, inOrd);
}

let mytimer = null;
//切换图片
//两张图片的滑入滑出
//outOrd:滑出图片的序号
//inOrd:滑入图片的序号
function changeImgUI(outOrd, inOrd) {
    if(mytimer){ 
        return;
    };
    let left1 = 0;
    
     mytimer = setInterval(function () {
        //1、改变数据
        left1 -= 15;
        //2、边界处理
        if (left1 < -$(".BoxOne").width()) {
            left1 = -$(".BoxOne").width();
            window.clearInterval(mytimer);
            mytimer = null;
        }
        //3、改变外观
        UN(".BoxOne")[outOrd - 1].style.left = left1 + "px";
        UN(".BoxOne")[inOrd - 1].style.left = (left1 + $(".BoxOne").width()) + "px";
    }, 1);
}

function UN(str){
    if(str.charAt(0) == "#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0) == "."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

$(".Buygoods").each(function(){
        $(this).hover(function(){
            $(this).siblings(".BgPic").css({opacity:0.3});
        },function(){
            $(this).siblings(".BgPic").css({opacity:""});
        });
    }
)
