class NumberToRoman {
  static convert(number) {
    const numberRomanMap = [
      [1, 'I']
   ];
   let index = 0;
   let romanStr = '';

   numberRomanMap.forEach((item) => {
     while(number >= item[0]) {
       romanStr += item[1];
       number -= item[0];
     }
   });

    return romanStr;
  }
}

module.exports = NumberToRoman;
