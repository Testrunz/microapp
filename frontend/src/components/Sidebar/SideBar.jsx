import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiVector } from "react-icons/bi";
import { FaSitemap } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { BsFillFileEarmarkPdfFill,BsTable } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { RiFlowChart } from "react-icons/ri";
import { FcFlowChart } from "react-icons/fc";

const routes = [
  {
    path: "/",
    name: "DOE",
    icon: <VscGraph />,
  },
  {
    path: "/fmea",
    name: "FMEA",
    icon: <BsTable />    ,
  },
  {
    path: "/mindmap-mermaid",
    name: "Mindmap Mermaid",
    icon: <FaSitemap />,
  },
  {
    path: "/mindmap-plantuml",
    name: "Mindmap Plantuml",
    icon: <BiAnalyse />,
  },
  {
    path: "/process-map",
    name: "Process Map",
    icon: <RiFlowChart />,
  },
  {
    path: "/sequence-diagram",
    name: "Sequence Diagram",
    icon: <BiVector />,
  },
  {
    path: "/test-cases",
    name: "Test Cases",
    icon: <BsFillFileEarmarkPdfFill />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/doe-settings",
        name: "DOE",
        icon: <VscGraph />,
      },
      {
        path: "/fmea-settings",
        name: "FMEA",
        icon: <BsTable />,
      },
      {
        path: "/mindmap-mermaid-settings",
        name: "Mindmap Mermaid",
        icon: <MdMessage />,
      },
      {
        path: "/mindmap-plantuml-settings",
        name: "Mindmap Plantuml",
        icon: <BiAnalyse />,
      },
      {
        path: "/process-map-settings",
        name: "Process Map",
        icon: <RiFlowChart />,
      },
      {
        path: "/sequence-diagram-settings",
        name: "Sequence Diagram",
        icon: <FcFlowChart />,
      },
      {
        path: "/test-cases-settings",
        name: "Test Cases",
        icon: <BsFillFileEarmarkPdfFill />,
      },
    ],
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  MicroApp
                </motion.h1>
              )}
            </AnimatePresence>

            <div>
              <FaBars onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
