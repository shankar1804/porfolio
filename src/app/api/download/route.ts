import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import userData from "@/jsondata/portfolioData.json"

export async function GET() {
   const filePath = path.join(process.cwd(), 'public', userData.PersonalDetails.resumeName);

   const fileStream = fs.createReadStream(filePath);

   const readableStream = new ReadableStream({
      start(controller) {
         fileStream.on('data', chunk => {
            controller.enqueue(chunk);
         });

         fileStream.on('end', () => {
            controller.close();
         });

         fileStream.on('error', (err) => {
            controller.error(err);
         });
      }
   });

   return new NextResponse(readableStream, {
      headers: {
         'Content-Type': 'application/octet-stream',
         'Content-Disposition': 'attachment; filename=resume.pdf',
      },
   });
}
