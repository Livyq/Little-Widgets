const progress = document.getElementById('progress');
const pre = document.getElementById('pre');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


//add function to "next" button
let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length){
        currentActive = circles.length 
    }
    update()
})

pre.addEventListener('click', () => {
    currentActive--
    if (currentActive < circles.length){
        currentActive = 1 
    }
    update()
})

function update () {
    //fucntion for cirlce to light-up by adding to the node list 
    circles.forEach((circles, idx) => {
        if (idx < currentActive) {
            circles.classList.add('active')
        }
        else {
            circles.classList.remove('active')
        }
    })

    // funtion to light up the progress line
    const actives = document.querySelectorAll('.active')

}  
