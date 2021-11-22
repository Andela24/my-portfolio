const h2 = document.createElement("h2");
h2.textContent = "WELCOME TO MY PERSONAL PAGE";

const image = document.getElementById('image');
image.addEventListener('click', function() {
    alert('Don not touch my coffee!');
});
let h4 = document.getElementsByTagName('h4');
h4.addEventListener('mouseover', function(event) {
    event.target.style.color = "orange";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
    }, false);
