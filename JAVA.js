document.querySelector("button").addEventListener("click", function () {
    alert("Hello Sayf! 👋");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    document.getElementById("successMsg").innerText =
        "Message sent successfully! ✅";
});