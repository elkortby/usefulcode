function list(names){
	if (names.length === 0) return ''
	if (names.length === 1) return names[0].name
	let res = names[0].name
	for (let i = 1; i < names.length - 1; i++) {
	  res = res + ", " + names[i].name
	}
	res = res + " & " + names[names.length - 1].name
	return res
}

console.log(list([]))
console.log(list([{name: 'Bart'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]))
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]))