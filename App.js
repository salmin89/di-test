import LogService from './services/LogService.js';
import UploadService from './services/UploadService.js';
import DownloadService from './services/DownloadService.js';
import ServiceLocator from './ServiceLocator.js';

export default class App {
  constructor() {
    this.serviceLocator = new ServiceLocator();

    // Initialize and register services
    this.serviceLocator.register('config', { logLevel: 'debug', upload: true, download: true });
    this.serviceLocator.register('log', new LogService(this.serviceLocator));
    this.serviceLocator.register('upload', new UploadService(this.serviceLocator));
    this.serviceLocator.register('download', new DownloadService(this.serviceLocator));
  }
}



const app = new App();

app.serviceLocator.get('download').download('report.pdf');