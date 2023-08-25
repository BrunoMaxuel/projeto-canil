import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const mongoConnect = async () => {
    try {
      await mongoose.connect(process.env.DB_URL as string, {
  
      });
      console.log('Conexão ao MongoDB estabelecida com sucesso.');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
    }
    
  };