import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

export class JSONObject {}

@Scalar('JSONObject', () => JSONObject)
export class JSONObjectScalar implements CustomScalar<object, object> {
  description: string = 'JSONObject custom scalar type';

  parseValue(value: object): object {
    return value;
  }

  serialize(value: object): object {
    return value;
  }

  parseLiteral(ast: any): object {
    if (ast.kind === Kind.OBJECT) {
      return new Object(ast.value);
    }
    return null;
  }
}
