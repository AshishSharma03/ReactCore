import React from 'react';
import PropTypes from "prop-types";
import CBox from "components/CustomBox";
import bgImage from "assets/images/bg-about-us.jpg";

function HeroBackground({children,full,cover,image,color,placeItem}) {
  return <>
         <CBox
     minHeight={ (full)?"100vh":"75vh"}
     width="100%"
     bgColor={color}
      sx={{
       backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
         `${linearGradient(
           rgba(gradients.dark.main, 0.6),
           rgba(gradients.dark.state, 0.6)
         )}, url(${image})`,
       backgroundSize: (cover)?"cover":"none",
       backgroundPosition: "center",
       backgroundRepeat:"no-repeat",
       display: "grid",
       placeItems:"center",
     }}
    >
        {children}

    </CBox>
    </>;
}

HeroBackground.defaultProps ={
    full:false,
    cover: false,
    image: bgImage,
    color:"primary",

}

HeroBackground.propTypes = {
    full: PropTypes.bool.isRequired,
    image : PropTypes.string,
    cover: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired
  };
export default HeroBackground;
