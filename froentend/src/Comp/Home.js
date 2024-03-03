import React from 'react'
import Banner from './Banner'
import Category_card from './Category_card'
import Nav from './Nav'
import Topsell from './Topsell'
function Home() {
  return (
   <div style = {{backgroundColor : 'black', color : 'white', justifyContent : 'center'}}>
    <Banner/>
   <Category_card/>
   <Topsell/>
   </div>
  
   
   
  )
}

export default Home;