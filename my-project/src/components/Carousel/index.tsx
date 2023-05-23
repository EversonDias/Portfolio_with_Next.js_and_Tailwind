export default function Carousel() {
  return (
    <div>
      <div className="carousel w-[500px] h-[300px] flex">
        {
          [...Array(5)].map((_item, index: number) => (
            <div key={index} id={`item${index}`} className="carousel-item relative w-full">
              <img src={`images/itemsCarousel/image${index}.webp`} className="w-full" alt={`${index}° imagem do carousel`} />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#item${index === 0 ? 4 : index - 1}`} className="btn btn-circle">❮</a>
                <a href={`#item${index === 4 ? 0 : index + 1}`} className="btn btn-circle">❯</a>
              </div>
            </div>
          ))
        }
      </div>
      {
        [...Array(5)].map((_item, index: number) => (
          <div className="flex py-2 gap-2 bg-slate-600 ">
            <a href={`#item${index}`} className="btn btn-xs">{index}</a>
          </div>
        ))
      }
    </div>
  )
}