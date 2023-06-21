const firstName: string = 'Samuel';
const age: number = 21;
const aproved: boolean = true;

console.log(firstName, age, aproved);

const userName = (name: string) : void => {
  console.log(`Olá me chamo ${name.toLocaleUpperCase()}`);
}

const getFavoritNumber = () : number => {
  return 9;
};

const sumNumbers = (firstNumber : number, lastNumber : number) : number => {
  return firstNumber + lastNumber;
}

const user = {
  name: <string> 'Samuel',
  age: <number> 21,
  city: <string> 'Brasilândia MG'
}

console.log(user);

const numbres: number[] = [1, 2, 3, 4, 5];
const letters: string[] = ['a', 'b', 'c'];
const booleans: boolean[] = [true, false];

numbres.push(numbres.length + 1);

const printid = (id: number | string) => {
  console.log(`Your ID is: ${id}`)
};

type UserInfo = {
  name: string;
  birthYear: number;
  age: number;
};

const printUserInfo = (data : UserInfo) => {
  console.log(`${data.name} was born in ${data.birthYear} as age ${data.age}`);
};

printUserInfo({ name: 'Samuel', birthYear: 2002, age: 21 });

type stateMatter = 'liquid' | 'solid' | 'gaseous';