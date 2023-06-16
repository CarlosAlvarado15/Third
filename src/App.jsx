
import './App.css'
import './Body/Empleado'
import Empleado from './Body/Empleado'
function App() {
  return (
    <>
 
 <div className='Colaboradores'>
  <Empleado nombre= "Isaias Arthuro" cargo= "Ingeniero"/>
  <Empleado nombre= "Alexander Pino" cargo= "Supervisor"/>
  <Empleado nombre= "Mario Lopez" cargo= "Web Devoloper"/>
  </div>
    </>
  )
}

export default App
