import {useState} from 'react'
function App() {
  const [league, setLeague] = useState('NL')
  const switchLeague = (league) => {
    const NL = document.getElementById('nl')
    const AL = document.getElementById('al')
    if (league === 'NL') {
      NL.classList.add('hover:bg-red-800', 'hover:text-white', 'bg-gray-300')
      NL.classList.remove('bg-red-800', 'text-white')
      AL.classList.add('bg-red-800', 'text-white')
      AL.classList.remove('hover:bg-red-800', 'hover:text-white', 'bg-gray-300')
      setLeague('AL')
    }
    if (league === 'AL') {
      AL.classList.add('hover:bg-red-800', 'hover:text-white', 'bg-gray-300')
      AL.classList.remove('bg-red-800', 'text-white')
      NL.classList.add('bg-red-800', 'text-white')
      NL.classList.remove('hover:bg-red-800', 'hover:text-white', 'bg-gray-300')
      setLeague('NL')
    }
    console.log(`state is: ${league}`)
  }
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col align-center">
      <h1 className="font-display text-4xl text-red-700 text-center m-6">The October Machine</h1>
      <div className="flex justify-center flex-row">
        <button id="nl" onClick={() => switchLeague(league)} className="m-2 font-body text-xl font-bold bg-red-800 text-white w-20 h-10 rounded">NL</button>
        <button id="al" onClick={() => switchLeague(league)} className="m-2 font-body text-xl font-bold hover:bg-red-800 hover:text-white bg-gray-300 w-20 h-10 rounded">AL</button>
      </div>
    </div>
  );
}

export default App;
