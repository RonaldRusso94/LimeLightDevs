import ProjectCarousal from "../components/ProjectCarousal";

class carousalExample extends React.Component {
  render() {
    const images = [
        {
            "type": "image", 
            "value": "https://via.placeholder.com/100x100"
        },
        {
            "type": "image", 
            "value": "https://via.placeholder.com/100x101"
        },
        {
            "type": "image", 
            "value": "https://via.placeholder.com/100x102"
        },
        {
            "type": "image", 
            "value": "https://via.placeholder.com/100x103"
        },
        {
            "type": "image", 
            "value": "https://via.placeholder.com/100x104"
        },
        {
            "type": "image", 
            "value": "https://via.placeholder.com/100x105"
        },
    ]
    const text = [
        {
            "type": "text", 
            "value": "1"
        },
        {
            "type": "text", 
            "value": "2"
        },
        {
            "type": "text", 
            "value": "3"
        },
        {
            "type": "text", 
            "value": "4"
        },
        {
            "type": "text", 
            "value": "5"
        },
        {
            "type": "text", 
            "value": "6"
        },
    ]
  
    return (
      <div className="centerAlign">
        <div className=" text-center w-1/2 bg-red-100 px-4">
          <h1 className=" text-4xl">Short Striking Bold Text</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, itaque?
          </p>
        </div>
        <div className="w-4/5">
            <ProjectCarousal slideValues={images} numberPerSlide="5" 
              onMouseEnter={() => console.log("test")}
              onMouseLeave={() => console.log("test")}
              onClick={() => console.log("test")}
            />
        </div>
        <div className="w-4/5">
            <ProjectCarousal slideValues={text} numberPerSlide="5" 
              onMouseEnter={() => console.log("test")}
              onMouseLeave={() => console.log("test")}
              onClick={() => console.log("test")}
            />
        </div>

      </div>
    );
  }
}

export default carousalExample;
