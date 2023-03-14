
const Modalstruct=`
                <i class="fa-solid fa-xmark" onclick="CloseXmark()"></i>
                <h2>Gallery</h2>
                    <div class="mingallery">   
                     <img src="" data-gallery-tag='' alt=''>  
                     </div>
                <button onclick="" class="plus"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                <button onclick="ImgMoins(event)" class="moins"><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
            `

window.addEventListener('DOMContentLoaded',()=>{
    let indexstar=0;
    let currentFiltre ='Tous';
    const gallery = document.querySelector(".gallery");
    const imagesgallery = document.querySelectorAll(".gallery img");
    const Filtres = document.querySelectorAll(".Filtres li");
    const Modal=document.querySelector(".Mod");
    let imageFiltré = Array.from(imagesgallery);
   
    function modalOnClick(){
        Modal.style.display="flex";
        fillGallery()
    }
    function ImgPlus(){   
        console.log(e.target)  
        
        console.log("jbdsfkjnsd")
        console.log(imageFiltré)
        console.log(indexstar)
        
    }
    function fillGallery(){
        const imgaffich= imageFiltré[indexstar];
        Modal.innerHTML='';
        Modal.innerHTML=`
        <i class="fa-solid fa-xmark" onclick=""></i>
        <h2>Gallery</h2>
            <div class="mingallery">   
             <img src="${imgaffich.src}" data-gallery-tag='${imgaffich.dataset.galleryTag}' alt='${imgaffich.alt}'>  
             </div>
        <button onclick="${(e)=>{
            if(indexstar>=imageFiltré.length){
                indexstar=0;
            }else{
                indexstar++
            }
            console.log(indexstar);
        }}" 
        class="plus"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
        <button onclick="ImgMoins(event)" class="moins"><i class="fa-sharp fa-solid fa-arrow-left"></i></button>
    `;
    }
    // function CloseXmark(e){
    //   console.log( e.target)
    //     Modal.style.display='none';          
    //     Modal.innerHTML=""; 
    //     }

   


    imagesgallery.forEach((img)=>{
        img.addEventListener('click',(e)=>{
            Modal.style.display="flex";
            // console.log(imageFiltré);
      indexstar= imageFiltré.findIndex(fd=>fd==e.target);
            fillGallery();
            // console.log(indexstar);
            // console.log(imageFiltré);
        
    })
})
Filtres.forEach((Filtre)=>{
    Filtre.addEventListener("click",(e)=>{
        currentFiltre=e.target.dataset.filtre;
        gallery.innerHTML="";
        Filtres.forEach((elt)=>{
            elt.classList.remove("FiltreActif");
        })
        Filtre.classList.add("FiltreActif");
        imageFiltré= [];
    //    console.log(imagesgallery)
       imagesgallery.forEach((imgelt)=>{ if(imgelt.dataset.galleryTag==Filtre.dataset.filtre){imageFiltré.push(imgelt)}if(Filtre.dataset.filtre=='Tous'){imageFiltré.push(imgelt)}})
    //    console.log(imageFiltré)
       imageFiltré.forEach(elementfiltré => {
                gallery.innerHTML += `<img src="${elementfiltré.src}" data-gallery-tag="${Filtre.dataset.filtre}" class="gallery-item" alt="${elementfiltré.alt}">`;
        });
    })
})

})