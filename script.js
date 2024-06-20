/**
 * Function to generate a random hex color code and change the background color of the body to that color.
 * The hex code is displayed in the element with the id "hex-code".
 */
function changeColor() {
  // Array of possible hexadecimal characters
  var hex_numbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ]

  // Initialize an empty string to store the generated hex code
  var hexcode = ""

  // Generate a random hex code of length 6 (#RRGGBB)
  for (let i = 0; i < 6; i++) {
    // Generate a random index within the range of hex_numbers array
    let random_index = Math.floor(Math.random() * hex_numbers.length)

    // Append the randomly selected hexadecimal character to the hexcode string
    hexcode += hex_numbers[random_index]
  }

  // Update the text content of the element with id "hex-code" with the generated hex code
  document.querySelector("#hex-code").innerHTML = hexcode

  // Set the background color of the body to the generated hex code
  document.querySelector("body").style.backgroundColor = "#" + hexcode
}
