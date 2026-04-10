export const description = "Form in JavaScript";

export const renderForm = () => {
    return `
    <form class="form" novalidate>
        <input class="name-input" type="text" placeholder="Name" />
        <p class="error name-error"></p>

        <input class="email-input" type="email" placeholder="Email" />
        <p class="error email-error"></p>

        <input class="password-input" type="password" placeholder="Password" />
        <p class="error password-error"></p>

        <button type="submit">Submit</button>
    </form>
    `;
};

export const examples = [
    () => {
        const form = document.querySelector(".form");

        if (!form) return;

        const input = document.querySelector(".name-input");
        const emailInput = document.querySelector(".email-input");
        const passwordInput = document.querySelector(".password-input");

        const nameError = document.querySelector(".name-error");
        const emailError = document.querySelector(".email-error");
        const passwordError = document.querySelector(".password-error");

        function clearErrors() {
            nameError.textContent = "";
            emailError.textContent = "";
            passwordError.textContent = "";
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            clearErrors();

            const nameValue = input.value.trim();
            const emailValue = emailInput.value.trim().toLowerCase();
            const passwordValue = passwordInput.value.trim();

            let isValid = true;

            if (nameValue === "") {
                nameError.textContent = "Name is required";
                isValid = false;
            }

            if (!emailValue.includes("@")) {
                emailError.textContent = "Email is not valid";
                isValid = false;
            }

            if (passwordValue.length < 6) {
                passwordError.textContent = "Password must be at least 6 characters";
                isValid = false;
            }

            if (!isValid) return;

            console.log("SUCCESS ✅");
            console.log(nameValue);
            console.log(emailValue);
            console.log(passwordValue);
        });
    }
];