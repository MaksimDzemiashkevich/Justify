document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form_enter');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailError = validateEmail();
        if (emailError) {
            alert(emailError);
            emailInput.focus();
            return;
        }

        const passwordError = validatePassword();
        if (passwordError) {
            alert(passwordError);
            passwordInput.focus();
            return;
        }

        form.submit();
    });

    function validateEmail() {
        const email = emailInput.value.trim();

        if (email === '') {
            return 'Введите email';
        }

        if (!email.includes('@')) {
            return 'Email должен содержать символ @';
        }

        const parts = email.split('@');
        if (parts.length !== 2) {
            return 'Неверный формат email';
        }

        const localPart = parts[0];
        const domainPart = parts[1];

        if (localPart.length < 2) {
            return 'Название email должно быть не менее 2 символов';
        }

        if (!domainPart.includes('.')) {
            return 'Доменная часть email должна содержать точку (например .com)';
        }

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+$/.test(email)) {
            return 'Email содержит недопустимые символы';
        }

        return null;
    }

    function validatePassword() {
        const password = passwordInput.value;

        if (password === '') {
            return 'Введите пароль';
        }

        if (password.length < 7) {
            return 'Пароль должен быть не менее 7 символов';
        }

        if (password.includes(' ')) {
            return 'Пароль не должен содержать пробелы';
        }

        return null;
    }
});
