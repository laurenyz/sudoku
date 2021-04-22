let original = [
  [
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[4, 5, 6], [7, 8, 9], [1, 2, 3]],
    [[7, 8, 9], [1, 2, 3], [4, 5, 6]]
  ],
  [
    [[2, 3, 1], [5, 6, 4], [8, 9, 7]],
    [[5, 6, 4], [8, 9, 7], [2, 3, 1]],
    [[8, 9, 7], [2, 3, 1], [5, 6, 4]]
  ],
  [
    [[3, 1, 2], [6, 4, 5], [9, 7, 8]],
    [[6, 4, 5], [9, 7, 8], [3, 1, 2]],
    [[9, 7, 8], [3, 1, 2], [6, 4, 5]]
  ],
]

function randomOfThree() {
  return Math.floor(Math.random() * 3)
}

function randomOfTwo() {
  return Math.floor(Math.random() * 2)
}

let topRow, middleRow, bottomRow, randomFirst, randomSecond, randomThird

topRow = original[0]
randomFirst = topRow.splice(randomOfThree(), 1)[0]
randomSecond = topRow.splice(randomOfTwo(), 1)[0]
randomThird = topRow.splice(0)[0]
topRow = [randomFirst, randomSecond, randomThird]

middleRow = original[1]
randomFirst = middleRow.splice(randomOfThree(), 1)[0]
randomSecond = middleRow.splice(randomOfTwo(), 1)[0]
randomThird = middleRow.splice(0)[0]
middleRow = [randomFirst, randomSecond, randomThird]

bottomRow = original[2]
randomFirst = bottomRow.splice(randomOfThree(), 1)[0]
randomSecond = bottomRow.splice(randomOfTwo(), 1)[0]
randomThird = bottomRow.splice(0)[0]
bottomRow = [randomFirst, randomSecond, randomThird]

const combinedRows = [topRow, middleRow, bottomRow]

let randomFirstNum, randomSecondNum, randomThirdNum
let firstRan, secondRan, thirdRan, fourtRan, fifthRan, sixthRan

firstRan = randomOfThree()
thirdRan = randomOfThree()
fifthRan = randomOfThree()
secondRan = randomOfTwo()
fourthRan = randomOfTwo()
sixthRan = randomOfTwo()

const combinedColumns = combinedRows.map(bigRow => {
  return bigRow.map(row => {
    column1 = row[0]
    randomFirstNum = column1.splice(firstRan, 1)[0]
    randomSecondNum = column1.splice(secondRan, 1)[0]
    randomThirdNum = column1.splice(0)[0]
    column1 = [randomFirstNum, randomSecondNum, randomThirdNum]
    // console.log("first final", column1Final)

    column2 = row[1]
    randomFirstNum = column2.splice(thirdRan, 1)[0]
    randomSecondNum = column2.splice(fourthRan, 1)[0]
    randomThirdNum = column2.splice(0)[0]
    column2 = [randomFirstNum, randomSecondNum, randomThirdNum]
    // console.log("2nd",column2Final)

    column3 = row[2]
    randomFirstNum = column3.splice(fifthRan, 1)[0]
    randomSecondNum = column3.splice(sixthRan, 1)[0]
    randomThirdNum = column3.splice(0)[0]
    column3 = [randomFirstNum, randomSecondNum, randomThirdNum]

    return [column1, column2, column3]
  })
})

console.log("Final Combination", combinedColumns[0], combinedColumns[1], combinedColumns[2])