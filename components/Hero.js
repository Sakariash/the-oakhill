import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import HeroContent from "../components/Text/HeroContent";


const formatTextWithLineBreaks = (text) => {
  return text.split(/(\. )/).map((part, index) => (
    part.match(/(\. )/) ? <React.Fragment key={index}>{part}<br /></React.Fragment> : part
  ));
};

const Hero = ({ blok }) => {
  return (
    <HeroContent blok={blok}/>
  );
};

export default Hero;