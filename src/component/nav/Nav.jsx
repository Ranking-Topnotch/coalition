import React from 'react'
import TechCareLogo from '../../assest/TestLogo.svg'
import Home from '../../assest/home_FILL0_wght300_GRAD0_opsz24.svg'
import Patients from '../../assest/group_FILL0_wght300_GRAD0_opsz24.svg'
import TechCareSchedule from '../../assest/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import Message from '../../assest/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import Transaction from '../../assest/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import TechPractitioner from '../../assest/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import Setting from '../../assest/settings_FILL0_wght300_GRAD0_opsz24.png'
import Filter from '../../assest/more_vert_FILL0_wght300_GRAD0_opsz24.png'

import style from './nav.module.css'

const Nav = () => {
  return (
    <div className={style.nav_con}>
        <img src={TechCareLogo} alt='Tech Care' />

        <div className={style.nav_con_list}>
            <ul>
                <div>
                    <img src={Home} alt='TechCare Home' />
                    <li>Overview</li>
                </div>
                <div className={style.green}>
                    <img src={Patients} alt='TechCare Patient' />
                    <li>Patient</li>
                </div>
                <div>
                    <img src={TechCareSchedule} alt='TechCare Schedule' />
                    <li>Schedule</li>
                </div>
                <div>
                    <img src={Message} alt='TechCare Message' />
                    <li>Message</li>
                </div>
                <div>
                    <img src={Transaction} alt='TechCare Home' />
                    <li>Transaction</li>
                </div>
            </ul>
        </div>

        <div className={style.nav_con_doc}>
            <img src={TechPractitioner} alt="TechCare Practitioner" height={50} width={50}/>
            <div>
                <h3>Dr. Jose Simmons</h3>
                <p> General Pratitioner</p>
            </div>
            <div className={style.line}></div>
            <div >
                <img src={Setting} alt='TechCare Home' height={20} width={20}/>
                <img src={Filter} alt='/' height={20} width={5}/>
            </div>
        </div>

    </div>
  )
}

export default Nav