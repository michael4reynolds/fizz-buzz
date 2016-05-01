$(function () {
  for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      $('.container').append('<p class="fizzbuzz">FizzBuzz<p>')
    }
    else if (num % 3 === 0) {
      $('.container').append('<p class="fizz">Fizz</p>')
    }
    else if (num % 5 === 0) {
      $('.container').append('<p class="buzz">Buzz</p>')
    }
    else {
      $('.container').append(`<p class="neither">${num}</p>`)
    }
  }
})
