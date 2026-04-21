import BgCard from "../ui/bg-Card";
import Form from "next/form";
function ContactUs() {
  return (
    <div className="text-white w-2/3">
      <p className="text-lg font-bold text-white">Get in touch</p>
      <p className="text-sm text-gray-200 ">
        Fill the form or directly dm me on{" "}
        <a href="https://www.linkedin.com/in/ayush215mb" target="_blank">
          <span className="text-sm hover:font-bold text-gray-200 underline hover:text-white">
            LinkedIn
          </span>
        </a>
      </p>
      <div className="flex justify-center items-center mt-10">
        <BgCard className="md:w-2xl flex justify-center items-center h-96 w-full ">
          <Form action="" className="">
            <div className="flex flex-col gap-4 ">
              <input
                name="name"
                className="border border-neutral-500 rounded-lg px-3 py-2 md:w-lg w-full focus:outline-none "
                placeholder="Enter your name"
              />
              <input
                name="email"
                className="border border-neutral-500 rounded-lg px-3 py-2 md:w-lg w-full focus:outline-none "
                placeholder="Enter your email"
              />
              <textarea
                name="message"
                className="border border-neutral-500 rounded-lg px-3 py-2 md:w-lg w-full focus:outline-none min-h-24"
                placeholder="Enter your message"
              />
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className=" border border-neutral-500 rounded-lg px-3 py-2 md:w-40 w-26 hover:bg-neutral-700 hover:border-white cursor-pointer hover:scale-105 "
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        </BgCard>
      </div>
    </div>
  );
}

export default ContactUs;
