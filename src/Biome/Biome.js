import React from 'react';

var imgArray = ['./biomes/brasserie.jpg', './biomes/tomb.jpg', './biomes/aquarium.jpeg', './biomes/beerPlant.jpg', './biomes/lab.jpg', './biomes/anchorage.png', './biomes/bison.jpeg', './biomes/seoul.jpg', './biomes/antwerp.jpg', './biomes/mosque.jpg', './biomes/gymnasium.jpg', './biomes/megaChurch.jpg', './biomes/casino.jpeg', './biomes/luau.jpg', './biomes/cozy.jpg', './biomes/cave.jpg']

const biome = (props) => {
  return <div>
          <img src={imgArray[props.background]} /> </div>
}

export default biome;
