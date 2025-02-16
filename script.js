      // Toggle Overlay
      const navbarToggle = document.querySelector('.navbar-toggle');
      const overlay = document.querySelector('.overlay');
      const closeBtn = document.querySelector('.close-btn');

      navbarToggle.addEventListener('click', () => {
          overlay.classList.add('active');
      });

      closeBtn.addEventListener('click', () => {
          overlay.classList.remove('active');
      });

      // Search Functionality
      const searchIcon = document.querySelector('.search-icon');
      const searchBarSm = document.querySelector('.search-bar-sm');

      searchIcon?.addEventListener('click', () => {
          alert('Search functionality will be implemented here.');
      });

      searchBarSm?.addEventListener('submit', (e) => {
          e.preventDefault();
          const searchTerm = searchBarSm.querySelector('input').value;
          alert(`You searched for: ${searchTerm}`);
      });

      // Shop Icon Functionality
      const shopIcon = document.querySelector('.shop-icon');

      shopIcon?.addEventListener('click', () => {
          alert('Shop functionality will be implemented here.');
      });


      // Initialize cart variables
      let cartQuantity = 0;
      let cartTotal = 0;

      function buyNow(item, price) {
        // Update cart variables
        cartQuantity++;
        cartTotal += price;

        // Update cart UI
        document.getElementById("cart-quantity").innerText = cartQuantity;
        document.getElementById("cart-total").innerText = cartTotal.toFixed(2);

        // Optionally, show an alert confirming the action
        alert(`You have added ${item} for ₦${price.toFixed(2)} to your cart.`);
      } 
      
      
      // Swiper
              const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 3,
                    autoplay: false,
                    spaceBetween: 30,
                },
                320: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 10,
                }
            }
        });
        
        
          // E-commerce functionality
  let cart = [];

  document.querySelectorAll('.buy-btn').forEach(button => {
      button.addEventListener('click', () => {
          const product = {
              name: button.parentElement.querySelector('.soup-title').textContent,
              price: parseInt(button.dataset.price),
              quantity: 1
          };

          const existingItem = cart.find(item => item.name === product.name);
          if (existingItem) {
              existingItem.quantity++;
          } else {
              cart.push(product);
          }

          updateCartDisplay();
          animateAddToCart(button);
      });
  });

  function updateCartDisplay() {
      const cartItems = document.getElementById('cart-items');
      const totalPrice = document.getElementById('total-price');
      let total = 0;

      cartItems.innerHTML = '';

      cart.forEach(item => {
          total += item.price * item.quantity;
          const itemElement = document.createElement('div');
          itemElement.className = 'cart-item';
          itemElement.innerHTML = `
                    <div>
                        <span>${item.name}</span>
                        <span>${item.quantity}x</span>
                    </div>
                    <span>₦${(item.price * item.quantity).toLocaleString()}</span>
                `;
          cartItems.appendChild(itemElement);
      });

      totalPrice.textContent = total.toLocaleString();
  }

  function animateAddToCart(button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
          button.style.transform = 'scale(1)';
      }, 200);
  }

  // Checkout functionality
  document.getElementById('checkout-btn').addEventListener('click', () => {
      if (cart.length === 0) {
          alert('Your cooking pot is empty! Add some soups first.');
          return;
      }

      // Implement payment integration here
      alert(`Proceeding to checkout with total: ₦${document.getElementById('total-price').textContent}`);
  });
  
  // Add localStorage persistence
function saveCart() {
    localStorage.setItem('soupCart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('soupCart');
    if (savedCart) cart = JSON.parse(savedCart);
    updateCartDisplay();
}

// Initialize on load
window.addEventListener('load', loadCart);


   // Show/hide the button based on scroll position
   window.addEventListener('scroll', function() {
       const backToTopButton = document.getElementById('backToTop');
       if (window.pageYOffset > 200) {
           backToTopButton.classList.add('show');
       } else {
           backToTopButton.classList.remove('show');
       }
   });

   // Smooth scroll to top when clicked
   document.getElementById('backToTop').addEventListener('click', function(e) {
       e.preventDefault();
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       });
   });