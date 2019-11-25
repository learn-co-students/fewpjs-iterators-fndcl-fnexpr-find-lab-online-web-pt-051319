const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (record) => {
	let win = record.find( season => season.result == 'W')
	return win ? win.year : win
}