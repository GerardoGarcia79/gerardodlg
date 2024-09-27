import { useRef, useState } from "react";

const Form = () => {
    const [message, setMessage] = useState('');
    const [error, setError] = useState('')
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const textRef = useRef<HTMLTextAreaElement>(null)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Sending...');
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "813b7648-e4f8-442d-b4e1-a0c63e824c89");
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then(() => {
      setMessage('Email sent successfully')
      if(nameRef.current && emailRef.current && textRef.current) {
          nameRef.current.value = ''
          emailRef.current.value = ''
          textRef.current.value = ''
      }
    })
    .catch(e => {
      setError(e.message + ', please try again')
      setMessage('')
    })
  }

  return (
    <div>
    <form onSubmit={ onSubmit }>
        <p className="text-white mb-2">Your Name</p>
        <input type="text" ref={nameRef} name="name" required placeholder="Enter your name" className="w-full p-3 rounded-md bg-[#303030] text-white focus:outline-none focus:border-[#00a8e8] focus:ring-1 focus:ring-[#00a8e8]"/>
        <p className="text-white my-2">Your Email</p>
        <input type="email" ref={emailRef} name="email" required placeholder="Enter your email" className="w-full p-3 rounded-md bg-[#303030] text-white focus:outline-none focus:border-[#00a8e8] focus:ring-1 focus:ring-[#00a8e8]"/>
        <p className="text-white my-2">Write your message here</p>
        <textarea name="message" ref={textRef} required placeholder="Enter your message" className="w-full p-3 rounded-md bg-[#303030] text-white h-[150px] focus:outline-none focus:border-[#00a8e8] focus:ring-1 focus:ring-[#00a8e8]"></textarea>
        <button className="rounded-full bg-[#00a8e8] py-4 px-8 text-lg mt-3 text-white hover:bg-[#0081b4] transition ease-out hover:scale-110 duration-300" type="submit">Submit Now</button>
    </form>
    {error && <p className="text-white mt-3 ">{error}</p>}
    {message && <p className="text-white mt-3 ">{message}</p>}
    </div>
  )
}

export default Form