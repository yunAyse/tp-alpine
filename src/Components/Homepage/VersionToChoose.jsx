import { BiRightArrowAlt } from "react-icons/bi"; 
import React from 'react'
import { Link } from "react-router-dom";

import carLegend from '../../Assets/images/sources-homepage/versions/ALPINE-LEGENDE-1.png';
import carPure from '../../Assets/images/sources-homepage/versions/ALPINE-PURE-1.png';

const Configurator = () => {
  return (
   <section id='configurator' className='container py-[100px]'>
    <div className='flex flex-col gap-[80px]'>

    <h2 className='font-bold text-4xl text-center'>
     Configurer la Version de Votre Choix
    </h2>

    {/* Static Pour l'instant, la prochaine page commencera a partir du model choisis. */}
    <div className='flex justify-center gap-16'>
        <div className='w-[400px] flex flex-col gap-14 justify-center border-2 border-transparent rounded shadow-2xl py-3 px-6 '>
            <div className='flex justify-center'>
            <img className='w-80 object-cover' src={carLegend} alt="legend" />
            </div>

            <div className='flex flex-col items-center gap-3'>
                <h3 className='text-xl font-medium'>A110 Legende</h3>
                <p className=''>Prix : 58 500 € </p>
            </div>

            <div className='flex justify-center items-center gap-2 text-sky-600 '>
            <Link to='/configurator'>Configurer</Link>
                <Link to='/configurator'> <BiRightArrowAlt /> </Link>
            </div>
        </div>


        <div className='w-[400px] flex flex-col gap-14 justify-center border-2 border-transparent rounded shadow-2xl py-3 px-6 '>
            <div className='flex justify-center'>
            <img className='w-80 object-cover' src={carPure} alt="legend" />
            </div>

            <div className='flex flex-col items-center gap-3'>
                <h3 className='text-xl font-medium'>A110 Pure</h3>
                <p className=''>Prix : 54 700 € </p>
            </div>

            <div className='flex justify-center items-center gap-2 text-sky-600 '>
                <Link to='/configurator'>Configurer</Link>
                <Link to='/configurator'> <BiRightArrowAlt /> </Link>
            </div>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Configurator