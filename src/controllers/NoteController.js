const NooteService = require('../services/NoteService');

module.exports = {
    ping: (request, response) => {
        response.json({pong: true});
    }

};