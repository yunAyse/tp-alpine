import React from "react";

// dimensions
import dimensions from "../../Assets/images/sources-homepage/caractéristiques/dimensions-tech.png";

// design
import design1 from "../../Assets/images/sources-homepage/design/duo-left.jpg";
import design2 from "../../Assets/images/sources-homepage/design/duo-right.jpg";
import design3 from "../../Assets/images/sources-homepage/design/Moteur_desktop.png";

// interieur
import interieur1 from "../../Assets/images/sources-homepage/interieur/interieur_desktop.png";

// motorisation
import moteurvideo from "../../Assets/video/MOTEUR_CINEMAGRAPH-.mp4";

// technologie
import technovideo from "../../Assets/video/Center-of-gravity-FR_LOW.mp4";

const Technical = () => {
  return (
    // dimensions of the car
    <section id="technical">
      <article className="bg-[#e1e1e1]">
        <div className="container py-20 px-12 flex gap-20 items-center">
          <div className="h-[200px] border-r-4 border-slate-400 flex items-center px-8">
            <h2 className="font-semibold text-5xl">Dimensions</h2>
          </div>

          <div className="flex justify-center items-center gap-10">
            <img
              className="w-[300px] object-cover"
              src={dimensions}
              alt="dimensions"
            />

            <p className="w-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              blanditiis, ratione qui, fugiat expedita laborum officiis magni
              molestiae accusantium cum odio obcaecati rem iusto deleniti.
              Reprehenderit sequi dolorem consequuntur! Fugit.
            </p>
          </div>
        </div>
      </article>

      <article className="bg-[#e1e1e1]">
        <div className="container py-5 px-12 flex flex-col gap-20">
          <div className="flex gap-12">
            <div>
              <img
                className="w-[800px] object-cover"
                src={design3}
                alt="design"
              />
            </div>
            <div className="h-[300px] w-fit border-l-4 border-slate-400 flex items-center justify-end px-8">
              <h2 className="font-semibold text-5xl text-right">Design</h2>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10">
            <img
              className="w-[300px] object-cover"
              src={design1}
              alt="design"
            />
            <p className="w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              blanditiis, ratione qui, fugiat expedita laborum officiis.
            </p>
            <img
              className="w-[300px] object-cover"
              src={design2}
              alt="design"
            />
          </div>
        </div>
      </article>

      <article className="bg-[#e1e1e1]">
        <div className="container py-20 px-12 flex justify-center gap-20 items-center">
          <div className="h-[200px] border-r-4 border-slate-400 flex items-center px-8">
            <h2 className="font-semibold text-5xl">Interieur</h2>
          </div>

          <div className="flex justify-center items-center gap-10">
            <img
              className="w-[340px] object-cover"
              src={interieur1}
              alt="interieur"
            />

            {/* <img
              className="w-[400px] object-cover"
              src={interieur2}
              alt="interieur"
            /> */}
            
          </div>
        </div>
      </article>

      <article className="bg-[#e1e1e1]">
        <div className="container py-5 px-12 flex flex-col gap-20">
          <div className="flex justify-center gap-16 ">
            <div>
              <video className="w-[500px]" autoPlay loop muted src={moteurvideo}/>
            </div>
            <div className="h-[300px] w-fit border-l-4 border-slate-400 flex items-center justify-end px-8">
              <h2 className="font-semibold text-5xl text-right">Moteur</h2>
            </div>
          </div>

         
        </div>
      </article>

      <article className="bg-[#e1e1e1]">
        <div className="container py-20 px-12 flex gap-20 items-center">
          <div className="h-[300px] border-r-4 border-slate-400 flex items-center px-8">
            <h2 className="font-semibold text-5xl">Technologie</h2>
          </div>

          <div className="flex justify-center items-center gap-10">
            <video className="w-[500px]" autoPlay loop muted src={technovideo}/>

          </div>
        </div>
      </article>
    </section>
  );
};

export default Technical;
