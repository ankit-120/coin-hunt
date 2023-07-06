import React from 'react'
import './TablePagination.css'

export const exportPage = (page) => {
    return page
}

function TablePagination(props) {

    let active=false;
    let items = [];
    for (let number = 1; number <= props.length; number++) {
        items.push(number);
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <div className='col-12' style={{
                display: "flex",
                justifyContent: "center"
            }}>
                {
                    items.map((item) => (
                        <div style={{
                            backgroundColor:item===props.page?"gold":"black",
                            color:item===props.page?"black":"gold"
                        }} className='paging' key={item}
                            onClick={() => { 
                                props.setPage(item);
                                active =(item===props.page);
                                window.scroll(0, 450) }}>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TablePagination
