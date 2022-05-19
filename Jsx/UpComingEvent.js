const eventUpData=[
    {
        id:"1",
        titleA:"Jan",
        date:"10-15",
        titleB:"International Benchmark Test",
    },
    {
        id:"2",
        titleA:"Jan",
        date:"25",
        titleB:"Republic Day Celebration",
    },
    {
        id:"3",
        titleA:"Jan",
        date:"30",
        titleB:"Third PTM (2021-2022)",
    },
    {
        id:"4",
        titleA:"Feb",
        date:"2",
        titleB:"Art Fest",
    },
]

const up=document.getElementById("seven");
eventUpData.map((item,index)=>(

    up.innerHTML += `
    <div class="col-md-5 mt-4">
    <div class="row justify-content-around sides">
      <div class="col-3 p-2 dateDesign text-center">
       ${item.titleA} <br/>${item.date}
      </div>
      <div class="col-6 dateData ">${item.titleB}</div>
    
    </div>
             </div>
      
      `
))
