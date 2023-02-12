const abrir1=document.getElementById('abrir1');
const abrir2=document.getElementById('abrir2');
const abrir3=document.getElementById('abrir3');
const abrir4=document.getElementById('abrir4');
const overlay=document.getElementById('overlay');
const popup=document.getElementById('popup');
const cerrarpopup=document.getElementById('cerrarpopup');

abrir1.addEventListener('click',function() {
    /*alert hola*/
    document.getElementById('modal-img').src = "img/Blog Interna.jpg";
    overlay.classList.add('active');
    
    
});

abrir2.addEventListener('click',function() {
    /*alert hola*/
    document.getElementById('modal-img').src = "img/Blog Interna2.jpg";
    overlay.classList.add('active');
    
    
});
abrir3.addEventListener('click',function() {
    /*alert hola*/
    document.getElementById('modal-img').src = "img/Blog Interna-3.jpg";
    overlay.classList.add('active');
    
    
});
abrir4.addEventListener('click',function() {
   
    /*alert hola*/
    document.getElementById('modal-img').src = "img/Blog Interna.jpg";
    overlay.classList.add('active');
    
    overlay.classList.add('active');
    
});

cerrarpopup.addEventListener('click',function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});