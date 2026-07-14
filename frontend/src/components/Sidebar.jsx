import { NavLink } from "react-router-dom";

const Sidebar = () => {

  const menu = [

    {
      name: "Dashboard",
      icon: "🏠",
      path: "/dashboard",
    },

    {
      name: "Doctors",
      icon: "👨‍⚕️",
      path: "/doctors",
    },

    {
      name: "Appointments",
      icon: "📅",
      path: "/myappointments",
    },

    {
      name: "Payments",
      icon: "💳",
      path: "/appointment",
    },

    {
      name: "Medical Reports",
      icon: "📄",
      path: "/reports",
    },

    {
      name: "AI Assistant",
      icon: "🤖",
      path: "/chatbot",
    },

    {
      name: "Video Call",
      icon: "🎥",
      path: "/videocall",
    },

    {
      name: "Emergency SOS",
      icon: "🚑",
      path: "/emergency",
    },

    {
      name: "Settings",
      icon: "⚙️",
      path: "/settings",
    },

  ];

  return (

    <aside className="fixed left-0 top-0 h-screen w-72 bg-[#020617] border-r border-slate-800 shadow-2xl flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <div className="flex items-center gap-3">

          <div className="w-14 h-14 rounded-2xl bg-cyan-500 flex items-center justify-center text-3xl">

            🏥

          </div>

          <div>

            <h1 className="text-2xl font-extrabold text-white">

              Book A Doctor

            </h1>

            <p className="text-gray-400 text-sm">

              Healthcare System

            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        {menu.map((item, index) => (

          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-5 py-4 rounded-2xl mb-4 transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl"
                  : "text-gray-300 hover:bg-[#111827] hover:text-white"
              }`
            }
          >

            <span className="text-2xl">

              {item.icon}

            </span>

            <span className="font-semibold text-lg">

              {item.name}

            </span>

          </NavLink>

        ))}

      </div>

      {/* Bottom Profile */}

      <div className="border-t border-slate-800 p-6">

        <div className="bg-[#111827] rounded-2xl p-4 flex items-center gap-4">

          <img
            src="https://i.pravatar.cc/100?img=5"
            alt="profile"
            className="w-14 h-14 rounded-full border-2 border-cyan-500"
          />

          <div>

            <h2 className="text-white font-bold">

              Renuka

            </h2>

            <p className="text-gray-400 text-sm">

              Patient Account

            </p>

          </div>

        </div>

      </div>

    </aside>

  );

};

export default Sidebar;