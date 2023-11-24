import { useState } from 'react'
import CarouselComponent from './compnents/corousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='h-screen'>
        <CarouselComponent />
      </div>
      <div className='min-h-screen flex justify-center bg-cover bg-center bg-fixed bg-no-repeat items-center bg-wild1'>
        <p className='font-black text-6xl text-white'>The Jungle Book</p>
      </div>
      <div className='p-10 text-white bg-black'>
        <h1 className='font-bold text-4xl'>Wildlife is...</h1>
        <p>
          Wildlife encompasses all undomesticated animals living in their natural habitats, spanning diverse ecosystems worldwide. These creatures, ranging from majestic elephants to tiny insects, play vital roles in maintaining ecological balance and biodiversity.
          In their natural environments, wild animals exhibit unique behaviors and adaptations honed over generations for survival. Their existence contributes to the intricate web of life, influencing habitats, pollination, and food chains</p>
      </div>
      <div className={`min-h-screen bg-wild2 bg-center bg-cover bg-no-repeat`}>
      </div>
      <div className={`min-h-screen  bg-fixed bg-wild3 bg-center bg-cover bg-no-repeat`}>
      <p className='text-white p-10 min-h-screen bg-black bg-opacity-60'>
        </p>
      </div>
    </div>
  )
}

export default App
