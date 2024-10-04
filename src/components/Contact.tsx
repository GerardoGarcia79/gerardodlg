import { faAddressBook } from "@fortawesome/free-solid-svg-icons/faAddressBook"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MdEmail } from "react-icons/md";
import Form from "./Form";



const Contact = () => {
  return (
    <div id="contact" className="my-5">
        <div className="md:flex flex-col justify-center items-center">
          <h2 className="font-semibold text-4xl mb-5"><FontAwesomeIcon icon={faAddressBook} color="#00a8e8" />&nbsp;
          Contact</h2>
          <div className="md:w-[60%]">
              <div className="mb-4 md:mb-0">
                  <p>I'm currently available to work, so feel free to send me a message. You can contact me anytime.</p>
                  <p className="flex items-center md:justify-center my-5"><MdEmail size='25px' className="mr-4" />gerardodlg.dev@gmail.com</p>
              </div>
              <Form />
          </div>
        </div>
    </div>
  )
}

export default Contact