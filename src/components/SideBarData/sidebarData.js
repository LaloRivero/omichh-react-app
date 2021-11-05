import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { RiPencilRulerLine } from "react-icons/ri";
import { HiOutlineDocumer } from "react-icons/hi";
import { VscNotebook } from "react-icons/vsc";
import { MdPermContactCalendar } from "react-icons/md";

export const SidebarData = [
  {
    title: "Registro",
    path: "/",
    icon: <FaRegIdBadge />,
    cName: "nav-text",
  },
  {
    title: "Convocatoria",
    path: "/",
    icon: <HiOutlineDocumer />,
    cName: "nav-text",
  },
  {
    title: "Codigo de conducta",
    path: "/",
    icon: <VscNotebook />,
    cName: "nav-text",
  },
  {
    title: "Reglamento",
    path: "/",
    icon: <RiPencilRulerLine />,
    cName: "nav-text",
  },
  {
    title: "Acerca de la OMICHH",
    path: "/",
    icon: <FcAbout />,
    cName: "nav-text",
  },
  {
    title: "Contacto",
    path: "/",
    icon: <MdPermContactCalendar />,
    cName: "nav-text",
  },
];
