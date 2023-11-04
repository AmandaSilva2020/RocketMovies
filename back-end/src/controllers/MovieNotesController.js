const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class MovieNotesController{
  async create(request, response){
    const { title, description, rating, tags } = request.body;
    const user_id = request.user.id;

    if(rating < 0 || rating > 5){
      throw new AppError("A nota do filme deve ser entre 0 e 5", 400);
    }

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    });

    const tagsInsert = tags.map(name => {
      return{
        note_id,
        user_id,
        name
      }
    });

    await knex("movie_tags").insert(tagsInsert);

    response.json();

  }

  async update(request, response){
    const { id } = request.params;
    const user_id = request.user.id;
    const { title, description, rating, tags } = request.body;

    const movie_note = await knex("movie_notes").where({id}).first();

    if(rating < 0 || rating > 5){
      throw new AppError("A nota do filme deve ser entre 0 e 5", 400);
    }
    
    movie_note.title = title ?? movie_note.title;
    movie_note.rating = rating ?? movie_note.rating;
    movie_note.description = description ?? movie_note.description;
    

    await knex("movie_notes").where({id}).update({
      title: movie_note.title,
      rating: movie_note.rating,
      description: movie_note.description
    })

    const tagsInsert = tags.map(name => {
      return{
        note_id: id,
        user_id,
        name
      }
    });

    await knex("movie_tags").where({note_id: id}).del();

    await knex("movie_tags").insert(tagsInsert);
    
    return response.json();
  }

  async show(request, response){
    const { id } = request.params;

    const movie_note = await knex("movie_notes").where({id}).first();
    const tags = await knex("movie_tags").where({note_id: id}).orderBy("name");

    return response.json({movie_note, tags});
  }

  async delete(request, response){
    const { id } = request.params;

    await knex("movie_notes").where({ id }).delete();

    return response.json();
  }

  async index(request, response){
    const { title, tags } = request.query;

    const user_id = request.user.id;

    let movie_notes;

    if(tags){
      const filterTags = tags.split(',').map(tag => tag.trim());

      movie_notes = await knex("movie_tags")
      .select([
        "movie_notes.id",
        "movie_notes.title",
        "movie_notes.description",
        "movie_notes.rating",
        "movie_notes.user_id"
      ])
      .where("movie_notes.user_id", user_id)
      .whereLike("movie_notes.title", `%${title}%`)
      .whereIn("name", filterTags)
      .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
      .groupBy("movie_notes.id")
      .orderBy("movie_notes.title");
    }else{
      movie_notes = await knex("movie_notes")
      .where({ user_id })
      .whereLike("title", `%${title}%`)
      .orderBy("title");
    }

    const userTags = await knex("movie_tags").where({ user_id });
    const notesWithTags = movie_notes.map(movie_note => {
      const noteTags = userTags.filter(tag => tag.note_id === movie_note.id);

      return {
        ...movie_note,
        tags: noteTags
      }
    })


    return response.json(notesWithTags);
  }
}

module.exports = MovieNotesController;