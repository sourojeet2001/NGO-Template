document.addEventListener("DOMContentLoaded", function () {
if (
  !navigator.userAgent.includes("Chrome") &&
  navigator.userAgent.includes("Safari")
) {
  var styleElement = document.createElement("style");

  var styles = `
    h1, h2, h3, h4, h5, a {
      font-weight: 500 !important;
    }
    .count--section1, .count--section2 {
      justify-content: flex-start;
      gap: 10px;
    }
    .blog-info a {
      font-weight: 500 !important;
    }
    .slick-dots li button:before {
      font-size: 24px !important;
    }
  `;

  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}
});
