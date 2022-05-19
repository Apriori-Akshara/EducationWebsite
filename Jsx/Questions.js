const asData=[
    {
        id:"1",
        titleA:"How will my child Learn?",
        titleB:"At 21K School, we believe in a holistic education that involves not just academics. We deliver all textbooks and workbooks to your doorstep. The books are based on the CBSE Pattern following the National Curriculum Framework, so you can be sure that they will provide the same rigorous learning experience as any other school that offers this curriculum. Students are required to write in their notebooks every day with almost no exception; however, it's not just about classwork--21K School also provides opportunities for students who want more creative outlets or leadership roles during Social Events, Festivals, and celebrations organized by our School Council. The teaching-learning environment here will prepare students both mentally as well as physically so they can succeed not just locally but also internationally one day.",
    },
    {
        id:"2",
          titleA:"Do i have to be with my child all the times?",
        titleB:"Well, it is essential for an adult to be with the child in pre-primary grades only. Most students from Grade 1 and above become independent learners and are able to actively participate during live classes on their own. The students are required to keep their cameras on at all times, so they're under the watchful eyes of the teachers. In case of any technical issues, our Tech Support & Student Success Crew is always on its toe and reachable within minutes for assistance.",
    },
    {
        id:"3",
          titleA:"Is online schooling Easy?",
        titleB:"Online schooling is straightforward and easy to navigate through the Digital Campus, which makes attending classes a breeze. With an integrated system like ours, it's never been easier for students! You can have PTM ‘on-demand’, track student progress daily, and your child will never have to run the risk of using school transport. An added advantage is all live classes are recorded, which means you can track the quality of teachers every moment",

    },
    {
        id:"4",
         titleA:"How can enrolled my child",
        titleB:"Enrollment to 21K School is a simple process. Please click here to enroll your child. An enrollment fee of Rs. 250/- is payable at the time of enrollment. On submission, our Admissions Advisor Team will guide you on the next steps to complete the formalities. The entire process is completed online, including fee payment and onboarding of students. Learning Kits will be delivered starting from May 2022. Classes start from 06 June 2022 but the early bird fee is open only for admissions confirmed on or before 01 April 2022.",
    },
    
  
]

const question=document.getElementById("nin");
asData.map((item,index)=>(
    question.innerHTML += `
    <div class="accordion-item"
    >
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button"
         type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseOne" 
          aria-expanded="true"
           aria-controls="collapseOne"
           style="background-color:#F0572F;color: #F3F3F3;font-weight: 700;"
           >
        ${item.titleA}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body"
        style="background-color:#F6BA1E ;"
        >
        ${item.titleB}
        </div>
      </div>
    </div>
      `
))


