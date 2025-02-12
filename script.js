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