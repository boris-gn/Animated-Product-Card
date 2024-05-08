document.querySelectorAll(".product-colors span").forEach(function(element) {
    element.addEventListener("click", function() {
        document.querySelectorAll(".product-colors span").forEach(function(el) {
            el.classList.remove("active");
        });
        this.classList.add("active");
        document.querySelector(".active").style.borderColor = this.getAttribute("data-color-sec");
        document.body.style.background = this.getAttribute("data-color-primary");
        document.querySelectorAll(".content h2, .content h3, .container .imgBx, .container .details .btn").forEach(function(item) {
            item.style.color = this.getAttribute("data-color-sec");
        }.bind(this));
        document.querySelector(".imgBx img").src = this.getAttribute("data-pic");
    });
});
