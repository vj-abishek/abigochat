
import React from 'react'
import { NavLink} from "react-router-dom";


export default function MobileHeaderNav() {
        function handleClick(e) {
                // console.log(e.getBoundingClientRect())
               
                // console.log(this.getBoundingClientRect(),"Scuuess in saving..")
        }
        return (
                <div className="mobile_header_original none">
                <ul >
                <li><NavLink to="/create" onClick={handleClick}><i className="material-icons">
        camera
        </i></NavLink></li>
                <li  className="flex_mw"><h5 className="my_font">AbigoChat</h5>   </li>
                <li><NavLink to="/"><i className="material-icons">
        live_tv
        </i></NavLink></li>
                <li><NavLink className="flex_ew" to="/"><i className="material-icons">
        person_add
        </i></NavLink></li>
            </ul>
            </div>
            )
}
