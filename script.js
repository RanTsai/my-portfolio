document.addEventListener("DOMContentLoaded", function () {
  let backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = "&#8679;";
  backToTopBtn.id = "backToTop";
  document.body.appendChild(backToTopBtn);

  // Style the button
  let style = document.createElement("style");
  style.innerHTML = `
        #backToTop {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background-color: #00bcd4;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            font-size: 24px;
            display: none;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            transition: opacity 0.3s;
        }
        #backToTop:hover {
            background-color: #008ba3;
        }
    `;
  document.head.appendChild(style);

  // Show button when scrolling down
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Scroll back to top when button is clicked
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
});