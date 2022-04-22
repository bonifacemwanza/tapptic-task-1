import React, { useState, useContext } from "react"
import { Context } from "../Contexts/Context";
import axios from 'axios';

const SenderForm = () => {
    const { set_step } = useContext(Context)

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        message: ""
    })

    const [username_error, set_username_error] = useState("")
    const [password_error, set_password_error] = useState("")
    const [message_error, set_message_error] = useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData({
          ...formData,
          [e.target.name]: value
        });
    }
    const handleValidation = () =>{
        set_username_error("")
        set_password_error("")
        set_message_error("")

        if (!formData.username) set_username_error("* Username Cant be Empty")
        if (!formData.password) set_password_error("* Password Cant be Empty")
        if (!formData.message) set_message_error("* Message Cant be Empty")
        return (!formData.username || !formData.password || !formData.message )? false : true
    }

    const handleSubmit = (e)  => {
        e.preventDefault();
        if (handleValidation()) {
            const postDataObject = {
                username: formData.username,
                password: formData.password,
                message: formData.message
            }     
            set_step('loadingMessage')
            axios.post('https://post-taptic.free.beeceptor.com/api/post', postDataObject )
                .then(function (response) {        
                    if(response.status === 200){  
                        set_step('successMessage');
                    } else {
                        set_step('failureMessage');
                    }
                    setFormData({
                        username: "",
                        password: "",
                        message: ""
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }

    return (
        <form data-testid="form" className="form" onSubmit={handleSubmit}>
            <p className='form_header'>Tapptic Form</p>
            <label data-testid="username_test" htmlFor="username">Username <span className="error_message">{username_error}</span></label>
            <input
                type="text"
                name="username"
                data-testid="username"
                value={formData.username}
                id="username"
                onChange={handleChange}
            />

            <label data-testid="password_test" htmlFor="password">Password <span className="error_message">{password_error}</span></label>
            <input
                name="password"
                type="password"
                data-testid="password"
                value={formData.password}
                id="password"
                onChange={handleChange}
            />

            <label data-testid="message_test" htmlFor="message">Message <span className="error_message">{message_error}</span></label>
            <textarea
                name="message"
                data-testid="message"
                value={formData.message}
                id="message"
                onChange={handleChange}
            ></textarea>

            <button className='submit' type="submit"> Send </button>
        </form>
    );
}

export default SenderForm;