import handlebard from 'handlebars';
import fs from 'fs';

import IMailTemplateProvider from '../models/IModelTemplateProvider';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });
    const parseTemplate = handlebard.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
