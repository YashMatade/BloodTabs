import React from 'react'
import './SaveBloodBanner.css'
import SaveBlood from '/Saveblood.png'

const SaveBloodBanner = () => {
    const SaveBannerContents=[
        {
            titletag:"Donate blood save life!",
            description:"YOUR BLOOD CAN BRING SMILE IN OTHER PERSON FACE",
            savebloodimage:SaveBlood

        }
    ]
  return (
    <div className='container-fluid p-5'>
        {SaveBannerContents.map((SaveBannerContent,index)=>(
            <div className="save_blood_banner" key={index}>
                <div className="save_blood_banner_contents">
                <p>{SaveBannerContent.titletag}</p>
                <h3>{SaveBannerContent.description}</h3>
                <button>Contact Now</button>
                </div>

<div className="save_blood_banner_image">
    <img src={SaveBannerContent.savebloodimage} alt={SaveBannerContent.titletag} />
</div>
            </div>
        ))}
    </div>
  )
}

export default SaveBloodBanner