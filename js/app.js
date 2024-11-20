document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('#sidebar ul li a');
  const content = document.getElementById('content');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const url = link.getAttribute('data-content');

      // Use AJAX to load the content
      fetch(`data/${url}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          content.innerHTML = data;
        })
        .catch(error => {
          content.innerHTML = `<p>Error loading content: ${error.message}</p>`;
        });
    });
  });
});
