import React from 'react'
import './WhyDonate.css'

const WhyDonate = () => {
    const WhyDonate=[
        {
            title:"Why Donate Blood - -",
            titletag:"Our Blood Donation Journey",
            description:"Donating blood is a crucial of generosity that saves lives and improves health outcomes for individuals in need here are several resons why donating blood is important",
            reasons:[
                {reasonname:"Chronic Illnesses"},
                {reasonname:"Emergency Situations"},
                {reasonname:"Childbirth and Pregnancy Complications"},
                {reasonname:"Cancer Treatment"},

            ]

        }
    ]
  return (
    <div className='container-fluid'>
<div className="why_we-donate">
    {WhyDonate.map((why,index)=>(
        <div className="main_whydonatecontent" key={index}>
<div className="first_whydonate">
    <h3>{why.title}</h3>
    <h4>{why.titletag}</h4>
    <p>{why.description}</p>
    <button>Read More</button>
</div>

<div className="second_whydonate">
    {why.reasons.map((reason,index)=>(
        <div 
        className={`whyDonateReason ${index % 2 === 0 ? 'even-reason' : ''}`} 

         key={index}>
            <ul>
            <li>{reason.reasonname}</li>
            </ul>
        </div>
    ))}
</div>
        </div>
    ))}
</div>
    </div>
  )
}

export default WhyDonate