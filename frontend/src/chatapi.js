import axios from 'axios'

export async function queryBerriAPI(query) {
  const userEmail = 'abdulhusse88@gmail.com'
  const instanceId = 'f8e8480c-a21f-4d9a-858d-cb4707bcecbf'
  const model = 'gpt-3.5-turbo'
  const topK = 1

  const url = `https://api.berri.ai/query?user_email=${encodeURIComponent(
    userEmail
  )}&instance_id=${encodeURIComponent(instanceId)}&model=${encodeURIComponent(
    model
  )}&top_k=${encodeURIComponent(topK)}&query=${encodeURIComponent(query)}`

  try {
    const response = await axios.get(url)
    return response.data.response
  } catch (error) {
    console.error('Error:', error)
  }
}
