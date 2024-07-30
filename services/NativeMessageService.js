let instance = null;

export default class NativeMessageService {
  constructor(serviceLocator) {
    if (instance) {
      return instance;
    }
    this.serviceLocator = serviceLocator;
    instance = this;
  }

  async getConfig() {
    return new Promise(resolve => {
      setTimeout(resolve(true), 1000)
    })
  }
}