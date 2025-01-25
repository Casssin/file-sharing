import React from 'react'
import Constant from '../utils/Constant'

function Hero() {
  return (
<section className="bg-gray-50 min-h-screen flex items-center">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        <span className='text-primary'>Upload, Save </span> and <span className='text-primary'>Share </span>your files
        <strong className="font-extrabold text-red-700 sm:block"> </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-500">
        {Constant.desc}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-secondary focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero