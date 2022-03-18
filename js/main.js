(function ($) {
	"use strict";

	// meanmenu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991"
	});

	// elavety zoom
	$("#zoom_01").elevateZoom({
		zoomWindowWidth: 350,
	});
	$("#zoom_02").elevateZoom({
		zoomWindowPosition: 3,
		zoomWindowWidth: 350,
	});
	$("#zoom_03").elevateZoom({
		zoomWindowPosition: 3,
		zoomWindowWidth: 350,
	});
	$("#zoom_04").elevateZoom({
		zoomWindowWidth: 350,
	});
	$("#zoom_05").elevateZoom({
		zoomWindowPosition: 3,
		zoomWindowWidth: 350,
	});
	$("#zoom_06").elevateZoom({
		zoomWindowPosition: 3,
		zoomWindowWidth: 350,
	});

	//scroll Down
	$(".down").click(function () {
		$('html, body').animate({
			scrollTop: $(".up").offset().top
		}, 1500);
	});
	// WOW active
	//new WOW().init();
})(jQuery);
const dateOfYear = document.querySelector("#date").innerText
const mainWrapper = document.querySelector("#main_wrapper");
const sellItem = document.querySelector("#sell_item");
const backToMain = document.querySelector("#back_to_main");
const kamizDetaisBtn_01 = document.querySelector("#kamiz_01");
const kamizDetaisBtn_02 = document.querySelector("#kamiz_02");
const kamizDetaisBtn_03 = document.querySelector("#kamiz_03");
const kamizDetaisBtn_04 = document.querySelector("#kamiz_04");
const kamizDetaisBtn_05 = document.querySelector("#kamiz_05");
const kamizDetaisBtn_06 = document.querySelector("#kamiz_06");

//date


kamizDetaisBtn_01.addEventListener("click", function () {
	kamizFunction()
})
kamizDetaisBtn_02.addEventListener("click", function () {
	kamizFunction()
})
kamizDetaisBtn_03.addEventListener("click", function () {
	kamizFunction()
})
kamizDetaisBtn_04.addEventListener("click", function () {
	kamizFunction()
})
kamizDetaisBtn_05.addEventListener("click", function () {
	kamizFunction()
})
kamizDetaisBtn_06.addEventListener("click", function () {
	kamizFunction()
})
function kamizFunction() {
	mainWrapper.classList.add('none');
	sellItem.classList.remove('none')
}

backToMain.addEventListener('click', function () {
	mainWrapper.classList.remove('none');
	sellItem.classList.add('none')
})



//**************************** add to cart section ****************************
//remove cart items looop
const removeCartItemBtns = document.getElementsByClassName("btn-danger");
for (let i = 0; i < removeCartItemBtns.length; i++) {
	const button = removeCartItemBtns[i];
	button.addEventListener('click', removeCartItem)
}
//quantity cart items looop
const quantityInput = document.getElementsByClassName('cart-quantity-input');
for (let i = 0; i < quantityInput.length; i++) {
	let input = quantityInput[i];
	input.addEventListener('change', quantiyChanged);
}
//add to cart items looop
const addTocartButton = document.getElementsByClassName('add_cart');
for (let i = 0; i < addTocartButton.length; i++) {
	const button = addTocartButton[i];
	button.addEventListener('click', addToCartClicked)
}

document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


function purchaseClicked() {
	alert('Thank you for your purchase');
	const cartItems = document.getElementsByClassName('cart-items')[0];
	while (cartItems.hasChildNodes()) {
		cartItems.removeChild(cartItems.firstChild)
	}
	updateCartTotal()
}


function removeCartItem(event) {
	const buttonClicked = event.target;
	buttonClicked.parentElement.parentElement.remove();
	updateCartTotal()
}

function quantiyChanged(event) {
	const input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updateCartTotal()
}
function addToCartClicked(event) {
	let button = event.target;
	let shopItem = button.parentElement;
	let title = shopItem.getElementsByClassName('product_name')[0].innerText;
	let price = shopItem.getElementsByClassName('product_price')[0].innerText;
	addItemToCart(title, price);
	updateCartTotal()
}
function addItemToCart(title, price) {
	const cartRow = document.createElement('div');
	const classArr = ['row', 'cart-row']
	cartRow.classList.add(...classArr)
	//cartRow.innerText = title;
	const cartItems = document.getElementsByClassName('cart-items')[0];
	const cartRowContents = `
								<div class="col-4 cart-item cart-column">
									<span class="cart-item-title">${title}</span>
								</div>
								<div class="col-2">
									<span class="cart-price cart-column">${price}</span>
								</div>
								
								<div class="col-4 cart-quantity cart-column">
									<input style="width: 70%;" class="cart-quantity-input" type="number" value="1">
									<button class="btn btn-danger" type="button">X</button>
								</div>
							`;
	cartRow.innerHTML = cartRowContents;
	cartItems.append(cartRow)
	cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
	cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantiyChanged)
}


function updateCartTotal() {
	const cartItemsContainer = document.getElementsByClassName('cart-items')[0];
	const cartRows = cartItemsContainer.getElementsByClassName('cart-row');
	console.log(cartRows);
	let grandTotal = 0;
	for (let i = 0; i < cartRows.length; i++) {
		const cartRow = cartRows[i];
		const priceElement = cartRow.getElementsByClassName('cart-price')[0];
		const quantiyElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
		//const total = cartRow.getElementsByClassName('total')[0];
		const price = parseFloat(priceElement.innerText.replace('$', ''));
		const quantity = quantiyElement.value;
		//calculating total & grandtotal
		grandTotal = grandTotal + (price * quantity);
	}
	document.getElementsByClassName('cart-total-price')[0].innerText = '$' + grandTotal;
}


