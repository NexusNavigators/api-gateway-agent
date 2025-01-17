import { defaultBinaryTypes } from './constants.ts'
import type { BinaryTypeMatchers } from './types.ts'

export const isBinaryType = (
  request: Request,
  binaryTypes: BinaryTypeMatchers = defaultBinaryTypes,
): boolean => {
  const contentType = request.headers.get('content-type') ?? ''
  const matched = binaryTypes.find((type) => contentType.match(type))
  return matched !== undefined
}
