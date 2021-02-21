import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { BioDatum } from './entities/bio-datum.entity';

@Injectable()
export class BioDataService {
  constructor(
    //inject biodatum repository for use here in bio-dataService as if it is part of the class
    @InjectRepository(BioDatum)
    private BioDatumRepository: Repository<BioDatum>
  ){}

  async create(createBioDatumDto: CreateBioDatumDto) {
    const newBioDatum: BioDatum = this.BioDatumRepository.create(createBioDatumDto)
    return await this.BioDatumRepository.save(newBioDatum);
    //return 'This action adds a new bioDatum';
  }

  async findAll() {
    //return `This action returns all bioData`;
    return await this.BioDatumRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} bioDatum`;
    return await this.BioDatumRepository.findOne(id);
  }

  async update(id: number, updateBioDatumDto: UpdateBioDatumDto) {
    //return `This action updates a #${id} bioDatum`;
    return await this.BioDatumRepository.update(id,updateBioDatumDto);
    }

  async remove(id: number) {
    //return `This action removes a #${id} bioDatum`;
    return await this.BioDatumRepository.delete(id);
  }
}
