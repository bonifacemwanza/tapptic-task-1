import React, { useContext } from "react"
import { Context } from "../Contexts/Context";
import { AiFillCheckCircle } from "react-icons/ai"

function ResponseMessage() {
    const { set_step } = useContext(Context)

    return (
        <div data-testid="response_message" className='responce_screen'>
        <div>
          <AiFillCheckCircle className='icon' />
          <p>Message Sent!</p>
          <button className='icon_to_for' onClick={() => set_step('senderForm')}>Go Back</button>
        </div>
      </div>
    );
}

export default ResponseMessage;