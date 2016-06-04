$(document).foundation()

var collapser = {
	init: function(){
		this.setupEventListeners();
	},
	setupEventListeners: function(){
		//document.getElementById('report').onclick = this.collapseReport.bind(this); //no parens, we want the function, not the return value!
		document.getElementById('find').onclick = this.toggleFind;
	},
	toggleFind: function(ev){
		ev.preventDefault();
		var el = document.getElementById('findinfo');
		console.log(el.style);
		// var els = $(el).find('*');
		if(el.style.display=="none"){
			el.style="text-align:center;";
		}else{
			el.style="display: none;";
		}
	},

};

collapser.init();