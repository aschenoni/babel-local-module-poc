
const test = () => console.log('hello es6!');
const spreadCheck = () => {
	let a = {a: 1, b: 2, c: 0};
	let b = {c: 3, d: 4, e: 5};
	let c = {...a, ...b};

	console.log(c);
	testVal('a', 1, c);
	testVal('b', 2, c);
	testVal('c', 3, c);
	testVal('d', 4, c);
	testVal('e', 5, c);

}
function testVal(property, equalTo, object){
	console.log(`${property} should equal ${equalTo} -> ${object[property]} === ${equalTo} -> ${object[property] === equalTo}`);
}
export {test, spreadCheck};