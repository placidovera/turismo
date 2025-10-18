    // "https://player.vimeo.com/external/449903817.sd.mp4?s=fa2f62f3a3d73d0fe6a8fa3ad7b5eb7a4c9984f7&profile_id=165",
    // "https://player.vimeo.com/external/456459108.sd.mp4?s=ff4c6b4f2d1e2a78d6f2f88d2a5b8d7c6d2e5e8a&profile_id=165",


const Video2 = () => {
  const video =
     "https://video-previews.elements.envatousercontent.com/ca5a101c-2e50-4a3c-a7a0-35d5d858ee31/watermarked_preview/watermarked_preview.mp4";

  return (
    <div className="video">
      <h2>Vive tus mejores vacaciones</h2>
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="banner-video"
      />
    </div>
  );
};

export default Video2;
