import { IsEmail, IsNumberString, Length, MinLength } from 'class-validator';
import { RolesEnum } from 'src/enums/user-roles.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from 'src/generics/timestamp.entity';
import Offer from 'src/offer/entities/offer.entity';

@Entity()
class User extends Timestamp{
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    nullable: false,
  })
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({
    unique: true,
  })
  @IsEmail()
  public email: string;

  @Column()
  public password: string;

  @Column()
  public phoneNumber: string;

  @Column({
    nullable: true,
  })
  public avatar: string;

  @Column({
    unique: true
  })
  @IsNumberString()
  @Length(8,8)
  public cin: string;

  @Column({
      type: 'enum',
      enum: RolesEnum,
      default: RolesEnum.USER
    }
  )
  public role: RolesEnum;

  @OneToMany(() => Offer, (offer) => offer.carListor,{
    eager:true,
  })
  public offers: Offer[]
}

export default User;
