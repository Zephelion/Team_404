const check = document.querySelector("form");
check.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = event.target.querySelectorAll("input");
    const errorLabel = event.target.querySelector("label#error");
    if (!inputs[0].value || !inputs[1].value) {
        errorLabel.classList.add("errormelding");
        errorLabel.innerHTML = "Voer alle velden in!";
        inputs.forEach(element => {
            element.classList.add("foute-input");
        });
    } else {
        event.target.submit();
    }
});