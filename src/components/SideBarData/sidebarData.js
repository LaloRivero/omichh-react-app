import React from "react";
import { FaRegIdBadge } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiPencilRulerLine } from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";
import { VscNotebook } from "react-icons/vsc";
import { MdPermContactCalendar } from "react-icons/md";

export const SidebarData = [
  {
    title: "Registro",
    path: "/",
    icon: <FaRegIdBadge />,
    cName: "navbar__text",
  },
  {
    title: "Convocatoria",
    path: "/",
    icon: <HiOutlineDocumentText />,
    cName: "navbar__text",
  },
  {
    title: "Codigo de conducta",
    path: "/",
    icon: <VscNotebook />,
    cName: "navbar__text",
  },
  {
    title: "Reglamento",
    path: "/",
    icon: <RiPencilRulerLine />,
    cName: "navbar__text",
  },
  {
    title: "OMICHH",
    path: "/",
    icon: <FaInfoCircle />,
    cName: "navbar__text",
  },
  {
    title: "Contacto",
    path: "/",
    icon: <MdPermContactCalendar />,
    cName: "navbar__text",
  },
];
