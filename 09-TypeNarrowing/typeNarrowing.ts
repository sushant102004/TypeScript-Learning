function triple(value: number | string) {
    if (typeof value === 'number') {
        return value * 3
    } else if (typeof value === 'string') {
        return value.repeat(3)
    }
}

const printLetters = (word: string | null) => {
    if (!word) console.log('Word is empty')

    else for (let i = 0; i < word.length; i++) {
        console.log(word[i])
    }
}

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numOfEpisodes: number,
    episodeDuration: number
}

function getDuration(media: Movie | TVShow): number {
    if ("numOfEpisodes" in media) {
        return media.numOfEpisodes
    } else {
        return media.duration
    }
}

const endGame: Movie = {
    title: 'Avengers End Game',
    duration: 2.5
}

const got: TVShow = {
    title: 'Game Of Thrones',
    episodeDuration: 50,
    numOfEpisodes: 80
}

// console.log(getDuration(endGame))
// console.log(getDuration(got))


function printFullDate(date: Date | string): void {
    if (date instanceof Date) {
        console.log(date.toUTCString())
    } else {
        console.log(new Date(date).toUTCString())
    }
}