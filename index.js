const characterMapBase = {
    'àáâãå': 'a',
    'äæ': 'ae',
    'ç': 'c',
    'èéêë': 'e',
    'ƒ': 'f',
    'ìíîïı': 'i',
    'ñ': 'n',
    'òóôõø': 'o',
    'öœ': 'oe',
    'ß': 'ss',
    'š': 's',
    'þð': 'th',
    'ùúû': 'u',
    'ü': 'ue',
    'ýÿ': 'y',
    'ž': 'z'
};

export const characterMap = Object.keys(characterMapBase).reduce((map, charGroup)=>{
    const replacement = characterMapBase[charGroup];
    charGroup.split('')
        .forEach((char)=> {
            map[char] = replacement;
        }, map);

    const upperReplacement = replacement.toUpperCase();
    charGroup.toUpperCase()
        .replace(/[a-z]/gi, '')
        .split('')
        .forEach((char)=> {
            map[char] = upperReplacement;
        }, map);

    return map;
}, {});

export default (str)=> str.replace(
        /[^a-z\d]/ig,
        (char)=>characterMap[char]||char
);
