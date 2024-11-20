document.addEventListener("DOMContentLoaded", () => {
  // Fetch team data
  fetch('data/team.json')
    .then(response => response.json())
    .then(data => {
      const teamContainer = document.getElementById("team-container");
      data.forEach(member => {
        const memberCard = document.createElement("div");
        memberCard.classList.add("card");
        memberCard.innerHTML = `
          <h3>${member.name}</h3>
          <p><strong>Role:</strong> ${member.role}</p>
          <p>${member.bio}</p>
        `;
        teamContainer.appendChild(memberCard);
      });
    });

  // Fetch product data
  fetch('data/product.json')
    .then(response => response.json())
    .then(data => {
      const productContainer = document.getElementById("product-container");
      const productCard = document.createElement("div");
      productCard.classList.add("card");
      productCard.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <ul>
          ${data.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      `;
      productContainer.appendChild(productCard);
    });
});
