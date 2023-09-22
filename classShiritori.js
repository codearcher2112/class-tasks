class Shiritori {
    constructor() {
        this.words = [];
        this.game_over = false;
    }

    play(word) {
        if (this.game_over) {
            return "game over";
        }

        if (this.words.length === 0 || word.charAt(0) === this.words[this.words.length - 1].charAt(this.words[this.words.length - 1].length - 1)) {
            if (!this.words.includes(word)) {
                this.words.push(word);
                return this.words;
            } else {
                this.game_over = true;
                return "game over"
            }
        } else {
            this.game_over = true;
            return "game over";
        }
    }

    restart() {
        this.words = [];
        this.game_over = false;
        return "game restarted";
    }
}

const myShiritori = new Shiritori();
myShiritori.play("apple");
myShiritori.play("ear");
myShiritori.play("rhino");
myShiritori.play("corn");
myShiritori.words;
myShiritori.restart();
myShiritori.words;
myShiritori.play("hostess");
myShiritori.play("stash");
myShiritori.play("hostess");
