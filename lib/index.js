// Import the "transliterate" method from the library
import { transliterate } from '@digitallinguistics/transliterate';

// The list of substitutions to make
const substitutions = {
  p: `b`,
  t: `d`,
  k: `g`,
};

export default ({from, to}, string) => {
    const substitutions = {
        // Vowels
        'ɨ': 'ı',
        'ə': 'ı',
        'ɜ': 'e',
        'aa': 'a',
        'ɐ': 'a',
        'a': 'e',

        // Consonants

        // Easy ones
        'p': 'p',
        'b': 'b',
        't': 't',
        'd': 'd',
        'k': 'k',
        'q': 'q',
        's': 's',
        'ts': 'ts',
        'w': 'w',
        'j': 'y',

        'sch': '#',

        'tʷ': 'tu'
    }

    const output = transliterate(string, substitutions);
    console.log(output);
    console.log(transliterate);

    return transliterate(string, substitutions);
    return string;
}