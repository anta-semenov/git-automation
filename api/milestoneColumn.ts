import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda'

export const moveCard: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  cb(null)
}
