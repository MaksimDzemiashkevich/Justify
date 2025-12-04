document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[name="email"]');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="password_confirm"]');
    
    // Список допустимых телефонных кодов
    const validPhoneCodes = [
        '+375', // Беларусь
        '+7',   // Россия, Казахстан
        '+1',   // США, Канада
        '+44',  // Великобритания
        '+49',  // Германия
        '+33',  // Франция
        '+39',  // Италия
        '+34',  // Испания
        '+48',  // Польша
        '+380', // Украина
        '+370', // Литва
        '+371', // Латвия
        '+372', // Эстония
        '+90',  // Турция
        '+86',  // Китай
        '+81',  // Япония
        '+82',  // Южная Корея
        '+91',  // Индия
        '+61',  // Австралия
        '+64',  // Новая Зеландия
    ];
    
    // Список допустимых доменов email
    const validEmailDomains = [
        '.com',
        '.ru',
        '.by',
        '.net',
        '.org',
        '.info',
        '.biz',
        '.io',
        '.ua',
        '.kz',
        '.org',
        '.edu',
        '.gov',
        '.mil'
    ];

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Проверяем все поля и показываем первую ошибку
        const phoneError = validatePhone();
        if (phoneError) {
            alert(phoneError);
            usernameInput.focus();
            return;
        }
        
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
        
        const confirmPasswordError = validateConfirmPassword();
        if (confirmPasswordError) {
            alert(confirmPasswordError);
            confirmPasswordInput.focus();
            return;
        }
        
        // Если всё правильно, отправляем форму
        form.submit();
    });
    
    // Валидация телефона
    function validatePhone() {
        const phone = usernameInput.value.trim();
        
        if (phone === '') {
            return 'Введите номер телефона';
        }
        
        // Проверяем, начинается ли номер с допустимого кода
        let hasValidCode = false;
        for (const code of validPhoneCodes) {
            if (phone.startsWith(code)) {
                hasValidCode = true;
                break;
            }
        }
        
        if (!hasValidCode) {
            return 'Неверный код страны. Используйте +375, +7, +1 и т.д.';
        }
        
        // Удаляем код и проверяем длину номера (9 цифр)
        const code = phone.match(/^\+\d+/)[0];
        const numberPart = phone.substring(code.length).replace(/\D/g, '');
        
        if (numberPart.length !== 9) {
            return 'Номер должен содержать 9 цифр (без кода страны)';
        }
        
        // Проверка на только цифры после кода
        if (!/^\+\d+[\d\s\-()]+$/.test(phone)) {
            return 'Номер может содержать только цифры, пробелы, скобки и дефисы';
        }
        
        return null; // Ошибок нет
    }
    
    // Валидация email
    function validateEmail() {
        const email = emailInput.value.trim();
        
        if (email === '') {
            return 'Введите email';
        }
        
        // Проверка наличия @
        if (!email.includes('@')) {
            return 'Email должен содержать символ @';
        }
        
        const parts = email.split('@');
        if (parts.length !== 2) {
            return 'Неверный формат email';
        }
        
        const localPart = parts[0];
        const domainPart = parts[1];
        
        // Проверка названия до @ (минимум 2 символа)
        if (localPart.length < 2) {
            return 'Название email должно быть не менее 2 символов';
        }
        
        // Проверка домена
        let hasValidDomain = false;
        for (const domain of validEmailDomains) {
            if (domainPart.endsWith(domain)) {
                hasValidDomain = true;
                break;
            }
        }
        
        if (!hasValidDomain) {
            return 'Используйте домены: .com, .ru, .by и т.д.';
        }
        
        return null; // Ошибок нет
    }
    
    // Валидация пароля
    function validatePassword() {
        const password = passwordInput.value;
        
        if (password === '') {
            return 'Введите пароль';
        }
        
        // Проверка длины пароля
        if (password.length < 7) {
            return 'Пароль должен быть не менее 7 символов';
        }
        
        // Проверка на пробелы
        if (password.includes(' ')) {
            return 'Пароль не должен содержать пробелы';
        }
        
        return null; // Ошибок нет
    }
    
    // Валидация подтверждения пароля
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword === '') {
            return 'Подтвердите пароль';
        }
        
        if (password !== confirmPassword) {
            return 'Пароли не совпадают';
        }
        
        return null; // Ошибок нет
    }
});