let instance = null;

export default class UploadService {
  constructor(serviceLocator) {
    if (instance) {
      return instance;
    }
    this.serviceLocator = serviceLocator;
    instance = this;

    this.logger = this.serviceLocator.get('log');
  }

  upload(file) {
    this.logger.log(`Started uploading ${file}`);
  }
}
