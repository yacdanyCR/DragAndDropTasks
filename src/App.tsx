import './App.css'
import DragAndDropComponent from './Component/DragAndDropComponent/DragAndDropComponent'
import InputComponent from './Component/InputComponent/InputComponent'

function App() {
  return (
    <>
      <section>
        <InputComponent />
      </section>

      <section>
        <div className='list__Section'>
          <DragAndDropComponent />
        </div>
      </section>
    </>
  )
}

export default App
