nano app/api/instant-annotation/route.js
nano app/api/instant-annotation/route.js
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { data, task_type, instructions } = await request.json()

    if (!data || !task_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    let prompt = ''if (task_type === 'text' || task_type === 'sentiment') {
      const texts = Array.isArray(data) ? data : [data]
      
      prompt = `You are an expert in sentiment analysis.

Analyze the sentiment of each text and classify as Positive, Negative, or Neutral.

Texts: ${texts.map((text, i) => `${i + 1}. "${text}"`).join('\n')}

Instructions: ${instructions || 'Standard sentiment classification'}

Respond with ONLY a JSON object (no markdown):
{
  "results": [
    {
      "text": "original text",
      "sentiment": "Positive",
      "confidence": 0.95
    }
  ],
  "overall_confidence": 0.95
}`} else {
      prompt = `You are an annotation expert.

Task Type: ${task_type}
Data: ${JSON.stringify(data)}
Instructions: ${instructions || 'Provide accurate annotations'}

Respond with ONLY a JSON object:
{
  "annotations": [],
  "overall_confidence": 0.9
}`
    }

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
            content: 'You are an expert annotator. Always respond with valid JSON only.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.1,
        max_tokens: 1000
      })
    })

    if (!emergentResponse.ok) {
      throw new Error('Emergent API error')
    }

    const emergentData = await emergentResponse.json()
    const aiResponse = emergentData.choices[0].message.contentlet annotationData
    try {
      const cleanResponse = aiResponse
        .replace(/```json\n?/g, '')
        .replace(/```\n?/g, '')
        .trim()
      
      annotationData = JSON.parse(cleanResponse)
    } catch (parseError) {
      throw new Error('Invalid AI response format')
    }

    const confidence = annotationData.overall_confidence || 0.9
    const autoApproved = confidence >= 0.95

    return NextResponse.json({
      results: annotationData.results || annotationData.annotations || [],
      confidence: confidence,
      auto_approved: autoApproved,
      status: autoApproved ? 'completed' : 'review_needed'
    })

  } catch (error) {
    console.error('Instant Annotation Error:', error)
    return NextResponse.json(
      { error: error.message || 'Annotation failed' },
      { status: 500 }
    )
  }
}
