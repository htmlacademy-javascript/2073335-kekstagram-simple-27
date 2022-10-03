//Функция, передающая случайное число из переданного диапазона
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//функция на проверку длины строки
const checkLineLength = (line, maxLength) => line.length <= maxLength;

checkLineLength();
getRandomNumber();
