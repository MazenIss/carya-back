import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { FindOffersDto } from './dtos/find-offers.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Post()
  async createOffer(@Body() createOfferDto:CreateOfferDto, @Req() req){
    return await this.offerService.createOffer(createOfferDto,req.user);
  }

  @Get('')
  async getAllOffers(@Query() findOption: FindOffersDto){
    return await this.offerService.getOffersPaginatedAndSorted(findOption);
  }

  @Get(':id')
  async getOfferById(@Param('id',ParseIntPipe) id:number){
    return await this.offerService.getOfferById(id);
  }

  

  @Patch(':id')
  async updateOffer(@Param('id', ParseIntPipe) id:number, @Body() updateOfferDto: UpdateOfferDto){
    return await this.offerService.updateOffer(id,updateOfferDto);
  }

  @Delete(':id')
  async deleteOffer(@Param('id', ParseIntPipe) id:number){
    return await this.offerService.softDelete(id);
  }

}
