function navResponsive(){

	this.init = function(bar,btn){
		this.navbar = document.getElementById(bar);
		this.toggleBtn = document.getElementById(btn);
		this.toggleBtn.addEventListener('click',this.navExpand.bind(this));
	}

	this.navExpand = function(){
		console.log(this);
		var navbar = this.navbar;
		if (!navbar.classList.contains('responsive')){
			navbar.classList.add('responsive');
			navbar.classList.remove('close');
		}else{
			navbar.classList.remove('responsive');
			navbar.classList.add('close');
		}
	}
}

function dropDown(){
	this.init = function(btn,menu){
		this.btn = document.getElementById(btn);
		this.menu = document.getElementById(menu);
		this.btn.addEventListener('click', this.expand.bind(this));
	}
	this.expand = function(){
		this.menu.classList.toggle('open');
	}
}


// tests
// on a live site these will be in seperate script
var myNav = new navResponsive();
myNav.init('nav-collapse','icon');
var myNav3 = new navResponsive();
myNav3.init('nav-collapse3','icon3');

var myDropDwn = new dropDown();
myDropDwn.init('drop-btn','drop-menu');
var drop2 = new dropDown();
drop2.init('drop-btn2','drop-menu2');
