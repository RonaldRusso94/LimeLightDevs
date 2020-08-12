import Layout from "../components/layout/Layout";
import ProjectCarousal from "../components/ProjectCarousal";

const portfolio = () => {
  // TODO REPLACE WITH API CALL
  const images = [
    {
      type: "image",
      value: "https://via.placeholder.com/100x100",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x101",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x102",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x103",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x104",
    },
    {
      type: "image",
      value: "https://via.placeholder.com/100x105",
    },
  ];
  const text = [
    {
      type: "text",
      value: "1",
    },
    {
      type: "text",
      value: "2",
    },
    {
      type: "text",
      value: "3",
    },
    {
      type: "text",
      value: "4",
    },
    {
      type: "text",
      value: "5",
    },
    {
      type: "text",
      value: "6",
    },
  ];
  return (
    <Layout>
      <div className="md:mx-8 mx-1 bg-green-400 p-4">
        <ProjectCarousal slideValues={images} numberPerSlide="5" />
        <ProjectCarousal slideValues={text} numberPerSlide="5" />
      </div>
    </Layout>
  );
};

export default portfolio;
