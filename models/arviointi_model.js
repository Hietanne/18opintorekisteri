const db = require('../database');

const arviointi = {
  getById: function(id, callback) {
    return db.query('select * from arviointi where idarviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  add: function(arviointi, callback) {
    return db.query(
      'insert into arviointi (paivamaara,arvosana,idOpiskelija,idopintojakso) values(?,?,?,?)',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.idOpiskelija,idopintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idarviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
    return db.query(
      'update arviointi set paivamaara=?,arvosana=?, idOpiskelija=? idOpintojakso where idarviointi=?',
      [arviointi.paivamaara, arviointi.arvosana, arviointi.idOpiskelija, arviointi.opintojakso, id],
      callback
    );
  }
};
module.exports = arviointi;