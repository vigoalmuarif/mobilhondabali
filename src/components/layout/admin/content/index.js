
  
  const ContentAdmin = ({ children, title = "", subtitle }) => {
    return (
      <div className="p-4 sm:ml-64">
        <div className="mt-14">
          <div className="mb-8">
            <h3 className=" mb-1.5">{title}</h3>
            <p className="text-lg">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    );
  };
  
  export default ContentAdmin;
  