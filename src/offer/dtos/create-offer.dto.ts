import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateOfferDto{

    @IsOptional()
    carImages: string[];

    @IsNotEmpty()
    carDescription: string;

    @IsNotEmpty()
    @Type(()=>Number)
    @IsNumber()
    price: number;
}