import icons from '../../utils/icons';

export default function Technology() {
  const listIcons = Object.values(icons);
  return (
    <div className='bg-secondary w-full md:w-[90%] md:rounded-xl' >
      <p className='text-2xl p-4 hoverUnderline md:text-5xl md:font-bold md:p-5'>TECNOLOGIAS</p>
				<div className='w-[80%] m-auto p-4 '>
          <div className='grid grid-cols-3 gap-6 text-5xl text-center md:text-8xl md:grid md:grid-cols-4'>
            {listIcons.map(icon => <i key={icon} className={`${icon} hover:text-highlights duration-500`} />)}
          </div>
        </div>
    </div>
  )
}