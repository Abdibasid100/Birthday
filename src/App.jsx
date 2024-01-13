import { useState } from 'react'
import './App.css'
import List from './List'
import data from './data'

function App() {

  const [people, setpeople] = useState(data)

  return (
    <main>
      <section className='container bg-white px-12 py-6 text-black rounded-lg'>
        <h1 className='mb-4'>{people.length} Birthdays Today</h1>
        <List people={people}/>
        <button onClick={()=> setpeople([])} className='bg-pink-400 w-full text-xl text-white mt-6 outline-none bottom-0'>Clear All</button>
      </section>
    </main>
  )}

export default App
