let instance = null;

export default class NativeMessageService {
  constructor(serviceLocator) {
    if (instance) {
      return instance;
    }
    this.serviceLocator = serviceLocator;
    instance = this;
  }

  get config() { return this.serviceLocator.get('config') }
  get uploadService() { return this.serviceLocator.get('upload') }
  get downloadService() { return this.serviceLocator.get('download') }
  get logger() { return this.serviceLocator.get('log') }

  async getConfigAsync() {
    return new Promise(resolve => {
      setTimeout(() => resolve({ logLevel: 'debug', upload: true, download: true }), 1000)
    })
  }

  async handleUpdate() {
    this.downloadService.isEnabled = false
    this.uploadService.isEnabled = false
    console.log('we can disable downloadService: ', this.downloadService.isEnabled)
  }
}