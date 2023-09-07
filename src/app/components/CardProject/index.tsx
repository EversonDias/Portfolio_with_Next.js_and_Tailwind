import { useContext } from "react";
import { cardItem } from "../../types";
import { ProjectContext } from "../../contexts/ProjectContext/context";
import ImageCard from "../ImageCard";

export default function CardProject(cardItem: cardItem) {
	const { handleModal } = useContext(ProjectContext);
	const { name, id} = cardItem;

	return (
		<div className={`w-[22rem] m-auto mt-10 [&>div>button]:hover:bg-primary hover:bg-highlights [&>div>button]:hover:text-highlights bg-secondary overflow-hidden rounded-lg border-none [&>object]:hover:scale-110 duration-500 h-[25rem] `}>
			<ImageCard 
				id={String(id)}
				name={name}
			/>
			<div className="p-4 flex flex-col gap-4 text-center">
				<p
					className='text-2xl font-bold truncate'
				>
					{name.replace(/_|-/g, ' ')}
				</p>
				<button className="btn hover:bg-primary bg-highlights text-primary hover:text-highlights m-auto" id={String(id)} onClick={() => handleModal(cardItem)} >Detalhes</button>
			</div>
		</div>
	);
}
