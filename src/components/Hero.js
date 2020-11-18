import React, { Children } from 'react'

export default function Hero({children, hero, headerStyle}) {
    return <header className={hero}>{children}</header>;
    
}

Hero.defaultProps ={
    hero: "defaultHero header",
};

