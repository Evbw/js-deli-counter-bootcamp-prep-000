var katzDeli = []

function takeANumber(line, name) {
  line.push(name)
  
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line, name) {
  if (line.length > 0) {
    return `Currently serving ${line.shift()}.`
  }
    else {
      return "There is nobody waiting to be served!"
    }
}

function currentLine(line) {
 var deliLine = []
 
  for (var i = 0, l = deliLine.length; i < l; i++ ) {
    deliLine.push(`${i + 1}. ${deliLine[i]}`)
    
  if (deliLine.length > 0) {
    return `The line is currently: ${deliLline[i]},`
  }
  
    else {
      return "The line is currently empty."
    }
  }  
}