const document = {
  id: "",
  children: [
    { id: "ewr", children: [{ id: "rgter", children: [] }] },
    { id: "te", children: [{ id: "exec-output", children: [] }] },
  ],
}

function getElementById(id, document) {
  if (id === document.id) return document
  for (const child of document.children) {
    if (!child.hasOwnProperty("children")) continue
    const found = getElementById(id, child)
    if (found) {
      return found
    }
  }
  return null
}

console.log(getElementById("exec-output", document))
