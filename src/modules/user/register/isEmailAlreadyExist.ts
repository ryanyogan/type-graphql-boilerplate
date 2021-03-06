import {
  registerDecorator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationOptions
} from "class-validator";
import { User } from "../../../entity/User";

@ValidatorConstraint({ async: true })
export class IsEmailAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(email: string) {
    const user = await User.findOne({ where: { email } });
    if (user) return false;
    return true;
  }
}

export const IsEmailAlreadyExist = (validationOptions?: ValidationOptions) => (
  object: Object,
  propertyName: string
) =>
  registerDecorator({
    target: object.constructor,
    propertyName: propertyName,
    options: validationOptions,
    constraints: [],
    validator: IsEmailAlreadyExistConstraint
  });
