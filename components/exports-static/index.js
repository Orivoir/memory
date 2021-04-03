import cardsCats from './cards-cats';
import cardsFruits from './cards-fruits';

// container of static contents because react-native not accept dynamic require e.g:
// `require(PATH)`
// see: <https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names>
export class Container {

  static get STATIC_CONTENT() {
    return ["cardsCats", "cardsFruits"];
  }

  get(name) {

    if(typeof name !== "string") {
      throw new RangeError(`static content arg1: name should be a string given: "${typeof name}"`);
    }
    name = name.toLocaleLowerCase().trim();

    if(!Container.STATIC_CONTENT.includes(name)) {
      throw new Error(`static content: "${name}", not found`);
    }

    return Container[name]();
  }

  cardsCats() {
    return cardsCats;
  }

  cardsFruits() {
    cardsFruits
  }
}
