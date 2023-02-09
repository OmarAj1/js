 function languages(lang) {

     switch (true) {
         case lang == 'mandarin':
             return "MOST number of native speakers!";
             break;
         case lang == 'Spanish':
             return "2nd place in a number of native speakers";
             break;
         case lang == 'English':
             return "3rd place";
             break;
         case lang == 'Hindi':
             return "Number 4";
             break;
         case lang == 'Arabic':
             return "5th most spoken language";
             break;
         default:
             return "Not in the top 5";
     }

     console.log(languages('mandarian'));
 }