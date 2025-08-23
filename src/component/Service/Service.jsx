import React from 'react'
import Solar from './Model/Solar'

function Service() {
  return (
    <div className="w-full max-w-[1200px] my-[80px] h-[100vh] flex justify-center items-center relative overflow-hidden">
      {/* Left: Text */}
      <div className="flex-1 flex justify-center items-center ">
        <h1 className="text-white text-4xl">Hello Solar</h1>
      </div>

      {/* Right: 3D canvas */}
      <div className="flex-1 relative h-full flex justify-center items-center">
        <Solar />
      </div>
    </div>
  )
}

export default Service