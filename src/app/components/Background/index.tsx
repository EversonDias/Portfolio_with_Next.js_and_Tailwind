"use client"
export default function Background() {

  return (
    <div className="h-[85vh] w-[100vw] md:h-[100vh] flex items-center justify-center overflow-hidden bg-cover bg-primary">
      <div
        className="w-full h-[93vh] absolute opacity-20"
      >

      </div>
      
      <iframe
      className="hidden 3xl:flex object-cover"
      allowFullScreen
      src="//player.vimeo.com/video/850398231?autoplay=1&loop=true&muted=true&controls=0&fullscreen=true"
      title="word"
      width={1920}
      height={1080}
      ></iframe>
      <iframe
      className="hidden 2xl:flex 3xl:hidden object-cover"
      allowFullScreen
      src="//player.vimeo.com/video/850398231?autoplay=1&loop=true&muted=true&controls=0&fullscreen=true"
      title="word"
      width={1420}
      height={800}
      ></iframe>

      <iframe
      className="2xl:hidden"
      src="//player.vimeo.com/video/850401013?portrait=0&byline=0&autoplay=1&loop=true&muted=true&controls=0"
      title="word"
      allowFullScreen
      width={400}
      height={700}
      ></iframe>
  </div>
  )
}
