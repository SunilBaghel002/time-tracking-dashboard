const dailyElements = document.querySelectorAll(".daily")
const weeklyElements = document.querySelectorAll(".weekly")
const monthlyElements = document.querySelectorAll(".monthly")
const dailyIcon = document.querySelector(".daily-icon")
const weeklyIcon = document.querySelector(".weekly-icon")
const monthlyIcon = document.querySelector(".monthly-icon")
const headingElement = document.querySelector("h1")
const userPic = document.querySelector(".pic")
const imageIcon=document.querySelectorAll(".image-icon")

dailyElements.forEach(dailyContent => {
    if (dailyContent.style.display = "block") {
        dailyIcon.classList.add("white")
        dailyContent.classList.add("show")
    }
})

weeklyIcon.addEventListener("click", () => {
    dailyElements.forEach(element => {
        element.style.display = "none"
        dailyIcon.classList.remove("white")
        element.classList.add("show")
    })
    weeklyElements.forEach(element => {
        element.style.display = "block"
        weeklyIcon.classList.add("white")
    })
    monthlyElements.forEach(element => {
        element.style.display = "none"
        monthlyIcon.classList.remove("white")
    })
})

dailyIcon.addEventListener("click", () => {
    dailyElements.forEach(element => {
        element.style.display = "block"
        dailyIcon.classList.add("white")
    })
    weeklyElements.forEach(element => {
        element.style.display = "none"
        weeklyIcon.classList.remove("white")
        element.classList.add("show")
    })
    monthlyElements.forEach(element => {
        element.style.display = "none"
        monthlyIcon.classList.remove("white")
    })
})

monthlyIcon.addEventListener("click", () => {
    dailyElements.forEach(element => {
        element.style.display = "none"
        dailyIcon.classList.remove("white")
        // element.classList.add("hidden")
    })
    weeklyElements.forEach(element => {
        element.style.display = "none"
        weeklyIcon.classList.remove("white")
        // element.classList.add("hidden")
    })
    monthlyElements.forEach(element => {
        element.style.display = "block"
        monthlyIcon.classList.add("white")
        element.classList.add("show")
    })
})
headingElement.classList.add("big")
userPic.classList.add("big")

userPic.addEventListener("mouseover", () => {
    userPic.classList.add("spin")
})
userPic.addEventListener("mouseout", () => {
    userPic.classList.remove("spin")
    userPic.classList.remove("big")
})

const mediaQuery = window.matchMedia('(max-width: 420px)');

function handleMediaQueryChange(e) {
    if (e.matches) {
        headingElement.style.fontSize = "28px"
    } else {
        headingElement.style.fontSize = "35px"
    }
}

handleMediaQueryChange(mediaQuery);

mediaQuery.addEventListener('change', handleMediaQueryChange);