export default class TrainStation {

  constructor(name, dateOpened, platforms, tracks) {

    this.name = name;
    this.dateOpened = dateOpened;
    this.platforms = platforms
    this.tracks = tracks
  }

  // setter
  set name(name) {
    this._name = name;
  }

  // setter
  set dateOpened(dateOpened) {
    this._dateOpened = dateOpened;
  }

  // setter
  set contactInfo(contactInfo) {
    this._contactInfo = contactInfo;
  }

  // setter
  set architect(architect) {
    this._architect = architect;
  }

  // setter
  set website(website) {
    this._website = website;
  }

  // setter
  set tracks(tracks) {
    this._tracks = tracks;
  }

  // setter
  set bathrooms(bathrooms) {
    this._bathrooms = bathrooms;
  }

  // setter
  set wifi(wifi) {
    this._wifi = wifi;
  }

  // setter
  set wifi(ownerSite) {
    this._ownerSite = ownerSite;
  }

}