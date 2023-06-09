import React, { useRef, useState, useEffect } from 'react'

const tabs = [
  {
    id: 'home',
    name: 'Home'
  },
  {
    id: 'projects',
    name: 'Projects'
  },
  {
    id: 'contact',
    name: 'Contact'
  },
  {
    id: 'blog',
    name: 'Blog'
  }
]

const App: React.FC = () => {
  const tabsRef = useRef<Array<HTMLElement | null>>([])
  const [activeTabIndex, setActiveTabIndex] = useState<number | null>(null)
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0)
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0)

  useEffect(() => {
    if (activeTabIndex === null) return

    const setTabPosition = (): void => {
      const currentTab = tabsRef.current[activeTabIndex] as HTMLElement
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0)
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0)
    }

    setTabPosition()
  }, [activeTabIndex])

  return (
    <>
      <h2 className='text-2xl text-center text-yellow-400 py-10'>Animated Sliding Tabs</h2>

      <section className='flex relative h-12 rounded-3xl border border-black/40 bg-neutral-800 gap-8 px-4 backdrop-blur-sm'>
        <span
          className='flex absolute bottom-0 top-0 -z-10 overflow-hidden rounded-3xl py-2 transition-all duration-300'
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-3xl bg-yellow-400/90"></span>
        </span>

        {tabs.map((tab, index) => {
          const isActive = activeTabIndex === index

          return (
            <button
              key={index}
              ref={(element) => (tabsRef.current[index] = element)}
              className={`${isActive ? 'text-slate-900' : 'hover:text-neutral-200'
                } 
              my-auto cursor-pointer select-none rounded-full px-4 text-center text-white`}
              onClick={() => { setActiveTabIndex(index) }}
            >
              {tab.name}
            </button>
          )
        })}
      </section>
    </>
  )
}

export default App
