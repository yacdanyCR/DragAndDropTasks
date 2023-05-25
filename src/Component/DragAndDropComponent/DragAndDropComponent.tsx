import { DragDropContext } from 'react-beautiful-dnd'
import CompletedListComponent from '../CompletedListComponent/CompletedListComponent'
import IncompletedListComponent from '../IncompletedListComponent/IncompletedListComponent'

const DragAndDropComponent = () => {
	return (
		<DragDropContext onDragEnd={(result) => console.log(result)}>
			<div className='list__Section'>
				<IncompletedListComponent />
				<CompletedListComponent />
			</div>
		</DragDropContext>
	)
}

export default DragAndDropComponent