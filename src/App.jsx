import { useState, useRef } from 'react'
import './App.css'
import Hero from './Sections/Hero'
import PringlesLoader from './components/PringlesLoader'
import Body from './Sections/Body'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {Pringles_Switcher} from './Constants/index'
import Additional from './Sections/Additional'
import All from './Sections/All'
import FunFacts from './Sections/FunFacts'
function App() {

//register the ScrollTrigger and MotionPathPlugin plugins
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  const [inTransition, setInTransition] = useState(false)

  const [finishedTransition, setFinishedTransition] = useState(false)
  const [transitState, setTransitState] = useState(0)

  const [currentCan, setCurrentCan] = useState(0)

  const Component = Pringles_Switcher[currentCan].component
 

  useGSAP(()=>{
    //animate the opacity of the information section
    gsap.to("#information", {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 1%',
        end: 'bottom 1%',
        scrub: 2,
      },
      autoAlpha: 0,
    });

    //animate the path the canvas will follow to the next section 
    gsap.to("#canvas", { 
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 1%',
        end: 'bottom 1%',
        scrub: 0,
      },
      motionPath:{
        path: "#path",
        align: "self",
        alignOrigin: [0.5, 0.5],
      },
      onUpdate: function() {
        const transit = this.progress()
        if(transit > 0.01 && transit < 0.99){
          setInTransition(true)
          setFinishedTransition(false)
        }
        else if(transit > 0.99){
          setFinishedTransition(true)
        }
        setTransitState(transit)
      },
      duration: 2,
      ease: 'none',
    })

    //animate the scale of the circular div behind the pringles can
    gsap.from("#circle", {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 1%',
        end: 'bottom 1%',
        scrub: 2,
      },
      scale: 0,
    });

    gsap.from("#Arrow_1", {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 1%',
        end: 'bottom 1%',
        scrub: 2,
      },
      x: 1000,
      autoAlpha: 0,
    });

    gsap.from("#descriptor_1_text", {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 1%',
        end: 'bottom 1%',
        scrub: 2,
      },
      x: 2000,
      autoAlpha: 0,
    });

    gsap.from("#descriptor_2_text", {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 1%',
        end: 'bottom 1%',
        scrub: 2,
      },
      x: -2000,
      autoAlpha: 0,
    });

    gsap.from("#Arrow_2", {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 1%',
        end: 'bottom 1%',
        scrub: true,
      },
      x: -1000,
      zIndex: 10,
    })

    gsap.from(".chip", {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top 1%',
        end: 'bottom 1%',
        scrub: 2,
        
      },
      x: -1000,
      autoAlpha: 0,
    }
  )

    gsap.to(
      "#chips",{
        x: -20,
        y: 20,
        repeat: -1,
        yoyoEase: true,
        duration: 3,
      }
    )
  })


  return (
    <div id = 'App' style={{backgroundImage: `linear-gradient(${Pringles_Switcher[currentCan].colors}`}}>
      <Hero flavour = {Pringles_Switcher[currentCan].flavour} description = {Pringles_Switcher[currentCan].description}>
    {/* create an svg element with a path element that will be used to animate the canvas */}
    <svg width="100vh" height="100vh" xmlns="http://www.w3.org/2000/svg" style={{ "position": "absolute", "top": '0px'}}>
      <path d="M 750 0 Q 650 150 450 200 Q 50 350 0 650" 
        fill="none" 
        stroke="blue" 
        strokeWidth="0"
        id = "path"
        height={100}
         />
    </svg>
        <div id = 'arrows'>
          <div id = 'arrow-left' onClick={()=> setCurrentCan((currentCan + 1) % Pringles_Switcher.length)}>

          </div>

          <div id = 'arrow-right' onClick={()=> setCurrentCan((currentCan - 1 + Pringles_Switcher.length) % Pringles_Switcher.length)}>
        
          </div>
        </div>
          <PringlesLoader>
            <Component transition = {inTransition} transit = {transitState} finished = {finishedTransition} />
          </PringlesLoader>
      </Hero>
      <Body/>
      <FunFacts/>
      {/*<All />*/}

      <Additional/>
      {/*<Can_Preview/>*/}
      <footer style={{"background-color": "#f8f8f8", "padding": "20px","text-align": "center", "font-size": "14px", "color": "#555"}}>
        <p>
          This website is purely a fan-made project and has no affiliation with Pringles® or its parent company, Kellogg's. 
          All trademarks, logos, and brand names are the property of their respective owners.
        </p>
        <p>© 2024 YourWebsiteName. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App

//for the futuer, create a new forward ref component that will be used to animate the particles and figure out the documentations for the forward ref component