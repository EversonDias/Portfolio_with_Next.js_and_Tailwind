import icons from '../../utils/icons';

export default function Technology() {
  const listIcons = Object.values(icons);
  return (
    <div className='bg-secondary w-full' >
      <a href="/#" className='text-2xl p-4 hoverUnderline'>TECNOLOGIAS</a>
				<div className='w-[80%] m-auto p-4'>
          <div className='grid grid-cols-3 gap-3 text-5xl text-center'>
            {listIcons.map(icon => <i key={icon} className={`${icon} hover:text-highlights`} />)}
          </div>
        </div>
    </div>
  )
}