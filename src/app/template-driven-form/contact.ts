export class Contact {
  firstName: string;
  lastName: string;
  email: string;
  gender: string | undefined;
  isMarried: boolean | undefined;
  country: string | undefined;
  address: {
    city: string | undefined;
    street: string | undefined;
    postcode: string | undefined;
  };

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.address = {
      city: '',
      street: '',
      postcode: ''
    };
  }
}
