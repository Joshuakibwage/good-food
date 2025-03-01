import {FaCaretDown} from "react-icons/fa";
import {FaUser} from "react-icons/fa";

const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/"
  },
  {
    id: 2,
    name: "About",
    link: "#"
  },
  {
    id: 3,
    name: "Contact",
    link: "#"
  },
]

const dropDownLinks = [
  {
    id: 1,
    name: "Vegetable",
    link: '#'
  },
  {
    id: 1,
    name: "Fruits",
    link: '#'
  },
  {
    id: 1,
    name: "Grains",
    link: '#'
  },
]

const Navbar = () => {
  return (
    <nav>
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div>
          <img 
            src="src/assets/logo.svg" 
            alt="logo" 
          />
        </div>

        <div className="">
          <ul className="flex gap-10 items-center">
            {/* nav links section */}
            {
              navLinks.map((link) => (
                <li>
                  <a 
                    href={link.link} 
                    key={link.id} 
                    className="hover:text-primary delay-200 ease-in-out transition-colors "
                  >
                    {link.name}
                  </a>
                </li>
              ))
            }

            {/* simple drop down menu with links */}
            <li className="relative group">
              <a href="" className="flex items-center hover:text-primary delay-200 ease-in-out 
              transition-colors group ">
                Categories
                <span>
                  <FaCaretDown 
                    size={20} 
                    className="text-primary ml-2 group-hover:rotate-180 duration-300"
                  />
                </span>
              </a>

              {/* drop down section */}
              <div className="absolute z-[999] hidden group-hover:block w-[200px] bg-white text-black 
              shadow-md px-2 py-3 ">
                <ul className="space-y-2">
                  {
                    dropDownLinks.map((data) => (
                      <li>
                        <a 
                          href={data.link}
                          key={data.id}
                          className="hover:bg-primary/20 p-9 py-1 rounded-xl"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>

            </li>
            {/* login button section */}

            <li>
              <button className="flex items-center gap-2 bg-secondary text-xl h-[40px]
              px-5 text-white py-2 hover:scale-105 transition-all ease-in-out delay-200 cursor-pointer">
                <FaUser />
                My Account
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar