export default function two_crystal_balls(breaks: boolean[]): number {
	const jumpingDistance = Math.floor(Math.sqrt(breaks.length))
	let i = jumpingDistance

	// this is where we break our first ball
	while (i < breaks.length) {
		if (breaks[i]) {
			break
		}
		i += jumpingDistance
	}

	let j = i - jumpingDistance

	// this is where our second ball breaks
	while (j <= i) {
		if (breaks[j]) return j
		j++
	}

	return -1
}
