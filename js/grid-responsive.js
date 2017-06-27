var navResponsive = {
	init: function(){
		this.navbar = document.getElementById('nav-collapse')
		this.toggleBtn = document.getElementById('icon');
		this.dropdowns = [];

		var navlinks = this.navbar.getElementsByTagName('li');
		//find which nav items have nested lists and hide them
		for (var i = 0; i < navlinks.length; i++){
			var ul = navlinks[i].getElementsByTagName('ul');
			if(ul.length > 0){
				var elem = ul[0];
				if(elem.childNodes.tagName == 'ul'){
					elem.childNodes.className = 'dropdown hide';
					this.dropdowns.push(elem);
				}
			}
		}
		for(var i = 0; i < this.dropdowns.length; i++){
			var par = this.dropdowns[i].parentNode;
			par.onclick = this.dropExpand.bind(this,par);
		}

		this.toggleBtn.onclick = this.navExpand.bind(this);
	},
	navExpand: function(){
		var navbar = this.navbar;
		if (navbar.className === 'nav'){
			navbar.className += ' responsive';
		}else{
			navbar.className = 'nav';
		};
	},
	dropExpand: function(x){
		for(var i = 0; i < x.childNodes.length; i++){
			var elem = x.childNodes[i];
			if(elem.className == 'dropdown hide'){
				elem.className = 'dropdown';
			}else{
				elem.className += 'hide';
			}
		}	

	}
}
navResponsive.init();
