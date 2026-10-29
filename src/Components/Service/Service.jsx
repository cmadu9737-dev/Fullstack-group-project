import React from 'react'
import './Service.css'
// import tech from '../../assets/Tech_icon.png'
// import health from '../../assets/health.jpg'
// import skills from '../../assets/skills.jfif'
// import agric from '../../assets/agriculture.jfif'
// import services from '../../assets/Home_services.png'
// import educate from '../../assets/education.png'
import { ComputerIcon } from 'lucide-react'
import { HospitalIcon } from 'lucide-react'
import { HammerIcon} from 'lucide-react'
import { TractorIcon } from 'lucide-react'
import { WrenchIcon } from 'lucide-react'
import { SchoolIcon } from 'lucide-react'



const Service = () => {
  return (
    <div>
    <section className='Services'>
      <ComputerIcon
      size={100}
      color='blue'
      strokeWidth={1.5}/>
      <h4>Tech & Digital</h4>
      <p>Website,app,graphics design and more</p>

       <HospitalIcon
       size={100}
      color='blue'
      strokeWidth={1.5}/>
      <h4>Health and Wellness</h4>
      <p>Doctor, therapy, fitness and Wellness</p>

      <HammerIcon
      size={100}
      color='blue'
      strokeWidth={1.5}/>
      <h4>Skilled Trades</h4>
      <p>Plumbing, electrical, carpentry and more</p>

       <TractorIcon
       size={100}
      color='blue'
      strokeWidth={1.5}/>
      <h4>Agriculture and Farming</h4>
      <p>Farming,livestock, agrotech and supplies</p>

       <WrenchIcon
       size={100}
      color='blue'
      strokeWidth={1.5}/>
      <h4>Home Services</h4>
      <p>Cleaning, repairs, painting and maintenance.</p>

      <SchoolIcon
      size={100}
      color='blue'
      strokeWidth={1.5}/>
      <h4>Education and Tutoring</h4>
      <p>Tutors,courses, language and exam prep</p>

    </section>
    </div>
  )
}

export default Service

