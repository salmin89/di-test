let instance = null;

export default class LogService {
  constructor(serviceLocator) {
    if (instance) {
      return instance;
    }
    this.serviceLocator = serviceLocator;
    instance = this;
  }

  log(message) {
    console.log(message);
  }
}