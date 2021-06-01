const sentence = "hello there from lighthouse labs";

const typeWriter = function(sentence) {
  let time = 0;
  for (const char of sentence) {
    time += 50;
    setTimeout(() => {process.stdout.write(char)}, time);
  }
  setTimeout(()=> {console.log()}, time)
}

typeWriter(sentence);