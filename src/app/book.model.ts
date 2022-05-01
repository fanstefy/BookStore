export class Book {
    public id: number;
    public name: string;
    public author: string;
    public dateAdded: string;
    public DateModified: string;

    constructor(id: number, name: string, author: string, date: string, modDate: string) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.dateAdded = date;
        this.DateModified = modDate;
    }
}
