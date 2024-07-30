import LogService from './services/LogService.js';
import UploadService from './services/UploadService.js';
import DownloadService from './services/DownloadService.js';
import ServiceLocator from './ServiceLocator.js';
import NativeMessageService from './services/NativeMessageService.js';

export default class App {
  constructor() {
    this.serviceLocator = new ServiceLocator();

    let { promise, resolve, reject } = Promise.withResolvers();

    this.serviceLocator.register('config', promise);
    this.serviceLocator.register('log', new LogService(this.serviceLocator));
    this.serviceLocator.register('upload', new UploadService(this.serviceLocator));
    this.serviceLocator.register('download', new DownloadService(this.serviceLocator));

    const native = new NativeMessageService(this.serviceLocator);
    this.serviceLocator.register('native', native);

    native.getConfigAsync().then(config => {
      
      // option #1 - we only use the promise so we resolve it
      resolve(config) 

      // option #2 - we overwrite the promise. Will require us to check if config instanceof Promise 
      // this.serviceLocator.register('config', config); 

      // option #3 - we store them seperately. Might need to check for null/empty
      // this.serviceLocator.register('configResolved', config); 
    });
  }
}



const app = new App();

app.serviceLocator.get('download').download('report.pdf');


setTimeout(() => {
  app.serviceLocator.get('native').handleUpdate();
}, 2000)