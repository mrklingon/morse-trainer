input.onButtonPressed(Button.A, function () {
    basic.showString(code)
    basic.showString("" + (alphabet[morse.indexOf(code)]))
    Cword = "" + Cword + code
    Word = "" + Word + alphabet[morse.indexOf(code)]
    code = ""
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(Cword)
    basic.pause(100)
    basic.showString(Word)
    Cword = ""
    Word = ""
})
let timed = 0
let alphabet: string[] = []
let morse: string[] = []
let code = ""
let Cword = ""
let Word = ""
Word = ""
Cword = ""
code = ""
morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"]
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
basic.forever(function () {
    timed = 0
    while (input.buttonIsPressed(Button.B)) {
        timed += 1
        basic.pause(40)
    }
    if (timed < 10 && timed > 0) {
        basic.showString(".")
        code = "" + code + "."
    }
    if (timed > 10 && timed > 0) {
        basic.showString("-")
        code = "" + code + "-"
    }
    basic.pause(10)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
