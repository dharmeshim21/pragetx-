export const scrollToResults = (id, offset) => {
    setTimeout(() => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'instant'
            });
        }
    }, 100);
};