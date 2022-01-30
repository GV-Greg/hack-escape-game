function direction(arr) {
	// une personne donne une direction depuis un point vers une direction "NORTH", "SOUTH", "WEST", "EAST". 
  let opposite = { SOUTH: "NORTH", NORTH: "SOUTH", WEST: "EAST", EAST: "WEST" };
  return arr.reduce(function (a, b) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b);
    return a;
  }, []);
}

function move (position, mouvement) {
  return position + mouvement
}

function escape(safeDistance, dangerDistance, votreVitesse, dangerVitesse, aide){
	// test si vitesse jusqu'a zone safe est supérieur à la vitesse du danger
  if(aide){
    dangerVitesse /= 2;
  }
  return safeDistance/votreVitesse < dangerDistance/dangerVitesse ? "Vivant" : "Mort";
}

function stringIntoPairs(str){
	// Splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with a ('?')
  let i = 0;
  let result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '?';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

function removeCarater(str,a) {
	// remove all (a) from a string
  return str.split(a).join('');
}

function validWord(list, word) {
	// Test if the string can be entirely formed by consecutively concatenating words of the list
  for (let x of list) if (word.startsWith(x) && validWord(list, word.slice(x.length))) 
	return true;
}