const plans = [
    {
        title: "Тариф Стандарт",
        description: "Изучайте продукт и используйте его для небольшой команды",
        price: "1 200 ₽",
        services: ["Услуга 1", "Услуга 2", "Услуга 3", "Услуга 4"],
        buttonText: "Выбрать тариф"
    },
    {
        title: "Тариф Про",
        description: "Изучайте продукт и используйте его для небольшой команды",
        price: "2 200 ₽",
        services: ["Услуга 1", "Услуга 2", "Услуга 3", "Услуга 4", "Услуга 5"],
        buttonText: "Выбрать этот тариф"
    },
    {
        title: "Тариф Премиум",
        description: "Изучайте продукт и используйте его для небольшой команды",
        price: "4 700 ₽",
        services: ["Услуга 1", "Услуга 2", "Услуга 3", "Услуга 4", "Услуга 5", "Услуга 6"],
        buttonText: "Выбрать этот тариф"
    },
    {
        title: "Тариф Про",
        description: "Изучайте продукт и используйте его для небольшой команды",
        price: "10 000 ₽",
        services: ["Услуга 1", "Услуга 2", "Услуга 3", "Услуга 4", "Услуга 5", "Услуга 6", "Услуга 7"],
        buttonText: "Выбрать этот тариф"
    }
];

function createCard(plan) {
    const card = document.createElement("div");
    card.classList.add("form1");

    const title = document.createElement("h3");
    title.textContent = plan.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("p1");
    description.textContent = plan.description;
    card.appendChild(description);

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("rub");
    priceContainer.innerHTML = `${plan.price} <span>/месяц</span>`;
    card.appendChild(priceContainer);

    const serviceList = document.createElement("ul");
    serviceList.classList.add("custom-list");
    plan.services.forEach(service => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<img src="image 3.png" class="img3">${service}`;
        serviceList.appendChild(listItem);
    });
    card.appendChild(serviceList);

    const button = document.createElement("button");
    button.classList.add("btn1");
    button.textContent = plan.buttonText;
    card.appendChild(button);

    return card;
}

function renderCards() {
    const formsContainer = document.querySelector(".forms");
    plans.forEach(plan => {
        const card = createCard(plan);
        formsContainer.appendChild(card);
    });
    setTimeout(() => {
        document.querySelectorAll(".form1").forEach(card => {
            card.classList.add("visible");
        });
    }, 100);
}
document.addEventListener("DOMContentLoaded", renderCards);




document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('.sl');
    const forms = document.querySelectorAll('.form1');
    function resetVisibility() {
        forms.forEach(form => {
            form.classList.add('visible'); 
        });
    }
    selectElement.addEventListener('change', function () {
        const selectedOption = selectElement.selectedIndex;
        resetVisibility();
        if (selectedOption === 5) { 
            forms[0].classList.remove('visible'); 
        } else if (selectedOption === 6) { 
            forms[0].classList.remove('visible'); 
            forms[1].classList.remove('visible'); 
        } else if (selectedOption === 7) { 
            forms[0].classList.remove('visible'); 
            forms[1].classList.remove('visible'); 
            forms[2].classList.remove('visible'); 
        }
    });
});
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key.toLowerCase() === 't') {
        document.body.classList.add('expanded');
        
        var videoContainer = document.getElementById('videoContainer');
        if (videoContainer) {
            videoContainer.style.display = 'block';
            var video = videoContainer.querySelector('video');
            if (video) {
                video.play();

            }
        }

        document.body.classList.add('hide-elements');
    }
    
    if (event.shiftKey && event.key.toLowerCase() === 'a') {
        document.body.classList.remove('expanded');
        
        var videoContainer = document.getElementById('videoContainer');
        if (videoContainer) {
            videoContainer.style.display = 'none';
            var video = videoContainer.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
                document.body.classList.remove('video-background');
                document.body.style.backgroundImage = '';
            }
        }

        document.body.classList.remove('hide-elements');
    }
});