var navResponsive = {
	init: function(){
		this.navbar = document.getElementById('nav-collapse')
		this.toggleBtn = document.getElementById('icon');
		console.log(this.navbar);
		
		this.toggleBtn.onclick = this.navExpand.bind(this);
	},
	navExpand: function(){
		var navbar = this.navbar;
		if (navbar.className === 'nav'){
			navbar.className += ' responsive';
		}else{
			navbar.className = 'nav';
		};
	}
}
navResponsive.init();
