import React from 'react'
import './SidebarRow.css'

function SidebarRow({title, Icon, selected}) {
    return (
        <div className={`sidebarRow ${selected?'sidebarRowSelected': 'none'}`}>
            {Icon}
            <h1 className='sidebarRow__title'>{title}</h1>
        </div>
    )
}

export default SidebarRow
