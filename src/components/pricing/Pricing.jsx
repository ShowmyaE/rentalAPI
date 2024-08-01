import React from "react"
import Back from "../Common/Back"
import PriceCard from "../Home/Price/PriceCard"
//import img from "../images/pricing.jpg"
import "../Home/Price/price.css"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support'  />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing