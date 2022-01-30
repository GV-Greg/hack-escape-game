function direction(arr) {
	// a person gives a direction from a point to a cardinal direction
  let opposite = { SOUTH: "NORTH", NORTH: "SOUTH", WEST: "EAST", EAST: "WEST" };
  return arr.reduce(function (a, b) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b);
    return a;
  }, []);
}

function move (position, movement) {
  return position + movement
}

function escape(safeDistance, dangerDistance, yourSpeed, dangerSpeed, help){
	// testing if speed until safe zone is above the danger speed
  if(help){
    dangerSpeed /= 2;
  }
  return safeDistance/dangerSpeed < dangerDistance/dangerSpeed ? "Vivant" : "Mort";
}

function stringIntoPairs(str){
	// Splits the string into pairs of two characters. If the string contains an odd number of characters then it should
    // replace the missing second character of the final pair with a ('?')
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

function removeCharacter(str,a) {
	// remove all (a) from a string
  return str.split(a).join('');
}

function validWord(list, word) {
	// Test if the string can be entirely formed by consecutively concatenating words of the list
  for (let x of list) if (word.startsWith(x) && validWord(list, word.slice(x.length))) 
	return true;
}