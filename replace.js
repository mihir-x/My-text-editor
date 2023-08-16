function makeFirstLetterCapital(sentence){
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

// function capitalizeSentences(paragraph) {
//     // Split the paragraph into sentences using regular expressions
//     const sentences = paragraph.split(/(?<=[.!?])\s+/);
  
//     // Capitalize the first letter of each sentence (ignoring those that start with whitespace)
//     const capitalizedSentences = sentences.map(sentence => {
//       if (sentence.trim().length === 0) {
//         return sentence; // Preserve sentences with only whitespace
//       }
  
//       const firstLetter = sentence.trim().charAt(0).toUpperCase();
//       const restOfSentence = sentence.slice(1);
//       return firstLetter + restOfSentence;
//     });
  
//     // Join the capitalized sentences back into a paragraph
//     const capitalizedParagraph = capitalizedSentences.join(' ');
  
//     return capitalizedParagraph;
//   }
  
//   const inputParagraph = "hello.how are you?   i hope you're doing well.  greetings.";
//   const result = capitalizeSentences(inputParagraph);
//   console.log(result);
  
// function capitalizeSentences(paragraph) {
//     // Split the paragraph into sentences using regular expressions
//     const sentences = paragraph.split(/(?<=[.!?])\s+/);
  
//     // Capitalize the first letter of each sentence (ignoring those that start with whitespace)
//     const capitalizedSentences = sentences.map(sentence => {
//       if (sentence.trim().length === 0) {
//         return sentence; // Preserve sentences with only whitespace
//       }
  
//       const firstLetter = sentence.charAt(0).toUpperCase();
//       const restOfSentence = sentence.slice(1);
//       return firstLetter + restOfSentence;
//     });
  
//     // Join the capitalized sentences back into a paragraph
//     const capitalizedParagraph = capitalizedSentences.join(' ');
  
//     return capitalizedParagraph;
//   }
  
//   const inputParagraph = "hello.how are you?   i hope you're doing well.  greetings.";
//   const result = capitalizeSentences(inputParagraph);
//   console.log(result);
  