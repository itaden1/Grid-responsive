var navResponsive = {
	init: function(){
		this.navbar = document.getElementsByClassName('nav-collapse')
		this.toggleBtn = document.getElementsByClassName('icon');
		//this.dropdownbtns = this.findDropDwnBtns();
		for(var i=0;i<this.toggleBtn.length;i++){
			this.toggleBtn[i].onclick = this.navExpand.bind(target);
		}

	},
	navExpand: function(target){
		console.log('sup');
		var navbar = target;
		if (navbar.className === 'nav'){
			navbar.className += ' responsive';
		}else{
			navbar.className = 'nav';

		}
	},
	openSubMenu: function(x){
		var pressed = x.target.parentNode;
		console.log(pressed);
		for(var i = 0; i < pressed.children.length; i++){
			if(pressed.children[i].tagName == 'UL'){
				if(pressed.children[i].className =='submenu'){
					pressed.children[i].className += ' open';
					console.log(pressed.children[i]);
				}else{
					pressed.children[i].className = 'submenu';
					console.log(pressed.children[i]);
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
				var sibs = ul[0].parentNode.children;
				var a = sibs[0];
				console.log(a);
				var myTag = document.createElement('i');
				myTag.className = 'arrow down';
				a.appendChild(myTag);
				for(var x= 0; x < ul.length; x++){
					ul[x].className = 'submenu';
					//ul[x].parentNode.className += ' dropdown';
					var drpBtn = ul[x].parentNode;
					drpBtn.onclick = this.openSubMenu.bind(this);
					btns.push(drpBtn);
				}
			}
		}
		return btns;
	}
}
navResponsive.init();
