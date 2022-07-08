import React from "react";

function BgSvg() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="700" height="700" viewBox="0 0 700 700">
            <defs>
                <filter id="nnnoise-filter" width="140%" height="140%" x="-20%" y="-20%" colorInterpolationFilters="linearRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
                    <feTurbulence x="0%" y="0%" baseFrequency="0.05" numOctaves="4" result="turbulence" seed="15" stitchTiles="stitch" type="fractalNoise"></feTurbulence>
                    <feSpecularLighting x="0%" y="0%" in="turbulence" lightingColor="hsl(0, 0%, 100%)" result="specularLighting" specularConstant="3" specularExponent="20" surfaceScale="7">
                        <feDistantLight azimuth="3" elevation="168"></feDistantLight>
                    </feSpecularLighting>
                </filter>
            </defs>
            <path fill="#f43f5e" d="M0 0H700V700H0z"></path>
            <path fill="hsl(0, 0%, 100%)" d="M0 0H700V700H0z" filter="url(#nnnoise-filter)"></path>
        </svg>
    );
}

export default BgSvg;
