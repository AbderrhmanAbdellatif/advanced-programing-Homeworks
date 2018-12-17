if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
	var arrayofAlbum=["Album 1","Album 2","Album 3","Album 4"];

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
		document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
	
}

function purchaseClicked() {
	var size = document.getElementsByClassName("cart-item cart-column").length
    if((size-1)==0){
		    alert(' the shopping cart is empty :(')
    }else{
    alert('your purchase is successful \n thanks for your time (:')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
	}
}

function removeCartItem(event) {
    var buttonClicked = event.target
    if(arrayofAlbum.includes(buttonClicked.parentElement.innerText.split("\n")[0])){
		buttonClicked.parentElement.remove();
	}else{
		  buttonClicked.parentElement.parentElement.remove();
	}
	var arrayofitem=[];
    var size = document.getElementsByClassName("cart-item cart-column").length
    for(let i=0;i<size ;i++){
		arrayofitem.push(document.getElementsByClassName("cart-item cart-column")[i].innerText);
	}
	for(let i=0;i<size ;i++){
    if(!arrayofAlbum.includes(arrayofitem[i])){
          updateCartTotal()
	}if(!arrayofAlbum.includes(arrayofitem[i])){
		console.log("Album ");
	}
	}
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
	var arrayofitem=[];
    var size = document.getElementsByClassName("cart-item cart-column").length
    for(let i=0;i<size ;i++){
		arrayofitem.push(document.getElementsByClassName("cart-item cart-column")[i].innerText);
	}
	for(let i=0;i<size ;i++){
    if(!arrayofAlbum.includes(arrayofitem[i])){
          updateCartTotal()
	}if(!arrayofAlbum.includes(arrayofitem[i])){
		console.log("Album ");
	}
	}

 }
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
	//if(!arrayofAlbum.includes(title)){
    updateCartTotal()
	//}else{
//		console.log("Album ");
	//}
}

function addItemToCart(title, price, imageSrc) {
	if(!arrayofAlbum.includes(title)){
     var cartRow = document.createElement('div')
     cartRow.classList.add('cart-row')
     var cartItems = document.getElementsByClassName('cart-items')[0]
     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
     for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
     }
     var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
     cartRow.innerHTML = cartRowContents
     cartItems.append(cartRow)
     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
	}else{
	 var cartRow = document.createElement('div')
     cartRow.classList.add('cart-row')
     var cartItems = document.getElementsByClassName('cart-items')[0]
     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
     for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
     }
     var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
     cartRow.innerHTML = cartRowContents
     cartItems.append(cartRow)
     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
	}
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        if(!arrayofAlbum.includes(cartRows[i].innerText.split("\n")[0])){
		var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
		}else{
		var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
		
        total = total +  price;
		}
		
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  /* Create magnifier glass: */
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

  /* Insert magnifier glass: */
  img.parentElement.insertBefore(glass, img);

  /* Set background properties for the magnifier glass: */
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  /* Execute a function when someone moves the magnifier glass over the image: */
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /* Prevent the magnifier glass from being positioned outside the image: */
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /* Set the position of the magnifier glass: */
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /* Display what the magnifier glass "sees": */
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    a = img.getBoundingClientRect();
    /* Calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}