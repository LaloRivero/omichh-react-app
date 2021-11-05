import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as FcIcons from 'react-icons/fc'
import * as RiIcons from 'react-icons/ri'
import * as HiIcons from 'react-icons/hi'
import * as VscIcons from 'react-icons/vsc'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
  {
    title: "Registro",
    path: "/",
    icon: <FaIcons.FaRegIdBadge/>,
    cName: "nav-text",
  },
  {
    title: "Convocatoria",
    path: '/',
    icon: <HiIcons.HiOutlineDocumer/>,
    cName: "nav-text",
  },
  {
    title: "Codigo de conducta",
    path: '/',
    icon: <VscIcons.VscNotebook/>,
    cName: 'nav-text',
  },
  {
    title: "Reglamento",
    path: '/',
    icon: <RiIcons.RiPencilRulerLine/>,
    cName: 'nav-text',
  },
  {
    title: "Acerca de la OMICHH",
    path: '/',
    icon: <FcIcons.FcAbout/>,
    cName: 'nav-text',
  },
  {
    title: "Contacto",
    path: '/',
    icon: <MdIcons.MdPermContactCalendar/>,
    cName: 'nav-text',
  },
]