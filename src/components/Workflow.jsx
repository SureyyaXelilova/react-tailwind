import CodeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react";

export const Workflow = () => {
  return (
    <div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide dark:text-white">
        Accelerate {""}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding Workflow
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-20">
        <div className="p-2 w-full lg:w-1/2">
          <img src={CodeImg} alt="Code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
