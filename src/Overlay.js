import { motion } from 'framer-motion'
import { Children } from 'react'
import { useStore } from './store'

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.05 }
  }
}

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 }
}

function List({ children, open }) {
  return (
    <motion.ul variants={container} initial="hidden" animate={open ? 'show' : 'hidden'}>
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  )
}

export function Overlay() {
  const state = useStore()
  return (
    <>
      <div className="info">
        <h1>911</h1>
        <List open={state.open}>
          <h3>Carreira 4</h3>
          <h3>GTS</h3>
          <h3>
            <span className="accent">PORSCHE</span>
          </h3>
          <h4>Sports Car</h4>
          <p className="price">$145,350</p>
          <p>
            Experience ultimate driving pleasure with the Porsche 911 Carrera 4 GTS. A symphony of power and precision, boasting a 450hp
            engine, AWD traction, and iconic design that defines sports car perfection. Unleash exhilaration on every curve.
          </p>
        </List>
      </div>
    </>
  )
}
