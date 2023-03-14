const prev =document.querySelector('.carousel-control-prev');
const next =document.querySelector('.carousel-control-next');
const imgs= document.querySelectorAll(".carousel-item");
const lis=document.querySelectorAll(".carousel-indicators button")
let indexCarousel = 0;


function nextCarousel(){
    indexCarousel++;
    if(indexCarousel>imgs.length-1){
        indexCarousel=0;
    }  ;
    lis.forEach((elt)=>{
        elt.classList.remove("active");
    });
    imgs.forEach((elt)=>{
            elt.classList.remove('active');

    });
    lis[indexCarousel].classList.add('active');
    imgs[indexCarousel].classList.add("active");
}
function prevCarousel(){
    console.log(lis)
    console.log(indexCarousel)
    indexCarousel--;
    if(indexCarousel<0){
        indexCarousel=imgs.length-1;
    };
    lis.forEach((elt)=>{
        elt.classList.remove("active");
    });
    imgs.forEach((elt)=>{
            elt.classList.remove('active');

    });
    console.log(indexCarousel)
    lis[indexCarousel].classList.add('active');
    imgs[indexCarousel].classList.add("active");
}
setInterval(nextCarousel, 5000)