import React from 'react'
import SigninForm from '../components/SigninForm'
import GitHubIcon from '@mui/icons-material/GitHub';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import LeakRemoveOutlinedIcon from '@mui/icons-material/LeakRemoveOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Link } from 'react-router-dom';
const features = [
  {
    title : 'Open Source',
    description : 'Medilynk is open source and free to use. You can contribute to the project on Github.',
    icon: GitHubIcon
  },
  {
    title : 'Offline Enabled',
    description : 'MediLynk is dockerized and can be used offline. You can also deploy it on your own server.',
    icon: LeakRemoveOutlinedIcon

  },
  {
    title : 'Secure',
    description : 'MediLynk is secure and uses JWT for authentication. It also uses bcrypt to hash passwords.',
    icon: ShieldOutlinedIcon
  }
  ]
function Landing() {
  return (
    <div className='flex items-center justify-center w-screen h-screen p-16'>
      <div className='w-1/2'>
          <h1 className='text-5xl py-2 font-bold text-blue-800'>Medilynk</h1>
          <p className='text-lg font-medium '>
          Explore MediLynk – an open-source, dockerized hospital management system. Unleashing safety, speed, and offline capabilities for seamless healthcare management.
          </p>

          <div className='py-8 text-center'>
            <ul className='flex gap-2 flex-wrap'>
              {features.map((feature, index) => (
                <div className='w-44 bg-white p-4 bg-opacity-60 shadow-xl rounded-xl text-center '>
                <div className='tex-5xl'><feature.icon style={{ fontSize: '3rem' }}/></div>
                <p key={index} className='text font-bold py-4 '>{feature.title}</p>
                <p className='text-sm'>{feature.description}</p>
                </div>
              ))}
            </ul>
          </div>
          <div className='flex gap-4'>
            <a target='_blank' href="https://github.com/medilynk"><button className='bg-blue-600 text-white p-4 rounded'><GitHubIcon/>Source Code</button></a>
            <Link to='/signin'><button className='bg-blue-600 text-white p-4 rounded'><LanguageOutlinedIcon/>Online Demo</button></Link>
          </div>
          </div>
          <img className='' src="/hero.png" alt="hero image" />
    </div>
  )
}

export default Landing