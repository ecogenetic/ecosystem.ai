import { NextResponse } from 'next/server'
import validator from 'validator'
import dbConnect from '@/utils/dbConnect'
import Subscriber from '@/utils/Subscriber'

export async function POST(request: Request) {
  const body = await request.json()
  const { email } = body

  if (!email || !validator.isEmail(email)) {
    return NextResponse.json({ message: 'Invalid email format' }, { status: 400 })
  }

  try {
    await dbConnect()
  } catch {
    return NextResponse.json({ message: 'Database connection failed' }, { status: 500 })
  }

  try {
    const updatedSubscriber = await (Subscriber as any).findOneAndUpdate(
      { email },
      { status: 'unsubscribed' },
      { new: true },
    )

    if (updatedSubscriber) {
      return NextResponse.json({ message: 'Unsubscription successful' }, { status: 200 })
    } else {
      return NextResponse.json({ message: 'Subscriber not found' }, { status: 404 })
    }
  } catch {
    return NextResponse.json({ message: 'Unsubscription failed' }, { status: 500 })
  }
}
