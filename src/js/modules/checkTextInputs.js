const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
                input.placeholder = 'Используйте кириллицу';
                input.style.outline = 'solid #9F0013';
            } 
        });
    });
};

export default checkTextInputs;