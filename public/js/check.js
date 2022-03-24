const check = document.querySelector("form");
console.log(check);

check.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputs = event.target.querySelectorAll("input");
    console.log(inputs)

    // const errorLabel = event.target.querySelector("label#error");

    const errorLabel = document.querySelector('.error');

    console.log(errorLabel);

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