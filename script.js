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