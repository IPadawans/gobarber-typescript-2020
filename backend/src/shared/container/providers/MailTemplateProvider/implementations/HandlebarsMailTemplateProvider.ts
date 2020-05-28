import handlebard from 'handlebars';

import IMailTemplateProvider from '../models/IModelTemplateProvider';
import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebard.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
