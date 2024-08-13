const sections = document.querySelectorAll('section');
for(const section of sections){
     section.style.border = '2px solid blue' 
     section.style.marginBottom = '5px'
     section.style.padding = '15px'
     section.style.textAlign = 'canter'
     section.style.borderRadius = '5px'
     section.style.backgroundColor = 'red'
}


// const placesContainer = document.getElementById('places-container')
// placesContainer.style.backgroundColor = 'yellow ';


const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('yellow-bg');

