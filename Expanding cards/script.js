//select all panels
const panels = document.querySelectorAll('.panel');

panels.forEach(panel=>{
    
   panel.addEventListener('click',()=>{
    //remove previous active panel
    removeActiveClassess()
    //  add the selected panel to be active
    panel.classList.add('active')
   })
})

//use function to remove previous active panel
function removeActiveClassess(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
        })
}
