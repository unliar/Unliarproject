
		
		function Ave(){
		var a=document.getElementById("a").value;
		var b=document.getElementById('b').value;
		var c=document.getElementById('c').value;
		var d=document.getElementById('d').value;
		var e=(parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d))/4;
			
			document.getElementById("test").innerText=e;
			
		}
		
		function check(){
			var f=document.getElementById("f").value;
			var results=parseFloat(document.getElementById("test").innerText);
			var endResult=f/ 710 * 100 * 0.5 + results* 0.5;
			if (endResult>= 60||f>=425) {
		document.getElementById("result").innerText="恭喜你，你达到了普本获取学位证所要求的英语水平，你的折算成绩是" + endResult;
			} else {
			document.getElementById("result").innerText="很遗憾 你的折算成绩未达标，请查看输入是否无误! " + "四级成绩：" + f + "，平时平均成绩：" + results + "，折算成绩：" + endResult;
			}
		}
			
			
		function checkTwo(){
				var f=document.getElementById("f").value;
				var fz=document.getElementById("fz").value;
				var zResults=f/(320/0.6)*100*0.5+fz*0.5;
				if (f>=320||zResults>=60) {
					document.getElementById("result").innerText="恭喜你，你达到了专升本获取学位证所要求的英语水平，你的折算成绩是:" +zResults+",四级成绩是："+f;
				}else{
					document.getElementById("result").innerText="很遗憾 你的折算成绩未达标，请查看输入是否无误! 四级最高成绩："+f+",专升本课程成绩："+fz; 
				}
			}	
			
		
		
