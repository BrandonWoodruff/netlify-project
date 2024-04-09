export function Background () {
  return (
    <video className="fixed top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
      <source src="/video/video-1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Background;