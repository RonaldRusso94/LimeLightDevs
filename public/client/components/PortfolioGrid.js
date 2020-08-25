import React from "react";

const GridItem = ({ img }) => {
    return <div className="mx-2 my-2">
        <img src={img} className="sm:w-64"/>
    </div>
}

const PortfolioGrid = ({images}) => {
    return <section className="flex flex-wrap content-start lg:mx-20 bg-100">
        {images.map( image => 
            <GridItem img={image.value} />
        )}
    </section>
}

export default PortfolioGrid;
