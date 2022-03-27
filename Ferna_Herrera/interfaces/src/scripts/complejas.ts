(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
  }

  const client: Client = {
    name: "Juancho",
    age: 25,
    address: {
      id: 123,
      zip: 3003,
      city: "New York",
    },
    getFullAddress(id: string) {
      return `Address ${id}: ${this.address.city}, Zip: ${this.address.zip}`;
    },
  };

  const cliente2: Client = {
    name: "Aquiles",
    age: 24,
    address: {
      city: "Toronto",
      id: 232,
      zip: 4334,
    },
    getFullAddress(id: string) {
      return `Address ${id}: ${this.address.city}, Zip: ${this.address.zip}`;
    },
  };
})();
