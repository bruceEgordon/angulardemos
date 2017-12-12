export class PeopleService {
    private peeps: object[];
    public constructor() {
        this.peeps = [
            {fName: "Raymond", lName: "Ward", email: "rward@google.es"},
            {fName: "Daniel", lName: "Chavez", email: "dchavez@acme.com"},
            {fName: "Sharon", lName: "Dunn", email: "sdunn@contoso.gov"},
            {fName: "Jonathan", lName: "Kennedy", email: "jkennedy3@google.es"},
            {fName: "Joe", lName: "Harrison", email: "joe@gmail.com"}
            ]
    }

    public getPeople():Object[] {
        return this.peeps;
    }

    public getPerson(index: number): object {
        return this.peeps[index];
    }
}