import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);

  //slider css 
const rightArrow = document.querySelector('.section.summary-container.cards-container > .default-content-wrapper > p > .icon.icon-rightarrow');
const leftArrow = document.querySelector('.section.summary-container.cards-container > .default-content-wrapper > p > .icon.icon-leftarrow');

leftArrow.onclick = function() {
    var myText = "This is left arrow";
    alert (myText);
    var x = document.querySelectorAll(".cards.select > ul > li");
    for (let i = 0; i < x.length; i++) {
      if (i < 3) {x[i].style.display = "block"}
      else  {x[i].style.display = "none"}
      leftArrow.style.display = "none"
      rightArrow.style.display = "inline-block"
      
    }
    
};

rightArrow.onclick = function() {
  var myText = "This is right arrow";
  alert (myText);
  var x = document.querySelectorAll(".cards.select > ul > li");
  for (let i = 0; i < x.length; i++) {
    
      if (i < 1) {x[i].style.display = "none"}
        else  {x[i].style.display = "block"}
        rightArrow.style.display = "none"
        leftArrow.style.display = "inline-block"

}
};
//slider css 
const rightsArrow = document.querySelector('.arrow.block > div > div > p > .icon.icon-rightarrow');
const leftsArrow = document.querySelector('.arrow.block > div > div > p > .icon.icon-leftarrow');

leftsArrow.onclick = function() {
    var myText = "This is left arrow";
    alert (myText);
    var x = document.querySelectorAll(".cards.popular > ul > li");
    for (let i = 0; i < x.length; i++) {
      if (i < 4) {x[i].style.display = "block"}
      else  {x[i].style.display = "none"}
      leftsArrow.style.display = "none"
      rightsArrow.style.display = "inline-block"
      
    }
    
};

rightsArrow.onclick = function() {
  var myText = "This is right arrow";
  alert (myText);
  var x = document.querySelectorAll(".cards.popular > ul > li");
  for (let i = 0; i < x.length; i++) {
    
      if (i < 4) {x[i].style.display = "none"}
        else  {x[i].style.display = "block"}
        rightsArrow.style.display = "none"
        leftsArrow.style.display = "inline-block"

}
};


}
