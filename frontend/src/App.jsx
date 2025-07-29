import React from 'react'
import Card from './Card'
import './App.css'

function App() {


  return (
    <div className="App">
      <Card
        title="Custom Software Development"
        desc="Your website is more than just a digital presence—it’s your brand’s voice. I craft custom-designed websites that are responsive, user-friendly, and built with the latest technologies. Whether you need a business website, portfolio, or a full-scale platform, I ensure it reflects your unique goals, speaks to your audience, and performs flawlessly across devices."
      />

      <Card
        title="Scalable Cloud Solutions for the Future"
        desc="I design and develop powerful, secure, and scalable cloud-based systems tailored to your business needs. Whether you're transitioning to the cloud, building a new SaaS platform, or need a custom infrastructure, I leverage modern cloud technologies to ensure performance, availability, and reliability. Let’s take your software architecture to the next level with intelligent cloud design"
      />

      <Card
        title="Tech Education At NILEHORN,"
        desc=" we believe in building a strong foundation in technology. Through expert-led training sessions, hands-on workshops, and real-world projects, I teach individuals and teams how to master modern software development. From beginner coders to aspiring engineers, I simplify complex tech concepts and empower learners to build with confidence and creativity"
      />
    </div>
  );
}

export default App









