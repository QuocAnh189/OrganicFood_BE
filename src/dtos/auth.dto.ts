import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginDto:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: User*123
 */
export class SignInUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserDto:
 *      type: object
 *      required:
 *        - email
 *        - password
 *        - username
 *        - phone
 *      properties:
 *        email:
 *          type: string
 *          default: jane.doe@example.com
 *        password:
 *          type: string
 *          default: User*123
 *        username:
 *          type: string
 *          default: Jane Doe
 *        phone:
 *          type: string
 *          default: 0923456789
 */
export class SignUpUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(30)
  public email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(15)
  public name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  public password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  public confirmpassword: string;
}

/**
 * @openapi
 * components:
 *  schemas:
 *    RefreshTokenDto:
 *      type: object
 *      required:
 *        - refreshToken
 *      properties:
 *        refreshToken:
 *          type: string
 */
export class RefreshTokenDto {
  @IsString()
  public refreshToken: string;
}

export class SignOutDto {
  @IsString()
  public id: string;
}
