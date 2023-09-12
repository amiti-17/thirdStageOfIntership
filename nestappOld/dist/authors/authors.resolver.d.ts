import AuthorsService from './authors.service';
import Author from './models/models';
export declare class AuthorsResolver {
    private authorsService;
    constructor(authorsService: AuthorsService);
    getAuthor(id: number): Promise<import("./dto/get-author.args").default>;
    getPosts(author: Author): Promise<import("./dto/get-author.args").default[]>;
}
