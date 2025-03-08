// একটি ক্লাস (class) তৈরি করা হয়েছে যার নাম `Book`
class Book {
    // কনস্ট্রাক্টর মেথড ডিফাইন করা হয়েছে, যা ক্লাসের অবজেক্ট তৈরি করার সময় কল হয়
    constructor(bookname) {
        // `this.brand` নামে একটি প্রপার্টি তৈরি করা হয়েছে, যা `bookname` ভ্যালুকে সংরক্ষণ করবে
        this.brand = bookname;
    }
}

// `Book` ক্লাসের একটি অবজেক্ট তৈরি করা হয়েছে এবং এতে "OOP in JavaScript" পাস করা হয়েছে
const book = new Book("OOP in JavaScript");

// `book` অবজেক্টের `brand` প্রপার্টির মান কনসোলে প্রিন্ট করা হয়েছে
console.log(book.brand);  // Output: OOP in JavaScript
class Zog{
    constructor(zogkorbo){
        this.zug = zogkorbo
    }
}
const numb = new Zog("Im a class")
console.log(numb.zug)


class Zugfol{
    constructor(a,b,c){
        this.a = a
        this.b = b
        this.c = c
    }
}

const jugfol = new Zugfol("Ami ","Valo ","Chele")
console.log(jugfol.a + jugfol.b + jugfol.c)

class Name{
    constructor(boro,choto,bhalo){
        this.boro = boro
        this.choto = choto 
        this.bhalo = bhalo
    }
}
let outp = new Name("rakin ar", " Rafid ", "Bhalo chele")

console.log(outp.boro + outp.choto + outp.bhalo)

// Method in Class 
class Country{
    constructor(name){
        this.cname = name;
    }
    countryname(){
        return "My Country name is " + this.cname;
    }
}

const mycountry = new Country("Bangladesh");

console.log(mycountry.countryname());