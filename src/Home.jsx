import React, { useState, useEffect } from 'react'
import SearchLogo from './assest/search_FILL0_wght300_GRAD0_opsz24.svg'
import Bar from './assest/more_vert_FILL0_wght300_GRAD0_opsz24.png'
//import Chart from 'chart.js/auto';
import Birth from './assest/BirthIcon.png'
import Gender from './assest/FemaleIcon.png'
import Contact from './assest/PhoneIcon.png'
import Insurance from './assest/InsuranceIcon.png'
import Respiratory from './assest/respiratory rate.png'
import Temparature from './assest/temperature.png'
import Heart from './assest/HeartBPM.png'
import up from './assest/ArrowUp.svg'
import down from './assest/ArrowDown.svg'
import Chart from './Chart';

import style from './home.module.css'

const Home = () => {
const [ patient, setPatient ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      let username = 'coalition';
      let password = 'skills-test';
      let auth = btoa(`${username}:${password}`);
      try {
        const res = await fetch(`https://fedskillstest.coalitiontechnologies.workers.dev`, {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${auth}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const resData = await res.json();
        setPatient(resData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  
  if (patient === null){
    return <p>Loading</p>
  }

  const jessicaTaylor = patient[3];
  
  return (
    <div className={style.patient_list_con}>
      <section className={style.patient_list}>
        <div className={style.patient_list_head}>
          <h3>Patients </h3>
          <img src={SearchLogo} alt='Search' />
        </div>

          <div className={style.scrollbar}>
            {patient.map(e => (
              
              <div className={`${style.patient_list_sect} ${e.name === 'Jessica Taylor' ? style.greenBackground : ''}`} id={e.name}>
                <div>
                  <img src={e.profile_picture} alt='TechCare Pratitioner' height={50} width={50}/>
                  <div>
                    <h4>{e.name}</h4>
                    <p>{e.gender} {e.age}</p>
                  </div>
                </div>
                <img src={Bar} alt='search Bar' height={18} width={4} />
              </div>
            ))}
          </div>
      </section>

      <section >
        <div className={style.patient_details_graph}>
          <div>
            <h3>Diagnosis History</h3>
            <div className={style.patient_Chart}>
              <div>
                <Chart />
              </div>

              <div className={style.patient_Chart_details}>
                <div>
                  <div className={style.chart_d1}>
                    <div className={style.circle}></div>
                    <p>Systolic</p>
                  </div>
                  <h3>160</h3>
                  <div className={style.chart_d2}>
                    <img src={up} alt='up arrow' />
                    <p>Higher than Average</p>
                  </div>
                </div>

                <div>
                  <div className={style.chart_d1}>
                    <div className={style.circle}></div>
                    <p>Diastolic</p>
                  </div>
                  <h3>78</h3>
                  <div className={style.chart_d2}>
                    <img src={down} alt='up arrow' />
                    <p>Lower than Average</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.patient_report}>
            <div className={style.patient_report_res}>
              <img src={Respiratory} alt='TechCare' height={100} width={100}/>
              <p>Respiratory Organ</p>
              <h3>20 bpm</h3>
              <p>Normal</p>
            </div>

            <div className={style.patient_report_res}>
              <img src={Temparature} alt='TechCare' height={100} width={100}/>
              <p>Temperature</p>
              <h3>98.6F</h3>
              <p>Normal</p>
            </div>

            <div className={style.patient_report_res}>
              <img src={Heart} alt='TechCare' height={100} width={100}/>
              <p>Heart Ratr</p>
              <h3>78 bpm</h3>
              <p>Lower than Average</p>
            </div>
          </div>
        </div>

        <h3 className={style.patient_history}>Diagnosis History</h3>
      </section>

      <section className={style.patient_details_con}>
        <div className={style.patient_img_con}>
          <img src={jessicaTaylor.profile_picture} alt='TechPractitioner' height={150} width={150}/>
          <h3>{jessicaTaylor.name}</h3>
        </div>

        <div className={style.patient_details}>
          <div>
              <img src={Birth} alt='TechCare ' />
              <div>
                <p>Date of Birth</p>
                <h4>{jessicaTaylor.date_of_birth}</h4>
              </div>
          </div>

          <div>
              <img src={Gender} alt='TechCare ' />
              <div>
                <p>Gender</p>
                <h4>{jessicaTaylor.gender}</h4>
              </div>
          </div>

          <div>
              <img src={Contact} alt='TechCare ' />
              <div>
                <p>Contact Info</p>
                <h4>{jessicaTaylor.phone_number}</h4>
              </div>
          </div>

          <div>
              <img src={Contact} alt='TechCare ' />
              <div>
                <p>Emergency Contact</p>
                <h4>{jessicaTaylor.emergency_contact}</h4>
              </div>
          </div>

          <div>
              <img src={Insurance} alt='TechCare ' />
              <div>
                <p>Insurance Provider</p>
                <h4>Sunrise Health Insurance</h4>
              </div>
          </div>
        </div>

        <div className={style.lastChild}>
          <h3>Show All Information</h3>
        </div>
      </section>
    </div>
  )
}

export default Home