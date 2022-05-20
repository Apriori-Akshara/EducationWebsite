const eventData=[
    {
        id:"1",
       
        srcA:"",
        titleA:"Summer-School",
        titleB:"Summer School",
        titleC:"Summer School Program from Grade 1 onwards begins and it is open to all. It is a great way for parents exploring the idea of online schooling to experience 21K School. Several classes are available to choose from - visit the summer school page for further details."
    },
    {
        id:"2",
        srcA:"",
       
        titleA:"Student led-Podcast",
        titleB:"The Echo of 21K",
        titleC:"It's a student-led podcast, conceptualized, coordinated, and conducted by the Students of 21K School who have released the inaugural episode this week, recorded with the co-founders of 21K School."
    },
  
]

const organised=document.getElementById("six");
eventData.map((item,index)=>(
    organised.innerHTML += `
    <div class="col-md-6 mt-3">
    <div class="row justify-content-around">
      <div class="col-lg-6 col-md-12">
        <div class="backHW text-center "
        
        >
        <!-- background image set -->
       <P class="py-2 bottomSet" 
        style="color:#F3F3F3;
       background-color: #0F0F0F;
       border-radius:0 0 15px 15px;
       ">
        ${item.titleA}
        </P>
        </div>
      </div>
      <div class="col-lg-6  text-center at575center"
      style="color:#F3F3F3 ;font-weight: 600;">
        <p><b
          style="color:#0F0F0F;" 
          > ${item.titleB}</b></p>
        <p class="small">
        ${item.titleC}
        </p>
      </div>
    </div>
  </div>
      
      `
))
