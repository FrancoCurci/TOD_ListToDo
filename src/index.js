import _ from 'lodash';
import { asideContent } from './asidebar.js';
import { listToday } from './listToday.js';
import { proyectSection } from './proyectsContent.js';
import { WeekContent } from './weekContent.js';

const asideContainer = document.querySelector('aside');
const bodyContainer = document.querySelector('.container-sections');



main()

function main() {
    asideContainer.appendChild(printAsideMenu())
    addEventListenersToMenu()
}


function printAsideMenu() {
    const asideItem = document.createElement("div");
    asideItem.classList.add("container-aside");
    asideItem.innerHTML = asideContent;
    return asideItem
}

function addEventListenersToMenu() {
    const buttonProyects = document.getElementById("buttonProyects");
    const buttonToday = document.getElementById("buttonToday");
    const buttonWeek = document.getElementById("buttonWeek");
    const buttonNotes = document.getElementById("buttonNotes");
    const buttonCalender = document.getElementById("buttonCalender");

    buttonProyects.addEventListener("click", () => {
        addBodyPage(printProyects())
    })
    buttonToday.addEventListener("click", () => {
        addBodyPage(printListToday())
    })
    buttonWeek.addEventListener("click", () => {
        addBodyPage(printWeek())
    })
    buttonNotes.addEventListener("click", () => {
        addBodyPage(printNotes())
    })
    buttonCalender.addEventListener("click", () => {
        addBodyPage(printCalender())
    })

}

function addBodyPage(bodySection) {
    bodyContainer.innerHTML = "";
    bodyContainer.appendChild(bodySection)
}

function printListToday() {
    const listTodayMain = document.createElement("main")
    listTodayMain.innerHTML = listToday;
    return listTodayMain

}
function printProyects() {
    const elementSection = document.createElement("section")
    elementSection.classList.add("container-proyectos")
    elementSection.innerHTML = proyectSection;
    return elementSection

}
function printWeek() {
    const elementSection = document.createElement("section")
    elementSection.classList.add("container-thisWeek")
    elementSection.innerHTML = WeekContent;
    return elementSection
}
function printCalender() {
    const elementSection = document.createElement("section")
    elementSection.innerHTML = "Seccion en desarrollo";
    return elementSection

}
function printNotes() {
    const elementSection = document.createElement("section")
    elementSection.innerHTML = "Seccion en desarrollo";
    return elementSection

}