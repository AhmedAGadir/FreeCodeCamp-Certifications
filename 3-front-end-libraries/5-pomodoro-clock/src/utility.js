export const capitalize = str => {
	return str[0].toUpperCase() + str.substring(1)
}

export const zeroFill = num => {
	return num > 9 ? num.toString() : '0' + num
}