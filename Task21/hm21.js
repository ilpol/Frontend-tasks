// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
  'one': 'number',
};

function resolve1(inputObject) {
  const val =  Object.values(inputObject)[0];
  const key = Object.keys(inputObject)[0];
    
  return {
    [val] : key
    }
};

const result1 = resolve1(firstObject);
console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
  'apple': 'fruit',
  'potato': 'vegetable',
  'strawberry': 'berry',
};

function resolve2(inputObject) {
  const vals =  Object.values(inputObject);
  const keys = Object.keys(inputObject);
  const resolved = {};
  let val;
  keys.forEach((key, index) => {
    val = vals[index];
    resolved[val] = key;
  });

  return resolved;
};

const result2 = resolve2(secondObject);
console.log(result2); 
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }

console.log(secondObject);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

function centuryFromYear(year) {
  if (year>=0) {
    console.log(Math.ceil(year/100))
  } else {
    console.log(Math.floor(year/100))
  }
}
const year = 1905;
centuryFromYear(year); // 20

const year2 = 1700;
centuryFromYear(year2); // 18.
