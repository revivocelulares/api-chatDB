import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { MB_API_KEY, MB_API_SECRET } = process.env;

export default {
  //Create a notification
  createNotification: async (req, res) => {
    try {
      let payload = {
        notification: {
          title: "Notification",
          content: "New Chat Message",
          recipients: [
            {external_id: "8364bdb25e97463797130f614b64716a"},
            {external_id: "d47d0cfcd0e04625903c4d173530568d"}            
          ]
        }
      }
      let notification = await axios.post('https://api.magicbell.com/notifications', payload, {
        headers: {
          'X-MAGICBELL-API-KEY': `${MB_API_KEY}`,
          'X-MAGICBELL-API-SECRET': `${MB_API_SECRET}`
        }
      });
      res.status(200).json(notification.data);
    }
    catch (error) {
      console.log(error);
      res.status(500).send({ msg: 'Something went wrong!!' })
    }
  }

}
