'use strict';

//utils module
;(function (win, doc, undefined) {
	netive.common = {
		init : () => {

			var fristHref = '/public/html/start/introduction.html';
			
			if (!!netive.uiParts.para('page')) {
				switch(netive.uiParts.para('page')) {
					case 'introduction' :
						fristHref = '/public/html/start/introduction.html';
						break;
					case 'typography' :
						fristHref = '/public/html/start/typography.html';
						break;
					case 'device' :
						fristHref = '/public/html/start/device.html';
						break;
					case 'margin' :
						fristHref = '/public/html/start/margin.html';
						break;
					case 'naming' :
						fristHref = '/public/html/start/naming.html';
						break;
					case 'placeholder' :
						fristHref = '/public/html/start/placeholder.html';
						break;
					case 'units' :
						fristHref = '/public/html/start/units.html';
						break;

					case 'bulletList' :
						fristHref = '/public/html/contents/bulletList.html';
						break;
					case 'table' :
						fristHref = '/public/html/contents/table.html';
						break;
					case 'inputFormat' :
						fristHref = '/public/html/contents/inputFormat.html';
						break;
					case 'inputPlaceholder' :
						fristHref = '/public/html/components/inputPlaceholder.html';
						break;


					case 'accordion' :
						fristHref = '/public/html/components/accordion.html';
						break;
					case 'brickList' :
						fristHref = '/public/html/components/brickList.html';
						break;
					case 'draggable' :
						console.log('draggable');
						fristHref = '/public/html/components/draggable.html';
						break;
					case 'dropdown' :
						fristHref = '/public/html/components/dropdown.html';
						break;
					case 'floating' :
						fristHref = '/public/html/components/floating.html';
						break;
					case 'floatingRange' :
						fristHref = '/public/html/components/floatingRange.html';
						break;
					case 'modal' :
						fristHref = '/public/html/components/modal.html';
						break;
					case 'scrollBar' :
						fristHref = '/public/html/components/scrollBar.html';
						break;
					case 'parallax' :
						fristHref = '/public/html/components/parallax.html';
						break;
					case 'popupBook' :
						fristHref = '/public/html/components/popupBook.html';
						break;
					case 'loading' :
						fristHref = '/public/html/components/loading.html';
						break;
					case 'tab' :
						fristHref = '/public/html/components/tab.html';
						break;
					case 'tableCaption' :
						fristHref = '/public/html/components/tableCaption.html';
						break;
					case 'tableCellFix' :
						fristHref = '/public/html/components/tableCellFix.html';
						break;
					case 'tableScroll' :
						fristHref = '/public/html/components/tableScroll.html';
						break;
					case 'print' :
						fristHref = '/public/html/components/print.html';
						break;
					case 'popup' :
						fristHref = '/public/html/components/popup.html';
						break;
					case 'tooltip' :
						fristHref = '/public/html/components/tooltip.html';
						break;
					case 'datePicker' :
						fristHref = '/public/html/components/datePicker2.html';
						break;
					case 'inputClear' :
						fristHref = '/public/html/components/inputClear.html';
						break;
					case 'select' :
						fristHref = '/public/html/components/select.html';
						break;
					case 'innerLabel' :
						fristHref = '/public/html/components/innerLabel.html';
						break;
					case 'scrollMove' :
						fristHref = '/public/html/components/scrollMove.html';
						break;
					case 'countNumber' :
						fristHref = '/public/html/components/countNumber.html';
						break;

					case 'layout' :
						fristHref = '/public/html/contents/layout.html';
						break;
					case 'button' :
						fristHref = '/public/html/contents/button.html';
						break;
					case 'jsonCodingList' :
						fristHref = '/public/html/components/jsonCodingList.html';
						break;
					case 'fileUpload' :
						fristHref = '/public/html/components/fileUpload.html';
						break;
					case 'slider' :
						fristHref = '/public/html/components/slider.html';
						break;
					case 'issue' :
						fristHref = '/public/html/memory/issue.html';
						break;
				   
				}
			} 

			netive.uiAjax.request({ 
				src: '/public/html/inc/header.html', 
				callback: function(v){
					netive.common.header(v);
				} 
			});
	
			netive.uiAjax.request({ 
				src: '/public/html/inc/footer.html', 
				callback: function(v){
					netive.uiParts.appendHtml(document.querySelector('#baseFooter'), v);
				} 
			});
			
			netive.uiAjax.request({ 
				src: fristHref, 
				callback: function(v){
					netive.uiParts.appendHtml(document.querySelector('#baseMain'), v);
					
					// netive.uiScrollBar();
					// netive.uiScrollBar();
	
					// netive.uiScrollBar.item1.infiniteCallback = function() {
					// 	console.log(222);
					// };
	
					// netive.uiScrollBar.item0.init({ 
					// 	infiniteCallback: function() {
					// 		console.log(111);
					// 	}
					// });;
				} 
			});
		},
		header : function(v){
			netive.uiParts.appendHtml(document.querySelector('#baseHeader'), v);

			var dep2btn = doc.querySelectorAll('.dep-2-btn');

			for (const btn of dep2btn) {
				btn.addEventListener('click', pageChange)
			}

			function pageChange(event) {
				console.log(event, event.currentTarget  );
				const currentButton = event.currentTarget;
				const baseMain = document.querySelector('#baseMain');
				console.log(currentButton.dataset.href);

				netive.uiAjax.request({ 
					src: currentButton.dataset.href, 
					callback: function(v){

						baseMain.innerHTML = v;
						netive.uiScrollBar();
						netive.uiDatepicker.init();
					} 
				});
			}

			// $('.dep-2-btn').off('click.ajax').on('click.ajax', function(){
			// 	var href = this.getAttribute('data-href');
			// 	!!$('body').hasClass('nav-open') && $plugins.common.navOpen();
			// 	$plugins.uiAjax({ 
			// 		id: 'baseMain', 
			// 		url: href, 
			// 		page: true, 
			// 		effect: true,
			// 		callback: function(v){
			// 			$plugins.uiScroll({ 
			// 				value:0, 
			// 				speed:0, 
			// 				focus:  $('#baseMain h1').eq(0)
			// 			});
						
			// 			$(win).off('scroll.win');
			// 			$plugins.common.pageInit(href);
			// 			$plugins.common.settingAside();
						
			// 		}
			// 	});
			// });

		}
	};


		

})(window, document);
