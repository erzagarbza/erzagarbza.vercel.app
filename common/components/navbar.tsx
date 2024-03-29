'use client';
import { METADATA } from '@/common/constant/metadata';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbBrandTiktok, TbBrandYoutube } from 'react-icons/tb';
import { Menu } from '../constant/menu';
import { ContainerContext } from '@/context/ContainerProvider';

export default function Navbar() {
  const { fullPathName, setFullPathName } = useContext(ContainerContext)
  const { theme, setTheme } = useTheme()
  const [navToggle, setNavToggle] = useState(false)

  function handleMobileNav(value: boolean, section?: string) {
    setNavToggle(value)
    if (section)
      setFullPathName(section)
  }

  return (
    <nav className='fixed w-screen h-0 z-50 dark:text-neutral-300'>
      {/* Dark Mode Switch */}
      <label htmlFor="dark" className={`absolute w-7 h-7 bg-[#121212] rounded-full z-10 duration-500 ease-out cursor-pointer
      -translate-y-10 -right-10 dark:translate-y-2 dark:right-4`}></label>
      <input type="checkbox" onClick={() => setTheme(theme == "dark" ? "light" : "dark")} id='dark'
        className={`absolute top-5 right-5 w-8 h-8 rounded-full cursor-pointer appearance-none duration-200
        bg-yellow-300 dark:bg-slate-200`} />

      {/* Show Sidebar Button */}
      <input type='submit' id='navbar' hidden onClick={() => handleMobileNav(!navToggle)} />
      <label htmlFor="navbar" className={`absolute z-10 duration-300
      top-5 cursor-pointer
      ${navToggle ? 'left-64 md:left-[350px] rotate-180' : 'left-5 rotate-0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
          viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
          fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 7l5 5l-5 5"></path>
          <path d="M13 7l5 5l-5 5"></path>
        </svg>
      </label>
      {navToggle ? <div onClick={() => setNavToggle(false)} className='absolute top-0 left-0 w-screen h-screen bg-black opacity-50'></div> : ''}
      <ul className={`absolute w-80 md:w-[400px] h-screen top-0 bg-stone-100 dark:bg-neutral-900 border 
      border-stone-300 dark:border-stone-800 
      flex flex-col duration-300
        ${navToggle ? 'left-0' : '-left-full'}`}>
        <li>
          <Link href='/' onClick={() => handleMobileNav(false, ' ')}
            className='h-fit mx-[10%] mt-12 py-5 flex items-center gap-3 border-b border-stone-400'>
            <img src="/icon.webp" alt="icon.webp" width='80' height='80'
              className='rounded-full' />
            <div className='flex flex-col'>
              <h2 className='text-4xl font-medium'>{METADATA.creator}</h2>
              <p>Full-stack Website Developer</p>
              <p>@erzagarbza</p>
            </div>
          </Link>
        </li>
        <li className='my-4 mx-[5%] flex flex-col gap-5'>
          {Menu.map((menu: any, index: number) => (
            <div key={index}>
              {navLink(menu, handleMobileNav, fullPathName)}
            </div>
          ))}
        </li>
        <li className='flex flex-col items-center gap-2 my-4'>
          <p>Interested in Working Together?</p>
          <Link href='/talk' onClick={() => handleMobileNav(false)}
            className='m-auto bg-neutral-300 px-[20%] py-4
          rounded-full hover:opacity-70 drop-shadow-md duration-300
        dark:bg-neutral-800'>
            Let's Talk
          </Link>
          <div className='flex gap-4 my-2'>
            {brandLink(TbBrandInstagram, 'https://www.instagram.com/erzagarbza')}
            {brandLink(TbBrandGithub, 'https://www.github.com/erzagarbza')}
            {brandLink(TbBrandYoutube, 'https://www.youtube.com/@erzagarbza')}
            {brandLink(TbBrandLinkedin, 'https://www.linkedin.com/in/erzagarbza')}
            {brandLink(TbBrandTiktok, 'https://www.tiktok.com/@erzagarbza1')}
          </div>
        </li>
      </ul>
    </nav>
  )
}

const navLink = (menu: any, handle: any, fullPathName: string) => (
  <Link href={menu.pathName} onClick={() => handle(false, menu.pathName)} className={`w-full px-[5%] py-3
      hover:scale-105 flex items-center 
      gap-2 rounded-xl duration-300 ${(fullPathName == menu.pathName) ?
      'bg-neutral-300 dark:bg-neutral-800' : 'hover:bg-neutral-300 hover:dark:bg-neutral-800'}`}>
    <menu.Svg className='w-7 h-7' strokeWidth='1' /> {menu.label}
  </Link>
)

const brandLink = (Svg: any, url: string) => (
  <a href={url} target='_blank' className='flex text-neutral-800 hover:opacity-70
    hover:scale-110 duration-300 dark:text-neutral-300' aria-label={url}>
    <Svg className='w-7 h-7' strokeWidth='1.3' />
  </a>
)
