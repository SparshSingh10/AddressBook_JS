class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        if (!Contact.validateName(firstName) || !Contact.validateName(lastName)) {
            throw new Error('First name and last name must start with a capital letter and be at least 3 characters long.');
        }
        if (!Contact.validateAddress(address) || !Contact.validateAddress(city) || !Contact.validateAddress(state)) {
            throw new Error('Address, city, and state must be at least 4 characters long.');
        }
        if (!Contact.validateZip(zip)) {
            throw new Error('Invalid ZIP code. It should be a 6-digit number.');
        }
        if (!Contact.validatePhone(phone)) {
            throw new Error('Invalid phone number. It should be a 10-digit number.');
        }
        if (!Contact.validateEmail(email)) {
            throw new Error('Invalid email format.');
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }

    static validateName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    static validateAddress(value) {
        return /^.{4,}$/.test(value);
    }

    static validateZip(zip) {
        return /^\d{6}$/.test(zip);
    }

    static validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    static validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(firstName, lastName, address, city, state, zip, phone, email) {
        try {
            const contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
            this.contacts.push(contact);
            console.log('Contact added successfully:', contact);
        } catch (error) {
            console.error('Error adding contact:', error.message);
        }
    }

    displayContacts() {
        return this.contacts.map(contact => contact.displayContact());
    }

    findAndEditContact(name, updatedDetails) {
        const contact = this.contacts.find(c => c.firstName === name || c.lastName === name);
        if (contact) {
            Object.assign(contact, updatedDetails);
            console.log('Contact updated successfully:', contact);
        } else {
            console.error('Contact not found.');
        }
    }

    findAndDeleteContact(name) {
        const index = this.contacts.findIndex(c => c.firstName === name || c.lastName === name);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contact '${name}' deleted successfully.`);
        } else {
            console.error('Contact not found.');
        }
    }

    getContactCount() {
        return this.contacts.reduce(count => count + 1, 0);
    }
}

const addressBook = new AddressBook();

console.log(JSON.stringify(addressBook.contacts));

addressBook.addContact("William", "Churchill", "Baker Street", "London", "England", "560098", "9876543210", "wchurchill@example.com");
addressBook.addContact("Leonardo", "DaVinci", "Florence Avenue", "Milan", "Lombardy", "20121", "9123456780", "leonardo@example.com");
addressBook.addContact("Nikola", "Tesla", "Wardenclyffe Road", "New York", "New York", "10001", "9234567890", "tesla@example.com");
addressBook.addContact("Albert", "Einstein", "Princeton Drive", "Berlin", "Berlin", "10117", "9345678901", "einstein@example.com");
addressBook.addContact("Isaac", "Newton", "Woolsthorpe Manor", "Lincolnshire", "England", "560123", "9456789012", "newton@example.com");

console.log(JSON.stringify(addressBook.contacts, null, 2));

addressBook.findAndEditContact("Albert", { city: "Zurich", phone: "9012345678" });
console.log(JSON.stringify(addressBook.contacts, null, 2));

addressBook.findAndDeleteContact("Leonardo");
console.log(JSON.stringify(addressBook.contacts, null, 2));

// Display contact count
console.log("Number of contacts in address book:", addressBook.getContactCount());
