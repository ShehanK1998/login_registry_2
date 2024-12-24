import db from '@/lib/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(req) {
  try {
    const formData = await req.formData();

    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');
    const guesthouseName = formData.get('guesthouseName');
    const address = formData.get('address');
    const contactNumber = formData.get('contactNumber');
    const rates = formData.get('rates');
    const foodAvailability = formData.get('foodAvailability');
    const images = formData.getAll('images');

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Handle image uploads
    const imagePaths = [];
    for (const image of images) {
      const fileName = `${Date.now()}_${image.name}`;
      const filePath = join(process.cwd(), 'public/uploads', fileName);
      await writeFile(filePath, Buffer.from(await image.arrayBuffer()));
      imagePaths.push(`/uploads/${fileName}`);
    }

    // Insert data into the accommodations table
    await db.query(
      `INSERT INTO accommodations (username, email, password, guesthouse_name, address, contact_number, rates, food_availability, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        username,
        email,
        hashedPassword,
        guesthouseName,
        address,
        contactNumber,
        rates,
        foodAvailability,
        imagePaths.join(','),
      ]
    );

    return NextResponse.json({ message: 'Accommodation registered successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Registration failed', error: error.message }, { status: 500 });
  }
}
