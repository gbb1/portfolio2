import { useState, useEffect } from 'react'

import '../App.css';
import Project from './Project'

import Overview from '../assets/Overview2.png'
import Hooks from '../assets/hooks.png'

export default function Projects() {

  const content = [
    {
      image: Overview,
      title: 'Cap\'s closet e-commerce',
      tags: ['PostgreSQL', 'Javascript', 'Web development'],
      description: 'A clothing product page front-end powered by a scaled PostgreSQL back-end.'
    },
    {
      image: Hooks,
      title: 'Hooks',
      tags: ['Socket.io', 'Javascript', 'MongoDB'],
      description: 'A full-stack multiplayer game t oflexyour creative writing skills, built with Socket.io and MongoDB.'
    },
  ]


  return (
    <div className="flex flex-col w-full gap-4 mt-4">
      <div className="font-bold text-4xl">
        My projects:
      </div>

      <div className="flex flex-col gap-4">
      {
        content.map((c, index) => {
          return (
            <Project key={index} image={c.image} tags={c.tags} title={c.title} description={c.description} />
          )
        })
      }
      </div>

    </div>
  )
}