const ordliste = ['maling', 'grænse', 'elite', 'oversvømmende', 'ødelæggelse', 'tilstedeværelse'];

const langeOrd = ordliste.filter(ord => ord.length < 7);
const korteOrd = ordliste.filter(ord => ord.length > 7);
const mellemOrd = ordliste.filter(ord => ord.length === 5);

console.log(korteOrd);
console.log(langeOrd);
console.log(mellemOrd);
