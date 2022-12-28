///////////// search bar ////////////
const search=document.getElementById('search');
const close =document.getElementById('close');

search.addEventListener('click' ,function(){
    close.style.display='flex'
});

close.addEventListener('click' ,function(){
     search.value=''
    close.style.display='none'
});


/////////// nav link //////////
const navlink =document.querySelector('.navbar-nav').querySelectorAll("a");
navlink.forEach(element =>{
    element.addEventListener('click',function(){
        navlink.forEach(nav=>nav.classList.remove("active"))


        this.classList.add("active");
    })

});