export default function Carousel() {
  return (
    <div>
      <div className="carousel w-full h-[70vh] flex justify-center m-auto">
        {
          [...Array(5)].map((_item, index: number) => (
            <div key={index} id={`item${index}`} className={`bg-cover bg-center carousel-item relative w-full imageCarousel${index}`}>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#item${index === 0 ? 4 : index - 1}`} className="btn btn-circle">❮</a>
                <a href={`#item${index === 4 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex justify-center gap-3 mt-1">
        {
          [...Array(5)].map((_item, index: number) => (
            <a href={`#item${index}`} className="btn btn-circle btn-xs bg-light-header hover:bg-light-highlights border-0 hover:text-light-font-2">{index}</a>
          ))
        }
      </div>
    </div>
  )
}