"use strict"

const fs = require("fs")

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on("end", function () {
  inputString = inputString.split("\n")

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Complete the 'cardPackets' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY cardTypes as parameter.
 */

// Helper function to compute GCD of two numbers
function gcd(a, b) {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

// Function to compute GCD of an array
function findGCD(arr) {
  return arr.reduce((acc, curr) => gcd(acc, curr))
}

function cardPackets(cardTypes) {
  const commonGCD = findGCD(cardTypes)

  if (commonGCD === 1) {
    const additionalCards = cardTypes.map((card) => {
      return card % 2 === 0 ? 0 : 1
    })
    return additionalCards.reduce((sum, curr) => sum + curr, 0)
  }

  let additionalCards = 0

  for (let i = 0; i < cardTypes.length; i++) {
    const cards = cardTypes[i]
    additionalCards += (commonGCD - (cards % commonGCD)) % commonGCD
  }

  return additionalCards
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const cardTypesCount = parseInt(readLine().trim(), 10)

  let cardTypes = []

  for (let i = 0; i < cardTypesCount; i++) {
    const cardTypesItem = parseInt(readLine().trim(), 10)
    cardTypes.push(cardTypesItem)
  }

  const result = cardPackets(cardTypes)

  ws.write(result + "\n")

  ws.end()
}
