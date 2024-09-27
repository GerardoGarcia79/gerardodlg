import { faAddressBook } from "@fortawesome/free-solid-svg-icons/faAddressBook"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Form from "./Form";



const Contact = () => {
  return (
    <div id="contact" className="my-5">
        <h2 className="text-white font-semibold text-4xl mb-5"><FontAwesomeIcon icon={faAddressBook} color="#00a8e8" />&nbsp;
        Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-white mb-4 md:mb-0">
                <h3 className=" text-[#00a8e8] font-semibold text-3xl mb-5">Let's talk</h3>
                <p>I'm currently available to work, so feel free to send me a message. You can contact me anytime.</p>
                <p className="flex items-center mt-5"><MdEmail size='25px' className="mr-4" />gerardodlg.dev@gmail.com</p>
                <p className="flex items-center mt-5"><FaPhoneAlt size='25px' className="mr-4" />
                +52 331-873-7793</p>
                <p className="flex items-center mt-5"><FaLocationDot size='25px' className="mr-4" />
                Jal, México</p>
            </div>
            <Form />
        </div>
    </div>
  )
}

export default Contact