import React from "react";

import a110Model from '../Assets/images/sources-homepage/A110/Alpine-A110-1.jpg'
import a110ModelCollage from '../Assets/images/sources-homepage/A110/Presentation_desktop-1.png';

const Model = () => {
  return (
    <section className="py-12">
      <div className="py-8 container flex items-center text-right gap-5">
        <div className="w-50 sm:w-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugiat eaque illo libero tenetur iusto eveniet fugit omnis exercitationem placeat quis consequatur expedita, asperiores sint porro debitis incidunt qui dignissimos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam numquam pariatur nulla ut mollitia doloremque a sint unde et adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div className="w-50 sm:w-100">
            <img src={a110Model} alt="a110" />
        </div>
      </div>

      <div className="py-8 container flex items-center gap-4">
        <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quasi incidunt veniam molestiae velit quo, optio nemo commodi fugit qui. Suscipit iste natus eum consectetur 
        </div>
        <div>
            <img src={a110ModelCollage} alt="a110" />
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit doloribus totam necessitatibus iure non aliquid, id ea facere sequi fuga reiciendis dolore similique 
        </div>
      </div>
    </section>
  );
};

export default Model;
