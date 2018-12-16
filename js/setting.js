function setting(){
	"use strict";
	

	//ページ内リンク
	//$('a[href^="#"]').not('.aco').click(function(){
//	var speed = 500;
//		var href= $(this).attr("href");
//		var target = $(href === "#" || href === "" ? 'html' : href);
//		var position = target.offset().top;
//		$("html, body").animate({scrollTop:position}, speed, "swing");
//		return false;
//	});


	//pageTop アニメーションfadeIn & Out
	var pagetop = $('.gotop');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
		} else {
			pagetop.fadeOut();
		}
	});

	//pageTop アニメーション
	var pagetop = $('.gotop');
	pagetop.click(function() {
		$("html").velocity("scroll", { duration: 1200, easing: "ease" });
		return false;
	});


	//ハンバーガーメニューによるスライド
	$("#menu").on("click", function() {
		$(".menu-trigger").toggleClass('active');
		$("#sp_gnav").slideToggle();
		return false;
	});



	/*PC版 グローバルメニュー固定*/

		//gnavのdivの高さ取得
	var gnavHeight = $('#gnav').outerHeight();
		//gnavの位置高さ取得
	var gnavPositon = $('#gnav').offset().top;

	$(window).on('load scroll', function() {
 		var windowHeight = $(window).height(),
	     	topWindow = $(window).scrollTop();


	     	//.prep_fixedがセットされる位置
	     	var prepFixedPostion = gnavPositon + gnavHeight;
	     	//ここの数値で固定位置を微調整できる
	     	var FixedPostion = 470;

  			if(topWindow > FixedPostion){
   				$('#gnav').addClass("fixed");
   				$('#gnav').removeClass("prep_fixed");
   				$('#header').css("margin-top",gnavHeight + "px");
  			}else if(topWindow > prepFixedPostion){
   				$('#gnav').addClass("prep_fixed");
  				$('#gnav').removeClass("fixed");
   				$('#header').css("margin-top",gnavHeight + "px");
  			}else if(prepFixedPostion > topWindow){
  				$('#gnav').removeClass("fixed");
  				$('#gnav').removeClass("prep_fixed");
  				$('#header').css("margin-top","0px");
  	     	//alert(gnavHeight);
	     	//alert(gnavPositon);
  			}
 	});

	/*スマホのときは#headerマージンを無効にする*/
	$(window).on('load scroll resize', function(){
		var wid = $(window).width();
		headerMarginNone(wid);
	});
	function headerMarginNone(wid){
		if( wid < 640 ){
  			$('#header').css("margin-top","0px");
		}
	}


	/*PC←→SP ImgChange*/
	$(window).on('load resize', function(){
		var wid = $(window).width();
		imgChange(wid);
	});
	
	function imgChange(wid){
		if( wid < 640 ){
			$('.chimg').each(function(){
				$(this).attr("src",$(this).attr("src").replace('_pc', '_sp')).css('visibility', 'visible');
			});

		}else if( wid > 640 ){
			$('.chimg').each(function(){
				$(this).attr("src",$(this).attr("src").replace('_sp', '_pc')).css('visibility', 'visible');
			});
		}
	}

	//userAgent check
	var device = navigator.userAgent;
	if((device.indexOf('iPhone') > 0 && device.indexOf('iPad') == -1) || device.indexOf('iPod') > 0 || device.indexOf('Android') > 0){
		device = 'sp';
	}else{
		device = 'pc';
	}
		
	//スマホの時だけtelを有効にする	
	if((device == 'sp')){
		//text
		$('.tel').each(function(){
			var tel = $(this).data("tel");
			$(".tel").wrapInner("<a></a>");
			$("a",this).attr({href:"tel:"+tel});
		});
		//image
		$('.tel_img').each(function(){
			var tel_img = $(this).data("tel");
			$(".tel_img").wrap('<a href="tel:'+tel_img+'"></a>');
		});
	}


	/* Acodion */
	$('.aco').on('click', function(){
		var acobtn = $(this);
		acobtn.next().stop(false, true).slideToggle(200, function(){
			if(acobtn.hasClass('active')){
				acobtn.removeClass('active');
			}else{
				acobtn.addClass('active');
			}
		});
	});


	//URL
	var now = location.href.split('/');//現在のURLを/で分割
	var secondDir = now[3];//1階層変数を取得
	var thirdDir = now[4];//2階層変数を取得
	var fourthDir = now[5];//3階層変数を取得
	var endDir = now.slice(now.length-2,now.length-1);//最後の変数を取得

	//コレクションページのタブの位置取得
	//alert(now);
	//alert(secondDir);
	if(now.length >= 7){
		//alert(fourthDir);
		$('#collection_tab nav ul li a[href^="/'+secondDir+'/'+thirdDir+'/"]').parent().addClass('active');//一致したものの親にactive要素を追記
	}else if(now.length >= 6){
		//alert(secondDir);
		//alert(thirdDir);
		$('#collection_tab nav ul li a[href^="/'+secondDir+'/"]').parent().addClass('active');//一致したものの親にactive要素を追記
	}
	
	//ページ内リンク
	$('a[href^="#"]:not(a[href="#top"],a.menu-trigger)').click(function(){//不要ならNOTは外す
		var headerHight = 80; //ヘッダの高さ
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});


}
