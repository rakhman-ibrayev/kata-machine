export default function bs_list(haystack: number[], needle: number): boolean {
	let low = 0, high = haystack.length - 1

	while (low <= high) {
		const mid = low + Math.floor((high - low) / 2)

		if (haystack[mid] === needle) return true		

		if (haystack[mid] < needle) {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}

	return false
}
