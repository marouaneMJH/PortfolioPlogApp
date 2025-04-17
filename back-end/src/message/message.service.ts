import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  
  create(createMessageDto: CreateMessageDto) {
    const msg = this.messageRepository.create(createMessageDto);
    return this.messageRepository.save(msg);
  }

  findAll() {
    return this.messageRepository.find();
  }

  findOne(id: number) {
    return this.messageRepository.findOneBy({ id });
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    await this.messageRepository.update(id, updateMessageDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.messageRepository.delete(id);
    return { deleted: true };
  }
}
