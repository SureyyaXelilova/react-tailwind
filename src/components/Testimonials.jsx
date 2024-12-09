import { testimonials } from "../constants";

export const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:txt-6xl text-center my-10 lg:my-20 dark:text-white">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 text-md font-thin">
              <p className="dark:text-white">{item.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  alt={item.user}
                  src={item.image}
                />
                <div>
                  <h6 className="dark:text-white">{item.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-500">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
