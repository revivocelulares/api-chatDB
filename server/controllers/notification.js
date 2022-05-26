import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default {
  //Create a notification
  createNotification: async (req, res) => {
    try {
      let payload = {
        notification: {
          title: "New Chat Message",
          content: "New Chat Message",
          recipients: [
            {external_id: "8364bdb25e97463797130f614b64716a"},
            {external_id: "d47d0cfcd0e04625903c4d173530568d"}
          ]
        }
      }
      let notification = await axios.post('https://api.magicbell.com/notifications', payload, {
        headers: {
          'X-MAGICBELL-API-KEY': `${process.env.MB_API_KEY}`,
          'X-MAGICBELL-API-SECRET': `${process.env.MB_API_SECRET}`
        }
      });
      res.status(200).json(notification.data);
    }
    catch (error) {
      console.log(error);
      res.status(500).send({ msg: 'Something went wrong!!' })
    }
  },
  //Create User
  createUser: async (req, res) => {
    try {
      const { id, firstName, lastName } = req.body;
      let payload = {
        user: {
          external_id: id,
          first_name: firstName,
          last_name: lastName
        }
      }
      let user = await axios.post('https://api.magicbell.com/users', payload, {
        headers: {
          'X-MAGICBELL-API-KEY': `${process.env.MB_API_KEY}`,
          'X-MAGICBELL-API-SECRET': `${process.env.MB_API_SECRET}`
        }
      });
      res.status(200).json(user.data);
    }
    catch (error) {
      console.log(error);
      res.status(500).send({ msg: 'Something went wrong!!' })
    }
  },
  //Register device
  registerDevice: async (req, res) => {
    try {
      const { device_token, platform } = req.body;
      let payload = {
        push_subscription: {
          device_token: device_token,
          platform: platform
        }
      }
      let subscriptions = await axios.post('https://api.magicbell.com/push_subscriptions', payload, {
        headers: {
          'X-MAGICBELL-API-KEY': `${process.env.MB_API_KEY}`
        }
      });
      res.status(200).json(subscriptions.data);
    }
    catch (error) {
      console.log(error);
      res.status(500).send({ msg: 'Something went wrong!!' })
    }
  }
}
