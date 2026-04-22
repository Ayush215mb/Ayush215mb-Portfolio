import BgCard from "../ui/bg-Card";
import Form from "next/form";
import Customtext from "../ui/CustomText";
function ContactUs() {
  return (
    <div className="text-white w-2/3">
      <Customtext heading={true}>Get in touch</Customtext>
      <Customtext>
        Fill the form or directly dm me on{" "}
        <Customtext link={true} href="https://www.linkedin.com/in/ayush215mb">
          LinkedIn
        </Customtext>
      </Customtext>
      <div className="flex justify-center items-center mt-10">
        <BgCard className="md:w-2xl flex justify-center items-center h-96 w-full ">
          <Form action="" className="">
            <div className="flex flex-col gap-4 ">
              <input
                name="name"
                className="border border-neutral-500 rounded-lg px-3 py-2 md:w-lg w-full focus:outline-none "
                aria-placeholder="name"
                placeholder="Enter your name"
              />
              <input
                name="email"
                className="border border-neutral-500 rounded-lg px-3 py-2 md:w-lg w-full focus:outline-none "
                aria-placeholder="email"
                placeholder="Enter your email"
              />
              <textarea
                name="message"
                className="border border-neutral-500 rounded-lg px-3 py-2 md:w-lg w-full focus:outline-none min-h-24"
                aria-placeholder="message"
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
