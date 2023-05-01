
let arr = [
  { id: 51, name: 'John', age: 30 },
  { id: 13, name: 'Alice', age: 35 },
  { id: 20, name: 'Jane', age: 25 }
];

arr.sort((a,b)=>b.age-a.age);

for(let obj in arr){	
		console.log("Hi, my name is " + arr[obj].name + " I'm " + arr[obj].age + " year's old " + ",my ID : "+arr[obj].id);
}