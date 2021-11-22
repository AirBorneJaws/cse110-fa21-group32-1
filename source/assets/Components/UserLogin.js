// UserLogin.js

import { Router } from '../scripts/Router.js';

const router = new Router();

class UserLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Create styles and root element
        const styles = document.createElement('style');
        const article = document.createElement('article');

        // Fill in styles and root element
        styles.innerHTML = `
        body {
            --color-primary: #324A54;
            --color-hover: #007f67;
            --color-secondary: #252c6a;
            --color-error: #cc3333;
            --color-success: #4bb544;
            --border-radius: 4px;
        
            margin: 0;
            height: 100vh;
            display: flex;
            align-items:center;
            justify-content: center;
            font-size: 18px;
            background: var(--color-primary);
        }
        
        .container{
            width: 400px;
            max-width: 400px;
            margin: 1rem;
            padding: 2rem;
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
            border-radius: var(--border-radius);
            background-color: #ffffff;
        }
        
        .container,
        .form__input,
        .form__button {
            font-family: 400 'Lato', sans-serif;
        }
        
        .form > *:first-child{
            margin-top: 0;
        }
        
        .form > *:last-child{
            margin-bottom: 0;
        }
        
        .form__title {
            margin-bottom: 1rem;
            text-align: center;
        }
        
        .form__message{
            text-align: center;
            margin-bottom: 1rem;
        }
        
        .form__message--success{
            color: var(--color-success);
        }
        
        .form__message--error{
            color: var(--color-error);
        }
        
        .form__input-group {
            margin-bottom: 0.5rem;
        }
        
        .form__input {
            display: block;
            width: 100%;
            padding: 0.75rem;
            box-sizing: border-box;
            border-radius: var(--border-radius);
            border: 1px solid #dddddd;
            outline: none;
            background: #eeeeee;
            transition: background 0.2s, border-color 0.2s;
        }
        
        .form__input:focus {
            border-color: var(--color-primary);
            background-color: #ffffff;
        }
        
        .form__input--error {
            color: var(--color-error);
            border-color: var(--color-error);
        }
        
        
        .form__input-error-message {
            margin-top: 0.5rem;
            font-size: 1rem;
            color: var(--color-error);
        }
        
        .form__button {
            width: 100%;
            padding: 1rem 2rem;
            font-weight: bold;
            font-size: 1rem;
            color: #ffffff;
            border: none;
            border-radius: var(--border-radius);
            outline: none;
            cursor: pointer;
            background-color: var(--color-primary);
        }
        
        .form__button:hover {
            background-color: var(--color-hover);
        }
        
        .form__button:active {
            transform: scale(0.98);
        }
        
        .form__text {
            text-align: center;
        }
        
        .form__link {
            color: var(--color-secondary);
            text-decoration: none;
            cursor: pointer;
        }
        
        .form__link:hover {
            text-decoration: underline;
        }
        
        .form--hidden {
            display: none;
        }
        `;
        article.innerHTML = `
        <form class="form" id="login">
            <h1 class="form__title">Login</h1>
            <div class="form__message form__message--error" ></div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Username or email">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Password">
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" type="submit">Continue</button>
            <p class="form__text">
                <a href="#" class="form__link" id="linkEmailPage">Forget your password?</a>
            </p>

            <p class="form__text">
                <a class="form__link" href="./" id="linkCreation">Don't have an account? Create account!</a>
            </p>
        </form>

        <form class="form form--hidden" id="creation">
            <h1 class="form__title">Create Account</h1>
            <div class="form__message form__message--error" ></div>
            <div class="form__input-group">
                <input type="text" id="signUpUsername" class="form__input" autofocus placeholder="Username">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Email Address">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Password">
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" autofocus placeholder="Confirm Password">
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" id="registration" type="submit">Continue</button>
            <p class="form__text">
                <a class="form__link" href="./" id="linkLogin">Already have an account? Sign in!</a>
            </p>
        </form>

        <form class="form form--hidden" id="emailPage">
            <h1 class="form__title">Registration Email</h1>
            <div class="form__input-group">
                <input type="text" class="form__input" autofocus placeholder="Email Address">
                <div class="form__input-error-message"></div>
            </div>
            <button class="form__button" id="reset" type="submit">Receive Confirmation Email</button>
            <p class="form__text">
                <a class="form__link" href="./" id="linkLogin">Remember the password? Login!</a>
            </p>
        </form>

        <form class="form form--hidden" id="confirmationPage">
            <h1 class="form__title">Check Your Email</h1>
            <p>We have already sent an email with the link to reset your passord to your email! Reset your password and come back to login in!</p>
            <p class="form__text">
                <a class="form__link" href="./" id="linkLogin">Back to Login!</a>
            </p>
        </form>

        <form class="form form--hidden" id="successReg">
            <h1 class="form__title">Successful!</h1>
            <p>Congradulations! You have already registrated successfully! Now you can go back to login!</p>
            <p class="form__text">
                <a class="form__link" href="./" id="linkLogin">Back to Login!</a>
            </p>
        </form>
        `;

        // Append elements to the shadow root
        this.shadowRoot.append(styles, article);

        function setFormMessage(formElement, type, message) {
            const messageElement = formElement.querySelector(".form__message");
            
            messageElement.textContent = message;
            messageElement.classList.remove("form__message--success", "form__messgae--error");
            messageElement.classList.add(`form_message--${type}`);
        
        }
        
        function setInputError(inputElement, message) {
            inputElement.classList.add("form__input--error");
            inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
        }
        
        function clearInputError(inputElement) {
            inputElement.classList.remove("form__input--error");
            inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
        }
        
        this.shadowRoot.addEventListener("DOMContentLoaded", () => {
            const loginForm = this.shadowRoot.querySelector("#login");
            const createForm = this.shadowRoot.querySelector("#creation");
            const emailForm = this.shadowRoot.querySelector("#emailPage");
            const confirmationForm = this.shadowRoot.querySelector("#confirmationPage");
            const successRegForm = this.shadowRoot.querySelector("#successReg");
        
            this.shadowRoot.querySelector("#linkCreation").addEventListener("click", e => {
                e.preventDefault();
                emailForm.classList.add("form--hidden");
                loginForm.classList.add("form--hidden");
                confirmationForm.classList.add("form--hidden");
                successRegForm.classList.add("form--hidden");
                createForm.classList.remove("form--hidden");
            });
        
            this.shadowRoot.querySelector("#linkLogin").addEventListener("click", e => {
                e.preventDefault();
                emailForm.classList.add("form--hidden");
                createForm.classList.add("form--hidden");
                confirmationForm.classList.add("form--hidden");
                successRegForm.classList.add("form--hidden");
                loginForm.classList.remove("form--hidden");
            });
        
            this.shadowRoot.querySelector("#linkEmailPage").addEventListener("click", e => {
                e.preventDefault();
                loginForm.classList.add("form--hidden");
                createForm.classList.add("form--hidden");
                confirmationForm.classList.add("form--hidden");
                successRegForm.classList.add("form--hidden");
                emailForm.classList.remove("form--hidden");
            });
        
            loginForm.addEventListener("submit", e => {
                e.preventDefault();
                
                //do fetch and check data of users here and return
                setFormMessage(loginForm, "error", "Invalid username or password!");
            });
        
            this.shadowRoot.querySelectorAll(".form__input").forEach(inputElement => {
                inputElement.addEventListener("blur", e => {
                    if(e.target.id === "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                        setInputError(inputElement, "Username must be at least 10 characters");
                    }
                    else if(e.target.id === "signUpUsername" && e.target.value.length > 16){
                        setInputError(inputElement, "Username must be less than 16 characters");
                    }
                });
        
                inputElement.addEventListener("input", e => {
                    clearInputError(inputElement);
                });
            });
            
            const resetButton = this.shadowRoot.querySelector("#reset")
            resetButton.addEventListener("click", e => {
                e.preventDefault();
                emailForm.classList.add("form--hidden");
                loginForm.classList.add("form--hidden");
                createForm.classList.add("form--hidden");
                successRegForm.classList.add("form--hidden");
                confirmationForm.classList.remove("form--hidden");
            });
        
        
            // should show up when users registrate successfully
            const registrationBtn = this.shadowRoot.querySelector("#registration");
            registrationBtn.addEventListener("click", e => {
                e.preventDefault();
                emailForm.classList.add("form--hidden");
                loginForm.classList.add("form--hidden");
                createForm.classList.add("form--hidden");
                confirmationForm.classList.add("form--hidden");
                successRegForm.classList.remove("form--hidden");
            });
        
            /*createForm.addEventListener("submit", e => {
                e.preventDefault();
                setFormMessage(createForm, "error", "wrong information");
            });*/
        });
    }
}

customElements.define('user-login-page', UserLogin);
