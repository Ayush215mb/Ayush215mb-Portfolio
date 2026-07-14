"use client";

import BgCard from "../ui/bg-Card";
import Form from "next/form";
import Customtext from "../ui/CustomText";
import { useState } from "react";
import { toast } from "sonner";
import { isValidEmail } from "@/lib/validateEmail";
function ContactUs() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const onSubmit = async () => {
    const missingFields: string[] = [];

    const serviceID = "service_sidharth197502";
    const templateID = "template_wqffvui";
    const publickey = "sExxs95DqSxynyOcP";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Ayush Yadav",
      message: message,
    };

    try {
      if (!name) missingFields.push("Name");
      if (!email) {
        missingFields.push("Email");
      } else if (!isValidEmail(email)) {
        toast.error("Please enter a valid email address");
        return;
      }
      if (!message) missingFields.push("Message");

      if (missingFields.length > 0) {
        toast.error(
          <span>
            Missing: <strong>{missingFields.join(", ")}</strong>
          </span>,
        );
        return;
      }

      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publickey,
          template_params: templateParams,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      toast.success("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    }
  };
  return (
    <div className="text-white md:w-2/3 w-full">
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
                onChange={(e) => {
                  setName(e.target.value);
                }}
                aria-placeholder="name"
                placeholder="Enter your name"
              />
              <input
                name="email"
                className="border border-neutral-500 rounded-lg px-3 py-2 md:w-lg w-full focus:outline-none "
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                aria-placeholder="email"
                placeholder="Enter your email"
              />
              <textarea
                name="message"
                className="border border-neutral-500 rounded-lg px-3 py-2 md:w-lg w-full focus:outline-none min-h-24"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                aria-placeholder="message"
                placeholder="Enter your message"
              />
              <div className="flex justify-center items-center">
                <button
                  onClick={() => {
                    onSubmit();
                  }}
                  type="button"
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
