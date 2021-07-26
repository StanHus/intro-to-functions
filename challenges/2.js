function freeSpeech(string, banList) {

    var answer = []
    var words = string.split(" ");
  
    for (let i = 0; i < words.length; i++) {
  
      if (banList.includes(words[i].toLowerCase())) {
        answer.push("*****")
      } else {
        answer.push(words[i].toLowerCase())
      }
    }
    return answer.join(" ")
  }
  
  console.log(freeSpeech("love me, LOVE me, say that you love me", ["love"]), "should be: ***** me, love, say that you ***** me")
  console.log(freeSpeech("don't mess with cats", ["mess", "don't"]), "should be: don't ***** with cats")