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


var tabBox={
		
		_selectId : null,
		_arr : [],
		_changeEvent: function(){
			$('.tab-box ul li').removeAttr('class','selected');
			$(this).attr('class','selected');
			$('.tab-box div').text($(this).text()+'의 탭뷰입니다');
			
		},

		
		init: function(){
			$(function(){
				$('.tab-box ul li').eq(4).addClass('selected');
				$('.tab-box div').text($('.tab-box ul li').eq(4).text()+'의 탭뷰입니다');
				$('.tab-box ul li').click(tabBox._changeEvent);
			});
		}
}