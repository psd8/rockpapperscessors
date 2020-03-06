document.addEventListener('click',(event) => {
    if(event.target.matches('button.circle')){
           
        animateSlectionDiv();
        let step2 = document.createElement('div');
        step2.classList.add('row','d-flex', 'align-items-center', 'justify-content-center', 'auto-groink');
        step2.innerHTML=`
            <div class="w-50 white-font">
                <h3>You Pciked</h3>
            </div>
        `;
    }
})

function animateSlectionDiv(){
    document.querySelector('div.selection-on').classList.add('animated', 'zoomOut');
    hideSelectionDiv();
}
function hideSelectionDiv(){
    document.querySelector('div.selection-on').classList.add('d-none');
}