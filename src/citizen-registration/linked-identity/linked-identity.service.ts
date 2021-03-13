import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentityService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private LinkedIdentityRepository: Repository<LinkedIdentity>
  ) { }

  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    const newLinkedIdentity: LinkedIdentity = this.LinkedIdentityRepository.create(createLinkedIdentityDto)
    return await this.LinkedIdentityRepository.save(newLinkedIdentity);
    //return 'This action adds a new linkedIdentity';
  }

  async findAll() {
    //return `This action returns all linkedIdentity`;
    return await this.LinkedIdentityRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} linkedIdentity`;
    return await this.LinkedIdentityRepository.findOne(id);
  }

  async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    //return `This action updates a #${id} linkedIdentity`;
    return await this.LinkedIdentityRepository.update(id,updateLinkedIdentityDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} linkedIdentity`;
    return await this.LinkedIdentityRepository.delete(id);
  }
}
