import React from 'react'

function SelectButton({children, selected, onClick}) {
  return (
    <div className='button' onClick={onClick} style={{
        border: "1px solid gold",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        cursor: "pointer",
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 800 : 500,
        "&:hover":{
            backgroundColor: "gold",
            color: "black"
        }
    }}>
      {children}
    </div>
  )
}

export default SelectButton
