import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// selection images
import bleu from "../../Assets/images/configurateur/couleurs/selection/bleu.jpg";
import blanc from "../../Assets/images/configurateur/couleurs/selection/blanc.jpg";
import noir from "../../Assets/images/configurateur/couleurs/selection/noir.jpg";
import { selectColor } from "../../features/AlpineSlice";

const Color = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const colors = useSelector((state) => state.configurator.color[0].legende);
  // console.log(colors[0].image);

  const colorChangeClick = (color) => {
    dispatch(selectColor(color));
    setSelectedImage(color.image);
    // console.log(color);
    setSelectedPrice(color.price);
    console.log(color.price);
  };

  const validateClick = () => {
    
    console.log('valid');
  };

  return (
    <section id="color" className="px-8" >
      <div className="selection_container flex ">

      <div className="flex flex-col items-center">
        {selectedImage && (
          <img className="w-50" src={selectedImage} alt={selectedImage.name} />
        )}
        {!selectedImage && (
          <img className="w-50" src={colors[2].image} alt="Default Blanc" />
        )}
        {/* <img className="w-50" src={colors[2].image} alt="blanc" /> */}
        {selectedPrice && <p className="text-5xl">{selectedPrice}</p>}
      </div>

      <div className="flex flex-col">
        {colors.map((color, index) => (
          <button
          className="w-25"
          key={index}
          onClick={() => colorChangeClick(color)}
          >
            <img src={color.vue} alt={color.name} />
          </button>
        ))}
      </div>
        </div>

      <div className="flex justify-end">
        <button className="bg-slate-400 p-3 rounded" onClick={() => validateClick()} >Valider & Continuer</button>
      </div>
    </section>
  );
};

export default Color;
