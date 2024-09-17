import { normalize, schema } from 'normalizr';
import * as jsonData from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', undefined, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(jsonData.default, [notification]);

export function getAllNotificationsByUser(userId) {
  return jsonData.default
    .filter(n => n.author.id === userId)
    .map(n => n.context);
}
