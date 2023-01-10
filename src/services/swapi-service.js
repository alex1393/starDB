// https://swapi.dev/api/people/123123
export default class SwapiService {
  _apiBase = "https://swapi.dev/api";
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

const swapi = new SwapiService();
swapi.getAllPeople().then((people) => {
  people.forEach((p) => {
    // console.log(p.name);
  });
});

swapi.getPerson(3).then((p) => {
  // console.log(p.name);
});

swapi.getAllPlanets().then((planets) => {
  planets.forEach((p) => {
    // console.log(p.name);
  });
});

swapi.getPlanet(3).then((p) => {
  // console.log(p.name);
});

swapi.getAllStarships().then((planets) => {
  planets.forEach((s) => {
    // console.log(s.name);
  });
});

swapi.getStarship(3).then((s) => {
  // console.log(s.name);
});
