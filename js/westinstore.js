jQuery( document ).ready(function() {
	//show language
    jQuery('#move-lang').click(function(){
	  	jQuery(this).addClass('open');
	  	jQuery('#move-lang .language-ul').slideToggle();
	  });

  //swiper
    var swiper = new Swiper('#hp-swiper', {
	    slidesPerView: 4,
	    spaceBetween: 15,
	    loop:true,
	    navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		},
	});

	var swiper = new Swiper('#product-content-swiper', {
	    navigation: {
		    nextEl: '.swiper-button-next',
		    prevEl: '.swiper-button-prev',
		},
	});


	//yellow-border25 mouseover
	jQuery('.widget-product-tab-ul li').mouseover(function(){
		jQuery('.widget-product-tab-ul li').removeClass('active');
		jQuery(this).addClass('active');
	})

	//product-detail tabs
	jQuery('.prodect-content-tabs li').click(function(event){
		event.preventDefault();
		var tab_id = jQuery(this).find('a').attr("href");
		jQuery('.prodect-content-tabs li').removeClass('active');
		jQuery(this).addClass('active');	
		jQuery(this).parent().parent().find(".tab").slideUp("fast");
		jQuery(this).parent().parent().find(tab_id).slideDown("slow");
	})
});