import React from 'react';
// import { Navbar } from './components';
import styles from './style';
import {Navbar,Hero,Stats,Business,Billing,Testimonials,Clients,CTA,Footer,CardDeal} from './components';
import GetStarted from './components/GetStarted';

const App = () =>{
  return (
    <div className="bg-black w-full  overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
          </div>
        </div> 

        <div className={`bg-black ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
            <GetStarted />
          </div>
        </div>

    </div>
  );

          }
export default App;