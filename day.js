const codeJourney = () => {
  const bugs = Math.floor(Math.random() * 10)
  const features = Math.floor(Math.random() * 5)
  console.log(`🧑‍💻 Fixing ${bugs} bugs and adding ${features} new features...`)
  if (bugs > features) {
    console.log("🤔 More bugs than features... as usual.")
  } else {
    console.log("🎉 Features are winning today! (For now...)")
  }
}
codeJourney()
