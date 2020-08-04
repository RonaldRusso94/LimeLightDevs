import Button from "./common/Button";

const PackageDeal = ({ title, originalPrice, price, description, details }) => {
  return (
    <div className="bg-white text-center rounded sm:px-2 px-4 py-2 flex flex-col justify-between">
      <h2 className="text-2xl ">{title}</h2>
      <p className="line-through">{originalPrice}</p>
      <p className=" text-3xl font-bold ">{price}</p>
      <p className="">{description}</p>

      <Button className={"m-4"}>Order Now</Button>

      {details &&
        details.map((detail) => {
          return (
            <p className="" key={detail}>
              {detail}
            </p>
          );
        })}
      <div className="">
        <hr />
        <div className="flex justify-around">
          <p>Live Chat</p>
          <p>(555) 555-5555</p>
        </div>
      </div>
    </div>
  );
};

export default PackageDeal;
