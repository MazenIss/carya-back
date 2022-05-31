import { Timestamp } from "src/generics/timestamp.entity";
import User from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Offer extends Timestamp{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: true,
        array: true,
    })
    carImages: string[];

    @Column()
    carDescription: string;

    @Column()
    price: number;

    @ManyToOne(() => User,(user)=>user.offers,{
        eager:true,
    })
    carListor: User;
}

export default Offer;