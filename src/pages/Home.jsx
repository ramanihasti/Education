import React from 'react'
// import Navbar from '../layout/Navbar'
// import Footer from '../layout/Footer'
import InfoRow from '../components/infoRow/InfoRow'
import HeroImage from '../components/home/HeroImage'
import PricingRow from '../components/pricingRow/PricingRow'
import ServiceRow from '../components/serviceRow/ServiceRow'
import ProgressCard from '../components/progressRow/ProgressCard'
import CounterRow from '../components/counterRow/CounterRow'
import FaqsSingleItemVisible from '../components/faqsAnsQue/FaqsSingleItemVisible'

function Home() {
  return (
    <>
        {/* <Navbar /> */}
        <HeroImage video="/images/hero-video.mp4"/>
         <InfoRow 
         image="/images/01.jpg  "
         desc1="IT (information technology) is a market segment whose products and services focus on using technology to solve business problems. The field encompasses a wide range of areas, including software development, hardware management, network administration, and data management."
         desc2="The only constant in the technology industry is change."
         desc3="The 4 Ps for Change and Release: Planning Prevents Poor Performance."
         desc4="Try harder next time…is not a problem management method mentioned in ITIL."
         imgFirst
         />

         <InfoRow 
         image="/images/02.jpg  "
         desc1="Marketing tools and software are online solutions that help marketing departments streamline their processes, automate customer communication, collate market data, and schedule marketing campaign activity. Marketing tools and software effectively supercharge a marketing department, helping them cut down on inefficient processes and carry out day-to-day marketing activities with ease."
         desc2="TMarketing, advertising, and promotion research. "
         desc3="Customer relationship management (CRM)."
         desc4="Customer attitudes, behaviors, and perceptions. "
         />
         <CounterRow />
         <ServiceRow />
         <PricingRow />
         <ProgressCard />
         <FaqsSingleItemVisible />
        {/* <Footer /> */}
    </>
  )
}

export default Home