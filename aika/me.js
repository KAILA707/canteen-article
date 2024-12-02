// JavaScript to handle button click
document.getElementById('start-btn').addEventListener('click', function() {
    // Hide welcome screen
    document.getElementById('welcome-screen').style.display = 'none';
  });
// Function to show the corresponding page based on the section ID
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}


