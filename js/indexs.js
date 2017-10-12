var username = document.getElementById("username");
var passwords = document.getElementById("passwords");
var showin = document.getElementById("showin");
var denglu = document.getElementById("denglu");

username.onblur = function() {
	showin.innerHTML = "";
	if (username.value == "") {
		username.focus();
		showin.innerHTML = "用户名不能为空！"
		return false;
	}
}
passwords.onblur = function() {
	showin.innerHTML = "";
	if (passwords.value == "") {
		passwords.focus();
		showin.innerHTML = "密码不能为空！"
		return false;
	}
}

function sub() {
	if (username.value == "") {
		username.focus();
		showin.innerHTML = "用户名不能为空！"
		return false;
	}

	if (passwords.value == "") {
		passwords.focus();
		showin.innerHTML = "密码不能为空！"
		return false;
	}
	var xmlhttp;
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function callback() {
			//判断对象状态是否交互完成，如果为4则交互完成
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				//判断对象状态是否交互成功,如果成功则为200
				var data = JSON.parse(xmlhttp.responseText);
				if (data[0].userName == username.value && data[0].passWords == passwords.value) {
					showin.innerHTML = "";
					location.href = "http://jiaowu.tsc.edu.cn/tscjw/MainFrm.html";
					
					
					//form.submit();
				} else if (data[1].userName == username.value && data[1].passWords == passwords.value) {
					showin.innerHTML = "";
					location.href = "http://jiaowu.tsc.edu.cn/tscjw/MainFrm.html";
					//form.submit();
				} 
				else if (data[2].userName == username.value && data[2].passWords == passwords.value) {
					showin.innerHTML = "";
					location.href = "http://jiaowu.tsc.edu.cn/tscjw/MainFrm.html";
					//form.submit();
					}
				else if (data[3].userName == username.value && data[3].passWords == passwords.value) {
					showin.innerHTML = "";
					location.href = "http://jiaowu.tsc.edu.cn/tscjw/MainFrm.html";
					//form.submit();
					}
				else {
					showin.innerHTML = "用户名或密码不正确！;"
				}

										for (var a = 0; a < data.length; a++) {
											if (username.value != data[a].userName) {
												showin.innerHTML = "用户名不正确！"
												return false;
											}
											if (passwords.value != data[a].passWords) {
												showin.innerHTML = "密码不正确！"
												return false;
											}
											if (data[a].userName == username.value && data[a].passWords == passwords.value) {
												//location.href = "baidu.com";
												form.submit();
											}
										}
										//接收数据,得到服务器输出的纯文本数据
			}
		}
		//post请求与get请求的区别
		//第一个参数设置成post第二个只写url地址，第三个不变 xmlhttp.open(“GET", "url", true);
		//发送数据，开始与服务器进行交互
	xmlhttp.open("GET", "js/indexs.json", true);

	xmlhttp.send();

}