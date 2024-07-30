let instance = null;

export default class DownloadService {
  constructor(serviceLocator) {
    if (instance) {
      return instance;
    }
    this.serviceLocator = serviceLocator;
    instance = this;

    this.config = this.serviceLocator.get('config');
    this.logger = this.serviceLocator.get('log');
    this.uploadService = this.serviceLocator.get('upload');
  }

  download(file) {
    console.log(this.config)
    this.logger.log(`Started downloading ${file}`);
    this.uploadService.upload(file)
  }
}
