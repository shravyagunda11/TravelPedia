import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./PaymentDetail.scss"

//Exporing the html structure for payments details 
export const PaymentDetail = () => {
    const navigate =useNavigate();
    const homepage = () =>{
        alert("Successfully Completed the Payment !!!");
        navigate("/",{})
    }
    //retruring the html components
  return (
    <div className='contianerform'>
        <form action='#' method='post' className='formpay' onSubmit={homepage}>
            <section>
                <label className='label1' for="cc-number">Card number</label>
                <input name='cc-number' className='cc-number' id='cc-number'
                autocomplete="cc-number" inputmode="numeric" pattern="[\d ]{10,30}" required
                onInvalid="this.setCustomValidity('Enter User Name Here')"
                ></input>
            </section>
            <section>
                <label className='label2'>Name on card</label>
                <input autoComplete='cc-name' pattern="[\p{L} \-\.]+"></input>
            </section>
            <section>
                <label className='label3'>Expiry</label>
                <input maxlength="5" minLength="5" placeholder="MM/YY" name="cc-exp" autocomplete="cc-exp" required></input>
            </section>
            <section>
                    <label className='label4'>Secutiry code</label>
                    <input name="cc-csc" autocomplete="cc-csc" inputmode="numeric" minLength="3" maxlength="3" required></input>
                    <div className='info'>Last 3 digits on back of card</div>
            </section>
            <button className="complete-payment">Complete payment</button>
        </form>

    </div>
  )
}
