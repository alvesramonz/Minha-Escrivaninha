import axios from 'axios';
import config from '../config/keyConfig';

const baseUrl = 'https://goodreadsraygorodskijv1.p.rapidapi.com';

export default {
  user: { /* Isso só reflete da forma que virá as credenciais, não tem haver com recebimento de dado */
    login: (credentials) =>
      axios.post('/api/auth', { credentials }).then((res) => res.data.user),
  },
};
