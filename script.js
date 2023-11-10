// submenu
{
  const nav = document.querySelector('nav');
  const subMenu = document.querySelector('.sub-menu');

  nav.addEventListener('mouseover', () => {
    subMenu.style.display = 'block';
  });

  document.addEventListener('mouseover', (event) => {
    if (!nav.contains(event.target)) {
      subMenu.style.display = 'none';
    }
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) {
      subMenu.style.display = 'none';
    }
  });
}

// back to top
{
  // Get a reference to the button
  var scrollToTopButton = document.getElementById("scroll-to-top-button");

  // Show or hide the button based on the user's scroll position
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  scrollToTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });

}

// sidebar
{
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px') {
      sidebar.style.right = '-250px';
    } else {
      sidebar.style.right = '0px';
    }
  }

  function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.right = '-250px';
  }

  function handleSidebarHover(enter) {
    const sidebar = document.getElementById('sidebar');
    if (enter) {
      sidebar.style.right = '0px';
    } else {
      sidebar.style.right = '-250px';
    }
  }
  function hideSidebarOnOutsideClick(event) {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggleButton');

    if (!sidebar.contains(event.target) && event.target !== toggleButton) {
      closeSidebar();
    }
  }

  document.addEventListener('click', hideSidebarOnOutsideClick);
}

// popup Announcement
{
  document.addEventListener('DOMContentLoaded', function () {
    // Check if 24 hours have passed since the last visit
    if (!localStorage.getItem('popupLastShown') || has24HoursPassed()) {
      // Display the popup when the page is loaded or 24 hours have passed
      document.getElementById('popupContainer').style.display = 'flex';
      // Save the current time in localStorage
      localStorage.setItem('popupLastShown', new Date().getTime().toString());
    }
  });

  function has24HoursPassed() {
    // Get the last time the popup was shown from localStorage
    var lastShownTime = localStorage.getItem('popupLastShown');
    if (!lastShownTime) {
      return true; // Show the popup if it has never been shown before
    }

    // Calculate the time difference in milliseconds
    var currentTime = new Date().getTime();
    var timeDifference = currentTime - parseInt(lastShownTime);

    // Check if 24 hours have passed (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    return timeDifference > 24 * 60 * 60 * 1000;
  }

  function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
  }

}

