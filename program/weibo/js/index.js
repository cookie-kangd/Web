/*要实现的功能：
1.默认发布按钮不能点击，在文本框中输入文字后才能点击
(按钮默认是灰色，在文本框输入文字后变成粉红色) OK
2.监听文本框中的内容 OK
3.在文本框中写入字符后，点击发布按钮后会在下面的微博最上面插入一条新微博，
微博的格式必须一样。*/
$(function(){
	//让搜索框点击后清空默认的文字，鼠标移出后再显示默认内容。
	$('.sousuo').click(function(){
		$(this).text("");
	});
	$('.sousuo').mouseleave(function(){
		$(this).text("大家正在搜：科比62分13周年");
	});
	$('body').delegate('.shuru','propertychange input',function(){
		if ($(this).val().length>0) {
			$('.anniu').css('background-color','pink');
			$('.anniu').prop('disabled',false);
		}else{
			$('.anniu').css('background-color','#ccc');
			$('.anniu').prop('disabled',true);
		}
	});
	$('.anniu').click(function(){
		//1.拿到用户输入的内容
		var text1=$('.shuru').val();
		var weibo=creatWeibo(text1);
		$('.zhong3').prepend(weibo);
		$('.shuru').val('');
	});
	//动态获取用户输入的内容
	function creatWeibo(text){
		var weibo=$("<div class='zhong31'>\n"+"<p>"+text+"</p>\n"+
				    "<span class=\"time\">"+formatTime()+"</span>\n"+
				    "<span class=\"pinglun\">\n"+
					"<a href=\"javascript:;\" class='Top'>0</a>\n"+
					"<a href=\"javascript:;\" class='Down'>0</a>\n"+
					"<a href=\"javascript:;\" class='Del'>删除</a>\n"+
				"</span>\n"+
		    "</div>");
		return weibo;
	};
	//动态获取时间
	function formatTime(){
		var time=new Date();
		var month=time.getMonth()+1,
			day=time.getDate(),
			hours=time.getHours(),
			minutes=time.getMinutes(),
			seconds=time.getSeconds();
		//让月，日，小时，分钟，秒个位数时候变成两位数显示,提高用户体验
		if(month<10){
			month='0'+month;
		}else if(day<10){
			day='0'+day;
		}else if(hours<10){
			hours='0'+hours;
		}else if(minutes<10){
			minutes='0'+minutes;
		}else if(seconds<10){
			seconds='0'+seconds;
		}
		var $time=[time.getFullYear()+'-'+month+'-'+
					day+' '+hours+':'+
					minutes+':'+seconds];
		return $time.join("");
	}
	//点击赞，踩和删除时候的事件
	$('body').delegate('.Del','click',function(){
		$(this).parents('.zhong31').remove();
	});
	$('body').delegate('.Top','click',function(){
		$(this).text(parseInt($(this).text())+1);
	});
	$('body').delegate('.Down','click',function(){
		$(this).text(parseInt($(this).text())+1);
	});
	//给原先存在的微博按钮添加事件
	$('.a1').click(function(){
		$(this).text(parseInt($(this).text())+1);
	});
	$('.a2').click(function(){
		$(this).text(parseInt($(this).text())+1);
	});
	$('.a3').click(function(){
		$(this).parents('.zhong31').remove();
	});
});