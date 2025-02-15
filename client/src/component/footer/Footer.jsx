import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-300 h-96 flex flex-col items-center justify-center md:w-4/5 md:h-full md:flex md:flex-col md:items-center md:justify-center mt-40">
      <div className="w-full h-full flex flex-col items-center justify-center md:w-4/5 md:h-full md:flex md:flex-col md:items-center md:justify-center">
        <h1 className=" text-center text-4xl font-bold mb-10 md:text-3xl sm:text-xl">Thank You for Your Support</h1>
        <p className="text-lg text-center mb-10 md:text-base --mobile:text-red-500">Your donation will help us to provide education to children who need it most.</p>
        <div className="flex items-center gap-4 md:flex md:items-center md:gap-4 md:justify-center">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebook size={30} className="cursor-pointer md:text-2xl" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter size={30} className="cursor-pointer md:text-2xl" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} className="cursor-pointer" />
          </a>
        </div>
        <p className="text-center mt-10 md:text-sm moble:">Copyright 2022, All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
