import './App.scss'

import { useRef } from 'react'

import NavigationBar from './components/NavigationBar'
import Projects from './components/Projects'
import Experience from './components/Experience'  

function App() {
  const projectsSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);


  return (
    <>
      <div className="gradient-bg">

        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div class="gradients-container">
          <div class="g1"></div>
          <div class="g2"></div>
          <div class="g3"></div>
          <div class="g4"></div>
          <div class="g5"></div>
          <div class="interactive"></div>
        </div>
      
      </div>

      <div className='text-container'>
        <NavigationBar 
          projectsSectionRef={projectsSectionRef}
          experienceSectionRef={experienceSectionRef}
        />

        <h1>Kyle Boberg</h1>
        <p>Software Developer</p>

        <Projects ref={projectsSectionRef} />
        <Experience ref={experienceSectionRef} />
      </div>
    </>
  )
}

export default App
