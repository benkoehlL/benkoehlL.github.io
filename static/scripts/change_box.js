btnIM12 = document.getElementById('btn_IM_1_2')
btnIM34 = document.getElementById('btn_IM_3_4')
boxIM12 = document.getElementById('box_IM_1_2')
boxIM34 = document.getElementById('box_IM_3_4')

btnIM12.addEventListener('click', ()=>{
    document.querySelectorAll('.lecture--box').forEach(box =>{
        box.classList.add('hidden')
    })
    document.querySelectorAll('.lecture--btn').forEach(btn =>{
        btn.classList.remove('lecture-btn--active')
    })
    boxIM12.classList.remove('hidden')
    btnIM12.classList.add('lecture-btn--active')
})

btnIM34.addEventListener('click', ()=>{
    document.querySelectorAll('.lecture--box').forEach(el =>{
        el.classList.add('hidden')
    })
    document.querySelectorAll('.lecture--btn').forEach(btn =>{
        btn.classList.remove('lecture-btn--active')
    })
    boxIM34.classList.remove('hidden')
    btnIM34.classList.add('lecture-btn--active')
})
