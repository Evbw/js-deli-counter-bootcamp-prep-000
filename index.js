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
 
  for (var i = 0, l = line.length; i < l; i++ ) {
    
  if (line.length > 0) {
    return `The line is currently: ${line[i]}. ${line.name},`
  }
  
    else {
      return "The line is currently empty."
    }
  }  
}