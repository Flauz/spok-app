import React from 'react'

const ViewHome = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://static.wixstatic.com/media/f67050_330bb5c1cac9409295d153ccb42a1576~mv2.png/v1/fill/w_980,h_603,al_c,q_90,usm_0.66_1.00_0.01/f67050_330bb5c1cac9409295d153ccb42a1576~mv2.webp" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://static.wixstatic.com/media/f67050_7022f12432214d34b0153ae46d290f6e~mv2.jpg/v1/fill/w_980,h_603,al_c,q_85,usm_0.66_1.00_0.01/f67050_7022f12432214d34b0153ae46d290f6e~mv2.webp" class="d-block w-100" alt="..." />
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default ViewHome
