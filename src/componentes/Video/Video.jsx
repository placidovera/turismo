import "./Video.css";

const Video = () => {
  const videos = [
    "https://videos.pexels.com/video-files/856182/856182-hd_1920_1080_25fps.mp4",
    "https://media.istockphoto.com/id/1366815813/video/young-latin-women-tourist-enjoying-happy-and-impress-on-holiday-in-bangkok-thailand.mp4?s=mp4-640x640-is&k=20&c=OWfBi7YLDdNgcJNgnpHYP-Mj9r9JMKAcdWqqYiviw7Q=",
    "https://media.istockphoto.com/id/1290943171/video/aerial-view-of-nice-day-young-couple-in-love-kayaking-on-sea-together-on-a-tropical-climate.mp4?s=mp4-640x640-is&k=20&c=m42IYhM7EFyxO20RsW1ty4QaJBS3nLxtAl_LF1jeW4M=",
        "https://video-previews.elements.envatousercontent.com/ca5a101c-2e50-4a3c-a7a0-35d5d858ee31/watermarked_preview/watermarked_preview.mp4",
"https://video-previews.elements.envatousercontent.com/files/2aa150ef-cc70-49f8-a6c8-2ba34fa0bdc2/video_preview_h264.mp4"
  ];

  return (
    <div className="video">
      <h2>Vive tus mejores vacaciones</h2>
      <div className="video-galeria">
        {videos.map((vid, index) => (
          <video
            key={index}
            src={vid}
            autoPlay
            loop
            muted
            playsInline
            className="banner-video"
          />
        ))}
      </div>
    </div>
  );
};

export default Video;
