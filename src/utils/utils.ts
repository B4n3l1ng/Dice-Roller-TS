export type Dices = 4 | 6 | 8 | 10 | 12 | 20 | 100;

export const diceRoll = (dice: Dices) => {
  return Math.floor(Math.random() * dice + 1);
};

export const numberOfRolls = (rolls: number, dice: Dices) => {
  const arr: number[] = [];
  for (let i = 1; i <= rolls; i++) {
    arr.push(diceRoll(dice));
  }
  return arr;
};

import d4_1 from '../assets/d4-1.png';
import d4_2 from '../assets/d4-2.png';
import d4_3 from '../assets/d4-3.png';
import d4_4 from '../assets/d4-4.png';
import d6_1 from '../assets/d6-1.png';
import d6_2 from '../assets/d6-2.png';
import d6_3 from '../assets/d6-3.png';
import d6_4 from '../assets/d6-4.png';
import d6_5 from '../assets/d6-5.png';
import d6_6 from '../assets/d6-6.png';
import d8_1 from '../assets/d8-1.png';
import d8_2 from '../assets/d8-2.png';
import d8_3 from '../assets/d8-3.png';
import d8_4 from '../assets/d8-4.png';
import d8_5 from '../assets/d8-5.png';
import d8_6 from '../assets/d8-6.png';
import d8_7 from '../assets/d8-7.png';
import d8_8 from '../assets/d8-8.png';
import d10_1 from '../assets/d10-1.png';
import d10_2 from '../assets/d10-2.png';
import d10_3 from '../assets/d10-3.png';
import d10_4 from '../assets/d10-4.png';
import d10_5 from '../assets/d10-5.png';
import d10_6 from '../assets/d10-6.png';
import d10_7 from '../assets/d10-7.png';
import d10_8 from '../assets/d10-8.png';
import d10_9 from '../assets/d10-9.png';
import d10_10 from '../assets/d10-10.png';
import d12_1 from '../assets/d12-1.png';
import d12_2 from '../assets/d12-2.png';
import d12_3 from '../assets/d12-3.png';
import d12_4 from '../assets/d12-4.png';
import d12_5 from '../assets/d12-5.png';
import d12_6 from '../assets/d12-6.png';
import d12_7 from '../assets/d12-7.png';
import d12_8 from '../assets/d12-8.png';
import d12_9 from '../assets/d12-9.png';
import d12_10 from '../assets/d12-10.png';
import d12_11 from '../assets/d12-11.png';
import d12_12 from '../assets/d12-12.png';
import d20_1 from '../assets/d20-1.png';
import d20_2 from '../assets/d20-2.png';
import d20_3 from '../assets/d20-3.png';
import d20_4 from '../assets/d20-4.png';
import d20_5 from '../assets/d20-5.png';
import d20_6 from '../assets/d20-6.png';
import d20_7 from '../assets/d20-7.png';
import d20_8 from '../assets/d20-8.png';
import d20_9 from '../assets/d20-9.png';
import d20_10 from '../assets/d20-10.png';
import d20_11 from '../assets/d20-11.png';
import d20_12 from '../assets/d20-12.png';
import d20_13 from '../assets/d20-13.png';
import d20_14 from '../assets/d20-14.png';
import d20_15 from '../assets/d20-15.png';
import d20_16 from '../assets/d20-16.png';
import d20_17 from '../assets/d20-17.png';
import d20_18 from '../assets/d20-18.png';
import d20_19 from '../assets/d20-19.png';
import d20_20 from '../assets/d20-20.png';

export const imageObjects: { [key: string]: string } = {
  d4_1,
  d4_2,
  d4_3,
  d4_4,
  d6_1,
  d6_2,
  d6_3,
  d6_4,
  d6_5,
  d6_6,
  d8_1,
  d8_2,
  d8_3,
  d8_4,
  d8_5,
  d8_6,
  d8_7,
  d8_8,
  d10_1,
  d10_2,
  d10_3,
  d10_4,
  d10_5,
  d10_6,
  d10_7,
  d10_8,
  d10_9,
  d10_10,
  d12_1,
  d12_2,
  d12_3,
  d12_4,
  d12_5,
  d12_6,
  d12_7,
  d12_8,
  d12_9,
  d12_10,
  d12_11,
  d12_12,
  d20_1,
  d20_2,
  d20_3,
  d20_4,
  d20_5,
  d20_6,
  d20_7,
  d20_8,
  d20_9,
  d20_10,
  d20_11,
  d20_12,
  d20_13,
  d20_14,
  d20_15,
  d20_16,
  d20_17,
  d20_18,
  d20_19,
  d20_20,
};

const returnImage = (dice: Dices, value: number) => {
  return `d${dice}_${value}`;
};

export const turnToObject = (dice: Dices, array: number[]) => {
  const arrayWithImages = array.map((value) => {
    return { value: value, image: imageObjects[returnImage(dice, value)] };
  });
  return arrayWithImages;
};
