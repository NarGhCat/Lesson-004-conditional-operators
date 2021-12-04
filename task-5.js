function digitNum(num) {
    if (num % 10 === 0) {
      console.log(num);
    } else {
        let numArr = num.toString().split('');
        numArr.unshift(numArr[numArr.length - 1]);
        numArr.pop();
        console.log(+numArr.join(''));
    }
  }
  digitNum(8547);