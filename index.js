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
    'ẞ': 'SS',
    'š': 's',
    'þð': 'th',
    'ùúû': 'u',
    'ü': 'ue',
    'ýÿ': 'y',
    'ž': 'z'
};

export const characterMap = Object.keys(characterMapBase).reduce((map, charGroup)=>{
    // this is not entirely true, see ß/ẞ but holds true for the rest and doesnt break anything
    const replacementLowerCase = characterMapBase[charGroup];
    const replacementUpperCase = replacementLowerCase.toUpperCase();

    charGroup.split('')
    .reduce((map, ch)=> {
        const CH = ch.toUpperCase();
        map[ch] = replacementLowerCase;

        /*
         * firefox uppercases "ß" to "ß" 
         * this would make us replace all "ß" occurences with "SS" 
         * which is just wrong
         */
        const doesNotExistYet = !map[CH];

        /*
         * chrome uppercases "ß" to "SS"
         * however we dont want to replace "SS" as it can naturally occur
         */
        const isStillSpecial =  !/[a-z]/gi.test(CH);

        if (doesNotExistYet && isStillSpecial) {
            map[CH] = replacementUpperCase;
        }
        return map;
    }, map);

    return map;
}, {});

export default (str)=> str.replace(
        /[^a-z\d]/ig,
        (char)=>characterMap[char]||char
);
