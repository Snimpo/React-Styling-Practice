import './App.css'

function App() {
  const timestamp = new Date();
  let  hour = timestamp.getHours();
  let greeting;
  let  styleColor="";

  if(hour <= 11){
    greeting = "Morning"
    styleColor = {
      color: "red"
    }
  }else if (hour>=12 && hour<=18){
    greeting = "Afternoon"
    styleColor = {
      color: "green"
    }
  } else{
    greeting = "Evening"
    styleColor = {
      color: "blue"
    }
  }

  return (
    <>

    <p >This website greets you depending on the time of the day you open it.</p>

    <h1 className='heading' style ={styleColor}>Good {greeting} </h1>
      
    </>
  )
}

export default App
