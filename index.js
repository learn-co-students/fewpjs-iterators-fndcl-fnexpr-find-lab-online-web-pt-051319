const testVar = {}

function testFunc() {
  return "hi"
}

superbowlWin = (record) => {
  //find the record
  let result = record.find(season => season.result === "W")
  return result ? result.year : result

}