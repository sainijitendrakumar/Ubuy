        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const carouselInner = document.querySelector('.carousel-inner');

        const items = document.querySelectorAll('.carousel-item');
        console.log(items.length);
        
        let index = 0;

        function updateButtons() {
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === items.length - 7;
        }

        function showSlide(i) {
            const totalItems = document.querySelectorAll('.carousel-item').length;
            // console.log(totalItems);
            
            index = (i + totalItems) % totalItems;
            console.log(index);
            carouselInner.style.transform = `translateX(-${index * 100}%)`;
            updateButtons();
        }



        prevBtn.addEventListener('click', () => showSlide(index - 1));
        nextBtn.addEventListener('click', () => showSlide(index + 1));
        updateButtons();