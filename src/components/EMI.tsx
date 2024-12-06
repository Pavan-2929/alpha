import React from 'react'
import { RangeSlider } from './ui/slider'

const EMI = () => {
  return (
      <div>
          <div>
              <p>Check Eligibility</p>
          </div>
          <div>
              <p>EMI Calculater</p>
          </div>
          <div>
              <p>Loan Amount</p>
              <RangeSlider defaultValue={[100000]} max={999999} step={1000} />
          </div>
          <div>
              <p>Down Payment</p>
              <RangeSlider defaultValue={[10000]} max={100000} step={100} />
          </div>
          <div>
              <p>Duration of Loan</p>
              <RangeSlider defaultValue={[12]} max={120} step={6} />
          </div>
      </div>
  )
}

export default EMI
