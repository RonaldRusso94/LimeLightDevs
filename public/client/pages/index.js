import Carousel from "../components/Carousel";
import ProjectCarousal from "../components/ProjectCarousal";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import Button from "../components/common/Button";
import PackageDeal from "../components/PackageDeal";
import Packages from "../components/Packages";
import ContactFormSecondary from "../components/ContactFormSeconday";
import ContactFormPrimary from "../components/ContactFormPrimary";
import PortfolioGrid from "../components/PortfolioGrid";
import ImageGrid from "../components/ImageGrid";

const images = [
    {
        type: "image",
        value: "https://via.placeholder.com/300x450"
    },
    {
        type: "image",
        value: "https://via.placeholder.com/400x450"
    },
    {
        type: "image",
        value: "https://via.placeholder.com/300x450"
    },
    {
        type: "image",
        value: "https://via.placeholder.com/500x450"
    },
    {
        type: "image",
        value: "https://via.placeholder.com/400x450"
    },
    {
        type: "image",
        value: "https://via.placeholder.com/300x450"
    },
]
class index extends React.Component {
    render() {
        return (
        <Layout>
                Index.js
                <Hero />
                <ContactFormSecondary />
                <Packages />
                <ImageGrid
                    title={"Website"}
                    className="sm:flex-row"
                    description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis enim molestias non quo excepturi."
                    }
                    img={"http://placekitten.com/g/400/200"}
                />
                <ImageGrid
                    className="sm:flex-row-reverse"
                    title={"Mobile Apps"}
                    description={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facilis enim molestias non quo excepturi."
                    }
                    img={"http://placekitten.com/g/400/200"}
                />
                <ContactFormPrimary />
                <div className="my-6 hide-phone">
                <PortfolioGrid images={images} />
                </div>
                <div className="block mb-16 sm:hidden">
                <ProjectCarousal slideValues={images} numberPerSlide="1" />
            </div>
      </Layout>
    );
  }
}

export default index;
