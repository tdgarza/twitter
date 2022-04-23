const User = require ('./../../app/models/User')

describe("Prueba de jest", () =>{
    test("Prueba 1", ()=> {
        const user = new User (1, "tdgarza", "Tomas", "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("tdgarza")
        expect(user.name).toBe("Tomas")

    })
    test("Requerimiento 2: Fechas en atributos de User", () =>{
        const user = new User (1, "tdgarza", "Daniel", "Bio")
        expect(user.id).toBe(1)
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()

    })
    test("Requerimiento 3: Agregando getters", () =>{
        const user = new User (1, "tdgarza", "Daniel", "Bio")
        expect(user.getUsername).toBe("tdgarza")     

    })
    test("Requerimiento 4: Agregando setters", () =>{
        const user = new User (1, "tdgarza", "Daniel", "Bio")
        user.setUsername = "tdgarzam"
        expect(user.username).toBe("tdgarzam")     

    })
})