import React, { useContext } from "react"
import { Context } from "../Contexts/Context";
import { AiFillCloseCircle } from "react-icons/ai"

function FailureMessage() {
    const { set_step } = useContext(Context)

    return (
        <div data-testid="response_message" className='responce_screen'>
        <div>
          <AiFillCloseCircle className='icon' />
          <p>Message Failed!</p>
          <button className='icon_to_for' onClick={() => set_step('senderForm')}>Go Back</button>
        </div>
      </div>
    );
}

export default FailureMessage;