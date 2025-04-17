import { Controller, Get } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  @Get()
  getName(): string {
    return 'blog';
  }
}
