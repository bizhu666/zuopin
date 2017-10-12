



$(function(){
	
	/* 二级导航*/
	$("#nav>li").hover(function() {
		$(this).find("ul").stop().fadeIn(300);
	}, function() {
		$(this).find("ul").stop().fadeOut(300);
	})
	
	
	
	
//	$(".send").hover(function(){
//		$(this).hide().stop().find(".hhh").show(300);
//		$(".hhh").fadeIn(300).find(".send").hide();
//	},function(){
//		$(".hhh").stop().fadeOut(300).find(".send").show();
//	})
	
	
	
	
		/*遮罩*/
	$(".tu3 .lianxing dl dt").hover(
		function() {
			$(this).find(".dask").stop().animate({
				"top": 0,
				opacity: 0.7
			}, 300)
		},
		function() {
			$(this).find(".dask").stop().animate({
				"top": -200,
				opacity: 0
			}, 300)
		}
	)
	
	
	
	
	
	
	/*返回顶部*/
	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			$("#rtt").fadeIn();
		} else {
			$("#rtt").fadeOut();
		}
	});

	$("#rtt").click(function() {
		$("html,body").animate({
			"scrollTop": "0px"
		}, 300)
	})
	
	
//	/*index更换图片*/
//
//	$(".qq>img").mouseover(function() {
//		$(this).addClass("on").siblings().removeClass("on");
//		var index = $(this).index()
//		$("#pic>div").eq(index).show().siblings().hide();
//	})
	
	/*登录按钮*/
	$(".old").click(function() {
			$("#box").show(300);
            
		})
	
	$("#cuoo").click(function() {
			$("#box").hide(300);
            
		})
	
	
	/*注册按钮*/
	$(".old1").click(function() {
			$("#box1").show(300);

		})
	$("#cuo").click(function() {
			$("#box1").hide(300);
            
		})
	
	
	
    /*tab标签切换*/

	$("#tab1 h2").click(function() {
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index()
		$("#tab2>ul").eq(index).show().siblings().hide();
	})


 	/* 女镜页面  tab标签切换*/
 	
	$("#tab3 div").click(function() {
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index()
		$("#tab4>img").eq(index).show().siblings().hide();
	})
	
	
	$("#tab5 div").click(function() {
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(this).index()
		$("#tab6>img").eq(index).show().siblings().hide();
	})



//about二级导航
	
	});
	
	



