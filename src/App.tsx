import './App.css'
import CompletedListComponent from './Component/CompletedListComponent/CompletedListComponent'
import IncompletedListComponent from './Component/IncompletedListComponent/IncompletedListComponent'
import InputComponent from './Component/InputComponent/InputComponent'

function App() {
  return (
    <>
      <section>
        <InputComponent />
      </section>

      <section>
        <div className='list__Section'>
          <IncompletedListComponent />
          <CompletedListComponent />
        </div>
      </section>
    </>
  )
}

export default App
