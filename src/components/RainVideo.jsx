import myVideo from "../assets/rainVideo.mp4";

export default function Cold() {
  return (
    <div>
      <video id="background-video" muted loop autoPlay>
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
}
