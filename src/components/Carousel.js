import React from 'react';

export default function Carousel() {
    return (
        <div className="container my-4">
            <div id="carouselExampleFade" className="carousel slide carousel-fade mx-auto" data-bs-ride="carousel" style={{ borderRadius: '15px', overflow: 'hidden' }}>

                <div className="carousel-inner">
                    <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ zIndex: "9", top: "20%", bottom: "auto" }}>
                        <form className="d-flex w-75">
                            <input className="form-control me-2 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img src="/assets/food1.png" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Food 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/food2.png" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Food 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/food3.png" className="d-block w-100" style={{ height: '400px', objectFit: 'cover' }} alt="Food 3" />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
