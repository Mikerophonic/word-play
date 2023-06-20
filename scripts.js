window.onload = function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const input = document.querySelector("input#textBox").value
    let words = input.split(' ');
    console.log(words);
    
    let words3OrMore = [];

     words.forEach(function(word) {
        if (word.length >= 3) {
          words3OrMore.push(word);
        }
    });
    

    console.log(words3OrMore);

    words3OrMore.reverse();
    words3OrMore = words3OrMore.join(" ");

    const p = document.querySelector("p");
    p.innerHTML = words3OrMore;

  });
}