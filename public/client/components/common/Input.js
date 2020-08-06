const Input = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) => (
    <div>
      <input type="text" {...field} {...props} className="block my-5 mx-10 w-64 bg-transparent border-b border-gray-500 py-2"/>
      {touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
  );

export default Input;
