### game is to select the UNIQUE emojis for most number of time

- their are 4\*3 emoji cards
- i have the emojiList
- emojiCard consist of a emoji inside the square trimmed box in the middle
- game is to select the unique emojis for most number of time
- every time the emoji is clicked

  - emojis hold be suffled -> how?

    - learned shuffle
    - how to set this array to emojicards list? 9am 24/10
    - learned by re-doing - same as i do everytime

  - when emoji card clicked the emoji should be shuffled - how?

    - done i given shuffle function to EmojiCard element to button

  - if emoji already in selected list count should increase

    - check the evry emoji from prev emojis
    - take array - this a persist with previous values emojis - Akkada create cheyyali 10am
    - how to check the id in checkArray?
      - .includes() 11:24
    - how to push a id to checkArray

      - push()
      - when i push the id that not in the checkarray score should increase
      - how to set the top score?
        - by knowing all the previous scores
        - listing the score everytime ?
        - i guess storing is not needed i have to check the previous change if present score in big
      - how to make the game reload onClicking play again
        - changing the setGameover to false to show the emojilist or game
        - change the checkArry to empty to play again ?
          - setCheckArray([])
        - what left ?
        - WinOrLose card
          - how to send the play again to EmojiGame

  - if not game over
    - score is showing zero when win or lose card is shown - 8:50
    - fixed by changing - setScore(0) when replay button clicked

  ## errors

  - common error but the app is working fine
  - dont have any major changes from test cases 11:06pm

## Discussions

- how to suffle the emojis every time the button is clicked
  - i can create a array of 6 numbers containing the 0-5 but in random order
  - how to create random number
    - Math.random
  - how to create a random number between 0-5
  - chatgpt - first you take an array make a copy
  - for loop initialized to n-1 , condition is i>0, i-- decreasing by 1
  - j should a random number i.e. =i or less
    - like if the arry.length is 5 to generate the number if multiply random number with 5 it generate a number which is 5 or less then 5.. when the number is 5 it is 5 else the number is less than 5 its floored to int which can be 4 3 2 1 0
  - then swap elements
