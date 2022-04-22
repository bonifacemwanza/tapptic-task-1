import React from "react"
import { BiLoaderCircle } from "react-icons/bi"

function LoadingScreen() {
    return (
        <div className='responce_screen'>
        <div>
          <div className='loader'>
            <BiLoaderCircle />
          </div>
          <p>Please Wait</p>
        </div>
      </div>
    );
}

export default LoadingScreen;