let lang=document.querySelector('#language');
let dropdown=document.querySelector('#languages');
let iconD=document.querySelector('.fa-angle-down');
lang.addEventListener("click",()=>{
    // e.stopPropagation();
    dropdown.classList.toggle('active')
    if(iconD.style.transform=='rotate(180deg)'){
        iconD.style.transform='rotate(0deg)'
    }else{
        iconD.style.transform='rotate(180deg)';
    }
})
// window.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     langD.style.display='none';
//     iconD.style.transform='rotate(0)';
// })
let searchBtn=document.querySelector('#search')
let search=document.querySelector('#searchBox');
let searchClose=document.querySelector('.fa-xmark');
searchBtn.addEventListener('click',()=>{
    if(search.style.opacity=='1' && search.style.visibility=='visible'){
        search.style.opacity='0'
        search.style.visibility='hidden'
    }
    else{
        search.style.opacity='1';
        search.style.visibility='visible'
    }
})
searchClose.addEventListener('click',()=>{
        search.style.opacity='0'
        search.style.visibility='hidden'
})
// let modal=document.querySelector('#Modal');
// setTimeout(() => {
//     modal.classList.add('active')
// }, 3000);
// let modalClose=document.querySelector('#btn-1');
// modalClose.addEventListener('click',()=>{
//     modal.style.cssText = 'display:none !important';
// })
let mobileMenu=document.querySelector('#mobileMenu');
let clickMenu=document.querySelector('.fa-bars');
clickMenu.addEventListener('click',()=>{
    mobileMenu.classList.toggle('w-100')
    clickMenu.classList.toggle('fa-x')
})