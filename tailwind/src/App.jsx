import './App.css'
import Card from './components/Card'
import Context from './store/DataStore'

function App() {

  return (
    <Context>
    <Card></Card>

    <div id="main" class="grid grid-cols-1 justify-items-center">  
        <div class="bg-green-700 w-24 h-12">1</div>  
        <div class="bg-green-600 w-24 h-12">2</div>  
        <div class="bg-green-500 w-24 h-12">3</div>  
        <div class="bg-green-400 w-24 h-12">4</div>  
    </div> 
    </Context>
  )
}

export default App
