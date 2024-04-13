import React, { useEffect } from 'react'
import "./style/filtr-select.css"

const FiltrSelect = ({ text, textSize, id, onChange, selectValue, array }) => {
    function ApplyTextStrokeSelect({ text, strokeColor, textColor, textSize, containerElement }) {
        useEffect(() => {
            if (containerElement) {
                applyTextStroke(text, strokeColor, textColor, containerElement, textSize);
            }
        }, [text, strokeColor, textColor, textSize, containerElement]);
    
        return null; // This component doesn't render anything
      }
    
    function applyTextStroke(text, strokeColor, textColor, containerElement, textSize) {
          var tSize = parseInt(textSize);
          var sSmooth = 4;
          var sSize = 1;
    
          function getCSS(tFamily, tBold, tSize, tColor, size, color, smooth) {
              var s = "";
    
              var sm = smooth > 0 ? smooth + "px" : smooth + "  ";
              var wp = size + "px";
              for (var i = 0; i <= size; i++) {
                  var ip = i > 0 ? i + "px" : i + "  ";
    
                  s += "\t\t-" + ip + " -" + wp + " " + sm + " " + color + ",\n";
                  s += "\t\t " + ip + " -" + wp + " " + sm + " " + color + ",\n";
                  s += "\t\t-" + ip + "  " + wp + " " + sm + " " + color + ",\n";
                  s += "\t\t " + ip + "  " + wp + " " + sm + " " + color + ",\n";
                  s += "\t\t-" + wp + " -" + ip + " " + sm + " " + color + ",\n";
                  s += "\t\t " + wp + " -" + ip + " " + sm + " " + color + ",\n";
                  s += "\t\t-" + wp + "  " + ip + " " + sm + " " + color + ",\n";
                  s += "\t\t " + wp + "  " + ip + " " + sm + " " + color + ",\n";
              }
    
              s = s.slice(0, -2);
    
              return {
                  css: ".ts {\n" + "\tfont-family: " + tFamily + ";\n\tfont-size: " + tSize + "px;" + (tBold ? "\n\tfont-weight: bold;" : "") + "\n\tcolor: " + tColor + ";\n\ttext-shadow: \n" + s + ";\n}\n/* created with http://protocoder.ru/css/strokeTextGen */\n",
                  prop: s
              };
          }
    
          function renew() {
              var tFamily = `'Permanent Marker', cursive`;
              var tBold = false;
              var s = getCSS(tFamily, tBold, tSize, strokeColor, sSize, strokeColor, sSmooth);
    
              containerElement.style.fontFamily = tFamily;
              containerElement.style.fontWeight = tBold ? "bold" : "normal";
              containerElement.style.fontSize = tSize + "px";
              containerElement.style.color = textColor;
              containerElement.style.textShadow = s.prop;
          }
    
          renew();
      }
      

  return (
    <div className='filter-select'>
        <ApplyTextStrokeSelect
              text={text}
              strokeColor='#09B20E'
              textColor='#BDFFA0'
              textSize={textSize}
              containerElement={document.getElementById(id)}
        />
        <select onChange={onChange} id={id} className="filter filter__select" value={selectValue}>
            <option value=" " selected>{text}</option>
            {array.map((item, index) => (
                <option key={index} value={item}>{item}</option>
            ))}
        </select>
    </div>
  )
}

export default FiltrSelect