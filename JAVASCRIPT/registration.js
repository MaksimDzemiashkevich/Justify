document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[name="email"]');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const confirmPasswordInput = document.querySelector('input[name="password_confirm"]');
    
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
    


    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
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
        
        form.submit();
    });
    
    function validatePhone() {
        const UserName = usernameInput.value.trim();
        
        if (UserName === '') {
            return 'Введите логин';
        }
        
        if (UserName.length < 3){
            return 'Логин не должен быть короче трех символов';
        }
       
        
        return null;
    }
    
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
        
        let hasValidDomain = false;
        for (const domain of validEmailDomains) {
            if (domainPart.endsWith(domain)) {
                hasValidDomain = true;
                break;
            }
        }
        
        if (!hasValidDomain) {
            return 'Используйте домены: .com, .ru';
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
    
    function validateConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        
        if (confirmPassword === '') {
            return 'Подтвердите пароль';
        }
        
        if (password !== confirmPassword) {
            return 'Пароли не совпадают';
        }
        
        return null;
    }
});