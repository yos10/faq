const Card = ({ children, href, hover, flex }) => {
  return (
    <div className={flex ? "flex" : ""}>
      <a href={href}>
        {hover ?
          <div className="bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50 transition duration-300">
            {children}
          </div>
          :
          <div className="bg-white rounded-lg shadow cursor-pointer">
            {children}
          </div>
        }
      </a>
    </div>
  );
};

export default Card;
