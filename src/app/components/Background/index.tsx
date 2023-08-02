export default function Background() {

  return (
    <div className="h-[85vh] w-[100vw] md:h-[100vh] flex items-center justify-center overflow-hidden bg-cover bg-primary">
      <div
        className="w-full h-[93vh] absolute opacity-20"
      />

      <video
        autoPlay
        loop
        muted
        controls={false}
      >
        <source src="https://raw.githubusercontent.com/EversonDias/myPortfolio/main/public/word.webm"/>
      </video>
  </div>
  )
}
