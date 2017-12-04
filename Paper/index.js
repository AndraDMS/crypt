
function t(txt) {
	var queue = MathJax.Callback.Queue();
	queue.Push([function (txt_) {
		document.getElementById("c").innerHTML = txt_;
	}, txt]) 
	queue.Push(["Typeset",MathJax.Hub,"c"]);
}