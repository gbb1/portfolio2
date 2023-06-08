import { useState, useEffect } from 'react'

import '../App.css';
import Project from './Project'

import Overview from '../assets/OverviewBlank.png'
import Hooks from '../assets/hooksBlank.png'
import Diggr from '../assets/diggr2.png'
import Attenda from '../assets/attendaBlank.png'

export default function Projects() {

  const content = [
    {
      prompt: 'My favorite place to shop is...',
      image: Overview,
      title: 'Cap\'s closet e-commerce',
      tags: ['PostgreSQL', 'Javascript', 'AWS EC2'],
      description: 'A clothing product page scaled to 10K RPS at ~50ms latency. Explore different styles and sales across hundreds of products, each with their own SKUs and inventory.',
      link: 'https://github.com/gbb1/CC-ECommerce',
      bg: '#379683',
    },
    {
      prompt: 'I bet you can\'t beat me in...',
      image: Hooks,
      title: 'Hooks',
      tags: ['Socket.io', 'Javascript', 'MongoDB'],
      description: 'A full-stack multiplayer game to flex your creative writing skills. Start a private lobby with friends, choose custom settings, and compete with Chat GPT every round.',
      link: 'https://github.com/gbb1/Hooks',
      bg: '#5cdb95',
    },
    {
      prompt: 'I met my best friend on...',
      image: Diggr,
      title: 'Diggr',
      tags: ['Google API', 'Javascript', 'PostgreSQL'],
      description: 'A Tinder-inspired platform for dogs and their owners. Meet dog owners in your area or a location of your choice by matching with pups in the mile radius you choose.',
      link: 'https://github.com/gbb1/diggr',
      bg: '#8ee4af',
    },
    {
      prompt: 'I wish my teachers used...',
      image: Attenda,
      title: 'Attenda',
      tags: ['Firebase', 'Typescript', 'Graph JS'],
      description: 'A QR-code and geolocation-based attendance tracker. Add classes on recurring schedules and see metrics about your students\' attendance records.',
      link: '',
      bg: '#1D3557',
    },
  ]


  return (
    <div className="flex flex-col w-full gap-4 mt-4">
      <div className="font-bold text-xl md:text-4xl">
        My projects:
      </div>

      <div className="flex flex-col gap-4">
      {
        content.map((c, index) => {
          return (
            <div id={c.title} className="scrolledTo-project2" key={index} >
              <Project prompt={c.prompt} image={c.image} tags={c.tags} title={c.title} description={c.description} link={c.link} bg={c.bg} />
            </div>
          )
        })
      }
      </div>

    </div>
  )
}