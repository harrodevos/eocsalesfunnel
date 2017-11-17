export class Customer {
  constructor(public id: number,
              public salutation: string,
              public initials: string,
              public middleInitials: string,
              public lastName: string,
              public companyName: string,
              public phoneNumber: string,
              public mobielNumber: string,
              public emailAddress: string) {
  }
}