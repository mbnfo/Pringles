import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const FunFacts = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.from('#first',{
                    scrollTrigger: {
                    trigger : '#section',
                    start: 'top 100%',
                    end: 'bottom 100%',
                    scrub: true
                    },
                x: 1000
            }
        )
        gsap.from('#second',{
            scrollTrigger: {
                trigger : '#section',
                start: 'top 100%',
                end: 'bottom 100%',
                scrub: true
            },
            x: -1000
        })
        gsap.from('#third',{
                    scrollTrigger: {
                    trigger : '#section',
                    start: 'top 100%',
                    end: 'bottom 100%',
                    scrub: true
                    },
                x: 1100
            }
        )
        gsap.from('#fourth',{
            scrollTrigger: {
                trigger : '#section',
                start: 'top 100%',
                end: 'bottom 100%',
                scrub: true
            },
            x: -1100
        })
    })

  return (
    <section id = 'section'
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px',
        fontFamily: "Coiny, system-ui",
      }}
    >
      <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Fun Facts About Pringles</h2>
      <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'center' }}>
        <li style={{ margin: '10px 0', fontSize: '1.5rem' }} id='first'>
          🥔 Did you know Pringles aren't actually potato chips? They're potato *crisps*!
        </li>
        <li style={{ margin: '10px 0', fontSize: '1.5rem' }} id = 'second'>
          📏 A single Pringles can is 11 inches tall—perfect for stacking!
        </li>
        <li style={{ margin: '10px 0', fontSize: '1.5rem' }} id = 'third'>
          🌍 Pringles are sold in over 140 countries worldwide.
        </li>
        <li style={{ margin: '10px 0', fontSize: '1.5rem' }} id = 'fourth'>
          💡 The iconic shape is called a "Hyperbolic Paraboloid"!
        </li>
      </ul>
    </section>
  )
}

export default FunFacts