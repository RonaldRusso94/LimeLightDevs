const Button = ({ className, children }) => {
  const classList = `${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;

  return <button className={classList}>{children}</button>;
};

export default Button;
