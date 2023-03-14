let indexstar=0;
let currentFiltre ='Tous';
const gallery = document.querySelector(".gallery");
const imagesgallery = document.querySelectorAll(".gallery img");
const Filtres = document.querySelectorAll(".Filtres li");
const Modal=document.querySelector(".Mod");
let imageFiltré = Array.from(imagesgallery);

function fillGallery(){
    const imgaffich= imageFiltré[indexstar];
    Modal.innerHTML='';
    Modal.innerHTML=`
                            <div class="mingallery">   
                                <img  class="Mingallery-item" src="${imgaffich.src}" data-gallery-tag='${imgaffich.dataset.galleryTag}' alt='${imgaffich.alt}'>  
                                <button onclick="ImgPlus()" class="plus"><i class="fa-solid fa-chevron-right"></i></button>
                                <button onclick="ImgMoins()" class="moins"><i class="fa-solid fa-chevron-left"></i></button>
                                <ul>

                                </ul>
                            </div>
                         
                        
                        
                    `;
    // imageFiltré.forEach((elt)=>{
    //     document.querySelector(".Mod ul").innerHTML += `<li> </li>` 
    // })
}
function ImgPlus(){   
    if(indexstar>= imageFiltré.length-1){
        indexstar=0;
    }else
    indexstar++;
    fillGallery();
}
function ImgMoins(){   
    if(indexstar<= 0){
        indexstar=imageFiltré.length-1;;
    }else
    indexstar--;
    fillGallery();
}
function CloseXmark(event){
        if(event.target.classList[1] != `fa-chevron-right` && event.target.classList[1] != `fa-chevron-left` && event.target.classList[0]!="Mingallery-item"){
                 indexstar=0;
                Modal.style.display='none';          
                Modal.innerHTML="" ; }
        }
function ImgFiltre(event){
    Modal.removeAttribute("style");
    Modal.style.display="flex";
    // console.log(event.target);
    indexstar= imageFiltré.findIndex(fd=>fd.alt==event.target.alt);
    // console.log(indexstar);
    fillGallery();
}
function Filtre(event){
    currentFiltre=event.target.dataset.filtre;
    gallery.innerHTML="";
    Filtres.forEach((elt)=>{
        elt.classList.remove("FiltreActif");
    })
    event.target.classList.add("FiltreActif");
    imageFiltré= [];
//    console.log(imagesgallery)
   imagesgallery.forEach((imgelt)=>{ if(imgelt.dataset.galleryTag==event.target.dataset.filtre){imageFiltré.push(imgelt)}if(event.target.dataset.filtre=='Tous'){imageFiltré.push(imgelt)}});
//    console.log(imageFiltré)

   imageFiltré.forEach(elementfiltré => {
                // console.log(elementfiltré)
            gallery.innerHTML += `<img onclick="ImgFiltre(event)" src="${elementfiltré.src}" data-gallery-tag="${event.target.dataset.filtre}" class="gallery-item" alt="${elementfiltré.alt}">`;
    });
}