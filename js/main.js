(function(){

    const sliders = [...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.getElementById('next')
    const buttonPrev = document.getElementById('prev')
    let value;

    
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonPrev.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        console.log(add);
    } 
    console.log (buttonNext)
})();