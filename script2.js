document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let password = document.getElementById("password").value;

        if (name === "" || email === "" || phone === "" || password === "") {
            alert("Please fill all the fields");
            window.localStorage.setItem("text", false);
        } else {
            let user = {
                name: name,
                email: email,
                phone: phone
            };
            window.localStorage.setItem("user", JSON.stringify(user));
            window.localStorage.setItem("text", true);
            window.localStorage.setItem("text2", true);
            window.location.href = "index.html";
        }

        
    });

});