function navResponsive(bar,btn){
	this.navbar = document.getElementById(bar);
	this.toggleBtn = document.getElementById(btn);
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
	this.toggleBtn.addEventListener('click',this.navExpand.bind(this))
	
	
}


// tests
// on a live site these will be in seperate script
var myNav = new navResponsive('nav-collapse','icon');
var myNav3 = new navResponsive('nav-collapse3','icon3');
