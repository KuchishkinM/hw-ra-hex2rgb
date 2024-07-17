import { useState } from "react";
import { hex2Rgb } from './Hex2RGB';
import '../App.css'

export const Converter = () => {
  const [color, setColor] = useState('#808080');
  const [value, setValue] = useState(color);
  const [rgb, setRgb] = useState(hex2Rgb(value));

  const handleChange = (e) => {
    setValue(e.target.value);
    const hexColorReg = /#([a-f0-9]{6}|[a-f0-9]{3})\b/gi;
    if (hexColorReg.test(e.target.value) && e.target.value.length === 7) {
      const toRgb = hex2Rgb(e.target.value);
      setRgb(toRgb);
      setColor(e.target.value);
    } else if ((!hexColorReg.test(e.target.value) && e.target.value.length === 7) || e.target.value.length > 7) {
      setColor('#FF0000');
      setRgb('Ошибка!');
    }
  }

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <form className="converter-form">
        <input className="hex-color" value={value} onChange={handleChange}></input>
        <label className="grb-color " htmlFor="rgb">{rgb}</label>
      </form>
    </div>
  )
}