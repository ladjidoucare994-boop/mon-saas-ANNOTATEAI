import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { description, task_type, complexity } = await request.json()

    if (!description || !task_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }const prompt = `You are a pricing expert for annotation services.

Task Description: ${description}
Task Type: ${task_type}
Complexity: ${complexity || 'medium'}

Respond with ONLY a JSON object (no markdown):
{
  "price": 35.50,
  "reasoning": "Brief explanation"
}`

    const emergentResponse = await fetch('https://api.emergent.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EMERGENT_LLM_KEY}`
      },body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You are a pricing expert. Always respond with valid JSON only.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 200
      })
    })

    if (!emergentResponse.ok) {
      throw new Error('Emergent API error')
    }

    const emergentData = await emergentResponse.json()
    const aiResponse = emergentData.choices[0].message.contentlet pricingData
    try {
      const cleanResponse = aiResponse
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim()
      
      pricingData = JSON.parse(cleanResponse)
    } catch (parseError) {
      pricingData = {
        price: 30.0,
        reasoning: 'Standard pricing based on task type'
      }
    }

    return NextResponse.json({
      price: pricingData.price,
      reasoning: pricingData.reasoning
    })

  } catch (error) {
    console.error('Smart Pricing Error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to calculate price' },
      { status: 500 }
    )
  }
}
