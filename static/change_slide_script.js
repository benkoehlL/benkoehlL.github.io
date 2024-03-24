prevEl = document.querySelector('#previous')
nextEl = document.querySelector('#next')

const goToSlide = function(href){
    if(!href) return
    console.log(href)
    window.location.href = href;
}

document.addEventListener('keydown', function(e){
    if(e.key === "ArrowRight"){
        goToSlide(nextEl?.attributes.href.textContent)
    }
    if(e.key === "ArrowLeft"){
        goToSlide(prevEl?.attributes.href.textContent)
    }
})
