const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function without(bandName){
 return bandName.replace(/^(a |an |the )/i, '').trim();
};


let sortedBands = bands.sort((a, b) => (without(a) > without(b))? 1: -1);


console.log(sortedBands);

let ul = document.querySelector('.list-items');



ul.innerHTML = sortedBands.map(band => `<li class="items">${band}</li>`).join('');

