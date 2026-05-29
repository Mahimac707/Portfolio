import React from 'react'

function Footer() {
  return (
    <footer className='flex items-center justify-between px-10 py-4 border-t border-cyan-500/20 bg-transpaent backdrop-blur-md text-gray-400 text-sm'>
      <span className='font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400'>
        Mahima Portfolio
      </span>
      <p>
        &copy; {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  )
}

export default Footer