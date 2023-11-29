import React from 'react'
import {Link} from "react-router-dom";
export const MainLogin = () => {
  return (
    <div>
        <div className="flex flex-row justify-evenly items-center">
            <Link to="/login"><button className="btn btn-ghost btn-lg"> LOGIN AS ADMIN!</button></Link>
            <Link to="/nashalogin"><button className="btn btn-ghost btn-lg"> LOGIN AS NASHA MUKTI KENDRA</button></Link>
        </div>
    </div>
  )
}
