import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { MB_API_KEY, MB_API_SECRET } = process.env;

export default {
  sendNotification: async (req, res) => {
    try {
      let payload = {
        notification: {
          title: "Notification",
          content: "New Chat Message",
          recipients: [{
            email: "example@example.com"
          }]
        }
      }
      let notification = await axios.post('https://api.magicbell.com/notifications', payload, {
        headers: {
          'X-MAGICBELL-API-KEY': `${MB_API_KEY}`,
          'X-MAGICBELL-API-SECRET': `${MB_API_SECRET}`
        },
      });
      res.status(200).json(notification.data);
    }
    catch (error) {
      console.log(error);
      res.status(500).send({ msg: 'Something went wrong!!' })
    }
  }
}
