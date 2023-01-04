(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

function c(){
    window.location.href="c.html"
}

function chat(){
    window.location.href="chat1.html"
}

function g(){
    window.location.href="game.html"
}

function cp(){
    window.location.href="cp.html"
}

function g1(){
    window.location.href="game1.html"
}