import React from 'react'
import Menu from './menuApi'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
      <nav className='navbar'>
        <div className="btn-group">
          {/* onClick fakta simple function cha naav det asel should turn in "yellow" in short dont use this. or etc. */}
         
          {
            menuList.map((ele)=>{
                return(
                    <>
                     <button className='btn-group__item' onClick={() => filterItem(ele)}>{ele}</button>
                   
                    </>
                )
               
// console.log(ele);
            })
          }
          
        </div>
      </nav>
    </>
  )
}

export default Navbar
