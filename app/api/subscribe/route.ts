import { NextResponse } from 'next/server'
import validator from 'validator'
import dbConnect from '@/utils/dbConnect'
import Subscriber from '@/utils/Subscriber'

export async function POST(request: Request) {
  const body = await request.json()
  const { email } = body

  if (!email || !validator.isEmail(email)) {
    return NextResponse.json({ message: 'Valid email is required' }, { status: 422 })
  }

  try {
    await dbConnect()

    const existingSubscriber = await (Subscriber as any).findOne({ email })

    if (existingSubscriber) {
      return NextResponse.json({ message: 'Email already subscribed' }, { status: 409 })
    }

    const newSubscriber = new Subscriber({ email })
    await newSubscriber.save()

    return NextResponse.json({ message: 'Subscription successful' }, { status: 201 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ message: 'Subscription failed' }, { status: 500 })
  }
}
