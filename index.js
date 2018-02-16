var katzDeli = []

function takeANumber(line, name) {
  
  for (let i = 0; i < 10; i++) {
    line.push(`${line[name]}`)
  }
  return "Welcome, " + line[i] + ". You are number " + i  + " in line"
}