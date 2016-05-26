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
				clearInterval(change);
				$(this).addClass("navlong").siblings().removeClass("navlong");
				$("#pic li").eq($(this).index()).find(".imglun").fadeIn(300);
				$("#pic li").eq($(this).index()).siblings().find(".imglun").fadeOut();
				index=$(this).index();
			})
			
			
		})