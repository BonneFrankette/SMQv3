import React, { useRef, useEffect } from 'react'

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc, posterSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // This effect will handle video playback when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
        // Fallback to poster image if autoplay fails
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        ref={videoRef}
        className="absolute object-cover w-full h-full opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster={posterSrc}
      >
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay with dark blue gradient for better text visibility - increased opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
    </div>
  )
}

export default VideoBackground
