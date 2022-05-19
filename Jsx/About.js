const aboutData=[
    {
        id:"1",
        srcA:"./Images/Our-Values.png",
        titleA:"Unique Features",
    },
    {
        id:"2",
        srcA:"./Images/Students-icon.png",
        titleA:"Benifits of students",
    },
    {
        id:"3",
        srcA:"./Images/Programmes.png",
        titleA:"Indian Circulam",
    },
    {
        id:"4",
        srcA:"./Images/OurTeam.png",
        titleA:"Our Team",
    },
    {
        id:"5",
        srcA:"./Images/Awards.png",
        titleA:"Award and Recognition",
    },
  
]

const aboutDataSecond=[
    {
        id:"1",
        srcA:"./Images/Research-1.jpg",
        titleA:"Research-based Curriculum",
    },
    {
        id:"2",
        srcA:"./Images/Research-2.png",
        titleA:"Tech-based Learning",
    },
    {
        id:"3",
        srcA:"./Images/Research-3.png",
        titleA:"Trained Teachers from around the world",
       
    },
    {
        id:"4",
        srcA:"./Images/Research-4.png",
        titleA:"Self-paced learning from the comfort of your own space"
       ,
    },
  
  
]



const dataB=document.getElementById("Second");
aboutData.map((item,index)=>(
    dataB.innerHTML += `<div class="row mt-2 leftFixed " style="background-color:#F0572F">
    <div class="col-2"><img src=${item.srcA} alt=""></div>
    <div class="col-10 text-start"><p class="pt-3 white">${item.titleA}</p></div>
      </div>`
))


//                              this is for aboutDataSecond

const dataC=document.getElementById("Third");
aboutDataSecond.map((item,index)=>(
    dataC.innerHTML +=`
    <div class="col-md-5 col-sm-6">
    <div class="row ">
  <img src=${item.srcA} alt="" class="img-fluid m-auto aboutImageHW">
    </div>
    <div class="row text-center">
      <p>${item.titleA}</p>
    </div>
  </div>
  `
    
   
))


