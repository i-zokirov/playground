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
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++
      this.hash = this.calculateHash()
    }
    console.log("Block mined: " + this.hash)
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = 2
    this.pendingTransactions = []
    this.miningReward = 100
    this.balances = {} // A simple ledger for balances
  }

  createGenesisBlock() {
    return new Block(Date.now(), [], "0")
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  minePendingTransactions(miningRewardAddress) {
    let block = new Block(Date.now(), this.pendingTransactions)
    block.mineBlock(this.difficulty)

    console.log("Block successfully mined!")
    this.chain.push(block)

    this.balances[miningRewardAddress] =
      (this.balances[miningRewardAddress] || 0) + this.miningReward
    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward),
    ]
  }

  addTransaction(transaction) {
    if (!transaction.fromAddress || !transaction.toAddress) {
      throw new Error("Transaction must include from and to address")
    }

    if (!this.isTransactionValid(transaction)) {
      throw new Error("Cannot add invalid transaction to the chain")
    }

    this.pendingTransactions.push(transaction)
  }

  isTransactionValid(transaction) {
    const senderBalance = this.getBalanceOfAddress(transaction.fromAddress)
    return senderBalance >= transaction.amount
  }

  getBalanceOfAddress(address) {
    let balance = this.balances[address] || 0
    for (const block of this.chain) {
      for (const trans of block.transactions) {
        if (trans.fromAddress === address) {
          balance -= trans.amount
        }

        if (trans.toAddress === address) {
          balance += trans.amount
        }
      }
    }
    return balance
  }

  // Existing `isChainValid` method...
}

// Example usage:
const myCoin = new Blockchain()
const address1 = "address1"
const address2 = "address2"

// Simulating mining to generate rewards and balance for address1
myCoin.minePendingTransactions(address1)

// Now address1 has balance, attempt a transaction
myCoin.addTransaction(new Transaction(address1, address2, 50))

// Mine a new block to process and confirm the transaction
myCoin.minePendingTransactions(address1)

console.log(`Balance of address1 is ${myCoin.getBalanceOfAddress(address1)}`)
console.log(`Balance of address2 is ${myCoin.getBalanceOfAddress(address2)}`)
