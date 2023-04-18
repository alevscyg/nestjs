import { NestFactory } from "@nestjs/core"
import { DocumentBuilder,SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import { ValidationPipe } from "./pipes/validatioan.pipes"


async function start() {
    const PORT = process.env.PORT || 5127 
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Смоленцев Александр')
        .setDescription('3-B Owls IT Start')
        .setVersion('1.0.0')
        .addTag('Теги:')
        .build()
    const documet = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('/api/docs',app,documet)
    
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT, ()=>console.log(`Server started on port = ${PORT}`))
    
}
start()