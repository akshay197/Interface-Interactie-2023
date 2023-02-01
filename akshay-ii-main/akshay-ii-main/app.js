const tabList = document.querySelectorAll("body > main > section:first-of-type > a");
const backgroundImage = document.querySelector("body > main > img:first-of-type");
const splashScreen = document.querySelector("#splashScreen");
const info = document.querySelector("#info");
const backButton = document.querySelector("#info button");
const main = document.querySelector("main");

const getParentElement = (el) => el.target.parentElement;
const getIdFromElement = (el) => el.id;
const setBackgroundImage = (image) => backgroundImage.src = `images/${image}-display.png`;
const setSplashScreen = (image) => splashScreen.src = `images/${image}.jpg`

const setActiveItem = (e) => {

    if (getParentElement(e).classList.contains('active')) {
        info.classList.add('show');
        main.classList.add('slide-up');
    } else {
        for (let i = 0; i < tabList.length; i++) {
            tabList[i].classList.remove('active');
        }

        info.classList.remove('show');
        main.classList.remove('slide-up');

        getParentElement(e).classList.add('active');
        setBackgroundImage(getIdFromElement(getParentElement(e)));
        setSplashScreen(getIdFromElement(getParentElement(e)));
    }
}

tabList.forEach(item => {
    item.addEventListener("click", setActiveItem);
});

backButton.addEventListener("click", () => {
    info.classList.remove('show');
    main.classList.remove('slide-up');
});











const timer = document.querySelector("body > header time");
const ONE_SECOND = 1000;

const formatIndicator = (hour) => hour < 12 ? "A.M." : "P.M.";
const formatTime = (time) => time < 10 ? `0${time}` : time;

const setTime = () => {
    const date = new Date;
    const hour = date.getHours();
    const minutes = date.getMinutes();

    timer.textContent = `${formatTime(hour)}:${formatTime(minutes)} ${formatIndicator(hour)}`;

    setTimeout(setTime(), ONE_SECOND); //wordt elke seconden opnieuw aangeroepen (recursion)
}

setTime();