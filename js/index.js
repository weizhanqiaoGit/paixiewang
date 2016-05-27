$(function(){
			//页面加载出现效果
			var index=0;
			function change() {
				index++;
				if (index==$("#pic li").size()) {
					index=0;
				}
				$("#pic li").eq(index).find(".imglun").fadeIn(300);
				$("#pic li").eq(index).siblings().find(".imglun").fadeOut();
				$("#nav li").eq(index).addClass("navlong").siblings().removeClass("navlong");
			}
			var sIndex=0;
			function xiaochange() {
				sIndex++;
				if (sIndex==$("#smallLunbo ul li").size()) {
					sIndex=0;
				}
				$("#smallLunbo ul li").eq(sIndex).fadeIn(300);
				$("#smallLunbo ul li").eq(sIndex).siblings().fadeOut();
			}
			setInterval(change, 2000);
			setInterval(xiaochange, 1000);
			$("#nav li").mouseenter(function(){
				clearInterval(change());
				$(this).addClass("navlong").siblings().removeClass("navlong");
				$("#pic li").eq($(this).index()).find(".imglun").fadeIn(300);
				$("#pic li").eq($(this).index()).siblings().find(".imglun").fadeOut();
				index=$(this).index();
			})
			/*------------------------------------tuiJianDPPP------------------------*/
			 $("#b-r .tuiJianDPPP a").mouseenter(function(){
			 	$(this).addClass("jia").siblings().removeClass("jia");
			 	$("#b-r #jieTi dl").eq($(this).index()).addClass("dl")
			 	.siblings().removeClass("dl");
			 })
			/*------------------------------------jieTi------------------------*/
			$("#b-r #jieTi .jieTi1").mouseenter(function(){
				$(this).stop().animate({"top":"0px"},300);
				$("#b-r #jieTi .jieTi2").stop().animate({"top":"110px"},300);
				$("#b-r #jieTi .jieTi3").stop().animate({"top":"162px"},300);
				$("#b-r #jieTi .jieTi4").stop().animate({"top":"214px"},300);
			})
			$("#b-r #jieTi .jieTi2").mouseenter(function(){
				$(this).stop().animate({"top":"58px"},300);
				$("#b-r #jieTi .jieTi3").stop().animate({"top":"162px"},300);
				$("#b-r #jieTi .jieTi4").stop().animate({"top":"214px"},300);
			})
			$("#b-r #jieTi .jieTi3").mouseenter(function(){
				$(this).stop().animate({"top":"110px"},300);
				$("#b-r #jieTi .jieTi2").stop().animate({"top":"58px"},300);
				$("#b-r #jieTi .jieTi4").stop().animate({"top":"214px"},300);
			})
			$("#b-r #jieTi .jieTi4").mouseenter(function(){
				$(this).stop().animate({"top":"162px"},300);
				$("#b-r #jieTi .jieTi2").stop().animate({"top":"58px"},300);
				$("#b-r #jieTi .jieTi3").stop().animate({"top":"110px"},300);
			})
			
			/*------------------------------------zuoYi------------------------*/
			$(".zuoYi").mouseenter(function(){
				$(this).stop().animate({"marginLeft":"-5px"},300);
			})
			$(".zuoYi").mouseleave(function(){
				$(this).stop().animate({"marginLeft":"0px"},300);
			})
			/*------------------------------------youYi------------------------*/
			$(".la-g").mouseover(function(){
				$(this).children().stop().animate({"marginLeft":"28px"},300);
				$(this).css({"borderRight":"none"});
			})
			$(".la-g").mouseout(function(){
				$(this).children().stop().animate({"marginLeft":"18px"},300);
				$(this).css({"borderRight":"1px solid #CCCCCC"});
			})
			
			
			
			
			
			
			
		})