import React, { useState, useEffect } from 'react';

function ApplyTextStroke({ text, strokeColor = "#09B20E", textColor = "#BDFFA0", textSize, strokeSize = "2", className }) {
    const [containerStyle, setContainerStyle] = useState({});
    const tSize = parseInt(textSize);
    const sSmooth = 4;
    const sSize = strokeSize;

    useEffect(() => {
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
        const tFamily = `'Permanent Marker', cursive`;
        const tBold = false;
        const s = getCSS(tFamily, tBold, tSize, strokeColor, sSize, strokeColor, sSmooth);

        setContainerStyle({
            fontFamily: tFamily,
            fontWeight: tBold ? "bold" : "normal",
            fontSize: tSize + "px",
            color: textColor,
            textShadow: s.prop
        });
        }

        renew();
    }, [text, strokeColor, textColor, textSize]);

    return (
        <div className={`ts ${className}`} style={containerStyle}>
        {text}
        </div>
    );
}

export default ApplyTextStroke;