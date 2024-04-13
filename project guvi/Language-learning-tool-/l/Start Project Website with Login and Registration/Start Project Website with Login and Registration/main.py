import random

class MultilevelWordGuessingGame:
    def __init__(self, words):
        self.words = words
        self.current_word = random.choice(list(self.words.keys()))
        self.guesses_remaining = 5

    def play(self):
        print("Welcome to the Multilevel Word Guessing Game!")
        print("You have {} guesses to guess the word.".format(self.guesses_remaining))
        while self.guesses_remaining > 0:
            print("\nCurrent word: {}".format(" ".join(self.current_word)))
            guess = input("Guess a letter: ").lower()
            if guess in self.current_word:
                print("Correct guess!")
                self.current_word = [letter if letter == guess or letter in self.guessed_letters else "_" for letter in self.current_word]
                if "_" not in self.current_word:
                    print("Congratulations! You guessed the word: {}".format("".join(self.current_word)))
                    break
            else:
                print("Incorrect guess. Try again!")
                self.guesses_remaining -= 1
        else:
            print("You ran out of guesses. The word was: {}".format(self.words[self.current_word]))

# Example usage
words = {"apple": "fruit", "banana": "fruit", "carrot": "vegetable", "tomato": "vegetable"}
game = MultilevelWordGuessingGame(words)
game.play()

class MultilevelTranslationQuiz:
    def __init__(self, words):
        self.words = words

    def play(self):
        print("Welcome to the Multilevel Translation Quiz!")
        level = input("Choose your language level (beginner, intermediate, advanced): ").lower()
        if level in self.words:
            for word, translations in self.words[level].items():
                print("What is the translation of '{}'?".format(word))
                guess = input("Your answer: ").lower()
                if guess == translations.lower():
                    print("Correct!")
                else:
                    print("Incorrect. The correct translation is: '{}'.".format(translations))
        else:
            print("Invalid language level. Please choose from beginner, intermediate, or advanced.")

# Example usage
words = {
    "beginner": {"apple": "la pomme", "banana": "la banane"},
    "intermediate": {"carrot": "la carotte", "tomato": "la tomate"},
    "advanced": {"computer": "l'ordinateur", "internet": "l'internet"}
}
quiz = MultilevelTranslationQuiz(words)
quiz.play()
