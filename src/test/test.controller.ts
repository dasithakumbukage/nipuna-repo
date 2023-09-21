import { Controller, Post } from '@nestjs/common';

@Controller('test')
export class TestController {
  @Post('test-post-request')
  async testPostRequest() {
    console.log('THIS IS FOR TESTING');
    return {
      success: true,
      message: 'THIS IS FOR TESTING',
    };
  }
}
