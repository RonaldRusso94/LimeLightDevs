import Button from "./common/Button";

const PackageDeal = ({ title, originalPrice, price, description, details }) => {
  return (
    <div className="bg-white text-center rounded px-4 sm:px-2 xl:px-8 py-2 flex flex-col justify-between shadow-xl max-w-xs">
      <h2 className="text-2xl py-3">{title}</h2>
      <p className="line-through">{`$${originalPrice}`}</p>
      <p className=" text-3xl font-bold py-1">{`$${price}`}</p>
      <p className="py-1">{description}</p>

      <Button className={"m-3"}>Order Now</Button>

      {details &&
        details.map((detail) => {
          return (
            <p className="pb-2" key={detail}>
              {detail}
            </p>
          );
        })}
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
