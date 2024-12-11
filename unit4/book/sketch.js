let myBook = "";

function setup() {
  noCanvas();

  let content = createDiv();
  content.id("content");

  let bookTitle = createElement("h1", "My Book");
  content.child(bookTitle);

  // List of different words to use
  let words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

  // Generate 50,000 words
  for (let w = 0; w < 50000; w++) {
    myBook += words[w % words.length] + " ";
    if ((w + 1) % 500 === 0) { // Add a page break every 500 words
      myBook += "<div class='page-break'></div>";
    }
  }

  let bookContent = createDiv(myBook);
  content.child(bookContent);

  Bindery.makeBook({
    content: '#content',
    pageSetup: {
      size: { width: '5in', height: '8in' },
      margin: { top: '1in', inner: '1in', outer: '1in', bottom: '1in' }
    },
    rules: [
      Bindery.PageBreak({ selector: '.page-break', position: 'after' })
    ]
  });
}