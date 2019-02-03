window.onload=function(){
	var zhanghao=document.querySelector('.bottom .shuru1'),
		mima=document.querySelector('.bottom .shuru2'),
		shouji=document.querySelector('.bottom .shuru4'),
		show=document.querySelector('.bottom .show'),
		show_in1=document.querySelector('.bottom .show .show_in1'),
		show_in2=document.querySelector('.bottom .show .show_in2'),
		img1=document.querySelector('.bottom2 .img1'),
		img2=document.querySelector('.bottom2 .img2'),
		reg=/^\d+$/;
	function xiaoshi(a){
		a.value="";
		a.style.color="black";
	};
	zhanghao.onfocus=function(){
		xiaoshi(zhanghao);
	};
	zhanghao.onblur=function(){
		if (this.value=="") {
			this.value="昵称";
			this.style.color="#aaa";
		}else{
			this.value=this.value;
		}
	};
	mima.onfocus=function(){
		xiaoshi(mima);
		this.type="password";
	};
	mima.onblur=function(){
		if (this.value==" ") {
			this.value="密码";
			this.style.color="#aaa";
			this.type="text";
		}else{
			this.value=this.value;
			this.type="password";
		}
	};
	shouji.onfocus=function(){
		xiaoshi(shouji);
		show.style.display="block";
		show_in2.disabled=false;
		show_in2.style.backgroundColor="#3083ff";
		show_in2.style.color="white";
	};
	show_in1.onfocus=function(){
		xiaoshi(show_in1);
	};
	show_in1.onblur=function(){
		this.value="短信验证码";
	};
	show_in2.onmouseenter=function(){
		show_in2.disabled=true;
		show_in2.style.backgroundColor="#f0f0f0";
		show_in2.style.color="#ccc";
		show_in2.style.border="none";
		show.style.display="block";
	};
	shouji.onblur=function(){
		if (this.value=="") {
			this.value="手机号码";
			this.style.color="#aaa";
			show.style.display="none";
		}else{
			if (!reg.test(this.value)) {
				alert('请输入数字');
				this.value="";
			}else{
				this.value=this.value;
			}
		}
	};
	function change_img(a){
		if (a.getAttribute("src",2)=="img/checkbox_check.png") {
			a.src="img/checkbox_normal.png";
		}else{
			a.src="img/checkbox_check.png";
		}
	};
	img1.onclick=function(){
		change_img(img1);
	};
	img2.onclick=function(){
		change_img(img2);
	}
}