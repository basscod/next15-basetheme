import React from 'react'

export default function Cards() {
  return (
    <main>
        <div className='pt-2 typo-h2 text-primary-darker border-b border-secondary-dark pb-1.5'>
          Cards
        </div>
        <div className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div className='card elevated bg-primary-lighter'>
            <div className='typo-h4 text-primary-darker border-b border-secondary-dark pb-2'>
              Cards - Elevated
            </div>
            <div className='typo-label pt-5'>
              Beveled 3D Cards with fully rounded corners, drop shadow, and hover effects.
            </div>
            <div className='pt-5 flex flex-wrap gap-4'>
              <div className='btn recessed bg-primary text-background'>
                Primary
              </div>
              <div className='btn recessed bg-secondary text-background'>
                Secondary
              </div>
              <div className='btn recessed text-foreground'>
                Ghost
              </div>
            </div>
            <div className='typo-caption pt-5'>
              (btn elevated bg-xx text-xx)
            </div>
          </div>
          <div className='card recessed bg-primary-lighter'>
            <div className='typo-h4 text-primary-darker border-b border-secondary-dark pb-2'>
              Cards - Recessed
            </div>
            <div className='typo-label pt-5'>
              Recessed Cards with fully rounded corners, drop shadow, and hover effects.
            </div>
            <div className='pt-5 flex flex-wrap gap-4'>
              <div className='btn elevated bg-primary text-background'>
                Primary
              </div>
              <div className='btn elevated bg-secondary text-background'>
                Secondary
              </div>
              <div className='btn elevated text-foreground'>
                Ghost
              </div>
            </div>
            <div className='typo-caption pt-5'>
              (btn recessed bg-xx text-xx)
            </div>
          </div>
        </div>
    </main>
  )
}
