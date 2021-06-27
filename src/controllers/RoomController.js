const Database = require('../db/config')

module.exports = {
  async create(request, response){
    const db = await Database();
    const pass = request.body.password;

    let roomId;
    let isRoom = true;

    while (isRoom) {
      
      // Gera o númeor da sala
      for(let i = 0; i < 6; i++){
        i === 0 ? roomId = Math.floor(Math.random() * 10).toString() :
        roomId += Math.floor(Math.random() * 10).toString();
      }
  
      // Verifica se o númerojá existi
      const roomsExistIds = await db.all(`SELECT id FROM rooms`);
      // Retorna true par o primeiro id igual que encontrar
      isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId);
      
      if (!isRoom){
      // Inseri o número da sala e a senha no banco
        await db.run(`INSERT INTO rooms (
          id,
          pass
        ) VALUES (
          ${parseInt(roomId)},
          ${pass}
  
        )`);
      }
    }

    await db.close();

    response.redirect(`/room/${roomId}`);
  },
  async open(request, response){
    const db = await Database();
    const roomId = request.params.room;
    const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`);
    const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
    let isNoQuestions

    if(questions.length == 0){
      if(questionsRead.length == 0){
        isNoQuestions = true
      }
    }

    response.render('room', {roomId, questions, questionsRead, isNoQuestions})
  },
  enter(request, response){
    const roomId = request.body.roomId;

    response.redirect(`/room/${roomId}`)
  }
}