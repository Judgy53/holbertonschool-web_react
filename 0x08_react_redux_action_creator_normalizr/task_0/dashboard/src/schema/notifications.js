import * as jsonData from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  return jsonData.default
    .filter(n => n.author.id === userId)
    .map(n => n.context);
}
