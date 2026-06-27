// function CreateSongs(){
//     this.songName = 'Cry for me'
//     this.albumName = 'hurry up tomorrow'
//     this.singer ='Weekend'
//     this.duration =3.5
//     this.isLiked =true

// }
// let song1 = new CreateSongs()
// console.log(song1);

// function CreateBook(bookName,authorName,pages,bookAvailabe){
//     this.bookName = bookName
//     this.authorName= authorName
//     this.pages=pages
//     this.bookAvailabe=bookAvailabe
//     this.getFrontPage = function(){
//         // console.log('Book Name:',this.bookName);
//         // console.log('Author Name:',this.authorName);
//         // console.log('Pages:',this.pages);
//         if(this.bookAvailabe){
//             console.log(`Book name:${this.bookName}\nAuthor Name:${this.authorName}\nPages:${this.pages}`);
//         }
//         else{
//             console.log('Not available');

//         }

//     }
// }
// let book1 = new CreateBook('HP -prisoner of Azkaban','JK Rowling',760,true)
// let book2 = new CreateBook('Rich Dad Poor Dad','Robert Kiyosaki',400,false)
// book2.getFrontPage()
// console.log(book1);
// console.log(book2);



////////////////////////////////////////////////// constructor
// class CreateBook {
//     constructor(bookName, authorName, pages, bookAvailabe) {
//         this.bookName = bookName
//         this.authorName = authorName
//         this.pages = pages
//         this.bookAvailabe = bookAvailabe
//         // this.getFrontPage = function () {
//         //     // console.log('Book Name:',this.bookName);
//         //     // console.log('Author Name:',this.authorName);
//         //     // console.log('Pages:',this.pages);
//         //     if (this.bookAvailabe) {
//         //         console.log(`Book name:${this.bookName}\nAuthor Name:${this.authorName}\nPages:${this.pages}`);
//         //     }
//         //     else {
//         //         console.log('Not available');

//         //     }

//         // }
//     }
// }
// let getFrontPage = function () {
//     // console.log('Book Name:',this.bookName);
//     // console.log('Author Name:',this.authorName);
//     // console.log('Pages:',this.pages);
//     if (this.bookAvailabe) {
//         console.log(`Book name:${this.bookName}\nAuthor Name:${this.authorName}\nPages:${this.pages}`);
//     }
//     else {
//         console.log('Not available');

//     }

// }
// CreateBook.prototype.getFrontPage=getFrontPage

// let book1 = new CreateBook('HP -prisoner of Azkaban', 'JK Rowling', 760, true)
// let book2 = new CreateBook('Rich Dad Poor Dad', 'Robert Kiyosaki', 400, false)
// console.log(book1);
// console.log(book2);

// book1.getFrontPage()


////////////////////////////////// Classical Inheritance ///////////////////////
class User {
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }

    greet() {
        console.log('Welcome', this.fname);
    }
}
class Admin extends User{
    constructor(fname,lname,contact){
        super(fname,lname,contact)
        this.adminAccess = true
    }
    addCourse(){
        console.log('New Course Added');
        
    }
    removeAllCourses(){
        console.log('All Courses Removed');
        
    }
    greet() {
        console.log('Welcome', this.fname);
    }
}

let u1 = new User('Ritik', 'Rajput', 897897);
let u2 = new User('Ashwin', 'Yadav', 997897);

u1.greet();
u2.greet();
u2.addCourse()
u2.removeAllCourses()