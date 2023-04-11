var counter = 0;

function pet() {
    var dog = document.getElementById("dog");
    dog.style.transform = "translateY(-20px)";
    setTimeout(function () {
        dog.style.transform = "translateY(0)";
    }, 100);
    counter++;
    document.getElementById("count").textContent = counter;
}