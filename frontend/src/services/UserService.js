// import axios from 'axios';

// const apiUrl = 'https://api.exemplo.com/users'; // Altere para sua URL de API

// const UserService = {
//   async login(username, password) {
//     try {
//       const response = await axios.post(`${apiUrl}/login`, { username, password }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Erro durante o login:', error);
//       return null;
//     }
//   },
// };

// export default UserService;

const UserService = {
  async login(username, password) {
    try {
      // Simulação de credenciais
      if (username === 'TesteSemback' && password === '123') {
        return { success: true };
      }
      return { success: false };
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return { success: false };
    }
  },
};

export default UserService;
