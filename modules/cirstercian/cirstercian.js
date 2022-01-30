function rotate(name, object, rotate = 180){
    for(let key in object) {
        const img = document.createElement('img');
        img.src = object[key];
        img.setAttribute('style', 'transform:rotate('+rotate+'deg)');
        document.getElementById(name).appendChild(img);
    }
}

function flip(name, object, rotate = 180){
    // object.forEach(element => {
    //     element = document.querySelector(name).style.transform = "rotateY("+rotate+")";
    // });
}

const upperRight = document.getElementById('unit')
const upperLeft = document.getElementById('ten')
const bottomRight = document.getElementById('thousand')
const bottomLeft = document.getElementById('hundred')

const symbolList = document.querySelector('.canvas__select')
const triggerSections = [upperRight, upperLeft, bottomRight, bottomLeft];
const cirsetercienSpritePath ="../../assets/storage/cirstercians/"

const unitSprite = {
    "0": "",  // no sprite
    "1": cirsetercienSpritePath+"1.svg",
    "2": cirsetercienSpritePath+"2.svg",
    "3": cirsetercienSpritePath+"3.svg",
    "4": cirsetercienSpritePath+"4.svg",
    "5": cirsetercienSpritePath+"5.svg",
    "6": cirsetercienSpritePath+"6.svg",
    "7": cirsetercienSpritePath+"7.svg",
    "8": cirsetercienSpritePath+"8.svg",
    "9": cirsetercienSpritePath+"9.svg",
}

/*
const cirstercianNumber = {
    "unit": unitSprite,
    "ten": flip('#ten', unitSprite),
    "hundred": flip('#ten', unitSprite) && rotate('#thousand', unitSprite),
    "thousand": rotate('#thousand', unitSprite),
}
*/

triggerSections.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        rotate('canvas__select', unitSprite)

        /* display all icon for the target view */
        /* event listenent on element to add image -> dom manipulation (innerhtml) */
    });
});
