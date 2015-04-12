import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
    body: DS.attr('string'),
    createdBy: DS.belongsTo('user', {async: true}),
    createdOn: DS.attr('date')


  }).reopenClass({
    FIXTURES: [
      {
              id: 1,
              title: "Ember JS 101",
              body: "All about Ember",
              createdBy: '1',
              createdOn: new Date(2015, 4, 11)
          },
          {
              id: 2,
              title: "Javascript",
              body: "All about Javascript",
              createdBy: '2',
              createdOn: new Date(2015, 4, 10)
          },
          {
              id: 3,
              title: "Node JS",
              body: "All about Node JS",
              createdBy: '1',
              createdOn: new Date(2015, 4, 11)
          }

    ]
  });
