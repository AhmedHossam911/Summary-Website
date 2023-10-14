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
window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", function() {
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
        


