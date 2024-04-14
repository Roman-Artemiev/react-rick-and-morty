import React, { useEffect, useState } from 'react'
import "./style/search-input.css"

const SearchInput = ({onSearch, placeholder, onReset = false }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value); // Pass search query to parent component
    };

    useEffect(() => {
        if (onReset) {
            setSearchQuery(''); // Reset search query when onReset changes
        }
    }, [onReset]);


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
    <div className='search-input'>
        <ApplyTextStrokeSelect
            text={placeholder}
            strokeColor='#09B20E'
            textColor='#BDFFA0'
            textSize="20"
            containerElement={document.getElementById("searchInput")}
        />

        <input 
            className='search-input__input' 
            type="text" 
            id="searchInput" 
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
        />
        {/* <input className='search-input__input' type="text" id="searchInput" placeholder='Search Episode' /> */}
        <svg  className='search-input__icon' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.3258 26.3518L35 35M30 17.5C30 24.4035 24.4035 30 17.5 30C10.5964 30 5 24.4035 5 17.5C5 10.5964 10.5964 5 17.5 5C24.4035 5 30 10.5964 30 17.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
  )
}

export default SearchInput