document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');
    const criteriaList = document.querySelector('#criteria-checklist ul');
    const togglePassword = document.getElementById('toggle-password');

    // Show/Hide password functionality
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });
    
    // Listen for input events on the password field
    passwordInput.addEventListener('input', updateStrengthMeter);

    function updateStrengthMeter() {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);
        
        const strengthLabels = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
        const strengthColors = ['#e74c3c', '#e67e22', '#f1c40f', '#27ae60', '#2ecc71'];

        // Update strength bar width and color
        strengthBar.style.width = `${strength.score * 20}%`;
        strengthBar.style.backgroundColor = strengthColors[strength.score];
        
        // Update strength text
        if (password.length > 0) {
            strengthText.textContent = `Strength: ${strengthLabels[strength.score]}`;
            strengthText.style.color = strengthColors[strength.score];
        } else {
            strengthText.textContent = '';
        }

        // Update criteria checklist
        updateCriteriaList(strength.criteria);
    }

    function calculatePasswordStrength(password) {
        let score = 0;
        const criteria = {
            length: password.length >= 8,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[^A-Za-z0-9]/.test(password) // Any character that's not a letter or number
        };
        
        // A simple scoring system: 1 point for each met criterion
        if (criteria.length) score++;
        if (criteria.lowercase) score++;
        if (criteria.uppercase) score++;
        if (criteria.number) score++;
        if (criteria.special) score++;

        // A weak password gets a score of 0, not 1, if it only meets one criterion
        if (password.length > 0 && score === 1) {
            score = 0;
        }

        return { score, criteria };
    }

    function updateCriteriaList(criteria) {
        const criteriaMap = {
            length: 'At least 8 characters long',
            lowercase: 'Contains a lowercase letter (a-z)',
            uppercase: 'Contains an uppercase letter (A-Z)',
            number: 'Contains a number (0-9)',
            special: 'Contains a special character (!, @, #...)'
        };

        criteriaList.innerHTML = ''; // Clear previous list

        for (const key in criteria) {
            const li = document.createElement('li');
            const icon = criteria[key] ? '✅' : '❌';
            li.textContent = `${icon} ${criteriaMap[key]}`;
            if (criteria[key]) {
                li.style.opacity = '1';
            }
            criteriaList.appendChild(li);
        }
    }

    // Initial check in case a password is pre-filled
    updateStrengthMeter();
});