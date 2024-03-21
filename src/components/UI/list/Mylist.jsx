import React from "react";
import cl from './Mylist.module.css'


const Mylist = ({list, title}) => {
  
  return (
    <div>
      <h2>{title}</h2>
      <div className={cl.list__wrapper}>
      
        {list.map((item) => (
          <span
            key={[item]}
            className={cl.list__item}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
    
  )
}
export default Mylist;