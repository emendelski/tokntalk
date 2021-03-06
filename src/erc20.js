import React from 'react';

import cryptobots from './img/tokens/cryptobots-icon.svg';
import cryptobotsCover from './img/tokens/cryptobots.png';

import ethmoji from './img/tokens/ethmoji-icon.png';
import ethmojiCover from './img/tokens/ethmoji.jpg';

import dac from './img/tokens/dac-icon.svg';
import dacCover from './img/tokens/dac.jpg';

import bat from './img/tokens/bat-icon.svg';
import batCover from './img/tokens/bat.jpg';

import ben from './img/tokens/bentyn-icon.png';
import benCover from './img/tokens/bentyn.jpg';

import gnt from './img/tokens/golem-icon.svg';
import gntCover from './img/tokens/golem.png';

import snt from './img/tokens/status-icon.svg';
import sntCover from './img/tokens/status.png';

import mkr from './img/tokens/maker-icon.svg';
import mkrCover from './img/tokens/maker.png';

import mana from './img/tokens/decentraland-icon.png';
import manaCover from './img/tokens/decentraland.jpg';

import unicorn from './img/tokens/unicorn-icon.png';
import unicornCover from './img/tokens/unicorn.png';

import zrx from './img/tokens/zrx-icon.svg';
import zrxCover from './img/tokens/zrx.png';

import omg from './img/tokens/omisego-icon.svg';
import omgCover from './img/tokens/omisego.png';

import avocado from './img/tokens/avocado-icon.png';
import avocadoCover from './img/tokens/avocado.jpg';

const ercs20 = [
  {
    network: 'ethereum',
    address: '0xf7a6e15dfd5cdd9ef12711bd757a9b6021abf643',
    name: 'Bots',
    symbol: 'CBT',
    logo: cryptobots,
    coverImage: cryptobotsCover,
    primaryColor: '#ffffff',
    secondaryColor: '#3D5000',
    shadowColor: 'rgba(30,59,11,0.2)',
  },
  {
    network: 'ethereum',
    address: '0xa6d954d08877f8ce1224f6bfb83484c7d3abf8e9',
    name: 'EthMoji',
    symbol: 'MOJI',
    logo: ethmoji,
    coverImage: ethmojiCover,
    primaryColor: '#ffffff',
    secondaryColor: '#3D5000',
    shadowColor: 'rgba(30,59,11,0.2)',
  },
  {
    network: 'ethereum',
    address: '0x323a3e1693e7a0959f65972f3bf2dfcb93239dfe',
    name: 'DigitalArtChain',
    symbol: 'DAC',
    logo: dac,
    coverImage: dacCover,
    primaryColor: '#ffffff',
    secondaryColor: '#3D5000',
    shadowColor: 'rgba(30,59,11,0.2)',
  },
  {
    network: 'ethereum',
    address: '0xfa6f7881e52fdf912c4a285d78a3141b089ce859',
    name: 'Avocado',
    symbol: 'AVO',
    logo: avocado,
    coverImage: avocadoCover,
    primaryColor: '#ffffff',
    secondaryColor: '#3D5000',
    shadowColor: 'rgba(30,59,11,0.2)',
  },
  /*{
    network: 'ethereum',
    address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
    name: 'Basic Attention Token',
    symbol: 'BAT',
    logo: bat,
    coverImage: batCover,
    primaryColor: '#818181',
    secondaryColor: '#ffffff',
    shadowColor: 'rgba(75,75,75,0.4)',
  },*/
  {
    network: 'ethereum',
    address: '0x108c05cac356d93b351375434101cfd3e14f7e44',
    name: 'Bentyn',
    symbol: 'BEN',
    logo: ben,
    coverImage: benCover,
    primaryColor: '#BEC4CB',
    secondaryColor: '#2D1F18',
    shadowColor: 'rgba(88,66,54,0.3)',
  },
  {
    network: 'ethereum',
    address: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
    name: 'Decentraland MANA',
    symbol: 'MANA',
    logo: mana,
    coverImage: manaCover,
    primaryColor: '#121212',
    secondaryColor: '#ffffff',
    shadowColor: 'rgba(11,63,75,0.4)',
  },
  {
    network: 'ethereum',
    address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    name: 'Maker',
    symbol: 'MKR',
    logo: mkr,
    coverImage: mkrCover,
    primaryColor: '#C6FFF4',
    secondaryColor: '#276C5E',
    shadowColor: 'rgba(82,211,185,0.5)',
  },
  /*{
    network: 'ethereum',
    address: '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
    name: 'Golem',
    symbol: 'GNT',
    logo: gnt,
    coverImage: gntCover,
    primaryColor: '#002D64',
    secondaryColor: '#ffffff',
    shadowColor: 'rgba(31,54,90,0.5)',
  },*/
  /*{
    network: 'ethereum',
    address: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
    name: 'OmiseGO',
    symbol: 'OMG',
    logo: omg,
    coverImage: omgCover,
    primaryColor: '#1A52EF',
    secondaryColor: '#ffffff',
    shadowColor: 'rgba(26,82,239,0.5)',
  },*/
  {
    network: 'ethereum',
    address: '0x89205a3a3b2a69de6dbf7f01ed13b2108b2c43e7',
    name: 'Unicorn',
    symbol: '🦄',
    logo: unicorn,
    coverImage: unicornCover,
    primaryColor: '#C8F9FF',
    secondaryColor: '#5B3D9D',
    shadowColor: 'rgba(200,249,255,0.6)',
  },
  /*{
    network: 'ethereum',
    address: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
    name: 'Status',
    symbol: 'SNT',
    logo: snt,
    coverImage: sntCover,
    primaryColor: '#5B6CEE',
    secondaryColor: '#ffffff',
    shadowColor: 'rgba(91,108,238,0.5)',
  },*/
  /*{
    network: 'ethereum',
    address: '0xe41d2489571d322189246dafa5ebde1f4699f498',
    name: 'ZRX',
    symbol: 'ZRX',
    logo: zrx,
    coverImage: zrxCover,
    primaryColor: '#3C3C3C',
    secondaryColor: '#ffffff',
    shadowColor: 'rgba(60,60,60,0.5)',
  },*/
];

const sizes = {
  small: { width: '44px', height: '44px' },
  medium: { width: '54px', height: '54px' },
};

export const TokenImage = ({ token, size = 'small', ...restProps }) => {
  if (!token) {
    return null;
  }

  return <img src={token.logo} {...sizes[size]} {...restProps} />;
};

export default ercs20;
