import Button from "./common/Button";

const PackageDeal = ({ item: { title, was, is, description, includes } }) => {
  return (
    <div className="w-full sm:w-4/12 flex">
      <div className="bg-white text-center rounded px-4 sm:px-2 xl:px-8 py-2 xl:py-4 mt-12 mx-12 sm:mx-2 xl:mx-10 shadow-xl flex flex-col justify-between">
        <h2 className="text-2xl py-3">{title}</h2>
        <p className="line-through">{`$${was}`}</p>
        <p className=" text-3xl font-bold py-1">{`$${is}`}</p>
        <p className="py-1">{description}</p>

        <Button className={"m-3"}>Order Now</Button>

        {/* {includes &&
        includes.map((detail) => {
          return (
            <p className="pb-2" key={detail}>
              {detail}
            </p>
          );
        })} */}

        <div>
          {includes
            .replace(/\s/g, "")
            .split(",")
            .map((detail) => {
              return <p className="pb-2">{detail}</p>;
            })}
          {/* {console.log(
            'includes.replace(/s/g, "").split(",")',
            includes.replace(/\s/g, "").split(",")
          )} */}
        </div>

        <hr />
        <div className="flex sm:flex-col lg:flex-row justify-center items-center py-2">
          <p>Live Chat</p>
          <p>(555) 555-5555</p>
        </div>
      </div>
    </div>
  );
};

export default PackageDeal;
