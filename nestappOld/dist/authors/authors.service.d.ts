import GetAuthorArgs from './dto/get-author.args';
export default class AuthorsService {
    create(data: GetAuthorArgs): Promise<GetAuthorArgs>;
    findOneById(id: string): Promise<GetAuthorArgs>;
    findAll(recipesArgs: GetAuthorArgs): Promise<GetAuthorArgs[]>;
    remove(id: string): Promise<boolean>;
}
