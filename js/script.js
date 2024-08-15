// Для відкривання бокового меню
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Кнопки каруселі
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExampleDark');
    var prevButton = carousel.querySelector('.carousel-control-prev');
    var nextButton = carousel.querySelector('.carousel-control-next');
    var items = carousel.querySelectorAll('.carousel-item');

    function updateButtons() {
        var activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
        
        if (activeIndex === 0) {
            prevButton.style.display = 'none'; 
        } else {
            prevButton.style.display = 'block';
        }
        
        if (activeIndex === items.length - 1) {
            nextButton.style.display = 'none'; 
        } else {
            nextButton.style.display = 'block'; 
        }
    }

   
    carousel.addEventListener('slid.bs.carousel', updateButtons);
    updateButtons(); 
});

// Календарик
document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#date", {
        dateFormat: "Y-m-d",
        minDate: "today",
        inline: true, 
        allowInput: true 
    });

    flatpickr("#time", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        allowInput: true 
    });
});

