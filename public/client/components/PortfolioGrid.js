import React from "react";

const GridItem = ({ img }) => {
    return <div>
        <img src={img} />
    </div>
}

const PortfolioGrid = () => {
    return <section className="flex mx-20 bg-100">
        <GridItem img="https://via.placeholder.com/300x450" />
        <GridItem img="https://via.placeholder.com/300x450" />
        <GridItem img="https://via.placeholder.com/300x450" />
        <GridItem img="https://via.placeholder.com/300x450" />
    </section>
}

export default PortfolioGrid;
