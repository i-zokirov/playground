const SHA256 = require("crypto-js/sha256")

class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress
    this.toAddress = toAddress
    this.amount = amount
  }
}

class Block {
  constructor(timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp
    this.transactions = transactions
    this.previousHash = previousHash
    this.hash = this.calculateHash()
    this.nonce = 0
  }

  calculateHash() {
    return SHA256(
      this.previousHash +
        this.timestamp +
        JSON.stringify(this.transactions) +
        this.nonce
    ).toString()
  }

  mineBlock(difficulty) {
    // The goal is to find a hash that starts with 'difficulty' number of zeros.
    // 'Array(difficulty + 1).join("0")' creates a string of zeros that we want
    // the beginning of our hash to match.
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++
      this.hash = this.calculateHash() // Recalculates the hash with the new nonce value.
    }

    console.log("Block mined: " + this.hash)
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 2
  }

  createGenesisBlock() {
    return new Block(Date.now(), [], "0")
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock)
  }

  addTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error("Transaction must include from and to address")
    }

    // In a real blockchain, there would be additional validation here to ensure
    // that the transaction is properly signed and that the sender has enough balance.

    this.getLatestBlock().transactions.push(transaction)
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i]
      const previousBlock = this.chain[i - 1]

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false
      }
    }
    return true
  }
}

// Example usage
const myCoin = new Blockchain()
console.log("Mining block 1...")
myCoin.addBlock(
  new Block(Date.now(), [{ from: "address1", to: "address2", amount: 4 }])
)

console.log("Mining block 2...")
myCoin.addBlock(
  new Block(Date.now(), [{ from: "address2", to: "address3", amount: 8 }])
)

console.log("Mining block 3...")
myCoin.addBlock(
  new Block(Date.now(), [{ from: "address3", to: "address1", amount: 12 }])
)

console.log("Mining block 4...")
myCoin.addBlock(
  new Block(Date.now(), [{ from: "address1", to: "address2", amount: 16 }])
)

console.log("Mining block 5...")
myCoin.addBlock(
  new Block(Date.now(), [{ from: "address2", to: "address3", amount: 20 }])
)

console.log("Mining block 6...")
myCoin.addBlock(
  new Block(Date.now(), [{ from: "address3", to: "address1", amount: 24 }])
)

console.log("Blockchain valid? " + myCoin.isChainValid())
// console.log(JSON.stringify(myCoin, null, 4))
