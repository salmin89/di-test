import LogService from './services/LogService.js';
import UploadService from './services/UploadService.js';
import DownloadService from './services/DownloadService.js';
import ServiceLocator from './ServiceLocator.js';
import NativeMessageService from './services/NativeMessageService.js';

export default class App {
  constructor() {
    this.serviceLocator = new ServiceLocator();

    // Initialize and register services
    this.serviceLocator.register('config', { logLevel: 'debug', upload: false, download: false });
    this.serviceLocator.register('log', new LogService(this.serviceLocator));
    this.serviceLocator.register('upload', new UploadService(this.serviceLocator));
    this.serviceLocator.register('download', new DownloadService(this.serviceLocator));
    
    this.serviceLocator.register('native', new NativeMessageService(this.serviceLocator).getConfig().then(() => {
      this.serviceLocator.register('config', { logLevel: 'debug', upload: true, download: true });
    }));
  }
}



const app = new App();

app.serviceLocator.get('download').download('report.pdf');

setTimeout(() => {
  app.serviceLocator.get('download').download('report.pdf');
}, 2000)