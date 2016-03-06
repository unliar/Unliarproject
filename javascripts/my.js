window.onload = function bt() {
    var TargetNode=document.getElementsByTagName("p")[1];
	var pages = document.createElement("p");

	function GetWidth() {
		var scWidth = document.body.offsetWidth;
		pages.innerText = "你的设备可视区域为: "+scWidth+"px";

	}
	setInterval(GetWidth, 200)
TargetNode.insertBefore(pages,TargetNode.childNodes[0])
}