import myVideo from "../assets/cloudVideo.mp4";

export default function Cold() {
  return (
    <div>
      <video id="background-video" muted loop autoPlay>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}
