class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(firstName, lastName, address, city, state, zip, phone, email) {
        const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
        this.contacts.push(contact);
    }

    findAndEditContact(name, newDetails) {
        const contact = this.contacts.find(c => c.firstName === name);
        if (contact) {
            Object.assign(contact, newDetails);
        }
    }

    findAndDeleteContact(name) {
        this.contacts = this.contacts.filter(c => c.firstName !== name);
    }
}

const addressBook = new AddressBook();

addressBook.addContact("Raghuveer", "Chowdhury", "Ramgarh", "Pataliputra", "Magadh", "800001", "9876543210", "raghuveer@gmail.com");
addressBook.addContact("Bhola", "Tiwari", "Devipur", "Vaishali", "Mithila", "800002", "9234567890", "bhola.tiwari@gmail.com");
addressBook.addContact("Shambhu", "Yadav", "Haripur", "Ujjain", "Malwa", "800003", "9123456789", "shambhu@gmail.com");
addressBook.addContact("Gopal", "Mishra", "Sitarampur", "Kashi", "Kashi Pradesh", "800004", "9988776655", "gopal.mishra@gmail.com");
addressBook.addContact("Hariya", "Meena", "Bhimpur", "Jodhpur", "Marwar", "800005", "8877665544", "hariya.meena@gmail.com");

console.log("Initial Contacts:", JSON.stringify(addressBook.contacts, null, 2));

addressBook.findAndEditContact("Shambhu", { city: "Prayag", phone: "9876543211" });
console.log("After Editing:", JSON.stringify(addressBook.contacts, null, 2));

addressBook.findAndDeleteContact("Bhola");
console.log("After Deletion:", JSON.stringify(addressBook.contacts, null, 2));
