function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email");

    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid")
        form.classList.remove("invalid");
        email2.style.borderColor = "hsl(223, 100%, 88%)"
        text.innerHTML = "";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Please provide a valid email address";
        email2.style.borderColor = "hsl(354, 100%, 66%)";
    }

    if (email == "") {
        form.classList.remove("invalid");
        form.classList.remove("valid");
        text.innerHTML = "";
        email2.style.borderColor = "hsl(223, 100%, 88%)";
    }
}