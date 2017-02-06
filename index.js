//import _ from 'lodash';
const _ = require('lodash');
const keywords = require('./package.json').keywords;

class SlotXke {

  constructor(array) {
    this.slotXke = array;
  }

  printSlot() {
    _.each(this.slotXke, (mot) => {
      console.log(mot);
    })
  }

}

const slotXke = new SlotXke(keywords);

slotXke.printSlot();