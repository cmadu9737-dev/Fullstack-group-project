
import React from 'react';
import './Service.css';

import {
  Monitor,
  Hospital,
  Hammer,
  Tractor,
  Wrench,
  School
} from 'lucide-react';

const Service = () => {
  return (
    <div>
      <section className="Services">

        <div className="service-card">
          <Monitor size={100} color="blue" strokeWidth={1.5} />
          <h4>Tech & Digital</h4>
          <p>Website, app, graphics design and more</p>
        </div>

        <div className="service-card">
          <Hospital size={100} color="blue" strokeWidth={1.5} />
          <h4>Health and Wellness</h4>
          <p>Doctor, therapy, fitness and wellness</p>
        </div>

        <div className="service-card">
          <Hammer size={100} color="blue" strokeWidth={1.5} />
          <h4>Skilled Trades</h4>
          <p>Plumbing, electrical, carpentry and more</p>
        </div>

        <div className="service-card">
          <Tractor size={100} color="blue" strokeWidth={1.5} />
          <h4>Agriculture and Farming</h4>
          <p>Farming, livestock, agrotech and supplies</p>
        </div>

        <div className="service-card">
          <Wrench size={100} color="blue" strokeWidth={1.5} />
          <h4>Home Services</h4>
          <p>Cleaning, repairs, painting and maintenance.</p>
        </div>

        <div className="service-card">
          <School size={100} color="blue" strokeWidth={1.5} />
          <h4>Education and Tutoring</h4>
          <p>Tutors, courses, language and exam prep</p>
        </div>

      </section>
    </div>
  );
};

export default Service;
