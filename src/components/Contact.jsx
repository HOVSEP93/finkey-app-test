import { Fragment, useRef } from "react";

import Lottie from "lottie-react";

// emailjs
import emailjs from "@emailjs/browser";

// toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../lottie/contact.json";
// import Footer from "../components/Footer";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_USERID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        form.current,
        import.meta.env.VITE_EMAILJS_SERVICEID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("message sent successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("please fill form fields", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );

    e.target.reset();
  };
  return (
    <Fragment>
      {/* <!-- contact --> */}
      <div id="contact" className=" flex mt-10">
        <div className="container mx-auto">
          {/* <!-- top --> */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-5xl font-bold text-PrimaryFocus ">
              REGISTER YOUR INTEREST
            </h1>
            <h1 className="text-3xl text-[#067343]  text-NeutralFocus">
              Reach out to us & we will respond as soon as we can
            </h1>
          </div>
          {/* <!-- bottom --> */}
          <div className="flex justify-center flex-col-reverse md:flex-row  items-center">
            <Lottie
              animationData={contact}
              loop={true}
              autoplay={true}
              className="rounded-lg shadow-md h-full w-full" // Apply additional Tailwind CSS classes
            />

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-5 p-8 flex flex-col gap-5 items-center w-screen "
            >
              <input
                className="p-2 w-full ring-1  rounded-sm  dark:ring-0  outline-none "
                type="text"
                placeholder="Name"
                name="name"
                required
              />
              <input
                className="p-2 w-full ring-1  rounded-sm  dark:ring-0 outline-none"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
              <input
                className="p-2 w-full ring-1  rounded-sm  dark:ring-0 outline-none"
                type="text"
                placeholder="Company"
                name="company"
                required
              />
              <input
                className="p-2 w-full ring-1  rounded-sm  dark:ring-0 outline-none"
                type="number"
                placeholder="Number"
                name="number"
                required
              />
              <textarea
                className="p-2 w-full ring-1  rounded-sm  dark:ring-0 outline-none"
                cols="30"
                rows="10"
                name="message"
                placeholder="Message..."
                required
              ></textarea>
              <button
                type="submit"
                value="Send"
                className="bg-[#012A32] hover:bg-[#AFCE38] transition duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-md shadow-md"
              >
                Submit
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
