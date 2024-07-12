var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

library.forEach((books)=>{
    if(books.readingStatus===true){
        console.log(`Already read ${books.title} by ${books.author} `)
    }else{
        console.log(`You still need to read ${books.title} by ${books.author}`)        
    }
})