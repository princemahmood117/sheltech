
// import { useState } from "react";
// import { FiUser, FiHeart, FiSearch, FiMenu, FiX } from "react-icons/fi";
// import { AnimatePresence, motion } from "framer-motion";
// import logo from '../../assets/logoBg.png'
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const navIcons = [
//     { icon: <FiUser />, label: "Login" , to : '/login' },
//     { icon: <FiHeart />, label: "Favourites", to : '/favourites' },
//     { icon: <FiSearch />, label: "Search" },
//   ];

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-10  bg-black/10 backdrop-blur-sm border-b border-white/10">

//         {/* LEFT LOGO */}
//         <div className="w-[140px] md:w-[200px]">
//           <Link to={'/'} className="flex items-center gap-3">
//           <img src={logo} className="h-18 w-full object-cover" alt="Logo" />
//         </Link>
//         </div>

//         {/* right side icons */}
//         <div className="flex items-center gap-5 text-xl text-white">

//           {navIcons.map((item, index) => (
//             <Link
//             to={item?.to}
//               key={index}
//               className="relative md:p-4 p-2 cursor-pointer overflow-hidden md:text-xl text-sm
//                          before:absolute before:left-[-100%] before:top-0 
//                          before:h-full before:w-full before:bg-gray-50 
//                          before:transition-all before:duration-500 hover:before:left-0
//                          rounded-md hover:text-gray-500 transition-all hover:scale-110"
//               title={item.label}
//             >
//               <span className="relative z-10">{item?.icon}</span>
//             </Link>
//           ))}

//           {/* MENU ICON */}
//           <div
//             onClick={() => setOpen(true)}
//             className="relative md:p-4 p-2 cursor-pointer overflow-hidden md:text-xl text-sm
//                        before:absolute before:left-[-100%] before:top-0 
//                        before:h-full before:w-full before:bg-gray-50
//                        before:transition-all before:duration-300 hover:before:left-0
//                        rounded-md transition-all hover:scale-110 hover:text-gray-500"
//           >
//             {/* <FiMenu /> */}
//             <span className="relative z-10"><FiMenu /></span>
//           </div>
//         </div>
//       </nav>

//       {/* RIGHT SLIDE-IN MENU */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="fixed inset-0 bg-black/50 z-[55]"
//             />
            
//             {/* Menu Panel */}
//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="fixed top-0 right-0 h-screen w-80 bg-white shadow-xl z-[60] p-5"
//             >
//               {/* CLOSE BUTTON */}
//               <div className="flex justify-end text-3xl cursor-pointer mb-5 text-gray-700 hover:text-black transition">
//                 <FiX onClick={() => setOpen(false)} />
//               </div>

//               {/* MENU LIST */}
//               <ul className="text-lg space-y-4 text-gray-800">
//                 <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Home</li>
//                 <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Residential</li>
//                 <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Commercial</li>
//                 <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Landowner</li>
//                 <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Ongoing Projects</li>
//                 <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Completed Projects</li>
//                 <li className="border-b pb-2 cursor-pointer hover:text-gray-600 transition">Contact Us</li>
//               </ul>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }








import { useState } from "react";
import { FiUser, FiHeart, FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import logo from '../../assets/logoBg.png';
import { Link } from "react-router-dom";
import projects from "./projects";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const navIcons = [
    { icon: <FiUser />, label: "Login", to: '/login' },
    { icon: <FiHeart />, label: "Favourites", to: '/favourites' },
    { icon: <FiSearch />, label: "Search" },
  ];

  const divisions = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"];
  const types = ["Residential", "Commercial", "Condominium"];
  const statuses = ["Ongoing", "Completed", "Upcoming"];
  const locations = ["Dhanmondi", "Gulshan", "Banani", "Uttara", "Mirpur", "Baridhara"];

  // Sample projects data - replace with your actual data
  // const projects = [
  //   {
  //     id: 1,
  //     name: "Sheltech Sapphire Tower",
  //     location: "Dhanmondi",
  //     type: "Residential",
  //     status: "Ongoing",
  //     image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80"
  //   },
  //   {
  //     id: 2,
  //     name: "Sheltech Paradise Heights",
  //     location: "Gulshan",
  //     type: "Commercial",
  //     status: "Completed",
  //     image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80"
  //   },
  //   {
  //     id: 3,
  //     name: "Sheltech Crimson Palace",
  //     location: "Banani",
  //     type: "Residential",
  //     status: "Upcoming",
  //     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80"
  //   },
  //   {
  //     id: 4,
  //     name: "Sheltech Azure Heights",
  //     location: "Uttara",
  //     type: "Condominium",
  //     status: "Ongoing",
  //     image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80"
  //   },
  //   {
  //     id: 5,
  //     name: "Sheltech Green Valley",
  //     location: "Mirpur",
  //     type: "Residential",
  //     status: "Completed",
  //     image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
  //   },
  //   {
  //     id: 6,
  //     name: "Sheltech Royal Plaza",
  //     location: "Baridhara",
  //     type: "Commercial",
  //     status: "Ongoing",
  //     image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80"
  //   },
  //   {
  //     id: 7,
  //     name: "Sheltech Diamond Heights",
  //     location: "Dhanmondi",
  //     type: "Residential",
  //     status: "Upcoming",
  //     image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=400&q=80"
  //   },
  //   {
  //     id: 8,
  //     name: "Sheltech Pearl Tower",
  //     location: "Gulshan",
  //     type: "Condominium",
  //     status: "Completed",
  //     image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80"
  //   },
  //   {
  //     id: 9,
  //     name: "Sheltech Emerald Plaza",
  //     location: "Banani",
  //     type: "Commercial",
  //     status: "Ongoing",
  //     image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=400&q=80"
  //   },
  //   {
  //     id: 10,
  //     name: "Sheltech Ruby Residence",
  //     location: "Uttara",
  //     type: "Residential",
  //     status: "Upcoming",
  //     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80"
  //   }
  // ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-10 bg-black/10 backdrop-blur-sm border-b border-white/10">
        {/* LEFT LOGO */}
        <div className="w-[140px] md:w-[200px]">
          <Link to={'/'} className="flex items-center gap-3">
            <img src={logo} className="h-18 w-full object-cover" alt="Logo" />
          </Link>
        </div>

        {/* right side icons */}
        <div className="flex items-center gap-5 text-xl text-white">
          {navIcons.map((item, index) => (
            <Link
              to={item?.to}
              key={index}
              className="relative md:p-4 p-2 cursor-pointer overflow-hidden md:text-xl text-sm
                         before:absolute before:left-[-100%] before:top-0 
                         before:h-full before:w-full before:bg-gray-50 
                         before:transition-all before:duration-500 hover:before:left-0
                         rounded-md hover:text-gray-500 transition-all hover:scale-110"
              title={item.label}
            >
              <span className="relative z-10">{item?.icon}</span>
            </Link>
          ))}

          {/* MENU ICON */}
          <div
            onClick={() => setOpen(true)}
            className="relative md:p-4 p-2 cursor-pointer overflow-hidden md:text-xl text-sm
                       before:absolute before:left-[-100%] before:top-0 
                       before:h-full before:w-full before:bg-gray-50
                       before:transition-all before:duration-300 hover:before:left-0
                       rounded-md transition-all hover:scale-110 hover:text-gray-500"
          >
            <span className="relative z-10"><FiMenu /></span>
          </div>
        </div>
      </nav>

      {/* RIGHT SLIDE-IN MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 z-[55]"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-full md:w-[90vw] lg:w-[80vw] bg-white shadow-xl z-[60] overflow-hidden"
            >
              {/* CLOSE BUTTON */}
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={() => setOpen(false)}
                  className="text-3xl text-gray-700 hover:text-black transition-colors"
                >
                  <FiX />
                </button>
              </div>

              <div className="h-full flex">
                {/* LEFT SIDE - Filters */}
                <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 p-8 overflow-y-auto">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-8">Search Projects</h2>

                  {/* Search Box */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* Division Dropdown */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Division
                    </label>
                    <select
                      value={selectedDivision}
                      onChange={(e) => setSelectedDivision(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer"
                    >
                      <option value="">All Divisions</option>
                      {divisions.map((division) => (
                        <option key={division} value={division}>
                          {division}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Type Dropdown */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer"
                    >
                      <option value="">All Types</option>
                      {types.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Status Dropdown */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer"
                    >
                      <option value="">All Status</option>
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Location Dropdown */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer"
                    >
                      <option value="">All Locations</option>
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Clear Filters Button */}
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedDivision("");
                      setSelectedType("");
                      setSelectedStatus("");
                      setSelectedLocation("");
                    }}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>

                {/* RIGHT SIDE - Projects Grid */}
                <div className="flex-1 p-8 overflow-y-auto bg-white">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    ({projects.length}) Projects found 
                    <hr className="my-2" />
                  </h2>
                  

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        onClick={() => setOpen(false)}
                        className="group cursor-pointer"
                      >
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                          {/* Project Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Status Badge */}
                            <div className="absolute top-3 right-3">
                              <span className={`${getStatusColor(project.status)} px-3 py-1 rounded-full text-xs font-medium`}>
                                {project.status}
                              </span>
                            </div>
                          </div>

                          {/* Project Info */}
                          <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {project.name}
                            </h3>
                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>{project.location}</span>
                              <span className="text-gray-400">•</span>
                              <span>{project.type}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}





