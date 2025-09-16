import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id = "service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Expertise in designing, developing, and deploying scalable, highly available, and secure applications on the web technology stack.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Develop both the back-end and front-end components of web applications.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and optimize database structures, ensuring data integrity and implementing security protocols.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analyze performance bottlenecks, optimize code, and improve overall application performance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Set up efficient development and deployment workflows.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure smooth integration and deployment of applications.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Working Skills</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strong analytical skills and attention to detail, enabling me to identify and troubleshoot complex technical issues.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proven ability to work independently and take ownership of projects, while also contributing to team success.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dedication to staying up-to-date with the latest technologies and best practices and continuously seeking opportunities for learning and growth.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creative problem-solving abilities, enabling me to develop innovative solutions to challenging problems.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strong organisational and time-management skills, enabling me to effectively prioritise tasks and meet project deadlines.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proactive mindset and a passion for delivering high-quality work that exceeds expectations.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Adaptability and resilience, enabling me to thrive in fast-paced and dynamic environments.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service
