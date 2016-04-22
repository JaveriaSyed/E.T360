$(document).ready(function() {

  // Product data to be used in shop and in cart
  var products = {
    'Octocat Mug' : ['Red Carpet Package' : ['Red Carpet Package', "Come aboard and enjoy a VIP treatment that will lead you to the Red Carpet! Local cocktail, 6-course table d’hôte, half bottle of wine per person and digestif; Priority admission aboard; Live DJ to end the evening on the outside;Enchanted setting and a unique formula. Duration: 4h", 165, 'http://m.croisieresaml.com/cache/1/b/2/e/5/325a9b7aeb75856aad820f9d6cf2ee93c4c.jpg', 1],
      
        'Cruise and Fireworks' : ['Cruise and Fireworks', "Take a front row seat in the heart of the St. Lawrence River. Best view on the colourful explosions in the sky of Montreal; Musical score diffused simultaneously aboard; Outside places only; At the end of the show, relax or dance on our outside terraces.", 79, 'https://www.quebecoriginal.com/en/listing/images/800x600/bca29507-7576-47fa-bb01-7b1437a6a9a7/buffet-dinner-cruise-and-fireworks-montreal.jpg', 2],
      
        '5-COURSE GOURMET GETAWAY & FIREWORKS' : ['5-COURSE GOURMET GETAWAY & FIREWORKS', "Come aboard the AML Cavalier Maxim or the AML Louis Jolliet for the Loto-Québec International Fireworks. From the heart of the St. Lawrence River, take advantage of a unique view to admire these colourful explosions with the musical score diffused simultaneously aboard! At the end of the show, relax or dance on our outside terraces, for a magical and memorable evening.", 109, 'http://www.croisieresaml.com/uploads/croisieres/thumbnail_19-souper-croisiere-miniature.jpg', 3],
      
        'Evening Cruise' : ['Evening Cruise', "Enjoy summer time on the Montreal's floating terrace! A different 7 - 11 on the river; Atmosphere conducive to partying and dancing; Entertainment and live DJ.", 60, 'https://www.chaudiereappalaches.com/fichiersUpload/banquesDImagesMembres/afficher-20111214145208-20111214145157-croisieresaml-bateaux.jpg', 4],
      
        'GRAND RIVER CRUISES MONTREAL - QUEBEC (WITH OVERNIGHT STAY)' : ['GRAND RIVER CRUISES MONTREAL - QUEBEC (WITH OVERNIGHT STAY)', "An exceptional day awaits you! In an ideal maritime setting, discover the great secrets of the regions bordering the St. Lawrence River. It’s an amazing and enriching cruise and a perfect getaway.In the evening, enjoy several hours of free time to discover Old Quebec.", 150, 'http://www.wediscovercanada.ca/img/quebec_city.jpg', 5],
      
        'BUFFET DINNER CRUISE & FIREWORKS ABOARD THE AML LOUIS JOLLIET' : ['BUFFET DINNER CRUISE & FIREWORKS ABOARD THE AML LOUIS JOLLIET', "From the heart of the St. Lawrence River, take advantage of a unique view to admire these colourful explosions with the musical score diffused simultaneously aboard! At the end of the show, relax or dance on our outside terraces, for a magical and memorable evening.", 80, 'http://www.forfaitsquebec.com/fichiers/alacarte_forfaits/l_aml1234.jpg', 6]
  };  
  
  // Populates shop with items based on template and data in var products
  
  var $shop = $('.shop');
  var $cart = $('.cart-items');
  
  for(var item in products) {
    var itemName = products[item][0],
        itemDescription = products[item][1],
        itemPrice = products[item][2],
        itemImg = products[item][3],
        itemId = products[item][4],
        $template = $($('#productTemplate').html());
    
    $template.find('h1').text(itemName);
    $template.find('p').text(itemDescription);
    $template.find('.price').text('$' + itemPrice);
    $template.css('background-image', 'url(' + itemImg + ')');
    
    $template.data('id', itemId);
    $template.data('name', itemName);
    $template.data('price', itemPrice);
    $template.data('image', itemImg);
    
    $shop.append($template);
  }
  
  // Checks quantity of a cart item on input blur and updates total
  // If quantity is zero, item is removed
  
  $('body').on('blur', '.cart-items input', function() {
    var $this = $(this),
        $item = $this.parents('li');
    if (+$this.val() === 0) {
      $item.remove();
    } else {
      calculateSubtotal($item);
    }
    updateCartQuantity();
    calculateAndUpdate();
  });
  
  // Add item from the shop to the cart
  // If item is already in the cart, +1 to quantity
  // If not, creates the cart item based on template
  
  $('body').on('click', '.product .add', function() {
    var items = $cart.children(),
        $item = $(this).parents('.product'),
        $template = $($('#cartItem').html()),
        $matched = null,
        quantity = 0;
    
    $matched = items.filter(function(index) {
      var $this = $(this);
      return $this.data('id') === $item.data('id');
    });
   
    if ($matched.length) {
      quantity = +$matched.find('.quantity').val() + 1;
      $matched.find('.quantity').val(quantity);
      calculateSubtotal($matched);
    } else {
      $template.find('.cart-product').css('background-image', 'url(' + $item.data('image') + ')');
      $template.find('h3').text($item.data('name'));
      $template.find('.subtotal').text('$' + $item.data('price'));
    
      $template.data('id', $item.data('id'));
      $template.data('price', $item.data('price'));
      $template.data('subtotal', $item.data('price'));
      
      $cart.append($template);
    }
    
    updateCartQuantity();
    calculateAndUpdate();
  });

  // Calculates subtotal for an item
  
  function calculateSubtotal($item) {
    var quantity = $item.find('.quantity').val(),
        price = $item.data('price'),
        subtotal = quantity * price;
    $item.find('.subtotal').text('$' + subtotal);
    $item.data('subtotal', subtotal);
  } 
    
  // Clicking on the cart link opens up the shopping cart
  
  var $cartlink = $('.cart-link'), $wrap = $('#wrap');
  
  $cartlink.on('click', function() {
    $cartlink.toggleClass('active');
    $wrap.toggleClass('active');
    return false;    
	});
  
  // Clicking outside the cart closes the cart, unless target is the "Add to Cart" button 
 
  $wrap.on('click', function(e){
    if (!$(e.target).is('.add')) {
      $wrap.removeClass('active');
      $cartlink.removeClass('active');
    }
  });
 
  // Calculates and updates totals, taxes, shipping
  
  function calculateAndUpdate() {
    var subtotal = 0,
        items = $cart.children(),
        // shipping not applied if there are no items
        shipping = items.length > 0 ? 5 : 0,
        tax = 0;
    items.each(function(index, item) {
      var $item = $(item),
          price = $item.data('subtotal');
      subtotal += price;
    });
    $('.subtotalTotal span').text(formatDollar(subtotal));
    tax = subtotal * .05;
    $('.taxes span').text(formatDollar(tax));
    $('.shipping span').text(formatDollar(shipping));
    $('.finalTotal span').text(formatDollar(subtotal + tax + shipping));
  }

  //  Update the total quantity of items in notification, hides if zero
  
  function updateCartQuantity() {
    var quantities = 0,
        $cartQuantity = $('span.cart-quantity'),
        items = $cart.children();
    items.each(function(index, item) {
      var $item = $(item),
          quantity = +$item.find('.quantity').val();
      quantities += quantity;
    });
    if(quantities > 0){
      $cartQuantity.removeClass('empty');
    } else {
      $cartQuantity.addClass('empty');
    }
    $cartQuantity.text(quantities);
  }
  
 
  //  Formats number into dollar format
     
  function formatDollar(amount) {
    return '$' + parseFloat(Math.round(amount * 100) / 100).toFixed(2);
  }
  
  // Restrict the quantity input field to numbers only
     
  $('body').on('keypress', '.cart-items input', function (ev) {
      var keyCode = window.event ? ev.keyCode : ev.which;
      if (keyCode < 48 || keyCode > 57) {
        if (keyCode != 0 && keyCode != 8 && keyCode != 13 && !ev.ctrlKey) {
          ev.preventDefault();
        }
      }
    });
  
  // Trigger animation on Add to Cart button click
  
  $('.addtocart').on('click', function () {
    $(this).addClass('active');
    setTimeout(function () {
      $('.addtocart').removeClass('active');    
    }, 1000);
  });
  
  // Trigger error animation on Checkout button
  
  $('.checkout').on('click', function () {
    $(this).addClass('active');
    $('.error').css('display', 'block');
    setTimeout(function () {
      $('.checkout').removeClass('active');    
      $('.error').css('display', 'none');      
    }, 1000);
  });    
  
});