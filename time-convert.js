const timeConvert = num => {
  let str = "";
  let secondes = Math.floor(num % 60);
  let heures = Math.floor(num / 60 / 60);
  let minutes = Math.floor((num / 60) % 60);
  if (heures < 10) str += "0";
  str += heures + " : ";
  if (minutes < 10) str += "0";
  str += minutes + " : ";
  if (secondes < 10) str += "0";
  str += secondes;

  return str;
};

console.log(timeConvert(126)); // Affichera "00:02:06"
console.log(timeConvert(4804)); // Affichera "01:20:04"
