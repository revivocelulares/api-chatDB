import axios from 'axios';

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
          'X-MAGICBELL-API-KEY': '79ad7bc78c205f864cd146df13abf42b12c52118',
          'X-MAGICBELL-API-SECRET': 'Q2IstIUtrKrm/nY4cp+uMKQh2JTqe5wlMcwI62lW'
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
