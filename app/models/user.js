import DS from 'ember-data';

export default DS.Model.extend({
  name:  DS.attr('string'),
  email: DS.attr('string')
  }).reopenClass({
    FIXTURES: [
      {
       id: 1,
       name: "Kareem",
       email: "kareem_rady@yahoo.com"
     },
     {
       id: 2,
       name: "John",
        email: "john.doe@yahoo.com"
     }

    ]
  });
