import React from 'react'
import { jsx } from '@emotion/react'
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import ArrowForward from "@material-ui/icons/ArrowForwardIos"
import './Arrow.css'

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    className = {direction === 'right' ? 'forward' : 'back'}
  >
    {direction === 'right' ? <img src={ArrowForward} alt='forward arrow'/> : <img src={ArrowBack} alt='back arrow' />}
  </div>
)

export default Arrow