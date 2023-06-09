import { tabs } from './data/tabs'
import React from 'react'
import { useTabBar } from './hooks/useTabBar'

const App: React.FC = () => {
  const {
    tabsRef,
    activeTabIndex,
    tabUnderlineWidth,
    tabUnderlineLeft,
    setActiveTabIndex
  } = useTabBar()

  return (
    <section>
      <header>
        <h1 className='text-2xl text-center text-yellow-400 py-10'>Animated Sliding Tabs</h1>
      </header>

      <main className='flex relative h-12 rounded-3xl border border-black/40 bg-neutral-800 gap-8 px-4 backdrop-blur-sm'>
        <span
          className='flex absolute bottom-0 top-0 -z-10 overflow-hidden rounded-3xl py-2 transition-all duration-300'
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-3xl bg-yellow-700/70"></span>
        </span>

        {tabs.map((tab, index) => {
          const isActive = activeTabIndex === index

          return (
            <button
              key={index}
              ref={(element) => (tabsRef.current[index] = element)}
              className={`${isActive ? '' : 'hover:text-neutral-200'} 
                my-auto cursor-pointer select-none rounded-full px-4 text-center text-white`
              }
              onClick={() => { setActiveTabIndex(index) }}
            >
              {tab.name}
            </button>
          )
        })}
      </main>
    </section>
  )
}

export default App
