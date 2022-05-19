// let svs=`${<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
// <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
// </svg>}`
const gradeData=[
    {
        id:"1",
        // srcA:`${svs}`,
        srcA:"",
        titleA:"Pre-Primary School",
    },
    {
        id:"2",
        srcA:"",
        // srcA:`${svs}`,
        titleA:"Primary School",
    },
    {
        id:"3",
        srcA:"",
        // srcA:`${svs}`,
        titleA:"Middle School",
    },
    {
        id:"4",
        srcA:"",
        // srcA:`${svs}`,
        titleA:"Senior School",
    },
   
  
]

const gross=document.getElementById("Fourth");
gradeData.map((item,index)=>(
    gross.innerHTML += `<div class="row mt-2 leftFixed " style="background-color:#F0572F">
      <div class="col-10 text-center"><p class="pt-3 white">${item.titleA}</p></div>
      <div class="col-2"><img src=${item.srcA} alt=""></div>
      </div>`
))



const gradeDataB=[
    {
        id:"1",
         srcB:"./Images/reading-book-1.png",
        titleB:"10 students per class",
       
    },
    {
        id:"2",
        srcB:"./Images/reading-book-2.png",
         titleB:"Very engaging 1:10Teacher to student ratio",
              
    },
    {
        id:"3",
        srcB:"./Images/reading-book-3.png",
         titleB:"Middle School",
    },
   
  
]


const grossB=document.getElementById("Five");
gradeDataB.map((item,index)=>(
    grossB.innerHTML += `
    <div class="col-md-3 col-sm-5" >
    <div class="row">
   <img src=${item.srcB} alt="" class="img-fluid igset">
    </div>
    <div class="row text-center mt-3">
     <p>
     ${item.titleB}
    </p>
    </div>
  </div>
      `
))