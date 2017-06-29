var navResponsive = {
	init: function(){
		this.navbar = document.getElementById('nav-collapse')
		this.toggleBtn = document.getElementById('icon');
		this.dropdownbtns = this.findDropDwnBtns();
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
	openSubMenu: function(x){
		for(var i = 0; i < x.children.length; i++){
			if(x.children[i].tagName == 'UL'){
				console.log('shit');
				if(x.children[i].hidden == true){
					x.children[i].hidden = false;
				}else{
					x.children[i].hidden = true;
				}
			}
		}
	},
	findDropDwnBtns: function(){
		var navlinks = this.navbar.getElementsByTagName('li');
		var btns = [];
		for (var i = 0; i < navlinks.length; i++){
			var ul = navlinks[i].getElementsByTagName('ul');
			if(ul.length > 0){
				for(var x= 0; x < ul.length; x++){
					ul[x].className = 'submenu';
					ul[x].hidden = true;
					ul[x].parentNode.className = 'dropdown';
					var drpBtn = ul[x].parentNode;
					console.log(drpBtn);
					drpBtn.onclick = this.openSubMenu.bind(this,drpBtn);
					btns.push(drpBtn);
				}
			}
		}
		return btns;
	},
}
navResponsive.init();
