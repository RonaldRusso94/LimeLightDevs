import Button from "./common/Button";

const PackageDeal = ({ item: { title, was, is, description, includes } }) => {
  return (
    <div className="bg-white text-center rounded px-4 sm:px-2 xl:px-8 py-2 flex flex-col justify-between shadow-xl max-w-xs h-full">
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
      <div className="">
        <hr />
        <div className="flex sm:flex-col lg:flex-row justify-around py-2">
          <p>Live Chat</p>
          <p>(555) 555-5555</p>
        </div>
      </div>
    </div>
  );
};

export default PackageDeal;
