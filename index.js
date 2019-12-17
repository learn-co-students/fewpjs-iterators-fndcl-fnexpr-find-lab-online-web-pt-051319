const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
  let winFind = array.find(function (r) { return r['result'] === "W" })
  if (winFind !== undefined) {
    return winFind['year']
  }
  else {
    return undefined
  }
}