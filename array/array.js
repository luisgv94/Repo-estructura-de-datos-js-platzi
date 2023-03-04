// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    if (!item) return;
    this.shiftIndex(index);

    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item) {
    if (!item) return this.length;
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;
    this.length++;
    return this.length;
  }

  shift() {
    if (this.length === 0) return undefined;

    const firstItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }
}

const myArray = new MyArray();
console.log('======= myArray =======');
console.log(myArray.push('Luis'));
console.log(myArray.push('Jose'));
console.log(myArray.push('Fer'));
console.log(myArray.delete(4));
console.log(myArray);

console.log('======= myArray2 =======');
const myArray2 = new MyArray();
console.log(myArray2.unshift('Platzinauta'));
console.log(myArray2.unshift('!!!'));
console.log(myArray2.unshift('lograste'));
console.log(myArray2.unshift('lo'));
console.log(myArray2);

console.log('======= myArray3 =======');
const myArray3 = new MyArray();
myArray3.unshift('Con el');
myArray3.unshift('Suerte');
myArray3.unshift('desafio');
myArray3.unshift('platzinauta');
myArray3.unshift('Un 🐱 random en el desafío');
console.log(myArray3.shift());
console.log(myArray3);
