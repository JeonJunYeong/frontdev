// jQuery 버전 

//메뉴1이 처음 선택 되도록하게  텍스트 바꾸기 
/* var TabBox = {
		init: function(){
			window.addEventListener('load',this._onWindowLoad);
		},
		_onWindowLoad:function(){
			var divTabBox = document.getElementsByClassName('tab-box')[0];
			var ulTabBox = divTabBox.childNodes[1];
			var liTabs = ulTabBox.getElementsByTagName('li');
			
			for(var i = 0; i<liTabs.length;i++){
				liTabs[i].addEventListener('click',TabBox._onTabClicked);
			}
		},
		
		_onTabClicked: function(){
			//unselect
			var liSelecteds = document.getElementsByClassName('selected');
			(liSelecteds.length==1)&&(liSelecteds[0].className='');
			
			//select 
			this.className = 'selected';
		}
		
}
 */


// jQuery 버젼
var TabBox = {
	init: function(){
		$(this._init);		
	},	
	_init: function(){
		$('.tab-box li').click(TabBox._changeTab);
		TabBox._changeTab();
	},
	_changeTab: function(){
		$('.tab-box li.selected').removeClass('selected');
		
		var $liTab = (this == TabBox) ?	$('.tab-box li:first-child') : $(this);
		var tabName =$liTab.text();
		$('.tab-box div').text(tabName + "의 탭뷰입니다.");
		$liTab.addClass('selected');
	}	
}
