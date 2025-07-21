import React from 'react'
import Buttons from './sections/buttons'
import Cards from './sections/cards'
import DarkToggle from '@/components/functions/darktoggle'

export default function Components() {
  return (
    <main>
      <div className='bg-primary-light border-primary-dark elevated-b z-10 sticky top-0'>
        <div className='pad-xyy'>
          <div className='typo-title text-secondary-dark'>Components</div>
        </div>
      </div>
      <div className='pad-xy'>
        <DarkToggle />
        <Buttons />
        <Cards />
      </div>
    </main>
   )
}
