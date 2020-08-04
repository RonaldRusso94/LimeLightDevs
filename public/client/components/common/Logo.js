const Logo = (props) => {
  return (
    <div className="flex cursor-pointer">
      <img
        src="/static/images/logo-0.png"
        alt="Limelight Logo"
        className="h-10"
      />
      <span className="ml-3 mt-1 text-xl md:flex hidden font-body font-semibold tracking-wide justify-center items-center">
        {"<limelight />"}
      </span>
    </div>
  );
};

export default Logo;
