//imporing the values 
import React from 'react'
import { Featured } from '../../components/featuredCities/Featured.js'
import { FeaturedProperty } from '../../components/featuredPorperties/FeaturedProperty.js'
import { Footer } from '../../components/footer/Footer.js'
import { Header } from '../../components/headerListComp/Header.js'
import { NavBar } from '../../components/navBarComp/NavBar.js'
import { PopertyList } from '../../components/propertyList/PropertyList.js'
import { MailList } from '../../components/mailList/MailList.js'

import "./Home.scss"
// html rendering the vlaue s
export const Home = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Header></Header>
        <div className='container'>
        <Featured></Featured>
        <h1 className='title1'>Browse by property type</h1>
        <PopertyList></PopertyList>
        <h1 className='title2'>Properties guests love</h1>
        <FeaturedProperty></FeaturedProperty>
        <MailList></MailList>
        <Footer></Footer>
        </div>
    </div>
  )
}
