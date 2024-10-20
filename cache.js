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
 * Complete the 'getQueryAnswers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_STRING_ARRAY cache_entries
 *  2. 2D_STRING_ARRAY queries
 */

function binarySearch(entries, queryTimestamp) {
  let low = 0
  let high = entries.length - 1
  let result = -1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (entries[mid].timestamp <= queryTimestamp) {
      result = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return result
}

function getQueryAnswers(cache_entries, queries) {
  console.log(
    "Caches",
    JSON.stringify(cache_entries),
    "Queries",
    JSON.stringify(queries)
  )
  // Step 1: store cache entries by key with a sorted list of {timestamp, value}
  const cacheMap = new Map()

  cache_entries.forEach((entry) => {
    const [timestamp, key, value] = entry
    if (!cacheMap.has(key)) {
      cacheMap.set(key, [])
    }
    cacheMap.get(key).push({ timestamp, value: parseInt(value) })
  })

  // Step 2: sort each key's entries by timestamp (ascending order)
  cacheMap.forEach((entries) => {
    entries.sort((a, b) => a.timestamp.localeCompare(b.timestamp))
  })

  // Step 3: process each query
  const results = queries.map((query) => {
    const [key, queryTimestamp] = query

    if (!cacheMap.has(key)) {
      return -1 // no such key exists
    }

    //search to find the closest timestamp <= queryTimestamp
    const entries = cacheMap.get(key)
    const index = binarySearch(entries, queryTimestamp)

    if (index === -1) {
      return -1 // no valid timestamp found
    } else {
      return entries[index].value
    }
  })

  return results
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const cache_entriesRows = parseInt(readLine().trim(), 10)

  const cache_entriesColumns = parseInt(readLine().trim(), 10)

  let cache_entries = Array(cache_entriesRows)

  for (let i = 0; i < cache_entriesRows; i++) {
    cache_entries[i] = readLine().replace(/\s+$/g, "").split(" ")
  }

  const queriesRows = parseInt(readLine().trim(), 10)

  const queriesColumns = parseInt(readLine().trim(), 10)

  let queries = Array(queriesRows)

  for (let i = 0; i < queriesRows; i++) {
    queries[i] = readLine().replace(/\s+$/g, "").split(" ")
  }

  const result = getQueryAnswers(cache_entries, queries)

  ws.write(result.join("\n") + "\n")

  ws.end()
}
