import type { Handler } from 'aws-lambda'

export const handler: Handler = async () => Promise.reject(new Error('error'))
