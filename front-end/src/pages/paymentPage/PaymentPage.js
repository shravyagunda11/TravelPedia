//importing the values 
import React from 'react'
import { Header } from '../../components/headerListComp/Header'
import { NavBar } from '../../components/navBarComp/NavBar'
import { PaymentDetail } from '../../components/paymentDetail/PaymentDetail'
//Paymnets pages 
export const PaymentPage = () => {
    
  return (
    <div>
        <NavBar></NavBar>
        <Header type="list"></Header>
        <PaymentDetail></PaymentDetail>
    </div>
  )
}
