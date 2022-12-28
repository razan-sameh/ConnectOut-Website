const img_div = document.querySelector('.profile_picture_div');
const img = document.querySelector('#image'); 
const file = document.querySelector('#file');
const upload_btn = document.querySelector('#upload_btn');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');

img_div.addEventListener('mouseenter',function(){
    upload_btn.style.display = 'block';
});
img_div.addEventListener('mouseleave',function(){
    upload_btn.style.display = 'none';
});
file.addEventListener('change',function(){
    const choose_file = this.files[0];
    if(choose_file){
        const reader = new FileReader();
        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result);
            img2.setAttribute('src',reader.result);
            img3.setAttribute('src',reader.result);
        });
        reader.readAsDataURL(choose_file);
    }
});

 //skills

/*Start skills */
const overlay = document.querySelector('.overlay');

document.querySelector('#show-modal').addEventListener('click',() =>{
  overlay.style.display = "block";
})
document.querySelector('#not-show-modal').addEventListener('click',() =>{
  overlay.style.display = "none";
})

const tagContainer = document.querySelector('.tag-container');
const input = document.querySelector('.tag-container input');

let tags = [];

function createTag(label) {
  const div = document.createElement('div');
  div.setAttribute('class', 'tag');
  div.setAttribute('style','background-color:#00525e; border-radius:20px;');
  const span = document.createElement('span');
  span.setAttribute('style','padding:10px;')
  span.innerHTML = label;
  const closeIcon = document.createElement('svg');
  closeIcon.setAttribute('class', 'fa-solid fa-x');
  closeIcon.setAttribute('data-item', label);
  closeIcon.setAttribute('style', 'cursor:pointer; margin-right:10px;');

  div.appendChild(span);
  div.appendChild(closeIcon);
  return div;
}

function clearTags() {
  document.querySelectorAll('.tag').forEach(tag => {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  clearTags();
  tags.slice().reverse().forEach(tag => {
    tagContainer.prepend(createTag(tag));
  });
}

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      e.target.value.split(',').forEach(tag => {
        tags.push(tag);  
      });
      
      addTags();
      input.value = '';
    }
});
document.addEventListener('click', (e) => {
  console.log(e.target.tagName);
  if (e.target.tagName === 'svg') {
    const tagLabel = e.target.getAttribute('data-item');
    const index = tags.indexOf(tagLabel);
    tags = [...tags.slice(0, index), ...tags.slice(index+1)];
    addTags();    
  }
})

input.focus();
/*End skills */



