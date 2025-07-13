import React from 'react'
import NavBar from '../components/Navbar'
import Card from '../components/card'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'

export default function Home() {
    return (
        <div>
            <NavBar />
            <Carousel />
            <div className="m-3">
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    )
}