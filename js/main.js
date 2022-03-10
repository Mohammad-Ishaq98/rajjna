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
//new WOW().init();
})(jQuery);
const mainWrapper = document.querySelector("#main_wrapper");
const sellItem = document.querySelector("#sell_item");
const backToMain = document.querySelector("#back_to_main");
const detailsBtn = document.querySelector("#details");
const productName = document.querySelector("#product_name").innerHTML;
const priceName = document.querySelector("#price").innerHTML;
// const cartPrice = document.querySelector('.cart-price').innerHTML;
// const quantityOfProduct = document.querySelector('.quantity_input').innerHTML;
// const cartProductName = document.querySelector('.product_name_input').innerHTML;
const cartPrice = document.querySelector('.cart_price').innerText.replace('$','');
const CartQuantity = document.querySelector('.quantity_num').value;
const cartproductsName = document.querySelector('.product_name_input').innerText;

console.log(CartQuantity);
detailsBtn.addEventListener("click", function(){
	mainWrapper.classList.add('none');
	sellItem.classList.remove('none')
})
backToMain.addEventListener('click', function(){
	mainWrapper.classList.remove('none');
	sellItem.classList.add('none')
})


//**************************** */ add to cart section ****************************
//remove btn
const removeBtn = document.querySelectorAll(".btn-danger")
//console.log(removeBtn);
// removeBtn.forEach(element => {
// 	console.log(element);
// 	element.addEventListener("click", function(){
// 		console.log('clicked....');
// 	})
// });
for (let i = 0; i < removeBtn.length; i++){
	let button = removeBtn[i];
	button.addEventListener('click', function(event){
		//console.log('cliked...');
		let buttonClikedToRemove = event.target;
		buttonClikedToRemove.parentElement.remove();
		updateCartTotal ()
	})
}


function updateCartTotal (){
	let cartContainer = document.querySelector('.cart-item');
	let cartRows = document.querySelectorAll('.cart-row')
//	console.log(cartContainer,cartRows);

	// for (let i = 0; i < cartRows.length; i++){
	// 	let cartRow = cartRows[i];
	// 	console.log(cartRow);
	// 	let cartPrice = document.querySelector('.cart-price')
	// 	let price = cartPrice.innerText;
	// 	console.log(cartRows,cartPrice,price);
	// }
	cartRows.forEach(element => {
		CartQuantity.innerText = CartQuantity;
		 let cartTotal = 2-9*+6385;
		 cartTotal = cartTotal + (cartPrice * CartQuantity )
		 console.log(cartPrice,cartproductsName,CartQuantity,cartTotal);
	});
	//document.querySelector('.cart_total').innerText = cartTotal
}



 