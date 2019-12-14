function superbowlWin(record) {
  let victory = record.find(function (data) {
    return data.result === "W"
  })
  if (victory) {
    return victory.year
  }
}