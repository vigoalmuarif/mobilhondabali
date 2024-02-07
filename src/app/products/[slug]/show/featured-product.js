
  export const FeaturedProduct = ({ title, subTitle, children }) => {
    return (
      <section className="container pt-24">
        <div className="max-w-5xl lg:text-center mx-auto mb-10">
          <h2>{title}</h2>
          <p className="text-lg mt-3">{subTitle}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-y-5 items-start">{children}</div>
      </section>
    );
  };
  
  const Body = ({ heading, content }) => {
    return (
      <div className="flex-col justify-center flex-wrap w-full md:w-6/12 lg:w-3/12 px-4">
        <h6>{heading}</h6>
        <p>{content}</p>
      </div>
    );
  };
  
  FeaturedProduct.Body = Body;
  