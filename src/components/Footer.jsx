import {IoLocationSharp} from "react-icons/io5"; 
import {MdEmail} from "react-icons/md"
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white mt-20 ">
      <div className="container mx-auto bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
        {/* contact section */}
        <div>
          <h1 className="py-10 text-3xl font-bold text-yellow text-center">Contact Us</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white/10
          pb-6 ">
            {/* contact section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl" />
              </div>
              <p>
                #92, 3rd Main, Virgo Nagar, Post, <br /> Sagheli , Bangaluru, karnataka 5634892
              </p>
            </div>
            {/* email section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <p>
                 info@goodfood.com
              </p>
              <p>
                hr@goodfood.com
              </p>
            </div>
            {/*  */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <FaPhone className="text-5xl" />
              </div>
              <p>
                 +1 8943 84739 - Sales and Services
              </p>
              <p>
                +2 4859 48492 - Hiring Queries
              </p>
              <p>
                +7 48902 479802 - WhatApp
              </p>
            </div>
          </div>
        </div>
        {/* bottom footer section */}
        <div className="flex justify-between px-4 py-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Good Food. All rights reserved.
          </p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer