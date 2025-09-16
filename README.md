# Password-Checker
A real-time password strength checker built with HTML, CSS, and JavaScript that provides instant visual feedback on password security. 🔐
# Real-Time Password Strength Checker 🔐

![Technology](https://img.shields.io/badge/tech-HTML | CSS | JS-yellowgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

This is a front-end, client-side password strength assessment tool that provides instant, visual feedback to users as they type. The interface is designed to be intuitive and helpful, encouraging the creation of stronger passwords.

## Live Demo & Screenshot

You can run this project by simply opening the `T3.html` file in any modern web browser.


---

## Features ✨

* **Real-Time Feedback**: The strength meter and criteria checklist update instantly with every keystroke.
* **Visual Strength Meter**: A color-coded progress bar visually represents the password's strength, changing from red (weak) to green (strong).
* **Dynamic Criteria Checklist**: A checklist details the requirements for a strong password and updates with a checkmark (✅) as each criterion is met.
* **Show/Hide Password**: A toggle button allows users to view or mask the password they are typing.
* **No Backend Needed**: The entire application runs on the client-side using vanilla JavaScript, making it fast and private.

## How Strength is Calculated

The password strength is evaluated based on a scoring system where one point is awarded for meeting each of the following five criteria:

1.  **Length**: At least 8 characters long.
2.  **Lowercase**: Contains at least one lowercase letter (`a-z`).
3.  **Uppercase**: Contains at least one uppercase letter (`A-Z`).
4.  **Numbers**: Contains at least one number (`0-9`).
5.  **Special Characters**: Contains at least one special character (e.g., `!@#$%^&*`).

The total score (0-5) corresponds to a strength level from "Very Weak" to "Very Strong".

---

## Technology Stack

* **HTML5**: Structures the web application.
* **CSS3**: Provides the modern, responsive, and dark-themed styling.
* **JavaScript (ES6)**: Powers all the logic, including event handling, DOM manipulation, and the strength calculation algorithm.

---

## How to Run Locally 🚀

No complex setup is required!

1.  **Clone the repository or download the files:**
    ```sh
    git clone [https://github.com/your-username/password-strength-checker.git](https://github.com/your-username/password-strength-checker.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd password-strength-checker
    ```
3.  **Open the `T3.html` file in your favorite web browser (like Chrome, Firefox, or Edge).**

That's it! The application is now running locally.

---

## License 📄

This project is licensed under the MIT License.
