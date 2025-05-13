const Poster = require('../models/Poster');

class PosterService {
  async getAllPosters() {
    return await Poster.findAll();
  }

  async getPosterById(id) {
    return await Poster.findById(id);
  }

  async getPosterByUrl(url) {
    return await Poster.findByUrl(url);
  }
}

module.exports = new PosterService();