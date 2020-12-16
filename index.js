//Object drill 1

const loaf = {
    flour: 300,
    water: 210
    
    console.log(flour);
    console.log(water);
    
    hydration: function() {
        return(loaf.water/loaf.flour)*100;
    }
};

console.log(loaf.hydration());

//Object drill 2

const object = {
    foo: '1',
    bar: '2',
    fun: '3',
    quux: '4',
    spam: '5'
};

for (const property in object) {console.log(`${property}: ${object[property]}`);}

//Object drill 3

const food = {
    meal: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(food.meal[3]);

//Object drill 4 & 5

const champion1 = {
    name: 'yasuo',
    jobTitle: 'topLaner',
}

const champion2 = {
    name: 'kayn',
    jobTitle: 'jungler',
    boss: 'yasuo'
}

const champion3 = {
    name: 'yone',
    jobTitle: 'midLaner',
    boss: 'yasuo'
}

const champion4 = {
    name: 'lucian',
    jobTitle: 'botLaner',
    boss: 'yasuo'
}

const champion5 = {
    name: 'senna',
    jobTitle: 'support',
    boss: 'yasuo'
}


const team = [champion1, champion2, champion3, champion4, champion5];

for(let i = 0; i < team.length; i++){
    if(team[i].boss) {
        console.log(`${team[i].jobTitle} ${team[i].name} doesn't report to anybody.`)
    } else {
        console.log(`${team[i].jobTitle} ${team[i].name} reports to ${team[i].boss}.`)
    }
};

//Object drill 6

const cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};

const decode = function(encode) {
    let word = encode.charAt(0);
    let number = 0;
    for(prop in cipher) {
        if(word === `${prop}`) {
            number = `${cipher[prop]}`;
        }
    }
    let encodeLetter = `${encode.charAt(number -1)}`;
    if(number === 0){
        return ' ';
    } else {
        return encodeLetter;
    }
}

decode('apple');

const decodeWords = function(letter) {
    let check = letter.split(' ');
    let arr = [];
    for(let i = 0; i < check.length; i++) {
        arr.push(check[i]);
    }
    for(let j = 0; j < arr.length; j++) {
        console.log(decode(arr[j]));
    }
}

decodeWords('apple banana carrot elephant');

//Object drill 7

function createCharacter(name, nickname, race, origin, attack, defense) {
   return {
       name,
       nickname,
       race,
       origin,attack,
       defense,
       describe: function() {
           console.log(`${name} is a ${race} from ${origin}.`);
       }
       evaluateFight: function(character) {
           let x = 0;
           let y = 0;
           if(this.attack > character.defense) {
               x = this.attack - character.defense;
           }
           if(this.defense < character.attack) {
               y = character.attack - this.defense;
           }
           return `Your opponent takes ${x} damage and you receive ${y} damage.`;
       }
   } 
};

const characters = {
    createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
    createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5)
};

console.log(characters);

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-elf', 'Rivendell'));

let findCharacter = characters.find(characters => {
    return characters.nickname === 'aragon';
});

findCharacter.describe();

let filterRace = characters.filter(characters => {
    return characters.race === 'hobbit';
});

let filterAttack = characters.filter(characters => {
    return characters.attack > 5;
});