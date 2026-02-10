document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("response").innerText = data.message;
    });
});
