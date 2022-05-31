import { CreateDateColumn, DeleteDateColumn, Entity, UpdateDateColumn } from "typeorm";

@Entity()
export class Timestamp{
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}