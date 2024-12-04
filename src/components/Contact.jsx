import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

function Contact() {
    const [user, setUser] = useState({
        Name:'', email:'', subject:'', Message:''
    })

    const data =  (e)=>{
         setUser(e.target.value)
         setUser(e.target.name)
    }

    const send = async (e)=>{
        const {Name, email, subject , Message} = user
        e.preventDefault()
        const option = {
            method:'POST',
            headers:{
                'contact-type': 'application/json'
            },
            body: JSON.stringify({
                Name, email, subject , Message
            })
        }

        const send  = await fetch(
            'https://react-ecommerce-contact-7eb3b-default-rtdb.firebaseio.com//Message.json' , option)

            if(send){
                alert('Message Send')
            }else{
                alert('Error Ocurred Message Send Failed')
            }
    }
  return (
    <ContactSection>
    <div className="contact">
        <div className="container">
            <div className="form">
                <h2>#Contact</h2>
                <form method='POST'>
                    <div className="box">
                        <div className="label">
                            <h4>Name</h4>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Name' value={user.Name} name='Name' onChange={data} />
                        </div>
                    </div>

                    <div className="box">
                        <div className="label">
                            <h4>E-mail</h4>
                        </div>
                        <div className="input">
                            <input type="E-mail" placeholder='E-mail' value={user.email} name='email' />
                        </div>
                    </div>

                    <div className="box">
                        <div className="label">
                            <h4>Subject</h4>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Subject' value={user.subject} name='subject' />
                        </div>
                    </div>

                    <div className="box">
                        <div className="label">
                            <h4>Message</h4>
                        </div>
                        <div className="input">
                            <textarea value={user.Message} name="Message" id=""  placeholder='Message'></textarea>
                        </div>
                    </div>
                    <button onClick={send} type='submit'>Send</button>


                </form>
            </div>
        </div>
    </div>
    
    </ContactSection>
  )
}

export default Contact

const ContactSection = styled.section`
.contact{
    padding: 20px 40px;
    width:100%;
}
.contact .container{
    padding:10px 20px;
    max-width: 100%;
}
.contact .container .form{
    width:500px;
    background:#f6f6f6;
    padding:20px 30px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 3px 8px;
    margin:0 auto;
    border-top:4.5px solid #fed700;
    border-radius: 5px;
}
.contact .container .form h2{
    color:#cd1e76;
    text-transform:uppercase;
    font-size:18px;
    letter-spacing:1px;
    font-weight:600;
}
.contact .container .form .box{
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
}
.contact .container .form .label h4{
    color:#232323;
    margin-left: #232323;
    font-size:14px;
    font-weight:600;
    margin-top:8px;
}
.contact .container .form .input input{
    margin-right: 70px;
    border:none;
    outline:none;
    background:none;
    border-bottom: 2px solid #232323;
    padding: 10px 20px;
}
.contact .container .form .input textarea{
    margin-right: 70px;
    border:none;
    outline:none;
    background:none;
    border-bottom: 2px solid #232323;
    padding: 0px 20px;
    resize:none; 

}
.form button{
    margin-top:20px;
    margin-left: 30px;
    padding: 10px 30px;
    color:#232323;
    outline:none;
    border:none;
    background: none;
    background: #fed700;
    font-weight:650;
    cursor: pointer;
}

`