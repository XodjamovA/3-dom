let iphones = document.querySelectorAll('.iphone')
let h3 = document.querySelector('[data-h3]')
let colors = document.querySelectorAll('[data-color]')


let purple = document.querySelector('.purple')
let gold = document.querySelector('.gold')
let silver = document.querySelector('.silver')
let black = document.querySelector('.black')

let img = document.querySelector('.image')


iphones.forEach(iphone => {
    iphone.onclick = () => {
        iphones.forEach(elem => elem.classList.remove('activeC'))
        iphone.classList.add('activeC')

    }
});



colors.forEach(color => {
    color.onclick = () => {
        colors.forEach(elem => elem.classList.remove('activeB'))
        color.classList.add('activeB')

    }
});



// colors.forEach(color => {
//     color.onmouseenter = () => {
//         h3.innerHTML = `Color - ${color.innerHTML}`
//         h3.innerHTML += color.innerHTML
//     }

//     color.onmouseleave = () => {
//         h3.innerHTML = 'Color'
        
//     }
    
// });

purple.onclick = () => {
    img.style.backgroundImage = `url("./img/6.1.jpg")`
}
gold.onclick = () => {
    img.style.backgroundImage = `url("./img/7.1.jpg")`
}
silver.onclick = () => {
    img.style.backgroundImage = `url("./img/8.1.jpg")`
}
black.onclick = () => {
    img.style.backgroundImage = `url("./img/9.1.jpg")`
}

