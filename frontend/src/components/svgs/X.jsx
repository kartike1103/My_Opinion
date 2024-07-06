
	const XSvg = (props) => (
		// <svg width="185px" height="185px" viewBox="-8.64 -8.64 65.28 65.28" id="b" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="1.824" transform="rotate(0)">
		//   <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(1.44, 1.44), scale(0.94)">
		// 	<rect x="-8.64" y="-8.64" width="65.28" height="65.28" rx="32.64" fill="#8C00F0" strokeWidth="0"></rect>
		//   </g>
		//   <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#6427be" strokeWidth="2.208">
		// 	<defs>
		// 	  <style>
		// 		{`
		// 		  .d { fill: none; stroke-linecap: round; stroke-linejoin: round; }
		// 		  .text { font-size: 10px; fill: white; text-anchor: middle; dominant-baseline: middle; }
		// 		`}
		// 	  </style>
		// 	</defs>
		// 	<path className="d" d="M24,2.5C12.1259,2.5,2.5,12.1259,2.5,24c0,5.4902,2.0752,10.4837,5.4617,14.2834-0.971,2.8007-2.9933,3.6747-5.4617,4.5671,2.2605,2.1812,6.6677,2.7591,10.6226-0.3278,3.1938,1.8799,6.9033,2.9773,10.8774,2.9773,11.8741,0,21.5-9.6259,21.5-21.5S35.8741,2.5,24,2.5Z"></path>
		// 	<g>
		// 	  <rect className="d" x="31.6398" y="19.8877" width="5.8181" height="7.709" rx="2.909" ry="2.909"></rect>
		// 	  <g>
		// 		<path className="d" d="M16.9179,22.7967c0-1.6066,1.3024-2.909,2.909-2.909h0c1.6066,0,2.909,1.3024,2.909,2.909v4.7999"></path>
		// 		<line className="d" x1="16.9179" y1="19.8877" x2="16.9179" y2="27.5967"></line>
		// 		<path className="d" d="M22.736,22.7967c0-1.6066,1.3024-2.909,2.909-2.909h0c1.6066,0,2.909,1.3024,2.909,2.909v4.7999"></path>
		// 	  </g>
		// 	  <g>
		// 		<circle fill="none" cx="13.5602" cy="17.1792" r="0.75"></circle>
		// 		<line className="d" x1="13.5602" y1="19.8877" x2="13.5602" y2="27.5967"></line>
		// 	  </g>
		// 	</g>
		//   </g>
		//   <g id="SVGRepo_iconCarrier">
		// 	<defs>
		// 	  <style>
		// 		{`
		// 		  .d { fill: none; stroke-linecap: round; stroke-linejoin: round; }
		// 		  .text { font-size: 10px; fill: white; text-anchor: middle; dominant-baseline: middle; }
		// 		`}
		// 	  </style>
		// 	</defs>
		// 	<path className="d" d="M24,2.5C12.1259,2.5,2.5,12.1259,2.5,24c0,5.4902,2.0752,10.4837,5.4617,14.2834-0.971,2.8007-2.9933,3.6747-5.4617,4.5671,2.2605,2.1812,6.6677,2.7591,10.6226-0.3278,3.1938,1.8799,6.9033,2.9773,10.8774,2.9773,11.8741,0,21.5-9.6259,21.5-21.5S35.8741,2.5,24,2.5Z"></path>
		// 	<g>
		// 	  <rect className="d" x="31.6398" y="19.8877" width="5.8181" height="7.709" rx="2.909" ry="2.909"></rect>
		// 	  <g>
		// 		<path className="d" d="M16.9179,22.7967c0-1.6066,1.3024-2.909,2.909-2.909h0c1.6066,0,2.909,1.3024,2.909,2.909v4.7999"></path>
		// 		<line className="d" x1="16.9179" y1="19.8877" x2="16.9179" y2="27.5967"></line>
		// 		<path className="d" d="M22.736,22.7967c0-1.6066,1.3024-2.909,2.909-2.909h0c1.6066,0,2.909,1.3024,2.909,2.909v4.7999"></path>
		// 	  </g>
		// 	  <g>
		// 		<circle fill="none" cx="13.5602" cy="17.1792" r="0.75"></circle>
		// 		<line className="d" x1="13.5602" y1="19.8877" x2="13.5602" y2="27.5967"></line>
		// 	  </g>
		// 	</g>
		//   </g>
		//   {/* <text x="13.5602" y="17.1792" className="text">imo</text> */}
		// </svg>
		// <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="260.000000pt" height="280.000000pt" viewBox="0 0 260.000000 280.000000" preserveAspectRatio="xMidYMid meet">

		// <rect width="100%" height="100%" fill="#000000"/>
		// <g transform="translate(0.000000,280.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
		// <path d="M0 1500 l0 -1300 1300 0 1300 0 0 1300 0 1300 -1300 0 -1300 0 0 -1300z m853 242 c61 -48 137 -107 169 -130 l56 -43 138 106 c177 136 198 147 299 153 65 3 91 0 136 -17 79 -30 141 -88 181 -169 29 -58 33 -76 32 -142 -1 -98 -34 -175 -105 -242 -71 -67 -141 -91 -244 -86 -98 6 -161 34 -224 103 -41 45 -80 115 -81 145 0 8 25 34 54 57 l55 42 7 -44 c20 -137 168 -222 289 -166 47 22 99 74 114 114 15 39 14 121 -3 160 -27 65 -115 126 -181 127 -65 0 -108 -24 -286 -160 l-182 -139 -103 79 c-57 44 -106 80 -109 80 -3 0 -5 -90 -5 -200 l0 -200 -65 0 -65 0 0 330 c0 182 2 330 5 330 3 0 56 -40 118 -88z"/>
		// </g>
		// </svg>
		<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="8" width="35" height="16" stroke="#FFFFFF" stroke-width="2"/>
  <polygon points="28,24 32,28 36,24" fill="#FFFFFF"/>
  <text x="26" y="20" font-size="4" font-family="Comic Sans MS" fill="#FFFFFF">In My Opinion</text>
  <circle cx="20" cy="40" r="8" stroke="#FFFFFF" stroke-width="2"/>
  <circle cx="44" cy="40" r="8" stroke="#FFFFFF" stroke-width="2"/>
  <path d="M12,56 Q20,48 28,56" stroke="#FFFFFF" stroke-width="2" fill="none"/>
  <path d="M36,56 Q44,48 52,56" stroke="#FFFFFF" stroke-width="2" fill="none"/>
</svg>


);
export default XSvg;


