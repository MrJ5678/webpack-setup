import getClasses from "./getClasses"

console.log("ran from index.js")
getClasses()

const object = {
  a: "alpha",
  b: "bravo",
}

const newObject = {
  ...object,
  c: "charlie",
}

console.log(newObject)

console.log(["a", "b", "c"].includes("b"))
