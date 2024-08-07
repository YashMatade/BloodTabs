import React, { useState } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import youtubeThumbnail from "youtube-thumbnail";
import "./VideoTestimonials.css"; // Import the custom CSS

const videos = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Anurag Sharma",
    position: "General Manager",
    description:
      "This blood bank is made by modern technology, I am giving well support to you, This blood is nearest for us. Thank you.",
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    title: "Video 2",
    position: "Position 2",
    description: "Description for video 2",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    title: "Video 3",
    position: "Position 3",
    description: "Description for video 3",
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=5NV6Rdv1a3I",
    title: "Video 4",
    position: "Position 4",
    description: "Description for video 4",
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
    title: "Video ",
    position: "Position 5",
    description: "Description for video 5",
  },
];

const VideoTestimonials = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [selectedVideoId, setSelectedVideoId] = useState(videos[0].id);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleThumbnailClick = (video) => {
    setCurrentVideo(video);
    setSelectedVideoId(video.id);
  };

  return (
    <div className="container my-5">
      <h2
        className="mb-3"
        style={{
          fontSize: "40px",
          borderBottom: "3px solid red",
          display: "inline-block",
        }}
      >
        Video Testimonials
      </h2>

      <div className="row">
        <div className="col-md-5">
          <h5 className="mt-5 text-danger">{currentVideo.position}</h5>
          <h5>{currentVideo.title}</h5>
          <p className="">"{currentVideo.description}"</p>
        </div>
        <div className="col-md-7">
          <div
            style={{
              borderRadius: "12px",
              border: "2px solid brown",
              overflow: "hidden", // Ensure the border-radius is applied properly
            }}
          >
            <ReactPlayer controls url={currentVideo.url} width="100%" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4>More Videos</h4>
        <hr className="text-danger" style={{ height: "2px" }} />
        <Slider {...settings}>
          {videos.map((video) => {
            const thumbnail = youtubeThumbnail(video.url).high.url;
            return (
              <div
                key={video.id}
                onClick={() => handleThumbnailClick(video)}
                className={`p-2 thumbnail-container ${
                  selectedVideoId === video.id ? "selected" : ""
                }`}
                style={{ position: "relative", cursor: "pointer" }}
              >
                <img
                  src={thumbnail}
                  alt={video.title}
                  className="thumbnail-img"
                />
                <div className="thumbnail-text">
                  <h5>{video.title}</h5>
                  <p>{video.position}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default VideoTestimonials;
