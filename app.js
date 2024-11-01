(function () {
    // Handle page navigation control button clicks
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    // Toggle light/dark mode
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Function to load content dynamically into specific sections
    function loadContent(url, target) {
        fetch(url)
            .then(response => response.text())
            .then(data => document.getElementById(target).innerHTML = data)
            .catch(error => console.error('Error loading content:', error));
    }

    // Load content when the page is fully loaded
    window.onload = function() {
        // Load separate HTML files for different sections
        loadContent('header.html', 'header-content');
        loadContent('about.html', 'about-content');
        loadContent('portfolio.html', 'portfolio-content');
        loadContent('blogs.html', 'blogs-content');
    };
})();

