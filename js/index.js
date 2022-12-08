// const themeBtn = document.querySelector('.theme');
//
// function getCurrentTheme() {
//     let theme = window.matchMedia('(prefers-color-scheme: dark)')
//     .matches ? 'dark' : 'light';
//     localStorage.getItem('webTheme.theme') ? theme = localStorage.getItem('webTheme.theme') : null;
//     return theme;
// }
//
// function loadTheme(theme) {
//     const root = document.querySelector(':root');
//     root.setAttribute('color-scheme', `${theme}`);
//     if (theme === 'light') {
//         themeBtn.innerHTML = `<svg class="dark-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="var(--text)" class="st0"/>
//         </svg>`;
//         
//     } else {
//         themeBtn.innerHTML = `<svg class="dark-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="var(--text)" class="st0"/>
//         </svg>`;
//     }
// }
//
// themeBtn.addEventListener('click', () => {
//     let theme = getCurrentTheme();
//     console.log(`get theme: ${theme}`);
//     theme.match('dark') ? theme = 'light' : theme = 'dark';
//     console.log(`set theme: ${theme}`);
//     localStorage.setItem('webTheme.theme', `${theme}`);
//     loadTheme(theme);
// })
//
// window.addEventListener('DOMContentLoaded', () => {
//     loadTheme(getCurrentTheme());
// })
