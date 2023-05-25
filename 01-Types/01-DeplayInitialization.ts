const movies = ['Interstellar', 'Avengers', 'MS Dhoni']

let favMovie

for (let movie in movies) {
    if(movie == 'Interstellar') {
        // Here the type is still "any"
        favMovie = movie
    }
}