type Geo = {
  lan: number;
  lng: number;
};
type Adress = {
  street: string;
  suite: number | string;
  city: string;
  zipcode: number;
  geo: Geo;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: Adress;
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: [string];
  };
};
