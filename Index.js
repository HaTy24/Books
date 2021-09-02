// function changeColor(newColor) {
//     var elem = document.querySelector('.p');
//     elem.style.color = newColor;
// }

// const h1Element = document.querySelector('.box');
// console.log(h1Element)

// h1Element.onclick = function(){
//   alert('hehehe')
// }
// const h= document.querySelector('input[type="range"]').addEventListener('input', cha);
// const d = document.querySelector('#demo')
// function cha(e){
//   d.innerHTML = e.target.value
// }



// const menu = document.querySelector('.menu-logo').addEventListener('click', change);
// const show = document.querySelector('#htt');
// console.log([show])

// function change(){
//   show.classList.toggle('menu-items-c')
// }


const menu = document.querySelector('.menu-logo')
const update = document.querySelector('.menu-items');

menu.addEventListener('click' , function(){
  menu.classList.toggle('menu-logo-new')
  update.classList.toggle('menu-items-new')
});


// Picture

const picture = document.querySelectorAll('.items img');

// for(let i=0; i<=picture.length;i++){
//   picture.addEventListener('click' ,changePicture);
//   function changePicture(e){
//     console.log(e.target.getAttribute('src'))
//   }
// }

picture.forEach((item)=>item.addEventListener('click', changePicture)) 


function changePicture(e){
  // console.log(e.target)
  // // template.innerHTML
  const image = e.target.getAttribute('src');
  console.log(image)

  const template=`
  <img class="new-img" src=${image} alt=""/>
`
document.body.insertAdjacentHTML('beforeend',template)
}


const navbar= document.querySelector('.navbar')
let lateScroll = window.scrollY;

window.addEventListener('scroll',()=>{
  if(lateScroll<window.scrollY){
    navbar.classList.add('hidden')
  }
  else{
    navbar.classList.remove('hidden')
  }

  lateScroll=window.scrollY
})

// Phan button add blog
  const btnAdd = document.querySelector('#btb-add-blog')
  const inputAdd = document.querySelector('#input-blog')

  btnAdd.addEventListener('click', function(){
    inputAdd.click();
  })

// phan quang cao
  setTimeout(
    hi,3000
  )
  const contai = `<div class="picture">
  <div class="picture-demo">
      <i class="far fa-times-circle"></i>
      <img src="./Image/ct.jpg" alt=""/>
   </div>
  </div>`
  function hi (){
    document.body.insertAdjacentHTML('afterbegin', contai)
  }

 document.body.addEventListener('click',hello)
 

 function hello (e) {
   const hinh = document.querySelector('.picture')
   if(e.target.matches('.fa-times-circle')){
     hinh.parentNode.removeChild(hinh)
     
   }
   console.log(e.target)
 }

  








