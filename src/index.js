import "./styles.css";
import { loadPage } from './home.js'

import { loadMenu } from './menu.js'

import { loadAbout } from "./about.js";


const navBtn = document.querySelectorAll('.nav-btn');
// for (let i = 0; i < navBtn.length; i++){
//     navBtn[i].addEventListener('click', () => {
//         content.innerHTML = '';
//         if (navBtn[i].dataset.tab === 'home'){
//             loadPage()
//         } else if(navBtn[i].dataset.tab === 'menu'){
//             loadMenu()
//         } else {
//             loadAbout()
//         }
            
        
//     })
// }


navBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        content.innerHTML = '';
        if (btn.dataset.tab === 'home'){
            loadPage()
        } else if (btn.dataset.tab === 'menu'){
            loadMenu()
        } else {
            loadAbout()
        }
    })
})

loadPage()