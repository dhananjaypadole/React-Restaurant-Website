import React from 'react'

// dont forget in  parameter we have to give { }
const MenuCard = ({ menuData }) => {
  
  return (
    <>
      <section className='main-card--cointainer'>
        {
          //in map functin we have to do "return" and "<> </>"   
          //dont forget in return if want to write js use { }
          menuData.map((curElement) => {
            const {id,image,name,category,price,description} = curElement
            return (
              <>
                <div className="card-container" key={id}>
                  <div className="card">
                    <div className="card-body">
                      <span className="card-number card-circle subtle">{id}</span>
                      <span className='card-author subtle'>{category}</span>
                      <h2 className="card-title">{name}</h2>
                      <span className="card-description subtle">
                        {description}
                      </span>
                      <div className="card-read">Read</div>
                    </div>
                    <img src={image} alt='image' className='card-media'></img>
                  </div>
                </div>
              </>
            )
          })
        }
      </section>
    </>
  )
}

export default MenuCard
