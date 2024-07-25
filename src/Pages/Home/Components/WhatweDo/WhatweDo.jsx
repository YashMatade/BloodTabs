import React from 'react';
import './WhatweDo.css';
import MainImg from '/p-care.jpg';
import { MdBlurOn } from "react-icons/md";

const WhatweDo = () => {
    const whatweDo = [
        {
            title: "What We Do--",
            mainImg: MainImg,
            experience:"20+ Experience",
            content: [
                {
                    title: "Our Blood Donation Journey",
                    description: "NUA Odisha scheme aims to empower Odisha's youth with continuous skilling, reskilling, and up skilling opportunity. The scheme leverages existing and new skilling institutions and partnerships with industries to deliver training in all 30 districts prioritizing Aspirational, Tribal, and remote areas.",
                },
                {
                    title: "Our Vision",
                    description: "NUA Odisha scheme aims to empower Odisha's youth with continuous skilling,NUA Odisha scheme aims to empower Odisha's youth with continuous skilling.",
                }
            ]
        }
    ];

    return (
        <div className='container-fluid'>
            {whatweDo.map((item, index) => (
                <div key={index} className="what_we-do">
                       <div className="what_we_do_img_box">
  <div className="img_whatwedo_bg">
    <div className="actual_image_whatwedo">
      <img src={item.mainImg} alt={item.title} loading='lazy'/>
      <div className="overlay_box">
         <div className="overlay_box_content">
<h3>{item.experience}</h3>
         </div>
      </div>
    </div>
    <div className="image_icon">
      <MdBlurOn className="blur-icon" />
    </div>
  </div>
</div>

                        <div className="whatwedo_main_content">
                            <h3>{item.title}</h3>
                            {item.content.map((contentItem, contentIndex) => (
                                <div key={contentIndex} className="content-item">
                                    <h4>{contentItem.title}</h4>
                                    <p>{contentItem.description}</p>
                                </div>
                            ))}
                                                                <button>Read More</button>

                        </div>
                    </div>
            ))}
        </div>
    );
}

export default WhatweDo;
