import { THEME_STORAGE_KEY } from "./storage";

export const themeScript = `
(function(){
    try{
        var t = localStorage.getItem('${THEME_STORAGE_KEY}') || "system";
        var dark = t === 'dark' || (t === 'system' && window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList.toggle("dark", dark);
        document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    }catch (e) {}
})()`;
