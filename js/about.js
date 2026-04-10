document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.about a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href'); // เช่น "#artist"
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // ตำแหน่ง scroll ของ section ข้างบนสุดของ viewport
                const elementPosition = targetElement.offsetTop; 

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});