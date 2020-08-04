import PackageDeal from "./PackageDeal";

const Packages = () => {
  return (
    <div className="bg-blue-400 mt-4 p-4">
      <div>
        <h1 className="text-3xl font-bold">My Packages</h1>
        <p className="lg:w-10/12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, porro
          exercitationem consequuntur velit quo nihil maxime, incidunt quibusdam
          libero quae sit? Nisi repudiandae dolor consectetur quisquam eaque
          harum excepturi expedita.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:gap-8 gap-4 mx-4 sm:mx-0 lg:mx-6 xl:mx-64 mt-8">
        <PackageDeal
          title={"Basic Web Package"}
          originalPrice={"$299"}
          price={"$199"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?"
          }
          details={[
            "2 Stock Images",
            "3 Page Website",
            // "3 Page Website",
            // "3 Page Website",
          ]}
        />

        <PackageDeal
          title={"Startup Web Package"}
          originalPrice={"$596"}
          price={"$399"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?"
          }
          details={["5 Stock Photos", "5 Page Website"]}
        />

        <PackageDeal
          title={"Startup Web Package"}
          originalPrice={"$1398"}
          price={"$699"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptates?"
          }
          details={["5 Stock Photos", "5 Page Website"]}
        />
      </div>
    </div>
  );
};

export default Packages;
