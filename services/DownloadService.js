let instance = null;

export default class DownloadService {
  constructor(serviceLocator) {
    if (instance) {
      return instance;
    }
    this.serviceLocator = serviceLocator;
    instance = this;
  }

  get config() { return this.serviceLocator.get('config') }
  get uploadService() { return this.serviceLocator.get('upload') }
  get logger() { return this.serviceLocator.get('log') }

  isEnabled = false;

  download(file) {
   
    this.config.then((c) => {
      console.log('DownloadService: Config', this.config)
      this.logger.log(`Started downloading ${file}`);
      this.uploadService.upload(file)
    })
    
  }
}
