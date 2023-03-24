const isPowerOfTwo = (number) => {
  if (number == 0)
            return false;

        return parseInt( (Math.ceil((Math.log(number) / Math.log(2))))) == parseInt( (Math.floor(((Math.log(number) / Math.log(2))))));
};

const num = parseInt(prompt("Enter a number"));
alert(isPowerOfTwo(num));
