var navResponsive = {
	init: function(){
		this.navbar = document.getElementById('nav-collapse')
		this.toggleBtn = document.getElementById('icon');
		//this.dropdownbtns = this.findDropDwnBtns();
	
		this.toggleBtn.onclick = this.navExpand.bind(this);


	},
	navExpand: function(){
		var navbar = this.navbar;
		console.log(this);
		if (!navbar.classList.contains('responsive')){
			navbar.classList.add('responsive');
			navbar.classList.remove('close');
		}else{
			navbar.classList.remove('responsive');
			navbar.classList.add('close');

		}
	}
}



navResponsive.init();
