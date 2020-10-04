const initialMessages = [];

/* Action Types */
const GET_MESSAGES = 'GET_MESSAGES';

/* Action Creators */
export const getMessages = (newMessage) => ({
  type: GET_MESSAGES,
  newMessage,
});

export default function (messages = initialMessages, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return [...messages, action.newMessage];
    default:
      return messages;
  }
}
