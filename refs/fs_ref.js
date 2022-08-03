const fs = require('fs')
const path = require('path')

//file system

fs.mkdir(path.join(__dirname, 'notes'), error => {
    if (error) throw new Error(error)

    console.log('Dir was created');
})

fs.writeFile(
    path.join(__dirname, 'notes', 'myNotes.txt'),
    'Hello world',
    err => {
        if (err) throw err

        console.log('File was created');
        fs.appendFile(
            path.join(__dirname, 'notes', 'myNotes.txt'),
            ' From append file',
            err => {
                if (err) throw err
                console.log('File was change');

                fs.readFile(
                    path.join(__dirname, 'notes', 'myNotes.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err
                        console.log(data);
                    }
                )
            }
        )
    }
)


fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err

        console.log('file name was rename');
    }
)
