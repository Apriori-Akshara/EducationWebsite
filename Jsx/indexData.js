const indexData=[
    {
        id:"1",
        src:"./Images/enroll.png" ,
        number:"4514",
        title:"Students Enrolled in Our School"
    },
    {
        id:"2",
        src:"./Images/cities.png",
        number:"450+",
        title:" Students from 450+ Cities"
        
        
        
    },
    {
        id:"3",
        src:"./Images/Countries.png",
        number:"38+",
        title:"Students from 38+ Countries "
        
    },
    {
        id:"4",
        src:"./Images/Nationalities.png",
        number:"24+",
        title:"Students from  24+ Nationalities"
       
    },
    {
        id:"5",
        src:"./Images/Teachers.png",
        number:"25+",
        title:"Teachers from 25+ Cities"
        
    },
]

const data=document.getElementById("sendsA");
indexData.map((item,index)=>(
    data.innerHTML +=`<div class="col-lg-2 col-md-3 col-sm-4" key=${index} >
    <div class="row center1yAll">
      <img src=${item.src} alt="" class="img-fluid igset">
    </div>
    <div class="row text-center mt-2">
      <h4 style="color:#F0572F">${item.number}</h4>
    </div>
    <div class="row text-center mt-2">
      <h5>
       ${item.title}
      </h5>
    </div>
       </div>`
))


