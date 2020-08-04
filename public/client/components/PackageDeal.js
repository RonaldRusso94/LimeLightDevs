import Button from "./common/Button";

const PackageDeal = ({ title, originalPrice, price, description, details }) => {
  return (
    <div className="bg-white text-center rounded sm:px-2 px-4 ">
      <h2 className="text-2xl mb-2 mt-6">{title}</h2>
      <p className="line-through">{originalPrice}</p>
      <p className=" text-3xl font-bold mb-4">{price}</p>
      <p className="mb-6">{description}</p>

      <Button className={"m-4"}>Order Now</Button>

      {details &&
        details.map((detail) => {
          return (
            <p className="mt-2" key={detail}>
              {detail}
            </p>
          );
        })}
      <div className="mt-4">
        <hr />
        <div className="flex justify-around py-4">
          <p>Live Chat</p>
          <p>(555) 555-5555</p>
        </div>
      </div>
    </div>
  );
};

export default PackageDeal;
