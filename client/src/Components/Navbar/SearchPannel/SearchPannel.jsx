

// const SearchPannel = () => {
//     return (
//         <div>
//                   {/* SEARCH PANEL */}
//       <AnimatePresence>
//         {openSearch && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpenSearch(false)}
//               className="fixed inset-0 bg-black/50 z-[55]"/>

//             {/* Panel */}
//             <motion.div
//               {...panelAnimation}
//               className="fixed top-0 right-0 h-screen w-full md:w-[90vw] lg:w-[80vw] bg-white shadow-xl z-[60] overflow-y-auto">
//               <button
//                 onClick={() => setOpenSearch(false)}
//                 className="absolute top-6 right-6 text-3xl text-gray-700 hover:text-black">
//                 <FiX />
//               </button>

//               <div className="h-full flex flex-col md:flex-row">
//                 {/* FILTERS */}
//                 <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 p-6 md:p-8 border-b md:border-b-0 md:border-r overflow-y-auto">
//                   <h2 className="text-2xl font-semibold mb-6 md:mb-8">Search Projects</h2>

//                   {/* Search Input */}
//                   <input
//                     type="text"
//                     placeholder="Search projects..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 md:mb-6"/>

//                   {/* Filters */}
//                   {[
//                     { label: "Division", state: selectedDivision, set: setSelectedDivision, items: divisions },
//                     { label: "Type", state: selectedType, set: setSelectedType, items: types },
//                     { label: "Status", state: selectedStatus, set: setSelectedStatus, items: statuses },
//                     { label: "Location", state: selectedLocation, set: setSelectedLocation, items: locations },
//                   ].map((f, i) => (
//                     <div className="mb-4 md:mb-6" key={i}>
//                       <label className="block text-sm font-medium mb-1 md:mb-2">{f.label}</label>
//                       <select
//                         value={f.state}
//                         onChange={(e) => f.set(e.target.value)}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg"
//                       >
//                         <option value="">All {f.label}s</option>
//                         {f.items.map((item) => (
//                           <option key={item}>{item}</option>
//                         ))}
//                       </select>
//                     </div>
//                   ))}

//                   <button
//                     onClick={() => {
//                       setSearchQuery("");
//                       setSelectedDivision("");
//                       setSelectedType("");
//                       setSelectedStatus("");
//                       setSelectedLocation("");
//                     }}
//                     className="w-full bg-gray-800 text-white py-3 rounded-lg mt-2 md:mt-4">
//                     Clear Filters
//                   </button>
//                 </div>

//                 {/* PROJECTS */}
//                 <div className="flex-1 p-6 md:p-8 overflow-y-hidden">
//                   <h2 className="text-2xl font-semibold mb-4">
//                     ({projects.length}) Projects found
//                   </h2>
//                   <hr className="mb-4" />
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                     {projects.map((project) => (
//                       <Link
//                         key={project.id}
//                         to={`/projects/${project.id}`}
//                         onClick={() => setOpenSearch(false)}
//                         className="group">
//                         <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition">
//                           <div className="h-48 overflow-hidden relative">
//                             <img
//                               src={project.image}
//                               className="w-full h-full object-cover group-hover:scale-110 transition"
//                               alt={project.name}
//                             />
//                             <span
//                               className={`${getStatusColor(project.status)} absolute top-3 right-3 px-3 py-1 rounded-full text-xs`}>
//                               {project.status}
//                             </span>
//                           </div>

//                           <div className="p-4">
//                             <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
//                               {project.name}
//                             </h3>
//                             <div className="flex items-center text-sm text-gray-600 gap-2">
//                               <span>{project.location}</span>
//                               <span>•</span>
//                               <span>{project.type}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//         </div>
//     );
// };

// export default SearchPannel;