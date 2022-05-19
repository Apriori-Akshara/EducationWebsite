const newsData=[
    {
        id:"1",
        src:"./Images/Ronnie-1.png",
        titleA:"Ronnie Screwvala invests $5M in 21K School in its pre-Series A round",
        titleB:"November 29, 2021",
        titleC:"The first online-only school in India – 21K School - aims to deploy the funds raised to augment its outreach to students in India and abroad ...",
    },
    {
        id:"2",
        src:"./Images/Ronnie-2.png",
        titleA:"21K School Announced Their Milestone Of 3000 admissions",
        titleB:"08 September, 2021",
        titleC:"The leading online school 21K School, which started with 267 students last year, has announced their milestone of 3000 admissions in its second academic year...",
    },
    {
        id:"3",
        src:"./Images/Ronnie-3.png",
        titleA:"India’s Online Schooling Pioneer 21K School Announces Collaboration with Century, Leader in AI-driven personalised education",
        titleB:"July 29, 2021",
        titleC:"21K School- India’s First Online School, today announced their association with Century, an award-winning AI-based platform for offering flexibility in learning and teaching...",
    },
   
]

const update=document.getElementById("ten");
newsData.map((item,index)=>(

    update.innerHTML +=
     `
     <div class="card hoverEffect mx-1"
     >
       <img src=${item.src} class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title text-start">${item.titleA}</h5>
         <p class="card-text text-start"
         style="opacity: 0.6;"
         ><small class="text-muted">${item.titleB}</small></p>
         <p class="card-text text-start"
         style="opacity: 0.6;"
         >${item.titleC}</p>
         <a href="#" class="card-link linkDec">Read More</a>
       </div>
     </div>
     
      
      `
))
