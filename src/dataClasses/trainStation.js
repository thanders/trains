export default class TrainStation {

  constructor(name, overview, ammenities) {

    this.name = name;
    this.overview = overview;
    this.ammenities = ammenities;
  }

  // setter
  set name(name) {
    this._name = name;
  }

  // setter
  set overview(overview) {
    this._overview = overview;
  }

  // setter
  set ammenities(ammenities) {
    this._ammenities = ammenities;
  }

  // setter
  set contactInfo(contactInfo) {
    this._contactInfo = contactInfo;
  }

  // setter
  set architect(architect) {
    this._architect = architect;
  }

}