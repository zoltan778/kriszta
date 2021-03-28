import { createServer, Model } from 'miragejs';

let data = [
  {
    name: 'Kovács Béla',
    pets: [
      { name: "Bodri", animal: "dog", isVaccinated: false },
      { name: "Cirmi", animal: "cat", isVaccinated: false }
    ]
  },
  {
    name: 'Varga Lajos',
    pets: [
      { name: "Frakk", animal: "dog", isVaccinated: false }
    ]
  },
  {
    name: 'Nagy Béla',
    pets: [
      { name: "Csőrike", animal: "pigeon", isVaccinated: false }
    ]
  }
]

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      client: Model,
    },
    seeds(server) { },
    routes() {
      this.namespace = '/api';
      this.timing = 2000

      this.get('clients', (schema, request) => {
        const search = request.queryParams.search
        return data.filter(client => client.name.includes(search))
      });

      this.post('/pets', (schema, request) => {
        let { name, isVaccinated } = JSON.parse(request.requestBody);
        data.forEach(c => {
          c.pets.forEach(p => {
            if (p.name === name) p.isVaccinated = isVaccinated
          })
        })
        return { success: true }
      });
    },
  });
  return server;
}
