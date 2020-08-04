import { Formik } from "formik";

const Form = () => {
  // * TODO: needs refactoring soon
  // * TODO: add proptypes
  return (
    <Formik
      className="flex"
      initialValues={{ query: "" }}
      onSubmit={(values) => {
        console.log("Searched!");
        console.log(`Query: ${values.query}`);
      }}
    >
      {({ values, handleChange, handleSubmit }) => {
        return (
          <form
            className="text-gray-800 flex items-center justify-center ml-4  "
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === "enter") handleSubmit();
            }}
          >
            <div className="z-10 -mr-8">
              <svg className="w-6 h-6 fill-current text-gray-600">
                <use xlinkHref="/static/sprite.svg#icon-magnifying-glass"></use>
              </svg>
            </div>
            <input
              type="text"
              className="w-full px-4 pl-10 py-2 rounded bg-gray-300 placeholder-opacity-75 placeholder-gray-800 border-none"
              name="query"
              onChange={handleChange}
              value={values.query}
              placeholder="Search our website"
            />
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
