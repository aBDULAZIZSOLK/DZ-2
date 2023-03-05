"use strict";

var app = {
  data: function data() {
    return {
      text: '',
      title: ' Выберите категорию ',
      select: '',
      list: [{
        id: 1,
        game: 'PUBG',
        gamers: []
      }, {
        id: 2,
        game: 'CSGO',
        gamers: []
      }, {
        id: 3,
        game: 'DOTA',
        gamers: []
      }]
    };
  },
  methods: {
    pushItem: function pushItem() {
      if (this.select == 'PUBG') {
        this.list[0].gamers.push(this.text);
      } else if (this.select == 'CSGO') {
        this.list[1].gamers.push(this.text);
      } else if (this.select == 'DOTA') {
        this.list[2].gamers.push(this.text);
      }

      this.text = '';
    }
  }
};
Vue.createApp(app).mount('#app');
var obj = {
  name: 'John',
  age: 29,
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, culpa.'
};
console.log(obj.age);
//# sourceMappingURL=app.dev.js.map
