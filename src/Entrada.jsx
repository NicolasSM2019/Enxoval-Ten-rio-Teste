import { Link } from 'react-router-dom'
import './Entrada.css'

function App() {

  return (
    <div>
    <div style={{color: 'hsl(204, 87%, 21%)', fontSize: '35px' , padding: '20px'}}>Bem-Vindo ao Site Do Casal</div>
 <Link to="/acessar "  className='titulo'>Enxoval Carleane e João Vitor</Link>
 
 
  </div>
  )
}

export default App
