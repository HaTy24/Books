// function changeColor(newColor) {
//     var elem = document.querySelector('.p');
//     elem.style.color = newColor;
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


const nam = document.querySelectorAll('#books a');


document.querySelector('.fa-search').addEventListener('click', function(e){
  const getValue = document.querySelector('.search').value;

  nam.forEach(function(item){
    
  })
  const array = Object.keys(item)
  console.log(typeof array)
    

})



const menu = document.querySelector('.menu-logo')
const update = document.querySelector('.menu-items');

menu.addEventListener('click' , function(){
  menu.classList.toggle('menu-logo-new')
  update.classList.toggle('menu-items-new')
});


// Picture

const picture = document.querySelectorAll('body img');
picture.forEach((item)=>item.addEventListener('click', zoomPicture)) 

function zoomPicture(e){
  // console.log(e.target)
  // // template.innerHTML
  const image = e.target.getAttribute('src');
  console.log(image)

  const template=`
  <div class="info">
  <img src=${image} alt=""/>
  </div>
`
document.body.insertAdjacentHTML('beforeend',template)
}

document.body.addEventListener('click',function(e){
  if(e.target.matches('.info')){
    console.log(e.target)
    e.target.parentNode.removeChild(e.target)
  }
})


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
      <img src="./Image/1618557736_blog-la-gi.png" alt=""/>
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
 }

  








