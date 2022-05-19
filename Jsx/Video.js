const videoData=[
    {
        id:"1",
       src:"https://www.youtube.com/embed/yjt0rJuGhKE?start=4",
        titleA:"Mrs Gakhar",
        titleB:"Mother of Priya",
        titleC:"Grade 1 A",
    },
    {
        id:"2",
        src:"https://www.youtube.com/embed/flmRylcPSVc",
         titleA:"Mrs anshu",
         titleB:"Mother of Rahul",
         titleC:"LKG",
    },
    {
        id:"1",
        src:"https://www.youtube.com/embed/m0F6ok7eto8",
         titleA:"Mrs Gakhar",
         titleB:"Mother of Rohan",
         titleC:"UKG",
    },
    {
        id:"1",
        src:"https://www.youtube.com/embed/E7vpTDxE2zk",
         titleA:"Mr Shyam",
         titleB:"Mother of Rajeev",
         titleC:"Grade 2 A",
    },
    {
        id:"1",
        src:"https://www.youtube.com/embed/cmQmIFeFVhs",
         titleA:"Mrs Gakhar",
         titleB:"Mother of Priya",
         titleC:"Grade 5 B",
    },
    {
        id:"1",
        src:"https://www.youtube.com/embed/S3ICTUClh7Q",
         titleA:"Mrs Gakhar",
         titleB:"Mother of Priya",
         titleC:"Grade 3 A",
    },
]

const low=document.getElementById("eight");
videoData.map((item,index)=>(

    low.innerHTML += `
    <div class="item">
    <div class="row justify-content-around">

      <iframe width="560" height="315" 
      src=${item.src}
      title="YouTube video player"
      frameborder="0"
       allow="accelerometer;         
        autoplay; clipboard-write;
       encrypted-media; gyroscope;
      picture-in-picture"
        allowfullscreen>
    </iframe>
    
    </div>
    <div class="row text-center">
    <b>
     ${item.titleA}
     </b>
    </div>
    <div class="row text-center"> 
      <p>
      ${item.titleB}
      </p>
    </div>
    <div class="row text-center">
        <p>
        ${item.titleC}
        </p>
    </div>
  </div>
      
      `
))
