import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

import IModelTemplateProvider from './MailTemplateProvider/models/IModelTemplateProvider';
import HandlebarsMailTemplateProvider from './MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

container.registerSingleton<IModelTemplateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider,
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider),
);
