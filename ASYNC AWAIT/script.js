const server = {
    people: [
      {
        name: "Odin",
        age: 20,
      },
      {
        name: "Thor",
        age: 35,
      },
      {
        name: "Freyja",
        age: 29,
      },
    ]}

    //Asynchrounous code using async and await
    function getPeople() 
    {
        return new Promise((resolve, reject) => {
          // Simulating a delayed network call to the server
          setTimeout(() => {
            resolve(this.people);
          }, 2000);
        });
    }
    

    async function getPerson(name) {
        try{
            const people = await server.getPeople();
            const Person = people.find((person)=>{
                return person.name == name;
            })
        }
        catch(error){
            console.log(error);
        }
        
    }