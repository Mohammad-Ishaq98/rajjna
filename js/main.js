(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "992"
});

// elavety zoom
$("#zoom_01").elevateZoom({
	zoomWindowWidth:350,
});
$("#zoom_02").elevateZoom({
	zoomWindowPosition:3,
	zoomWindowWidth:350,
});
$("#zoom_03").elevateZoom({
	zoomWindowPosition:10,
	zoomWindowWidth:350,
});
$("#zoom_04").elevateZoom({
	zoomWindowWidth:350,
});
$("#zoom_05").elevateZoom({
	zoomWindowPosition:3,
	zoomWindowWidth:350,
});
$("#zoom_06").elevateZoom({
	zoomWindowPosition:10,
	zoomWindowWidth:350,
});

// WOW active
new WOW().init();
})(jQuery);
const mainWrapper = document.querySelector("#main_wrapper");
const sellItem = document.querySelector("#sell_item");
const backToMain = document.querySelector("#back_to_main");
const detailsBtn = document.querySelector("#details");

//disabling input
// const input = document.querySelector('.disable_input');
// input.addEventListener('click', function(e){
// 	e.preventDefault()
// })
//details btn click event
detailsBtn.addEventListener("click", function(){
	mainWrapper.classList.add('none');
	sellItem.classList.remove('none')
})
backToMain.addEventListener('click', function(){
	mainWrapper.classList.remove('none');
	sellItem.classList.add('none')
})
// add to cart section
const buyBtn = document.querySelector(".buy_cart");
buyBtn.addEventListener('click', function(){
	displayCartItem()
})
 function displayCartItem(displayItem){
	let displayCartItem = displayItem.map( function(item){
		return `<input for="" class="form-control" disabled>${}</>`
	})
 }