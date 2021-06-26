const Database = require('../db/config')
module.exports = {
  async index(request, response){
    const db = await Database();
    const roomId = request.params.room;
    const questionId = request.params.question;
    const action = request.params.action;
    const password = request.body.password;

    // Verifica se a senha está correta
    const verifyRoom = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`);

    // console.log(verifyRoom);

    if(verifyRoom.pass === password){
      if (action === 'delete'){
        await db.run(`DELETE FROM questions WHERE id = ${questionId}`);
      }else if(action === 'check'){
        await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionId}`);
      }
      response.redirect(`/room/${roomId}`);
    } else {
      response.render('passincorrect', {roomId});
    }

    // console.log(roomId,questionId, action, password);

  },
  async create(request, response){
    const db = await Database();
    const question = request.body.question;
    const roomId = request.params.room;

    await db.run(`INSERT INTO questions (
      title,
      room,
      read
    ) VALUES (
      "${question}",
      ${roomId},
      0
    ) `)

    response.redirect(`/room/${roomId}`)
  }
}