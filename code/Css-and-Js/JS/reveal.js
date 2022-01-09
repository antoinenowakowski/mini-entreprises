const revealPresentation = document.querySelector('.reveal-presentation');
const revealProduct = document.querySelector('.revealProduct')
const revealService = document.querySelector('.revealService')

window.addEventListener('scroll', () => {

    const {scrollTop, clientHeight} = document.documentElement;


    const topElementToTopViewport = revealPresentation.getBoundingClientRect().top; // position
    const getpositionProduct = revealProduct.getBoundingClientRect().top
    const getpositionService = revealService.getBoundingClientRect().top

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
        revealPresentation.classList.add('active')
    } 
    if(scrollTop > (scrollTop + getpositionProduct).toFixed() - clientHeight * 0.8){
        revealProduct.classList.add('active')
    }
    if(scrollTop > (scrollTop +  getpositionService).toFixed() - clientHeight * 0.8){
        revealService.classList.add('active')
    }
})

