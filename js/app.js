document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('#sidebar a, #top-nav a'); // Combine sidebar and top nav links
  const content = document.getElementById('content'); // Main content area

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      const file = link.getAttribute('data-content'); // Get content file

      if (file) {
        // Use fetch to load content dynamically
        fetch(`data/${file}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to load ${file}: ${response.statusText}`);
            }
            return response.text();
          })
          .then(data => {
            content.innerHTML = data; // Update the content section
          })
          .catch(error => {
            content.innerHTML = `<p>Error loading content: ${error.message}</p>`;
          });
      }
    });
  });
});
