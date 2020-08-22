import React from "react";

const GridItem = ({ img }) => {
    return <div className="my-2 mx-2">
        <img src={img} className="sm:w-64"/>
    </div>
}

const imageStub = [
    {
        src: "https://via.placeholder.com/300x450"
    },
    {
        src: "https://via.placeholder.com/400x450"
    },
    {
        src: "https://via.placeholder.com/300x450"
    },
    {
        src: "https://via.placeholder.com/500x450"
    },
    {
        src: "https://via.placeholder.com/400x450"
    },
    {
        src: "https://via.placeholder.com/300x450"
    },
]

const PortfolioGrid = (props) => {
    return <section className="flex flex-wrap content-start lg:mx-20 bg-100">
        {imageStub.map( image => 
            <GridItem img={image.src} />
        )}
    </section>
}

export default PortfolioGrid;
